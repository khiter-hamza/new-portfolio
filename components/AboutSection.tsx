'use client';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { slideInLeft, slideInRight, fadeUp } from '@/lib/animations';
import StatsGrid from './StatsGrid';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Text */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.p 
              variants={fadeUp}
              className="text-[11px] font-bold tracking-[0.15em] text-[#a0a0a0] uppercase"
            >
              WHO I AM
            </motion.p>
            <motion.h2 
              variants={fadeUp}
              className="text-4xl md:text-5xl font-extrabold text-white leading-tight"
            >
              I don&apos;t just write <br />
              <span className="text-[#6c63ff]">code.</span> <br />
              I build things that <br />
              <span className="text-[#10b981]">think.</span>
            </motion.h2>
          </div>

          <div className="space-y-6 text-[#a0a0a0] text-[15px] leading-relaxed max-w-lg">
            <motion.p variants={fadeUp}>
              Khiter Hamza is a Full-Stack Developer specializing in AI, automation, and agentic systems. 
              With a passion for building intelligent systems that solve real-world problems, 
              I combine robust backend architectures with modern frontend experiences.
            </motion.p>
            <motion.p variants={fadeUp}>
              My approach focuses on scalability, efficiency, and intelligence. 
              Whether it&apos;s a complex SaaS platform or an autonomous AI agent, 
              I ensure every line of code serves a purpose and delivers value.
            </motion.p>
          </div>

          <motion.a
            href="#contact"
            variants={fadeUp}
            className="inline-flex items-center gap-2 text-[#6c63ff] font-bold text-xs tracking-widest uppercase group"
          >
            → SPEAK TO KHITER & COLLABORATE
            <span className="w-0 h-[1px] bg-[#6c63ff] transition-all duration-300 group-hover:w-full" />
          </motion.a>

          {/* Stats Grid integrated for better layout on mobile */}
          <div className="pt-8">
            <StatsGrid />
          </div>
        </motion.div>

        {/* Right Column: Profile Photo */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative flex justify-center"
        >
          <div className="relative group">
            {/* Placeholder Rectangle */}
            <div className="w-[320px] h-[420px] bg-[#111] border-2 border-dashed border-[#6c63ff]/30 rounded-[2rem] flex flex-col items-center justify-center gap-4 transition-all duration-500 group-hover:border-[#6c63ff]/60 group-hover:shadow-[0_0_40px_rgba(108,99,255,0.15)] overflow-hidden">
              <User size={64} className="text-[#6c63ff]/20 group-hover:text-[#6c63ff]/40 transition-colors" />
              <p className="text-[#555] font-medium text-sm group-hover:text-[#a0a0a0] transition-colors">Photo coming soon</p>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#6c63ff]/20 rounded-tr-xl" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#6c63ff]/20 rounded-bl-xl" />
            </div>
            
            {/* Background glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#6c63ff]/5 blur-[80px] rounded-full" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
