import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const IntroScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Animation Logic
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const zIndex = useTransform(scrollYProgress, [0.95, 1], [50, -1]);

  return (
    <div 
      ref={containerRef} 
      className="relative h-[200vh] w-full -mb-[100vh]"
    >
      <motion.div 
        className="sticky top-0 left-0 w-full h-screen flex flex-col items-center justify-center bg-black overflow-hidden"
        style={{ opacity, zIndex }}
      >
        <motion.div 
          style={{ y }} 
          className="w-full px-4 flex flex-col items-center text-center select-none"
        >
          {/* Massive Metallic Typography */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-600 leading-[0.85] tracking-tighter uppercase drop-shadow-[0_0_25px_rgba(255,255,255,0.1)]">
            Hi, I am<br />
            Tushar Dudeja
          </h1>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default IntroScene;