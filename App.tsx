import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Focus from './components/Focus';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <div className="bg-background text-white min-h-screen selection:bg-blue-500/30 selection:text-blue-100">
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
  );
};

export default App;