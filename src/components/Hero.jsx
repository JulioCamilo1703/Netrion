import React from 'react';
import { HiLightningBolt } from 'react-icons/hi';
import './Hero.css';
import mockupImage from '../assets/imagen1.png';
import ImageWithLoader from './ImageWithLoader';
import useTypewriter from '../hooks/useTypewriter';

const PHRASES = [
  'dan resultados',
  'generan clientes',
  'impulsan tu marca',
  'trabajan 24/7',
];

const Hero = () => {
  const typed = useTypewriter(PHRASES, 65, 1800, 38);

  return (
    <section className="hero-section">
      <div id="inicio" />
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-eyebrow">
            <HiLightningBolt className="hero-eyebrow__icon" aria-hidden="true" />
            Desarrollo Web Profesional
          </span>
          <h1>
            Páginas web que <br />
            <span className="highlight typewriter-wrap">
              {typed}
              <span className="typewriter-cursor" aria-hidden="true">|</span>
            </span>
          </h1>
          <p>
            Creamos sitios web modernos, rápidos y adaptados a tus necesidades.
            Haz que tu negocio también esté en internet.
          </p>
          <div className="hero-buttons">
            <a href="#servicios" className="btn-primary hero-btn-main">
              Ver servicios
            </a>
            <a href="#proyectos" className="btn-secondary">
              Ver proyectos
            </a>
          </div>
        </div>
        <div className="hero-mockup">
          <div className="hero-mockup__glow" aria-hidden="true" />
          <ImageWithLoader
            src={mockupImage}
            alt="Mockup de dispositivos Netrion"
            style={{ width: '100%', height: 'auto' }}
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
