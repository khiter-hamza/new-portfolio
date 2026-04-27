'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Play } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { scaleIn } from '@/lib/animations';

interface ProjectProps {
  project: {
    id: string;
    title: string;
    description: string;
    category: string;
    image: string;
    tags: string[];
    links?: { github?: string; external?: string; video?: string };
    type: string;
    color?: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectProps) {
  const isTypeA = project.type === 'screenshot';
  const isTypeB = project.type === 'overlay';
  const isTypeC = project.type === 'half';

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className={`card-spotlight group relative rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 hover:border-[#6c63ff]/50 hover:-translate-y-1 hover:shadow-2xl ${
        isTypeC ? '' : 'col-span-1 md:col-span-2'
      }`}
    >
      {/* Type A: Screenshot + Info */}
      {isTypeA && (
        <div className="flex flex-col h-full bg-[#111]">
          {/* Top: Image */}
          <div className="relative h-48 md:h-64 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent z-10" />
            <div className="w-full h-full bg-[#222] flex items-center justify-center text-white/10 font-bold text-xl uppercase tracking-widest">
               {project.title} Screenshot
            </div>
            {/* Action Buttons */}
            <div className="absolute top-4 right-4 flex gap-2 z-20">
              {project.links?.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-black/60 flex items-center justify-center text-white transition-all hover:bg-white hover:text-black">
                  <FaGithub size={18} />
                </a>
              )}
              {project.links?.external && (
                <a href={project.links.external} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-black/60 flex items-center justify-center text-white transition-all hover:bg-white hover:text-black">
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>
          {/* Bottom: Info */}
          <div className="p-6 md:p-8 flex flex-col gap-4 relative z-20">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold tracking-widest px-2.5 py-1 bg-[#6c63ff] text-white rounded-[4px] uppercase">
                {project.category}
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#6c63ff] transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-[#a0a0a0] leading-relaxed line-clamp-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map(tag => (
                <span key={tag} className="text-[11px] font-medium text-[#a0a0a0] px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Type B/C: Full Image Overlay */}
      {(isTypeB || isTypeC) && (
        <div className="relative aspect-[16/9] md:aspect-video h-full">
          {/* Image Placeholder with Color Overlay */}
          <div 
            className="absolute inset-0 bg-[#222]"
            style={{ 
              backgroundColor: project.color ? `${project.color}11` : '#222'
            }}
          >
            <div className="w-full h-full flex items-center justify-center text-white/5 font-bold text-2xl uppercase tracking-[0.2em] p-8 text-center">
              {project.title} Visual
            </div>
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
          
          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex gap-2 z-20">
            {project.links?.github && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-black/60 flex items-center justify-center text-white transition-all hover:bg-white hover:text-black">
                <FaGithub size={18} />
              </a>
            )}
            {(project.links?.external || project.links?.video) && (
              <a href={project.links.external || project.links.video} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-black/60 flex items-center justify-center text-white transition-all hover:bg-white hover:text-black">
                {isTypeB ? <Play size={18} /> : <ExternalLink size={18} />}
              </a>
            )}
          </div>

          {/* Bottom Content */}
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20 flex flex-col gap-3">
            <div>
              <span 
                className="text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-[4px] text-white uppercase"
                style={{ backgroundColor: project.color || '#6c63ff' }}
              >
                {project.category}
              </span>
            </div>
            <h3 className={`font-bold text-white transition-all ${isTypeC ? 'text-lg md:text-xl' : 'text-2xl md:text-3xl'}`}>
              {project.title}
            </h3>
            <p className="text-xs md:text-sm text-white/70 leading-relaxed max-w-lg">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-1">
              {project.tags.map(tag => (
                <span key={tag} className="text-[10px] md:text-[11px] font-medium text-white/60 px-3 py-1 bg-white/10 border border-white/5 backdrop-blur-md rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Glow Effect on Hover */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-15"
            style={{ 
              boxShadow: `inset 0 0 50px ${project.color ? `${project.color}33` : 'rgba(108,99,255,0.2)'}`
            }}
          />
        </div>
      )}
    </motion.div>
  );
}
