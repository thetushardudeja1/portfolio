import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Focus from './components/Focus';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import IntroScene from './components/IntroScene';

const App: React.FC = () => {
  useEffect(() => {
    // We want natural scroll restoration for the "scrollytelling" effect to work if user refreshes mid-way
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background text-white min-h-screen selection:bg-blue-500/30 selection:text-blue-100">
      {/* Scroll-driven Cinematic Intro */}
      <IntroScene />

      {/* Main Website Content */}
      <div className="relative z-10 bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Focus />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <ScrollToTop />
      </div>
    </div>
  );
};

export default App;