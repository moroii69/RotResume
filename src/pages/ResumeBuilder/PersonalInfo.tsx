import React from 'react';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { useResumeStore } from '../../store/useResumeStore';

export function PersonalInfo() {
  const { personalInfo, setPersonalInfo, setCurrentStep } = useResumeStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(1);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Personal Information</h2>
        <p className="text-gray-400">Let's start with your basic info fr fr</p>
      </div>

      <div className="space-y-4">
        <Input
          label="Full Name"
          placeholder="Enter your name (or your sigma alias)"
          value={personalInfo.fullName}
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, fullName: e.target.value })
          }
          required
        />
        <Input
          label="Email"
          type="email"
          placeholder="your.email@example.com"
          value={personalInfo.email}
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, email: e.target.value })
          }
          required
        />
        <Input
          label="Phone"
          type="tel"
          placeholder="Your contact digits"
          value={personalInfo.phone}
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, phone: e.target.value })
          }
          required
        />
      </div>

      <div className="flex justify-end">
        <Button type="submit">Next Step</Button>
      </div>
    </form>
  );
}