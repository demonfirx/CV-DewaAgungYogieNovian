import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { X, Award, ExternalLink } from 'lucide-react';

export const About = () => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const certificates = [
    {
      title: 'Training Within Industry (TWI)',
      issuer: 'Gemilang Training',
      date: 'February 2024',
      image: '/certificates/001.GemilangTraining.jpg',
    },
    {
      title: 'ISO 9001:2015 Internal Audit',
      issuer: 'Inovasi Kreasi Mandiri',
      date: 'November 2019',
      image: '/certificates/002.ISO9001.jpg',
    },
    {
      title: 'AutoCAD Mechanical 2021',
      issuer: 'Neosia Training Center (Autodesk)',
      date: 'May 2021',
      image: '/certificates/003.AutoDesk.jpg',
    },
    {
      title: 'SolidWorks 2021',
      issuer: 'Neosia Training Center (Dassault Systèmes)',
      date: 'August 2021',
      image: '/certificates/ALL_CERTIFICATE_page-0004.jpg',
    },
    {
      title: 'Autodesk Inventor 2021',
      issuer: 'Neosia Training Center (Autodesk)',
      date: 'July 2021',
      image: '/certificates/005.AutoDesk_Inventor.jpg',
    },
    {
      title: 'TOEFL ITP — Score 500',
      issuer: 'ETS (ILP Cikini, Jakarta)',
      date: 'September 2021',
      image: '/certificates/006TOEFL_ITP.jpg',
    },
  ];
  const technicalSkills = [
    {
      name: 'Solid Edge',
      logo: 'https://cdn.simpleicons.org/siemens/00B8A9',
      url: 'https://solidedge.siemens.com/',
      type: 'software'
    },
    {
      name: 'AutoCAD',
      logo: 'https://cdn.simpleicons.org/autodesk/0696D7',
      url: 'https://www.autodesk.com/products/autocad/',
      type: 'software'
    },
    {
      name: 'SolidWorks',
      logo: 'https://cdn.simpleicons.org/dassaultsystemes/005386',
      url: 'https://www.solidworks.com/',
      type: 'software'
    },
    {
      name: 'SAP ERP',
      logo: 'https://cdn.simpleicons.org/sap/0FAAFF',
      url: 'https://www.sap.com/',
      type: 'software'
    },
    {
      name: 'BOM Management',
      url: null,
      type: 'skill'
    },
    {
      name: 'FMEA',
      url: null,
      type: 'skill'
    },
    {
      name: 'ISO 9001:2015',
      logo: 'https://cdn.simpleicons.org/iso/DD3333',
      url: 'https://www.iso.org/iso-9001-quality-management.html',
      type: 'standard'
    },
    {
      name: 'Kaizen & VAVE',
      url: null,
      type: 'skill'
    },
    {
      name: 'Technical Drawing',
      url: null,
      type: 'skill'
    },
    {
      name: 'Product Development',
      url: null,
      type: 'skill'
    },
    {
      name: 'Manufacturing',
      url: null,
      type: 'skill'
    },
    {
      name: 'Localization',
      url: null,
      type: 'skill'
    }
  ];

  return (
    <section id="about" className="w-full bg-[#0a0a0a] text-white py-32 px-6 sm:px-12 md:px-16 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <h3 className="text-xs uppercase tracking-[0.3em] text-white/40 mb-12 font-['Rajdhani'] font-semibold">
            ABOUT
          </h3>
          
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter mb-16">
            Building engineering solutions with precision and{' '}
            <span className="text-blue-400 italic">real impact.</span>
          </h2>
        </motion.div>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column - Main Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <p className="text-xl sm:text-2xl text-white/90 leading-relaxed">
              Mechanical Engineer specializing in product development, R&D, and manufacturing optimization across HVAC and optical film industries.
            </p>
            
            <p className="text-base sm:text-lg text-white/60 leading-relaxed">
              My work spans BOM development, technical drawings, FMEA, localization projects, and cross-functional problem solving—delivering Kaizen initiatives, VAVE improvements, and measurable business impact through engineering precision.
            </p>
          </motion.div>

          {/* Right Column - Quick Facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Role */}
            <div className="border-l-2 border-blue-500 pl-6">
              <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-2 font-['Rajdhani'] font-semibold">ROLE</p>
              <p className="text-lg font-semibold text-white">Product Engineer</p>
              <p className="text-sm text-white/60">Mechanical Design & R&D</p>
            </div>

            {/* Education */}
            <div className="border-l-2 border-blue-500 pl-6">
              <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-2 font-['Rajdhani'] font-semibold">EDUCATION</p>
              <p className="text-lg font-semibold text-white">Sanata Dharma University</p>
              <p className="text-sm text-white/60">S1. Mechanical Engineering</p>
              <div className="inline-block mt-2 px-3 py-1 bg-white/10 rounded text-xs font-semibold tracking-wider">
                GPA 3.64 / 4.00
              </div>
            </div>
          </motion.div>

        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-20 pt-12 border-t border-white/10"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-8 font-['Rajdhani'] font-semibold">
            TECHNICAL EXPERTISE
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technicalSkills.map((skill, idx) => {
              const CardContent = (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={`
                    px-4 py-4 bg-white/5 border border-white/10 
                    hover:border-blue-500/50 hover:bg-white/10 
                    transition-all duration-300 
                    flex flex-col items-center justify-center gap-3
                    ${skill.url ? 'cursor-pointer hover:scale-105' : ''}
                  `}
                >
                  {skill.logo && (
                    <ImageWithFallback
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-8 h-8 object-contain"
                    />
                  )}
                  <span className="text-sm font-medium tracking-wide text-center">
                    {skill.name}
                  </span>
                </motion.div>
              );

              return skill.url ? (
                <a
                  key={skill.name}
                  href={skill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {CardContent}
                </a>
              ) : (
                <div key={skill.name}>
                  {CardContent}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Verified Skills & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-20 pt-12 border-t border-white/10"
        >
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-5 h-5 text-blue-400" />
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 font-['Rajdhani'] font-semibold">
              VERIFIED SKILLS & CERTIFICATIONS
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => setSelectedCert(idx)}
                className="group cursor-pointer bg-white/[0.03] border border-white/10 rounded-lg overflow-hidden hover:border-blue-500/40 hover:bg-white/[0.06] transition-all duration-300"
              >
                {/* Certificate Thumbnail */}
                <div className="relative w-full aspect-[16/11] overflow-hidden bg-white/5">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 bg-black/50 backdrop-blur-sm rounded-full text-[10px] text-white/70 border border-white/10">
                    <ExternalLink className="w-3 h-3" />
                    View
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="p-4">
                  <h4 className="text-sm font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors line-clamp-1">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-white/50 mb-2">{cert.issuer}</p>
                  <p className="text-[10px] text-white/30 uppercase tracking-wider font-['Rajdhani'] font-semibold">
                    {cert.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Certificate Lightbox Modal */}
      <AnimatePresence>
        {selectedCert !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedCert(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-12 right-0 sm:top-4 sm:right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors border border-white/20"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Certificate Image */}
              <div className="rounded-lg overflow-hidden bg-white/5 border border-white/10">
                <img
                  src={certificates[selectedCert].image}
                  alt={certificates[selectedCert].title}
                  className="w-full h-auto max-h-[75vh] object-contain bg-white/[0.02]"
                />
              </div>

              {/* Certificate Details */}
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {certificates[selectedCert].title}
                  </h3>
                  <p className="text-sm text-white/50">
                    {certificates[selectedCert].issuer} — {certificates[selectedCert].date}
                  </p>
                </div>

                {/* Navigation */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedCert((prev) => (prev! > 0 ? prev! - 1 : certificates.length - 1))}
                    className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors border border-white/10 text-white"
                    aria-label="Previous"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => setSelectedCert((prev) => (prev! < certificates.length - 1 ? prev! + 1 : 0))}
                    className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors border border-white/10 text-white"
                    aria-label="Next"
                  >
                    →
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};