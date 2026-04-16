import React from 'react';
import { motion } from 'motion/react';
import TrueFocus from './TrueFocus';
import DarkVeil from './DarkVeil';
import { ArrowRight, Download, Mail } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col justify-end bg-black text-white px-6 sm:px-12 md:px-16 lg:px-24 pb-12 pt-32 overflow-hidden">
      {/* DarkVeil Background */}
      <div className="absolute inset-0 z-0 opacity-70">
        <DarkVeil 
          hueShift={21}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </div>

      {/* Background ambient lighting - overlay untuk depth */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-900/10 blur-[150px] pointer-events-none z-[1]" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-900/10 blur-[150px] pointer-events-none z-[1]" />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-12 sm:gap-16 w-full max-w-[1400px] mx-auto h-full flex-grow">
        
        {/* Left Typography Block */}
        <div className="flex-1 max-w-4xl mt-12 sm:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-sm sm:text-base text-white/60 mb-6 uppercase tracking-[0.3em] font-['Rajdhani'] font-semibold">
              Hi, I'm
            </p>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[110px] xl:text-[130px] font-black leading-[0.85] tracking-tighter uppercase">
              <span className="block mb-2 sm:mb-4">Dewa Agung</span>
              <span className="block mb-2 sm:mb-4">YOGIE</span>
              <span className="block text-blue-400">Novian</span>
            </h1>
          </motion.div>
        </div>

        {/* Right Info Block */}
        <div className="w-full lg:w-[400px] flex flex-col justify-between self-end pb-2 lg:pb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium leading-snug mb-6 w-full max-w-md">
              Designing better products through{' '}
              <span className="relative inline-block px-2 font-bold italic text-blue-400">
                engineering
              </span>
              {' '}precision, structure, and continuous improvement.
            </h2>
            
            <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-md">
              I am a Mechanical Engineer with 5+ years of experience in product development, R&D, and manufacturing engineering. I specialize in BOM management, technical drawings, localization, and cross-functional problem solving.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <a href="#experience" className="flex items-center justify-between gap-4 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors flex-1 text-sm group">
                View Experience
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex gap-2">
                <a
                  href="/Dewa-Agung-Yogie-Novian-CV.pdf"
                  download="Dewa-Agung-Yogie-Novian-CV.pdf"
                  className="flex items-center justify-center w-12 h-12 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/10 group"
                  aria-label="Download CV"
                >
                  <Download className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                </a>
                <a href="#contact" className="flex items-center justify-center w-12 h-12 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/10 group" aria-label="Contact Me">
                  <Mail className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Metrics Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className="w-full max-w-[1400px] mx-auto mt-16 sm:mt-24 flex items-center justify-between border-t border-white/10 pt-8 gap-6 sm:gap-10"
      >
        <div className="flex flex-col">
          <span className="text-2xl sm:text-3xl font-bold tracking-tighter text-blue-400">5+</span>
          <span className="text-xs text-white uppercase tracking-wider mt-1">Years Experience</span>
        </div>
        <div className="h-12 w-px bg-white/20"></div>
        <div className="flex flex-col">
          <span className="text-2xl sm:text-3xl font-bold tracking-tighter text-blue-400">35%</span>
          <span className="text-xs text-white uppercase tracking-wider mt-1">TKDN Increase</span>
        </div>
        <div className="h-12 w-px bg-white/20"></div>
        <div className="flex flex-col">
          <span className="text-2xl sm:text-3xl font-bold tracking-tighter text-blue-400">50%</span>
          <span className="text-xs text-white uppercase tracking-wider mt-1">Tool Life Imp.</span>
        </div>
        <div className="h-12 w-px bg-white/20"></div>
        <div className="flex flex-col">
          <span className="text-2xl sm:text-3xl font-bold tracking-tighter text-blue-400">90%</span>
          <span className="text-xs text-white uppercase tracking-wider mt-1">Component Adoption</span>
        </div>
      </motion.div>

      {/* TrueFocus Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        className="w-full max-w-[1400px] mx-auto mt-12 sm:mt-16"
      >
        <TrueFocus 
          sentence="R&D YOGIE MECHANICAL ENGINEERING"
          separator=" "
          manualMode={false}
          blurAmount={3}
          borderColor="#60A5FA"
          glowColor="rgba(96, 165, 250, 0.6)"
          animationDuration={0.8}
          pauseBetweenAnimations={1.2}
        />
      </motion.div>
    </section>
  );
};
