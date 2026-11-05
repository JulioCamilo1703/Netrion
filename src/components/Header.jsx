import React, { useState, useEffect } from 'react';
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi';
import './Header.css';
import logoDark  from '../assets/Recovered_LOGO_NETRION.svg';
import logoLight from '../assets/logo_netrion_horizontal_claro.png';

const Header = ({ theme, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  /* Cierra el menú si se redimensiona a escritorio */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 968) setIsOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  /* Bloquea scroll del body cuando el menú está abierto */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo-container">
          <a href="#inicio" onClick={() => setIsOpen(false)}>
            <img
              src={theme === 'light' ? logoLight : logoDark}
              alt="Netrion Logo"
              className="logo-img"
              loading="eager"
            />
          </a>
        </div>

        {/* Nav desktop */}
        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <a href="/"                     onClick={() => setIsOpen(false)}>Inicio</a>
          <a href="#servicios"            onClick={() => setIsOpen(false)}>Servicios</a>
          <a href="#proyectos"            onClick={() => setIsOpen(false)}>Proyectos</a>
          <a href="#proceso"              onClick={() => setIsOpen(false)}>Proceso</a>
          <a href="#preguntas-frecuentes" onClick={() => setIsOpen(false)}>Preguntas frecuentes</a>
          <a href="#contacto"            onClick={() => setIsOpen(false)}>Contacto</a>

          {/* Botón "Ver servicios" solo visible en móvil dentro del menú */}
          <a href="#servicios" className="btn-cotizacion-mobile" onClick={() => setIsOpen(false)}>
            Ver servicios
          </a>
        </nav>

        {/* Acciones escritorio */}
        <div className="header-actions">
          <a href="#servicios" className="btn-cotizacion" onClick={() => setIsOpen(false)}>
            Ver servicios
          </a>

          {/* Theme toggle — escritorio */}
          <button
            className="theme-toggle theme-toggle--desktop"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          >
            {theme === 'dark' ? <HiSun /> : <HiMoon />}
          </button>

          {/* Controles móvil: theme + hamburguesa */}
          <div className="mobile-controls">
            <button
              className="theme-toggle theme-toggle--mobile"
              onClick={onToggleTheme}
              aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              {theme === 'dark' ? <HiSun /> : <HiMoon />}
            </button>

            <button
              className="menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isOpen}
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;