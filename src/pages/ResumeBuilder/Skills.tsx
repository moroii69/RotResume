import React, { useState } from 'react';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { useResumeStore } from '../../store/useResumeStore';
import { translateToBrainrot } from '../../lib/brainrot-dictionary';
import { X } from 'lucide-react';

export function Skills() {
  const { skills, addSkill, removeSkill, setCurrentStep } = useResumeStore();
  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSkill.trim()) {
      addSkill({
        id: crypto.randomUUID(),
        name: newSkill,
        translatedName: translateToBrainrot(newSkill),
      });
      setNewSkill('');
    }
  };

  const handleNext = () => {
    if (skills.length > 0) {
      setCurrentStep(2);
    }
  };

  const handleBack = () => {
    setCurrentStep(0);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Skills</h2>
        <p className="text-gray-400">Add your skills and watch them get brainrotted fr fr</p>
      </div>

      <form onSubmit={handleAddSkill} className="space-y-4">
        <Input
          label="Add a Skill"
          placeholder="Enter a skill (e.g., JavaScript, Project Management)"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
        />
        <Button type="submit" variant="secondary" size="sm">
          Add Skill
        </Button>
      </form>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Your Skills</h3>
        <div className="space-y-2">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex items-center justify-between bg-gray-700 p-3 rounded-md"
            >
              <div className="space-y-1">
                <p className="text-white">{skill.name}</p>
                <p className="text-sm text-blue-400">{skill.translatedName}</p>
              </div>
              <button
                onClick={() => removeSkill(skill.id)}
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <Button type="button" variant="outline" onClick={handleBack}>
          Back
        </Button>
        <Button type="button" onClick={handleNext} disabled={skills.length === 0}>
          Next Step
        </Button>
      </div>
    </div>
  );
}