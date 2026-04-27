'use client';
import { motion } from 'framer-motion';
import { navLinks } from '@/lib/data';
import { fadeIn } from '@/lib/animations';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-12 px-6 border-t border-white/5 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Row 1: Logo & Nav */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <a href="#" className="text-xl font-bold group relative">
            <span className="text-[#6c63ff]">Mester</span>
            <span className="text-white ml-1">KH✦</span>
          </a>

          <div className="flex items-center gap-6 md:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold tracking-widest text-[#555] hover:text-[#6c63ff] transition-colors uppercase"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Row 2: Copyright */}
        <div className="text-center pt-8 border-t border-white/5">
          <p className="text-[11px] font-medium text-[#444] tracking-wider uppercase">
            © {currentYear} Khiter Hamza. Built with Next.js & passion.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
