import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SelectedWork } from './components/SelectedWork';
import { Experience } from './components/Experience';
import { CertificatesAchievements } from './components/CertificatesAchievements';
import { Contact } from './components/Contact';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-black font-['Space_Grotesk'] selection:bg-blue-500/30 selection:text-white">
      <Navigation />
      <main className="flex flex-col relative w-full overflow-hidden">
        <Hero />
        <About />
        <SelectedWork />
        <Experience />
        <CertificatesAchievements />
        <Contact />
      </main>
      <ScrollToTop />
    </div>
  );
}