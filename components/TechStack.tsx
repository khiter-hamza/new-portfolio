'use client';
import { motion } from 'framer-motion';
import { techStack } from '@/lib/data';
import { fadeUp } from '@/lib/animations';

export default function TechStack() {
  return (
    <section id="stack" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#6c63ff]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16 space-y-4">
          <motion.p 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.2em] text-[#555] uppercase"
          >
            TECHNOLOGIES
          </motion.p>
          <motion.h2 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white"
          >
            What I build with
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#a0a0a0] text-sm md:text-[15px] max-w-xl leading-relaxed"
          >
            I select tools that optimize for speed, scale, and intelligence, 
            leveraging a cutting-edge ecosystem of frameworks, languages, and platforms.
          </motion.p>
        </div>

        {/* Stack Rows */}
        <div className="space-y-12">
          {techStack.map((row, rowIndex) => (
            <motion.div 
              key={row.label}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: rowIndex * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col md:flex-row md:items-center gap-6"
            >
              {/* Row Label */}
              <div className="md:w-64 flex-shrink-0">
                <h3 className={`text-[13px] font-black tracking-[0.1em] uppercase ${
                  row.gradient 
                    ? 'bg-gradient-to-r from-[#6c63ff] to-[#14b8a6] bg-clip-text text-transparent' 
                    : 'text-[#6c63ff]'
                }`}>
                  {row.label}
                </h3>
              </div>

              {/* Marquee Track */}
              <div className="flex-1 overflow-hidden relative">
                {/* Fade overlays */}
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
                
                <div className="marquee-track flex gap-4 py-2">
                  {/* Duplicate list for seamless loop */}
                  {[...row.tags, ...row.tags].map((tag, i) => (
                    <div 
                      key={`${tag}-${i}`}
                      className="px-6 py-2.5 bg-white/[0.03] border border-white/10 rounded-xl text-[13px] text-[#a0a0a0] whitespace-nowrap transition-all duration-300 hover:border-[#6c63ff] hover:text-white hover:bg-white/[0.05] cursor-default"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
