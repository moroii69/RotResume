import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { HowItWorks } from '../components/HowItWorks';
import { Features } from '../components/Features';
import { Preview } from '../components/Preview';
import { Footer } from '../components/Footer';

export function Landing() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Preview />
      <Footer />
    </div>
  );
}