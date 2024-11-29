import React from 'react';
import { Brain, FileDown, StepForward, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "Automatic Brainrot Translation",
    description: "AI-powered conversion of boring corporate speak into pure internet gold"
  },
  {
    icon: FileDown,
    title: "PDF Download",
    description: "Get your masterpiece in professional PDF format, ready to shock recruiters"
  },
  {
    icon: StepForward,
    title: "Step-by-Step Building",
    description: "Easy resume creation process that even a skill-issued person could handle"
  },
  {
    icon: Sparkles,
    title: "Meme Integration",
    description: "Sprinkle some certified viral moments into your professional history"
  }
];

export function Features() {
  return (
    <section id="features" className="bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Features That Slap</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-colors">
              <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}