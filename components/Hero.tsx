import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for the movement
  const mouseX = useSpring(x, { stiffness: 400, damping: 40 });
  const mouseY = useSpring(y, { stiffness: 400, damping: 40 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const xPos = (event.clientX - left) / width - 0.5;
    const yPos = (event.clientY - top) / height - 0.5;
    
    x.set(xPos);
    y.set(yPos);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  // Calculate rotation values (Parallax)
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Ambience */}
      <div className="absolute top-0 -left-20 w-72 h-72 bg-purple-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-0 -right-20 w-72 h-72 bg-blue-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-32 left-20 w-72 h-72 bg-indigo-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-purple-300 uppercase bg-purple-500/10 rounded-full border border-purple-500/20">
              Available for work
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 leading-[0.9] uppercase"
          >
            Hey I'AM <br />
            TUSHAR DUDEJA <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-3xl md:text-5xl lg:text-6xl normal-case font-bold tracking-tight block mt-2">
              Where AI Meets Silicon
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-neutral-400 mb-8 max-w-xl mx-auto md:mx-0 font-light leading-relaxed"
          >
            Focused on building intelligent systems at the intersection of hardware, neural networks, and computer architecture—bridging the gap between AI capabilities and silicon-level design.
          </motion.p>
        </div>

        {/* Visual / Macintosh Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex-1 relative flex justify-center items-center"
          style={{ perspective: 1000 }}
        >
           <div 
             className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center"
             onMouseMove={handleMouseMove}
             onMouseLeave={handleMouseLeave}
           >
             {/* Decorative rings */}
             <div className="absolute inset-0 border border-white/5 rounded-full" />
             <div className="absolute inset-12 border border-white/5 rounded-full" />
             
             {/* Macintosh SVG Container */}
             <motion.div
               style={{ 
                 rotateX: rotateX, 
                 rotateY: rotateY,
                 transformStyle: "preserve-3d",
                 cursor: "grab"
               }}
               animate={{ 
                 y: [-10, 10, -10],
                 rotateZ: [-1, 1, -1] 
               }}
               transition={{ 
                 y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                 rotateZ: { duration: 8, repeat: Infinity, ease: "easeInOut" }
               }}
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.95, cursor: "grabbing" }}
               className="relative w-64 h-72 md:w-72 md:h-80 drop-shadow-2xl z-10"
             >
                <svg viewBox="0 0 200 256" className="w-full h-full filter drop-shadow-[0_20px_50px_rgba(59,130,246,0.3)]">
                  <defs>
                    <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#E6E6E1" />
                      <stop offset="100%" stopColor="#D1D1C7" />
                    </linearGradient>
                    <linearGradient id="screenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#333" />
                      <stop offset="100%" stopColor="#000" />
                    </linearGradient>
                     <linearGradient id="glareGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="white" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Main Chassis Body */}
                  <rect x="25" y="20" width="150" height="200" rx="12" fill="url(#bodyGradient)" stroke="#C0C0B8" strokeWidth="1" />
                  
                  {/* Left Side Shadow (Pseudo-3D) */}
                  <path d="M25 32 L20 25 L20 215 L25 220 Z" fill="#B0B0A8" opacity="0.6" />
                  
                  {/* Bottom Chin Detail */}
                  <path d="M25 210 L175 210" stroke="#BDBDB5" strokeWidth="1" />

                  {/* Screen Bezel */}
                  <rect x="35" y="40" width="130" height="110" rx="6" fill="#D6D6CF" stroke="#B0B0A8" strokeWidth="1" />
                  
                  {/* CRT Screen */}
                  <rect x="40" y="45" width="120" height="100" rx="8" fill="url(#screenGradient)" />
                  
                  {/* Screen Reflection/Glare */}
                  <path d="M40 45 Q 160 45 160 85 L 160 45 Z" fill="url(#glareGradient)" />
                  
                  {/* Screen Content - Simple Code Lines */}
                  <g opacity="0.7">
                    <rect x="48" y="55" width="30" height="2" fill="#00FF00" rx="1" />
                    <rect x="48" y="60" width="80" height="2" fill="#444" rx="1" />
                    <rect x="48" y="65" width="60" height="2" fill="#444" rx="1" />
                    <rect x="48" y="70" width="90" height="2" fill="#444" rx="1" />
                    <rect x="48" y="80" width="40" height="2" fill="#00FF00" rx="1" />
                    <rect x="92" y="80" width="6" height="10" fill="#00FF00" className="animate-pulse" />
                  </g>

                  {/* Floppy Drive Slot */}
                  <rect x="115" y="175" width="45" height="4" rx="1" fill="#222" />
                  
                  {/* Rainbow Logo */}
                  <g transform="translate(45, 172)">
                    <rect x="0" y="0" width="12" height="2" fill="#61BB46" />
                    <rect x="0" y="2" width="12" height="2" fill="#FDB827" />
                    <rect x="0" y="4" width="12" height="2" fill="#F5821F" />
                    <rect x="0" y="4" width="12" height="2" fill="#E03A3E" />
                    <rect x="0" y="6" width="12" height="2" fill="#963D97" />
                    <rect x="0" y="8" width="12" height="2" fill="#009DDC" />
                  </g>
                  
                  {/* Vents (Bottom corners) */}
                  <g fill="#A0A098">
                     <rect x="28" y="195" width="2" height="12" rx="1" />
                     <rect x="32" y="195" width="2" height="12" rx="1" />
                     <rect x="36" y="195" width="2" height="12" rx="1" />
                     
                     <rect x="162" y="195" width="2" height="12" rx="1" />
                     <rect x="166" y="195" width="2" height="12" rx="1" />
                     <rect x="170" y="195" width="2" height="12" rx="1" />
                  </g>
                </svg>
             </motion.div>
             
             {/* Floating Badge */}
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-0 right-0 md:-right-4 bg-black/40 backdrop-blur-md border border-white/10 p-3 rounded-2xl flex items-center gap-3 shadow-xl z-20"
             >
               <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
               <span className="text-sm font-medium text-white">System Online</span>
             </motion.div>
           </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-500 animate-bounce"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;