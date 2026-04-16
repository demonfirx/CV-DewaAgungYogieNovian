import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Zap, Target } from 'lucide-react';

const achievements = [
  {
    year: "2024",
    title: "Introduced a new product type that increased local content (TKDN) by 35%, significantly boosting company revenue.",
    metric: "+35%",
    category: "TKDN Growth"
  },
  {
    year: "2023",
    title: "Delivered product innovations for Sharp, improving production efficiency and reducing material and manpower costs.",
    metric: "Sharp",
    category: "Innovation"
  },
  {
    year: "2022",
    title: "Improved die-cut and screen-printing tool design, extending tool lifespan by 50%.",
    metric: "+50%",
    category: "Tool Lifespan"
  },
  {
    year: "2021",
    title: "Developed an in-house die-cut repair method, eliminating the need for external repair or costly imported tools.",
    metric: "100%",
    category: "Cost Reduction"
  },
  {
    year: "2020",
    title: "Initiated partnership with Sharp Electronics Indonesia, resulting in 90% of Sharp LCD modules using components from Wah Hong Indonesia.",
    metric: "90%",
    category: "Partnership"
  },
  {
    year: "2019",
    title: "Localized screen printing for mass production, saving 30% in import costs and shortening lead times.",
    metric: "-30%",
    category: "Cost Savings"
  }
];

export const CertificatesAchievements = () => {
  return (
    <section id="certificates" className="w-full bg-[#0a0a0a] text-white py-32 px-6 sm:px-12 md:px-16 lg:px-24 relative overflow-hidden">
      
      {/* Technical Grid Background */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-[1400px] mx-auto relative">
        
        {/* Achievements Section */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-20"
          >
            <h3 className="text-xs uppercase tracking-[0.3em] text-white/40 mb-12 font-['Rajdhani'] font-semibold">
              KEY ACHIEVEMENTS
            </h3>
            
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-8">
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter">
                Impact &<br className="hidden lg:block" />
                <span className="text-blue-400">Milestones</span>
              </h2>
              <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-lg">
                <Target className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-xs text-white/40 font-['Rajdhani'] tracking-wider uppercase">Total Achievements</p>
                  <p className="text-2xl font-bold text-white">{achievements.length}</p>
                </div>
              </div>
            </div>

            {/* Technical Divider */}
            <div className="flex items-center gap-4 mt-12">
              <div className="h-[2px] w-20 bg-gradient-to-r from-blue-500 to-transparent" />
              <div className="h-[1px] flex-1 bg-white/10" />
            </div>
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {achievements.map((item, idx) => (
              <motion.div
                key={`${item.year}-${item.category}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-white/[0.04] to-white/[0.01] rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-500 overflow-hidden h-full">
                  
                  {/* Glow Effect */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 blur-3xl group-hover:bg-blue-500/10 transition-all duration-500" />
                  
                  {/* Year Badge */}
                  <div className="relative z-10 flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                          <span className="text-2xl font-bold text-white font-['Rajdhani']">{item.year}</span>
                        </div>
                        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center">
                          <Zap className="w-3 h-3 text-blue-400" />
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-white/40 font-['Rajdhani'] font-semibold mb-1">
                          {item.category}
                        </p>
                        <div className="px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 inline-block">
                          <span className="text-lg font-bold text-blue-400 font-['Rajdhani']">
                            {item.metric}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300">
                      <TrendingUp className="w-4 h-4 text-white/40 group-hover:text-blue-400 transition-colors" />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <p className="relative z-10 text-white/80 text-base leading-relaxed group-hover:text-white transition-colors">
                    {item.title}
                  </p>

                  {/* Bottom Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
