import React from 'react';
import { Brain } from 'lucide-react';

export function Logo() {
  return (
    <a href="#" className="flex items-center space-x-2 text-white">
      <Brain className="w-8 h-8 text-blue-400" />
      <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
        RotResume
      </span>
    </a>
  );
}