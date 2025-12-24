import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Zap, Server } from 'lucide-react';

const FOCUS_AREAS = [
  {
    title: "AI & Machine Learning",
    description: "Designing and training machine learning models with a focus on efficiency, performance, and real-world deployment using PyTorch.",
    icon: Brain,
    color: "text-purple-400",
    bg: "bg-purple-400/10"
  },
  {
    title: "VLSI & Digital Systems",
    description: "Exploring CMOS fundamentals, digital logic, and hardware-aware design principles that power modern computing systems.",
    icon: Cpu,
    color: "text-blue-400",
    bg: "bg-blue-400/10"
  },
  {
    title: "Edge Intelligence",
    description: "Building intelligent systems on embedded platforms like Raspberry Pi by integrating sensors, cameras, and neural networks.",
    icon: Zap,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10"
  },
  {
    title: "Computer Architecture",
    description: "Studying processor design, RISC-V systems, and the interaction between hardware, software, and performance.",
    icon: Server,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10"
  }
];

const PHILOSOPHY = [
    { title: "Systems First", desc: "Optimizing the entire stack." },
    { title: "Hardware-Aware AI", desc: "Intelligence meets efficiency." },
    { title: "Learning by Building", desc: "Theory through practice." },
    { title: "Precision Over Hype", desc: "Engineering grounded in reality." }
];

const Focus: React.FC = () => {
    return (
        <section className="py-32 bg-background relative" id="focus">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                 <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">What I Work On</h2>
                    <p className="text-neutral-400 max-w-2xl">
                        Bridging the gap between software intelligence and hardware constraints.
                    </p>
                </motion.div>

                {/* Main Focus Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                    {FOCUS_AREAS.map((area, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
                            className="p-8 rounded-3xl bg-white/5 border border-white/10 transition-colors group cursor-default"
                        >
                            <div className="flex flex-col h-full">
                                <div className={`w-14 h-14 rounded-2xl ${area.bg} ${area.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <area.icon size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{area.title}</h3>
                                <p className="text-neutral-400 leading-relaxed text-base">
                                    {area.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Philosophy Section */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-24"
                >
                     <h3 className="text-2xl font-bold text-white mb-8">How I Think</h3>
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                         {PHILOSOPHY.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (idx * 0.1) }}
                                className="p-6 rounded-2xl bg-surface/50 border border-white/5 hover:bg-surface hover:border-white/10 transition-colors"
                            >
                                <div className="h-full flex flex-col justify-center">
                                    <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                                    <p className="text-sm text-neutral-500">{item.desc}</p>
                                </div>
                            </motion.div>
                         ))}
                     </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Focus;