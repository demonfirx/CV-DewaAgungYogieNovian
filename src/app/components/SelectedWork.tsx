import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "AHU / Commercial AC Product Engineering",
    description: "Developed and managed BOM, technical drawings, component selection, and NPI support for customized AHU, UP, and AP commercial air-conditioning products, while collaborating with production, design, and quality teams to resolve manufacturing issues.",
    tags: ["Product Engineering", "Manufacturing", "Localization"]
  },
  {
    title: "TV Backlight Unit Product Development",
    description: "Led and supported new product development for BLU models, including prototype trials, component validation, SOP revision, and defect analysis before mass production. Worked with reflection sheet, diffusion film, prism sheet, and composite sheet components.",
    tags: ["R&D", "Prototyping", "Quality Assurance"]
  },
  {
    title: "Localization, Kaizen & VAVE Initiatives",
    description: "Delivered multiple engineering improvement projects focused on local sourcing, cost efficiency, workflow optimization, and production support, with measurable impact on revenue, lead time, and manufacturing capability.",
    tags: ["Kaizen", "VAVE", "Cost Efficiency"]
  }
];

export const SelectedWork = () => {
  return (
    <section id="work" className="w-full bg-[#0a0a0a] text-white py-32 px-6 sm:px-12 md:px-16 lg:px-24">
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
            SELECTED WORK
          </h3>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-8">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter">
              Curated engineering <span className="text-blue-400">contributions</span>
            </h2>
            <p className="text-white/50 text-base sm:text-lg leading-relaxed max-w-md">
              A selection of engineering contributions, product improvements, and manufacturing-focused achievements reflecting my strengths in technical problem solving and process optimization.
            </p>
          </div>

          {/* Technical Divider */}
          <div className="flex items-center gap-4 mt-12">
            <div className="h-[2px] w-20 bg-gradient-to-r from-blue-500 to-transparent" />
            <div className="h-[1px] flex-1 bg-white/10" />
          </div>
        </motion.div>

        {/* Projects List */}
        <div className="w-full flex flex-col divide-y divide-white/10 border-b border-white/10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              className="group py-12 flex flex-col lg:flex-row justify-between gap-8 cursor-pointer relative"
            >
              {/* Left Title */}
              <div className="flex-1 w-full max-w-3xl pr-12">
                <div className="flex items-start justify-between">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 group-hover:text-blue-400 transition-colors duration-500">
                    {project.title}
                  </h3>
                  <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-full lg:hidden">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
                
                <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-xl group-hover:text-white/90 transition-colors duration-500">
                  {project.description}
                </p>
              </div>

              {/* Right Tags & Meta */}
              <div className="w-full lg:w-1/3 flex flex-col justify-between items-start lg:items-end">
                <div className="flex flex-wrap gap-2 justify-start lg:justify-end">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-4 py-2 rounded-full border border-white/10 text-xs text-white/80 group-hover:border-white/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="hidden lg:flex w-16 h-16 items-center justify-center bg-transparent border border-white/20 rounded-full group-hover:bg-white group-hover:text-black transition-all duration-500 overflow-hidden transform group-hover:scale-105">
                  <ArrowUpRight className="w-6 h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};