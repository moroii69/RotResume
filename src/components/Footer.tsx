import React from 'react';
import { Github, Twitter, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <a href="#" className="hover:text-purple-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>and maximum brainrot</span>
          </div>
          <div className="text-sm mt-4 md:mt-0">
            <p>For entertainment purposes only. No cap.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}