import React from 'react';
import { PenLine, Wand2, Download } from 'lucide-react';

const steps = [
  {
    icon: PenLine,
    title: "Input Your Details",
    description: "Drop your regular cringe professional experience"
  },
  {
    icon: Wand2,
    title: "Get Brainrotted",
    description: "Watch it transform into pure internet excellence"
  },
  {
    icon: Download,
    title: "Download & Slay",
    description: "Secure the bag with your new rizz-infused resume"
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gray-800 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}