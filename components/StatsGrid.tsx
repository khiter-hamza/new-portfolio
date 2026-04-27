'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { scaleIn } from '@/lib/animations';
import { stats } from '@/lib/data';

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1500;
      const step = target / (duration / 16);
      const timer = setInterval(() => {
        start += step;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: i * 0.1 }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
            e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
          }}
          className="card-spotlight bg-[#0f0f1a] border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group"
          style={{ 
            borderColor: stat.color + '44',
            boxShadow: `0 0 0 transparent`
          }}
        >
          <div 
            className="text-4xl md:text-5xl font-extrabold mb-2"
            style={{ color: stat.color }}
          >
            <CountUp target={stat.value} suffix={stat.suffix} />
          </div>
          <p className="text-[13px] text-[#a0a0a0] font-medium uppercase tracking-wider">
            {stat.label}
          </p>
          
          {/* Custom hover glow overlay */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
            style={{
              background: `radial-gradient(24px circle at var(--mouse-x) var(--mouse-y), ${stat.color}22, transparent 80%)`,
              boxShadow: `0 0 24px ${stat.color}11`
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
