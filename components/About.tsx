import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import * as Icons from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Text Content */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-8"
            >
              Beyond the Code
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-neutral-400 text-lg leading-relaxed font-light"
            >
              <p>
                I work at the intersection of AI, machine learning, and VLSI, focusing on how intelligent systems are designed from silicon-level fundamentals to system-scale models.
              </p>
              <p>
                My interests span neural networks, computer architecture, and hardware-aware optimization, with an emphasis on efficiency, performance, and real-world deployment.
              </p>
              <p>
                I believe strong systems are built by understanding both the hardware they run on and the algorithms they execute.
              </p>
            </motion.div>
          </div>

          {/* Skills Grid */}
          <div className="space-y-8">
             {SKILLS.map((skillGroup, groupIndex) => (
               <motion.div
                 key={skillGroup.category}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.3 + (groupIndex * 0.1) }}
               >
                 <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-widest mb-4">
                   {skillGroup.category}
                 </h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   {skillGroup.items.map((skill, index) => {
                     const IconComponent = (Icons as any)[skill.icon] || Icons.Code;
                     return (
                       <motion.div
                         key={skill.name}
                         whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
                         className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4 cursor-default transition-colors group"
                       >
                         <div className="p-2 bg-black/50 rounded-lg text-white group-hover:text-blue-400 transition-colors">
                           <IconComponent size={20} />
                         </div>
                         <div>
                           <h4 className="text-white font-medium">{skill.name}</h4>
                           <div className="w-24 h-1 bg-neutral-800 rounded-full mt-2 overflow-hidden">
                             <motion.div 
                               initial={{ width: 0 }}
                               whileInView={{ width: `${skill.level}%` }}
                               transition={{ duration: 1, delay: 0.5 }}
                               className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                             />
                           </div>
                         </div>
                       </motion.div>
                     );
                   })}
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;