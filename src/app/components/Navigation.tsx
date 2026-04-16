import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Menu } from 'lucide-react';
import { CircularText } from './CircularText';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Selected Work', href: '#work' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { name: 'LinkedIn', href: '#' },
  { name: 'Instagram', href: '#' },
  { name: 'GitHub', href: '#' },
  { name: 'YouTube', href: '#' },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Smooth scroll to element
    const el = document.querySelector(href);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' });
      }, 300); // Wait for menu exit animation
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 p-6 flex justify-between items-center mix-blend-difference text-white">
        <a href="#home" className="block">
          <CircularText 
            text="YOGIE*ENGINEERING*" 
            radius={28}
            spinDuration={20}
          />
        </a>
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-2 text-sm font-medium font-['Rajdhani']">
            <button className="opacity-100">EN</button>
            <span className="opacity-40">/</span>
            <button className="opacity-40 hover:opacity-100 transition-opacity">ID</button>
          </div>
          <button 
            onClick={() => setIsOpen(true)}
            className="group flex items-center justify-center w-12 h-12 rounded-full border border-white/20 hover:border-white/50 transition-colors"
          >
            <Menu className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop blur - supaya konten kiri masih terlihat */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar Menu - Kanan saja, width 400px (seperempat layar) */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5, ease: [0.32, 1, 0.23, 1] }}
              className="fixed top-0 right-0 h-full w-full sm:w-[400px] z-50 bg-[#0a0a0a] text-white overflow-y-auto border-l border-white/10"
            >
              {/* Header Area inside menu */}
              <div className="p-6 flex justify-between items-center border-b border-white/10">
                <span className="text-xl font-bold tracking-tight opacity-50 font-['Rajdhani']">MENU</span>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-sm font-medium font-['Rajdhani'] sm:hidden">
                    <button className="opacity-100">EN</button>
                    <span className="opacity-40">/</span>
                    <button className="opacity-40 hover:opacity-100 transition-opacity">ID</button>
                  </div>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center justify-center w-12 h-12 rounded-full border border-white/20 hover:border-white/50 transition-colors bg-white/5"
                  >
                    <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
                  </button>
                </div>
              </div>

              {/* Main Nav content */}
              <div className="flex flex-col h-[calc(100vh-88px)] px-6 pb-12 justify-between">
                <nav className="flex flex-col mt-12 gap-4">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05, duration: 0.5, ease: 'easeOut' }}
                    >
                      <a
                        href={item.href}
                        onClick={(e) => handleLinkClick(e, item.href)}
                        className="group inline-block text-3xl sm:text-4xl font-black uppercase tracking-tighter hover:text-blue-400 transition-colors"
                      >
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                          {item.name}
                        </span>
                      </a>
                    </motion.div>
                  ))}
                </nav>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="mt-12 pt-8 border-t border-white/10"
                >
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4 font-['Rajdhani'] font-semibold">Connect</h4>
                    <div className="flex flex-col gap-3">
                      {socialLinks.map((link) => (
                        <a 
                          key={link.name} 
                          href={link.href}
                          className="text-sm font-medium hover:text-blue-400 transition-colors font-['Rajdhani'] w-fit"
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 text-xs text-white/40 font-['Rajdhani']">
                    <p>Dewa Agung Yogie <span className="text-blue-400">Novian</span></p>
                    <p>Product Engineering & R&D</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};