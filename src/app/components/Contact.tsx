import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="w-full bg-[#0a0a0a] text-white pt-32 pb-12 px-6 sm:px-12 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-blue-900/10 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-[1400px] mx-auto flex flex-col relative z-10">
        
        {/* CTA Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start gap-8 mb-32 group cursor-pointer"
        >
          <p className="text-sm sm:text-base text-white/50 max-w-sm leading-relaxed mb-4">
            Let’s discuss engineering solutions, product development, and manufacturing improvement opportunities.
          </p>
          
          <a 
            href="mailto:dewa11ipa2@gmail.com"
            className="flex items-center justify-between w-full border-b border-white/20 pb-8 hover:border-white/60 transition-colors duration-500"
          >
            <h2 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter uppercase group-hover:text-blue-400 transition-colors duration-500">
              Let’s Talk
            </h2>
            <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 flex items-center justify-center rounded-full border border-white/20 group-hover:bg-white group-hover:border-white transition-all duration-500 transform group-hover:scale-105">
              <ArrowUpRight className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white group-hover:text-black transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
            </div>
          </a>
        </motion.div>
        
        {/* Footer Info Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pt-12 border-t border-white/10 text-sm"
        >
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-[0.3em] text-white/40 mb-2 font-['Rajdhani'] font-semibold">Location</h4>
            <p className="text-white/80 font-medium">Indonesia</p>
            <p className="text-white/50">Willing to travel/relocate</p>
          </div>
          
          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-[0.3em] text-white/40 mb-2 font-['Rajdhani'] font-semibold">Profession</h4>
            <p className="text-white/80 font-medium">Mechanical Engineering</p>
            <p className="text-white/50">Product Development & R&D</p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-[0.3em] text-white/40 mb-2 font-['Rajdhani'] font-semibold">Contact</h4>
            <a href="mailto:dewa11ipa2@gmail.com" className="text-white/80 hover:text-white transition-colors">dewa11ipa2@gmail.com</a>
            <a href="tel:+6281380153875" className="text-white/80 hover:text-white transition-colors">+62 813 8015 3875</a>
            <p className="text-white/50">WeChat: dewa_ayn</p>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-[0.3em] text-white/40 mb-2 font-['Rajdhani'] font-semibold">Socials</h4>
            <div className="flex flex-col gap-2">
              {['LinkedIn', 'Instagram', 'GitHub', 'YouTube'].map((social) => (
                <a key={social} href="#" className="text-white/80 hover:text-blue-400 transition-colors w-fit">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40 uppercase tracking-widest"
        >
          <p>© {new Date().getFullYear()} YOGIE. All rights reserved.</p>
          <p className="text-center sm:text-right">Built with precision. Driven by engineering. Focused on real industrial impact.</p>
        </motion.div>

      </div>
    </section>
  );
};