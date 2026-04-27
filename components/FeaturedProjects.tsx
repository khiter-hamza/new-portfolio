'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/lib/data';
import ProjectCard from './ProjectCard';

const categories = ['All', 'Web', 'AI/ML', 'Data', 'Automation'];

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase() || (activeCategory === 'Web' && p.category === 'WEB'));

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white"
          >
            Featured projects
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-1.5 w-24 bg-[#6c63ff] rounded-full"
          />
        </div>

        {/* Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat 
                  ? 'bg-[#6c63ff] border-[#6c63ff] text-white shadow-[0_4px_15px_rgba(108,99,255,0.3)]' 
                  : 'bg-transparent border-white/10 text-[#a0a0a0] hover:border-white hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
