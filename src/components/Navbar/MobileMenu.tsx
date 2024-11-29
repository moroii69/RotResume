import React from 'react';
import { NavLinks } from './NavLinks';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={`
        fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="absolute right-0 h-full w-64 bg-gray-800 shadow-xl">
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <NavLinks isMobile onClick={onClose} />
      </div>
    </div>
  );
}