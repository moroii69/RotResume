import React, { useState } from 'react';
import { Input } from '../../components/ui/Input';
import { TextArea } from '../../components/ui/TextArea';
import { Button } from '../../components/ui/Button';
import { useResumeStore } from '../../store/useResumeStore';
import { translateToBrainrot } from '../../lib/brainrot-dictionary';
import { X } from 'lucide-react';

export function Experience() {
  const { workExperience, addWorkExperience, removeWorkExperience, setCurrentStep } = useResumeStore();
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    duration: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.values(formData).every(value => value.trim())) {
      addWorkExperience({
        id: crypto.randomUUID(),
        ...formData,
        translatedTitle: translateToBrainrot(formData.title),
        translatedDescription: translateToBrainrot(formData.description),
      });
      setFormData({
        title: '',
        company: '',
        duration: '',
        description: '',
      });
    }
  };

  const handleNext = () => {
    if (workExperience.length > 0) {
      setCurrentStep(3);
    }
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Work Experience</h2>
        <p className="text-gray-400">Add your work experience and watch it get brainrotted</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Job Title"
          placeholder="e.g., Software Engineer"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
        <Input
          label="Company"
          placeholder="e.g., Tech Giants Inc"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          required
        />
        <Input
          label="Duration"
          placeholder="e.g., 2020 - Present"
          value={formData.duration}
          onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
          required
        />
        <TextArea
          label="Description"
          placeholder="Describe your responsibilities and achievements"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
        />
        <Button type="submit" variant="secondary" size="sm">
          Add Experience
        </Button>
      </form>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Your Experience</h3>
        <div className="space-y-4">
          {workExperience.map((exp) => (
            <div
              key={exp.id}
              className="bg-gray-700 p-4 rounded-md space-y-3"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-white font-medium">{exp.title}</h4>
                  <p className="text-sm text-blue-400">{exp.translatedTitle}</p>
                </div>
                <button
                  onClick={() => removeWorkExperience(exp.id)}
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="text-gray-300 text-sm">
                <p>{exp.company} • {exp.duration}</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-300">{exp.description}</p>
                <p className="text-sm text-blue-400">{exp.translatedDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <Button type="button" variant="outline" onClick={handleBack}>
          Back
        </Button>
        <Button
          type="button"
          onClick={handleNext}
          disabled={workExperience.length === 0}
        >
          Next Step
        </Button>
      </div>
    </div>
  );
}