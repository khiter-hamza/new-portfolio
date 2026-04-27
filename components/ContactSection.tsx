'use client';
import { motion } from 'framer-motion';
import { slideInLeft, slideInRight, fadeUp } from '@/lib/animations';
import SocialButtons from './SocialButtons';
import { useState } from 'react';

export default function ContactSection() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('sent'), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Column: Heading & Socials */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <motion.p 
              variants={fadeUp}
              className="text-[11px] font-bold tracking-[0.2em] text-[#555] uppercase"
            >
              GET IN TOUCH
            </motion.p>
            <motion.h2 
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
            >
              Start Your <br />
              Next Project
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[#a0a0a0] text-[15px] max-w-md leading-relaxed"
            >
              I am always looking for new opportunities and collaborations. 
              Let&apos;s build something extraordinary together.
            </motion.p>
          </div>

          <div className="pt-4">
            <SocialButtons />
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-[#111] p-8 md:p-10 rounded-[2rem] border border-white/5 relative overflow-hidden"
        >
          {/* Subtle glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#6c63ff]/10 blur-[100px] rounded-full pointer-events-none" />

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <motion.div variants={fadeUp} transition={{ delay: 0.1 }}>
              <label className="block text-xs font-bold text-[#555] tracking-widest uppercase mb-3">Your Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full bg-[#141414] border border-white/5 rounded-xl px-6 py-4 text-white text-[15px] focus:outline-none focus:border-[#6c63ff]/55 focus:bg-[#1a1a2e] focus:shadow-[0_0_0_3px_rgba(108,99,255,0.08)] transition-all duration-300"
                required
              />
            </motion.div>

            <motion.div variants={fadeUp} transition={{ delay: 0.18 }}>
              <label className="block text-xs font-bold text-[#555] tracking-widest uppercase mb-3">Project Type</label>
              <select 
                className="w-full bg-[#141414] border border-white/5 rounded-xl px-6 py-4 text-white text-[15px] focus:outline-none focus:border-[#6c63ff]/55 focus:bg-[#1a1a2e] focus:shadow-[0_0_0_3px_rgba(108,99,255,0.08)] transition-all duration-300 appearance-none"
                required
              >
                <option value="">Select Project Type</option>
                <option value="web">Web Application</option>
                <option value="ai">AI / Machine Learning</option>
                <option value="automation">Automation System</option>
                <option value="other">Other</option>
              </select>
            </motion.div>

            <motion.div variants={fadeUp} transition={{ delay: 0.26 }}>
              <label className="block text-xs font-bold text-[#555] tracking-widest uppercase mb-3">Message</label>
              <textarea 
                placeholder="Tell me about your objectives, timeline, or requirements..."
                className="w-full bg-[#141414] border border-white/5 rounded-xl px-6 py-4 text-white text-[15px] focus:outline-none focus:border-[#6c63ff]/55 focus:bg-[#1a1a2e] focus:shadow-[0_0_0_3px_rgba(108,99,255,0.08)] transition-all duration-300 min-h-[160px] resize-none"
                required
              />
            </motion.div>

            <motion.button
              variants={fadeUp}
              transition={{ delay: 0.34 }}
              type="submit"
              disabled={formState !== 'idle'}
              className="w-full bg-gradient-to-br from-[#6c63ff] to-[#5a52cc] text-white font-bold py-5 rounded-xl transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(108,99,255,0.35)] active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed group flex items-center justify-center gap-3"
            >
              {formState === 'idle' && (
                <>
                  Start Your Project ✦
                </>
              )}
              {formState === 'sending' && (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              )}
              {formState === 'sent' && (
                <>
                  Message Sent Successfully!
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
