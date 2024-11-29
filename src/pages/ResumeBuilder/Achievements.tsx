import React, { useState } from 'react';
import { Input } from '../../components/ui/Input';
import { TextArea } from '../../components/ui/TextArea';
import { Button } from '../../components/ui/Button';
import { useResumeStore } from '../../store/useResumeStore';
import { translateToBrainrot } from '../../lib/brainrot-dictionary';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom

export function Achievements() {
  const { achievements, addAchievement, removeAchievement, setCurrentStep } = useResumeStore();
  const [formData, setFormData] = useState({
    description: '',
  });

  const navigate = useNavigate();  // Initialize navigate function

  // Debug logging
  console.log('Current Achievements:', achievements);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.description.trim()) {
      const newAchievement = {
        id: crypto.randomUUID(), // Ensure unique ID
        description: formData.description,
        translatedDescription: translateToBrainrot(formData.description),
      };
      
      // Logging new achievement
      console.log('Adding Achievement:', newAchievement);
      
      addAchievement(newAchievement);
      setFormData({
        description: '',
      });
    }
  };

  const handleBack = () => {
    setCurrentStep(3);
  };

  const handlePreview = () => {
    navigate('/preview');  // Navigate to /preview route
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Achievements</h2>
        <p className="text-gray-400">Showcase your notable accomplishments</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <TextArea
          label="Achievement Description"
          placeholder="Describe your significant accomplishment"
          value={formData.description}
          onChange={(e) => setFormData({ description: e.target.value })}
          required
        />
        <Button type="submit" variant="secondary" size="sm">
          Add Achievement
        </Button>
      </form>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Your Achievements</h3>
        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <div
              key={`${achievement.id}-${index}`} // Unique key with index
              className="bg-gray-700 p-4 rounded-md space-y-3"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-300">{achievement.description}</p>
                  <p className="text-sm text-blue-400">{achievement.translatedDescription}</p>
                </div>
                <button
                  onClick={() => removeAchievement(achievement.id)}
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <Button type="button" variant="outline" onClick={handleBack}>
          Back
        </Button>
        
        {/* Button now navigates to /preview */}
        <Button
          type="button"
          onClick={handlePreview}
          disabled={achievements.length === 0}
        >
          Preview
        </Button>
      </div>
    </div>
  );
}
