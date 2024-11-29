import React from 'react';
import { Sparkles, FileText } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex items-center">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 py-8">
        <div className="flex-1 space-y-8">
          <h1 className="text-6xl font-bold leading-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Create Resumes That Speak Brainrot!
          </h1>
          <p className="text-gray-300 text-xl">
            Turn your mid professional experience into absolutely bussin career W's. No cap fr fr! 🔥
          </p>
          <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center gap-2">
            <span>Start Rizzifying</span>
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </button>
        </div>
        <div className="flex-1 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-75 animate-pulse"></div>
          <div className="relative bg-gray-800 p-6 rounded-lg border border-gray-700">
            <FileText className="w-16 h-16 text-blue-400 mb-4" />
            <div className="space-y-3">
              <div className="h-4 bg-gray-700 rounded w-3/4"></div>
              <div className="h-4 bg-gray-700 rounded w-1/2"></div>
              <div className="h-4 bg-gray-700 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}