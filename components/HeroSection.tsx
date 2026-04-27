'use client';
import { motion } from 'framer-motion';
import { Download, ChevronRight } from 'lucide-react';
import { fadeUp } from '@/lib/animations';
import { useEffect, useState } from 'react';

const Typewriter = ({ texts }: { texts: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // typeWriter
  useEffect(() => {
    const currentText = texts[index];
    if (subIndex === currentText.length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setTimeout(() => {
        setReverse(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }, 500);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <span className="text-[#6c63ff] font-medium">
      {`${texts[index].substring(0, subIndex)}${blink ? '|' : ' '}`}
    </span>
  );
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        
        {/* Badge Row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-4 text-[11px] font-bold tracking-[0.15em] text-[#a0a0a0] uppercase"
        >
          <span>AVAILABLE FOR HIRE</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>ALGERIA</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] dot-blink" />
            <span>READY TO DEPLOY →</span>
          </div>
        </motion.div>

        {/* Headline */}
        <div className="space-y-2">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.35 }}
            className="text-7xl md:text-8xl font-extrabold leading-[1.0] text-white"
          >
            Khiter
          </motion.h1>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.45 }}
            className="text-7xl md:text-8xl font-extrabold leading-[1.0] text-white"
          >
            Hamza
          </motion.h1>
        </div>

        {/* Subtitle Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.55 }}
          className="inline-block"
        >
          <div className="border border-white/15 rounded-full px-5 py-1.5 text-[13px] text-white/70">
            <Typewriter texts={["Full-Stack Developer", "AI Builder", "Automation Engineer"]} />
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.65 }}
          className="text-[15px] text-[#a0a0a0] max-w-md mx-auto"
        >
          I build systems that work, scale, and think.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <button className="w-full sm:w-auto bg-[#6c63ff] text-white font-semibold px-8 py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_10px_25px_rgba(108,99,255,0.4)] group">
            <Download size={18} />
            Download CV
          </button>
          <button className="w-full sm:w-auto border border-white/20 text-white font-semibold px-8 py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:border-[#6c63ff] hover:text-[#6c63ff] group">
            See projects
            <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[11px] text-[#555] tracking-widest uppercase"
      >
        <span className="animate-bounce-slow">↓</span>
        <span>scroll</span>
      </motion.div>
    </section>
  );
}
