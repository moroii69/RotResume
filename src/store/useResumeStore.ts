import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { devtools } from 'zustand/middleware';

export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
}

export interface Skill {
  id: string;
  name: string;
  translatedName: string;
}

export interface WorkExperience {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string;
  translatedTitle: string;
  translatedDescription: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  translatedDegree: string;
}

export interface Achievement {
  id: string;
  description: string;
  translatedDescription: string;
}

interface ResumeState {
  personalInfo: PersonalInfo;
  skills: Skill[];
  workExperience: WorkExperience[];
  education: Education[];
  achievements: Achievement[];
  currentStep: number;
  setPersonalInfo: (info: PersonalInfo) => void;
  addSkill: (skill: Skill) => void;
  removeSkill: (id: string) => void;
  addWorkExperience: (exp: WorkExperience) => void;
  removeWorkExperience: (id: string) => void;
  addEducation: (edu: Education) => void;
  removeEducation: (id: string) => void;
  addAchievement: (achievement: Achievement) => void;
  removeAchievement: (id: string) => void;
  setCurrentStep: (step: number) => void;
  reset: () => void;
}

const initialState = {
  personalInfo: {
    fullName: '',
    email: '',
    phone: '',
  },
  skills: [],
  workExperience: [],
  education: [],
  achievements: [],
  currentStep: 0,
};

export const useResumeStore = create<ResumeState>()(
  devtools( // Add devtools for better debugging
    persist(
      (set, get) => ({
        ...initialState,
        setPersonalInfo: (info) => {
          console.log('Setting Personal Info:', info);
          set({ personalInfo: info });
        },
        addSkill: (skill) => {
          console.log('Adding Skill:', skill);
          set((state) => ({ skills: [...state.skills, skill] }));
        },
        removeSkill: (id) => {
          console.log('Removing Skill with ID:', id);
          set((state) => ({ skills: state.skills.filter((s) => s.id !== id) }));
        },
        addWorkExperience: (exp) => {
          console.log('Adding Work Experience:', exp);
          set((state) => ({ workExperience: [...state.workExperience, exp] }));
        },
        removeWorkExperience: (id) => {
          console.log('Removing Work Experience with ID:', id);
          set((state) => ({
            workExperience: state.workExperience.filter((w) => w.id !== id),
          }));
        },
        addEducation: (edu) => {
          console.log('Adding Education:', edu);
          console.log('Current Education Before:', get().education);
          set((state) => ({ 
            education: [...state.education, edu] 
          }));
          console.log('Current Education After:', get().education);
        },
        removeEducation: (id) => {
          console.log('Removing Education with ID:', id);
          set((state) => ({ education: state.education.filter((e) => e.id !== id) }));
        },
        addAchievement: (achievement) => {
          console.log('Adding Achievement:', achievement);
          set((state) => ({ achievements: [...state.achievements, achievement] }));
        },
        removeAchievement: (id) => {
          console.log('Removing Achievement with ID:', id);
          set((state) => ({
            achievements: state.achievements.filter((a) => a.id !== id),
          }));
        },
        setCurrentStep: (step) => {
          console.log('Setting Current Step:', step);
          console.log('Current State Before:', get());
          set({ currentStep: step });
          console.log('Current State After:', get());
        },
        reset: () => {
          console.log('Resetting Store to Initial State');
          set(initialState);
        },
      }),
      {
        name: 'resume-storage',
        // Optional: Add migrations or other persist configurations
      }
    ),
    { name: 'ResumeStore' } // DevTools name
  )
);