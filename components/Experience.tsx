import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Cpu, Download } from 'lucide-react';
import { EDUCATION_DATA, TECHNICAL_EXPERTISE, ACADEMIC_PROJECTS_LIST } from '../constants';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-32 bg-background relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Resume</h2>
            <p className="text-lg text-neutral-400 max-w-xl font-light">
              My academic background, technical proficiencies, and engineering milestones.
            </p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-all text-sm font-medium">
            <Download size={18} />
            Download PDF
          </button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Education Timeline (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Education</h3>
            </div>

            <div className="relative border-l border-white/10 ml-3 space-y-12">
              {EDUCATION_DATA.map((item, index) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-black" />
                  
                  <span className="inline-block px-3 py-1 mb-3 text-xs font-mono text-blue-300 bg-blue-500/10 rounded-md border border-blue-500/20">
                    {item.period}
                  </span>
                  <h4 className="text-lg font-semibold text-white mb-1 leading-snug">
                    {item.role}
                  </h4>
                  <p className="text-neutral-400 text-sm mb-3 font-medium">
                    {item.company}
                  </p>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Technical Expertise & Projects (8 cols) */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Technical Expertise */}
            <section>
              <div className="flex items-center gap-3 mb-10">
                <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                  <Cpu size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Technical Expertise</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {TECHNICAL_EXPERTISE.map((area, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/[0.07] transition-colors"
                  >
                    <h4 className="text-white font-semibold mb-4 border-b border-white/5 pb-2">
                      {area.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {area.skills.map((skill) => (
                        <span key={skill} className="px-2.5 py-1 text-xs text-neutral-300 bg-black/40 rounded-md border border-white/5">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Academic Projects List */}
            <section>
              <div className="flex items-center gap-3 mb-10">
                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Academic Projects</h3>
              </div>

              <div className="space-y-6">
                {ACADEMIC_PROJECTS_LIST.map((project, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (idx * 0.1) }}
                    className="group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                      <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h4>
                      <span className="text-sm text-neutral-500 font-mono mt-1 sm:mt-0">
                        {project.tech}
                      </span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-neutral-400 text-sm marker:text-neutral-600">
                      {project.details.map((detail, dIdx) => (
                        <li key={dIdx}>{detail}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </section>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Resume;