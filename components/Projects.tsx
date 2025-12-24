import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight, Cpu, Network, Zap } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="research" className="py-32 bg-surface relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-6 tracking-tight">
              Research & <br />
              <span className="text-neutral-500">System Engineering.</span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl font-light leading-relaxed">
              Selected works at the intersection of Hardware, AI, and Control Theory. 
              Exploring how intelligent systems perceive, reason, and act in the real world.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-12">
          {PROJECTS.map((project: Project) => {
            const isExpanded = expandedId === project.id;

            return (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className={`group relative bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-md hover:bg-white/[0.07] transition-colors duration-500 ${
                  isExpanded ? 'ring-1 ring-blue-500/30' : ''
                }`}
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Image Section - Interactive Parallax Feel */}
                  <motion.div 
                    layout
                    className={`relative overflow-hidden ${isExpanded ? 'lg:w-1/2 h-[400px] lg:h-auto' : 'lg:w-2/5 h-[300px] lg:h-[450px]'}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 lg:hidden" />
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    
                    {/* Floating Category Badge */}
                    <div className="absolute top-6 left-6 z-20">
                      <span className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 text-xs font-semibold uppercase tracking-wider text-white">
                        {project.category}
                      </span>
                    </div>
                  </motion.div>

                  {/* Content Section */}
                  <div className={`p-8 md:p-12 flex flex-col justify-between ${isExpanded ? 'lg:w-1/2' : 'lg:w-3/5'}`}>
                    <div>
                      <motion.h3 layout className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                        {project.title}
                      </motion.h3>
                      <motion.p layout className="text-lg text-blue-400 font-medium mb-6">
                        {project.subtitle}
                      </motion.p>
                      
                      <motion.p layout className="text-neutral-400 text-lg leading-relaxed mb-8">
                        {project.description}
                      </motion.p>

                      {/* Technologies Tags */}
                      <motion.div layout className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.map(tech => (
                          <span key={tech} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-sm text-neutral-300">
                            {tech}
                          </span>
                        ))}
                      </motion.div>
                    </div>

                    {/* Action Area */}
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                      <button 
                        onClick={() => toggleExpand(project.id)}
                        className="flex items-center gap-3 text-white font-medium group/btn focus:outline-none"
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isExpanded ? 'bg-white text-black rotate-180' : 'bg-white/10 group-hover/btn:bg-white group-hover/btn:text-black'}`}>
                           {isExpanded ? <Minus size={20} /> : <Plus size={20} />}
                        </div>
                        <span className="tracking-wide">
                          {isExpanded ? 'Close Analysis' : 'View Methodology'}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expanded Content Area - The Research Details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="border-t border-white/10 bg-black/20"
                    >
                      <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Stats Column */}
                        <div>
                          <h4 className="flex items-center gap-2 text-white font-semibold mb-6 uppercase tracking-wider text-sm">
                            <Zap size={16} className="text-yellow-400" />
                            Performance Metrics
                          </h4>
                          <div className="grid grid-cols-2 gap-4">
                            {project.stats?.map((stat, idx) => (
                              <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/5">
                                <span className="block text-2xl font-bold text-white mb-1">{stat.value}</span>
                                <span className="text-xs text-neutral-500 uppercase">{stat.label}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Features/Methodology Column */}
                        <div>
                          <h4 className="flex items-center gap-2 text-white font-semibold mb-6 uppercase tracking-wider text-sm">
                            <Network size={16} className="text-blue-400" />
                            Key Engineering Features
                          </h4>
                          <ul className="space-y-4">
                            {project.features?.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-neutral-300 leading-relaxed">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;