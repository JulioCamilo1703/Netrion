import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import useScrollReveal from './hooks/useScrollReveal';
import ContactCTA from './components/ContactCTA';
import Services from './components/Services';
import Projects from './components/Projects';
import Process from './components/Process';
import FAQ from './components/FAQ';
import MicroCrosses from './components/MicroCrosses';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useScrollReveal();

  // Tema: 'dark' por defecto; persiste en localStorage
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('netrion-theme') || 'dark';
    } catch {
      return 'dark';
    }
  });

  // Aplica el tema al elemento raíz
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('netrion-theme', theme); } catch {}
  }, [theme]);

  const toggleTheme = () =>
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <div className="App" style={{ position: 'relative' }}>
      {/* Fondo animado de microcruces — detrás de todo */}
      <MicroCrosses />

      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Features />
        <Projects />
        <Services />
        <Process />
        <FAQ />
        <ContactCTA />
      </main>

      <Footer theme={theme} />

      {/* Botón flotante para volver al inicio */}
      <ScrollToTop />
    </div>
  );
}

export default App;