import React from 'react';
import { motion } from 'framer-motion';

const FeaturedWork: React.FC = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-highlight/20" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-neutral-900/50 border border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-sm"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Visual */}
            <div className="lg:w-3/5 h-[400px] lg:h-auto relative overflow-hidden group">
               <img 
                 src="https://picsum.photos/1200/800?random=88" 
                 alt="Featured Work" 
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/80" />
            </div>

            {/* Content */}
            <div className="lg:w-2/5 p-12 flex flex-col justify-center">
              <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-4">Featured Case Study</span>
              <h2 className="text-4xl font-bold text-white mb-6">OmniStream Protocol</h2>
              <p className="text-neutral-400 mb-8 leading-relaxed">
                A revolutionary data streaming architecture designed for low-latency decentralized applications. We rebuilt the core engine to support 10x throughput while maintaining cryptographic integrity.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="bg-black/40 px-4 py-2 rounded-xl border border-white/10">
                  <span className="block text-2xl font-bold text-white">10x</span>
                  <span className="text-xs text-neutral-500 uppercase">Throughput</span>
                </div>
                <div className="bg-black/40 px-4 py-2 rounded-xl border border-white/10">
                  <span className="block text-2xl font-bold text-white">-40%</span>
                  <span className="text-xs text-neutral-500 uppercase">Latency</span>
                </div>
              </div>

              <button className="self-start text-white border-b border-white pb-1 hover:text-blue-400 hover:border-blue-400 transition-colors">
                Read Case Study
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedWork;