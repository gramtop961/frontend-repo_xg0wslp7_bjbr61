import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import MagicBook from './components/MagicBook';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b1020] text-white selection:bg-cyan-500/30 selection:text-cyan-100">
      <Hero />
      <About />
      <Skills />
      <MagicBook />

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#060914] py-10 text-center text-cyan-100/70">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm">
            © {new Date().getFullYear()} I Gede Arta Cahyadi Putra · SMKN 1 Tegallalang · 10PH6
          </p>
          <p className="mt-2 text-xs text-cyan-100/60">Tema dark biru laut • Animasi modern & interaktif</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
