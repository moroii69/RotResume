import React, { useState, useEffect } from 'react';
import { Menu, Sparkles } from 'lucide-react';
import { Logo } from './Logo';
import { NavLinks } from './NavLinks';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`
          fixed top-0 w-full z-40 transition-all duration-300
          ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}
        `}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Logo />
            
            <div className="hidden md:flex items-center space-x-6">
              <NavLinks />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium flex items-center space-x-2 transition-colors">
                <span>Start Creating</span>
                <Sparkles className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden text-gray-400 hover:text-white transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16" />
    </>
  );
}