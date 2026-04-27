'use client';
import { motion } from 'framer-motion';
import { LucideIcon, Mail, MessageCircle } from 'lucide-react';
import { IconType } from 'react-icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const iconMap: Record<string, LucideIcon | IconType> = {
  Mail: Mail,
  MessageCircle: MessageCircle,
  Linkedin: FaLinkedin,
  Github: FaGithub,
};
import { socialLinks } from '@/lib/data';
import { scaleIn } from '@/lib/animations';

export default function SocialButtons() {
  return (
    <div className="grid grid-cols-2 gap-4 max-w-sm">
      {socialLinks.map((link, i) => {
        const IconComponent = iconMap[link.icon];
        
        return (
          <motion.a
            key={link.name}
            href={link.href}
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
              e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
            }}
            className="card-spotlight group flex flex-col items-center justify-center gap-3 bg-[#111] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
            style={{ 
              borderColor: 'rgba(255,255,255,0.08)',
            }}
          >
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.05)',
                color: '#fff'
              }}
            >
              <IconComponent size={24} className="group-hover:text-[var(--hover-color)] transition-colors" style={{ '--hover-color': link.color } as React.CSSProperties} />
            </div>
            <span className="text-[10px] font-bold tracking-[0.1em] text-[#a0a0a0] group-hover:text-white transition-colors uppercase">
              {link.label}
            </span>

            {/* Custom hover glow */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
              style={{
                background: `radial-gradient(40px circle at var(--mouse-x) var(--mouse-y), ${link.bg}, transparent 80%)`,
                borderColor: link.color,
                borderWidth: '1px'
              } as React.CSSProperties}
            />
          </motion.a>
        );
      })}
    </div>
  );
}
