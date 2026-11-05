import React from 'react';
import { HiOutlineDesktopComputer, HiOutlineCode, HiOutlineSupport } from 'react-icons/hi';
import './Features.css';

const featureList = [
  {
    icon: <HiOutlineDesktopComputer />,
    title: 'Diseño moderno y adaptable',
    desc: 'Interfaces optimizadas para cualquier dispositivo y tamaño de pantalla.',
    glow: 'rgba(0,255,225,0.18)',
  },
  {
    icon: <HiOutlineCode />,
    title: 'Código limpio y optimizado',
    desc: 'Desarrollo ágil con buenas prácticas, rendimiento máximo y carga rápida.',
    glow: 'rgba(0,207,200,0.18)',
    featured: true,          // tarjeta focal — borde más brillante
  },
  {
    icon: <HiOutlineSupport />,
    title: 'Soporte y asesoría',
    desc: 'Acompañamiento continuo para que tu sitio siempre esté en su mejor estado.',
    glow: 'rgba(102,255,240,0.14)',
  },
];

const Features = () => (
  <section className="features-section">
    <div className="features-container">
      {featureList.map((f, i) => (
        <div
          className={`feature-card${f.featured ? ' feature-card--featured' : ''}`}
          key={i}
          data-scroll-reveal
          style={{ '--reveal-delay': `${i * 110}ms`, '--glow': f.glow }}
        >
          {/* Resplandor de fondo */}
          <div className="feature-card__bg-glow" aria-hidden="true" />

          <div className="feature-icon">
            {f.icon}
            <div className="feature-icon__ring" aria-hidden="true" />
          </div>

          <div className="feature-text">
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
