import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';
import logoDark  from '../assets/logo_footer/logo_netrion_vertical_oscuro_footer.png';
import logoLight from '../assets/logo_footer/logo_netrion_vertical_claro_footer.png';

const Footer = ({ theme }) => {
  return (
    <footer className="footer-section" data-scroll-reveal>
      <div id="contacto" />

      <div className="footer-inner">

        {/* Col 1 — Logo + Redes */}
        <div className="footer-col footer-col--brand">
          <img
            src={theme === 'light' ? logoLight : logoDark}
            alt="Netrion"
            className="footer-logo"
          />
          <div className="footer-socials">
            <a href="https://github.com"    target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://linkedin.com"  target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://twitter.com"   target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>

        {/* Col 2 — Navegación */}
        <div className="footer-col">
          <h4 className="footer-col__title">Navegación</h4>
          <ul className="footer-links">
            <li><a href="/">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#proceso">Proceso</a></li>
            <li><a href="#preguntas-frecuentes">Preguntas frecuentes</a></li>
          </ul>
        </div>

        {/* Col 3 — Contacto */}
        <div className="footer-col">
          <h4 className="footer-col__title">Contacto</h4>
          <ul className="footer-links">
            <li><a href="mailto:hola@netrion.com">hola@netrion.com</a></li>
            <li><span>Lima, Perú</span></li>
          </ul>
          <a href="#contacto" className="footer-cta">
            Cuéntanos tu proyecto →
          </a>
        </div>

      </div>

      {/* Barra inferior */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Netrion. Todos los derechos reservados.</p>
        <p className="footer-bottom__made">Hecho con React + Vite</p>
      </div>
    </footer>
  );
};

export default Footer;