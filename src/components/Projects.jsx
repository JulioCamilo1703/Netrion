
import React from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import './Projects.css';

const projects = [
  {
    type: 'services',
    category: 'Sitio web informativo',
    title: 'Negocio de servicios',
    description:
      'Una presentación clara del negocio, sus servicios y las formas de contacto.',
    label: 'CONCEPTO 01',
  },
  {
    type: 'restaurant',
    category: 'Web gastronómica',
    title: 'Restaurante',
    description:
      'Una propuesta visual para presentar una carta, mostrar la experiencia y facilitar las consultas.',
    label: 'CONCEPTO 02',
  },
  {
    type: 'store',
    category: 'Comercio electrónico',
    title: 'Tienda virtual',
    description:
      'Un concepto de catálogo digital para organizar productos y facilitar su exploración.',
    label: 'CONCEPTO 03',
  },
];

const ProjectPreview = ({ type }) => {
  return (
    <div className={`project-preview project-preview--${type}`}>
      <div className="project-browser">
        <div className="project-browser__top">
          <div className="project-browser__dots">
            <span />
            <span />
            <span />
          </div>

          <div className="project-browser__address">
            vista-previa.local
          </div>
        </div>

        {type === 'services' && (
          <div className="preview-services">
            <div className="preview-services__nav">
              <strong>ESTUDIO.</strong>
              <span>Servicios &nbsp; Nosotros</span>
            </div>

            <div className="preview-services__body">
              <span className="preview-kicker">
                SOLUCIONES PARA TU NEGOCIO
              </span>

              <h3>
                Ideas que
                <br />
                toman forma.
              </h3>

              <p>
                Conoce nuestros servicios y encuentra
                la solución para tu proyecto.
              </p>

              <div className="preview-button">
                Conocer servicios
              </div>

              <div className="preview-services__blocks">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        )}

        {type === 'restaurant' && (
          <div className="preview-restaurant">
            <div className="preview-restaurant__nav">
              <strong>CASA SABOR</strong>
              <span>Carta &nbsp; Nosotros</span>
            </div>

            <div className="preview-restaurant__body">
              <span>COCINA CON IDENTIDAD</span>

              <h3>
                Un lugar
                <br />
                para disfrutar.
              </h3>

              <div className="preview-restaurant__plate">
                <div />
              </div>

              <div className="preview-restaurant__button">
                Explorar la carta
              </div>
            </div>
          </div>
        )}

        {type === 'store' && (
          <div className="preview-store">
            <div className="preview-store__nav">
              <strong>OBJETO</strong>
              <span>Catálogo &nbsp; ♡</span>
            </div>

            <div className="preview-store__body">
              <span>SELECCIÓN DESTACADA</span>

              <h3>
                Encuentra
                <br />
                algo especial.
              </h3>

              <div className="preview-store__products">
                <div>
                  <span className="preview-product preview-product--one" />
                  <small>Producto 01</small>
                  <b>S/ 00.00</b>
                </div>

                <div>
                  <span className="preview-product preview-product--two" />
                  <small>Producto 02</small>
                  <b>S/ 00.00</b>
                </div>

                <div>
                  <span className="preview-product preview-product--three" />
                  <small>Producto 03</small>
                  <b>S/ 00.00</b>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <span className="project-preview__caption">
        DEMOSTRACIÓN VISUAL
      </span>
    </div>
  );
};

const Projects = () => {
  return (
    <section
      className="projects-section"
      aria-labelledby="projects-title"
    >
      <div id="proyectos" />
      <div className="projects-container">
        <header
          className="projects-heading"
          data-scroll-reveal
        >
          <span className="projects-eyebrow">
            POSIBILIDADES PARA TU NEGOCIO
          </span>

          <h2 id="projects-title">
            Ideas que toman
            <span> forma en la web.</span>
          </h2>

          <p>
            Cada negocio tiene algo diferente que contar.
            Estos conceptos muestran distintas formas de
            presentar una marca, sus servicios o productos.
          </p>
        </header>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className="project-card"
              key={project.type}
              data-scroll-reveal
              style={{
                '--reveal-delay': `${index * 120}ms`,
              }}
            >
              <ProjectPreview type={project.type} />

              <div className="project-card__content">
                <span className="project-card__label">
                  {project.label} · PROYECTO CONCEPTUAL
                </span>

                <span className="project-card__category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <a
                  href="#solicitar-cotizacion"
                  className="project-card__link"
                >
                  Quiero una web para mi negocio
                  <HiOutlineArrowRight aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
