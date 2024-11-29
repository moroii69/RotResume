import React from 'react';
import { useResumeStore } from '../../store/useResumeStore';
import { PersonalInfo } from './PersonalInfo';
import { Skills } from './Skills';
import { Experience } from './Experience';
import { Education } from './Education';
import { Achievements } from './Achievements';
import { Brain } from 'lucide-react';

const steps = ['Personal Info', 'Skills', 'Experience', 'Education', 'Achievements'];

export function ResumeBuilder() {
  const { currentStep } = useResumeStore();

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <PersonalInfo />;
      case 1:
        return <Skills />;
      case 2:
        return <Experience />;
      case 3:
        return <Education />;
      case 4:
        return <Achievements />;
      default:
        return <PersonalInfo />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Brain className="w-8 h-8 text-blue-500 mr-2" />
            <h1 className="text-3xl font-bold text-white">BrainCV Builder</h1>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className="flex flex-col items-center"
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                      index <= currentStep
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-700 text-gray-400'
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span className="text-sm text-gray-400">{step}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 h-2 bg-gray-700 rounded-full">
              <div
                className="h-full bg-blue-500 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
              />
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            {renderStep()}
          </div>
        </div>
      </div>
    </div>
  );
}