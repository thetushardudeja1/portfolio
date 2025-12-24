import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-background border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-surface-highlight/30 backdrop-blur-3xl rounded-[3rem] p-8 md:p-16 border border-white/5 relative overflow-hidden">
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full filter blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's work together.</h2>
              <p className="text-lg text-neutral-400 mb-8 font-light">
                Available for freelance projects and open to full-time opportunities.
              </p>

              <div className="flex gap-4">
                <a href="#" className="p-4 bg-white/5 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 border border-white/10">
                  <Github size={24} />
                </a>
                <a href="#" className="p-4 bg-white/5 rounded-full text-white hover:bg-blue-600 hover:text-white transition-all duration-300 border border-white/10">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="p-4 bg-white/5 rounded-full text-white hover:bg-sky-500 hover:text-white transition-all duration-300 border border-white/10">
                  <Twitter size={24} />
                </a>
                <a href="mailto:hello@example.com" className="p-4 bg-white/5 rounded-full text-white hover:bg-green-500 hover:text-white transition-all duration-300 border border-white/10">
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>
              <div>
                <textarea 
                  rows={4}
                  placeholder="Message" 
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                />
              </div>
              <button className="w-full bg-white text-black font-semibold rounded-2xl py-4 flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors">
                Send Message
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center text-neutral-600 text-sm">
          <p>© {new Date().getFullYear()} Tushar.py. Crafted with passion & React.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;