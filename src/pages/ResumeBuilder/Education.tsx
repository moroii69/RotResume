import React, { useState } from 'react';
import { Input } from '../../components/ui/Input';
import { TextArea } from '../../components/ui/TextArea';
import { Button } from '../../components/ui/Button';
import { useResumeStore } from '../../store/useResumeStore';
import { translateToBrainrot } from '../../lib/brainrot-dictionary';
import { X } from 'lucide-react';

export function Education() {
  const { education, addEducation, removeEducation, setCurrentStep } = useResumeStore();
  const [formData, setFormData] = useState({
    degree: '',
    institution: '',
    year: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.values(formData).every(value => value.trim())) {
      addEducation({
        id: crypto.randomUUID(),
        ...formData,
        translatedDegree: translateToBrainrot(formData.degree),
      });
      setFormData({
        degree: '',
        institution: '',
        year: '',
      });
    }
  };

  const handleNext = () => {
    if (education.length > 0) {
      setCurrentStep(4);
    }
  };

  const handleBack = () => {
    setCurrentStep(2);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Education</h2>
        <p className="text-gray-400">Add your educational background and watch it get brainrotted</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Degree"
          placeholder="e.g., Bachelor of Science in Computer Science"
          value={formData.degree}
          onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
          required
        />
        <Input
          label="Institution"
          placeholder="e.g., Stanford University"
          value={formData.institution}
          onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
          required
        />
        <Input
          label="Graduation Year"
          placeholder="e.g., 2022"
          value={formData.year}
          onChange={(e) => setFormData({ ...formData, year: e.target.value })}
          required
        />
        <Button type="submit" variant="secondary" size="sm">
          Add Education
        </Button>
      </form>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Your Education</h3>
        <div className="space-y-4">
        {education.map((edu, index) => (
            <div
                key={`${edu.id}-${index}`}  // Unique key with ID and index
                className="bg-gray-700 p-4 rounded-md space-y-3"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-white font-medium">{edu.degree}</h4>
                  <p className="text-sm text-blue-400">{edu.translatedDegree}</p>
                </div>
                <button
                  onClick={() => removeEducation(edu.id)}
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="text-gray-300 text-sm">
                <p>{edu.institution} • {edu.year}</p>
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
          disabled={education.length === 0}
        >
          Next Step
        </Button>
      </div>
    </div>
  );
}