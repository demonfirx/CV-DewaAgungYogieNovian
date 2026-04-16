import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Wrench, TrendingUp, Calendar } from 'lucide-react';

const experiences = [
  {
    company: "PT Daikin Manufacturing Indonesia",
    role: "Product Engineer | Mechanical Design | R&D Specialist",
    period: "Feb 2025 – Present",
    duration: "Current Position",
    summary: "Working as a Product Engineer for commercial air-conditioning products, responsible for BOM development, technical drawings, part number creation, ECN control, component selection, localization projects, and NPI support from concept to mass production. Also contributing to Kaizen, VAVE, technical sales support, workplace safety initiatives, and mentoring new engineers.",
    bullets: [
      "Developed and managed BOM and technical drawings for customized AHU, UP, and AP products.",
      "Used SAP for part number creation, BOM structure, and ECN process control.",
      "Supported NPI from concept to mass production.",
      "Led Kaizen and VAVE initiatives to improve cost efficiency and workflow.",
      "Performed 3D modeling using Solid Edge and 2D drawings for documentation and TKDN requirements.",
      "Mentored new engineers and collaborated across departments."
    ],
    technologies: ["Solid Edge", "SAP", "BOM", "TKDN", "Kaizen", "VAVE"]
  },
  {
    company: "PT Wah Hong Indonesia",
    role: "Supervisor R&D Specialist",
    period: "Apr 2019 – Nov 2024",
    duration: "5 Years 8 Months",
    summary: "Worked as Supervisor R&D Specialist in TV backlight unit product development, leading new model projects, managing prototype trials, validating components, revising SOPs, handling defect analysis, and supporting technical audits and customer requirements.",
    bullets: [
      "Led new product development and supported new business initiatives in the BLU field.",
      "Managed schedules, prototype trials, and cross-department coordination as project leader.",
      "Created and revised SOPs for new models and mass production improvements.",
      "Designed and modified technical drawings using AutoCAD, ZWCAD, and Adobe Illustrator.",
      "Conducted FMEA and managed BOM through SAP.",
      "Supervised and trained team members while maintaining strong customer communication."
    ],
    technologies: ["AutoCAD", "ZWCAD", "SAP", "FMEA", "BLU", "SOP"]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="w-full bg-[#0a0a0a] text-white py-32 px-6 sm:px-12 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="max-w-[1400px] mx-auto relative">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <h3 className="text-xs uppercase tracking-[0.3em] text-white/40 mb-12 font-['Rajdhani'] font-semibold">
            EXPERIENCE
          </h3>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-8">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter">
              Career <br className="hidden lg:block" />
              <span className="text-blue-400">History</span>
            </h2>
            <p className="text-white/50 text-base sm:text-lg leading-relaxed max-w-md">
              A comprehensive view of my professional journey in mechanical design, product engineering, and R&D.
            </p>
          </div>

          {/* Technical Divider */}
          <div className="flex items-center gap-4 mt-12">
            <div className="h-[2px] w-20 bg-gradient-to-r from-blue-500 to-transparent" />
            <div className="h-[1px] flex-1 bg-white/10" />
          </div>
        </motion.div>
        
        {/* Timeline */}
        <div className="relative space-y-16">
          {/* Vertical Line */}
          <div className="absolute left-0 top-12 bottom-12 w-[2px] bg-gradient-to-b from-transparent via-blue-500/30 to-transparent hidden lg:block" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              className="relative"
            >
              {/* Timeline Node */}
              <div className="absolute -left-[9px] top-8 w-5 h-5 rounded-full bg-blue-500 border-4 border-[#0a0a0a] z-10 hidden lg:block">
                <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-20" />
              </div>

              {/* Card */}
              <div className="lg:ml-16 group">
                <div className="relative bg-gradient-to-br from-white/[0.03] to-white/[0.01] rounded-2xl p-8 sm:p-10 border border-white/10 hover:border-blue-500/30 transition-all duration-500 overflow-hidden">
                  
                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl group-hover:bg-blue-500/10 transition-all duration-500" />
                  
                  {/* Header */}
                  <div className="relative z-10 mb-8 pb-6 border-b border-white/10">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                            <Briefcase className="w-5 h-5 text-blue-400" />
                          </div>
                          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                            {exp.company}
                          </h3>
                        </div>
                        <p className="text-blue-400 font-semibold text-base sm:text-lg tracking-wide font-['Rajdhani'] uppercase">
                          {exp.role}
                        </p>
                      </div>
                      
                      <div className="flex flex-col gap-2 items-start lg:items-end">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                          <Calendar className="w-4 h-4 text-white/40" />
                          <span className="text-xs font-semibold tracking-widest text-white/70 uppercase font-['Rajdhani']">
                            {exp.period}
                          </span>
                        </div>
                        <span className="text-xs text-white/40 font-['Rajdhani'] tracking-wider">
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Summary */}
                  <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 relative z-10">
                    {exp.summary}
                  </p>
                  
                  {/* Responsibilities */}
                  <div className="relative z-10 mb-8">
                    <div className="flex items-center gap-2 mb-6">
                      <TrendingUp className="w-4 h-4 text-blue-400" />
                      <h4 className="text-xs uppercase tracking-[0.2em] text-white/40 font-['Rajdhani'] font-semibold">
                        Key Responsibilities
                      </h4>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3 group/item">
                          <div className="relative mt-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                            <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover/item:animate-ping" />
                          </div>
                          <span className="text-white/60 text-sm sm:text-base leading-relaxed group-hover/item:text-white/80 transition-colors">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="relative z-10 pt-6 border-t border-white/5">
                    <div className="flex items-center gap-2 mb-4">
                      <Wrench className="w-4 h-4 text-blue-400" />
                      <h4 className="text-xs uppercase tracking-[0.2em] text-white/40 font-['Rajdhani'] font-semibold">
                        Technologies & Methods
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, tIdx) => (
                        <motion.span
                          key={tIdx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: tIdx * 0.05 }}
                          className="px-3 py-1.5 text-xs font-semibold tracking-wider bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition-all duration-300 font-['Rajdhani'] uppercase"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};