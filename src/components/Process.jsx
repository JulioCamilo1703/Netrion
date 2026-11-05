import React from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import './Process.css';

const steps = [
  {
    number: '01',
    title: 'Conversamos sobre tu proyecto',
    description:
      'Cuéntanos tu idea a través del formulario. Revisamos tu solicitud, analizamos qué necesitas y te orientamos hacia la solución más adecuada.',
  },
  {
    number: '02',
    title: 'Definimos la propuesta',
    description:
      'Te presentamos el alcance del proyecto, qué incluirá la web, el precio y las condiciones antes de comenzar.',
  },
  {
    number: '03',
    title: 'Desarrollamos y entregamos',
    description:
      'Trabajamos en el diseño y desarrollo, revisamos el resultado contigo y coordinamos la entrega final.',
  },
];

const Process = () => {
  return (
    <section
      className="process-section"
      aria-labelledby="process-title"
    >
      <div id="proceso" />
      <div className="process-container">
        <header
          className="process-heading"
          data-scroll-reveal
        >
          <span className="process-eyebrow">
            UN PROCESO CLARO
          </span>

          <h2 id="process-title">
            De tu idea
            <span> a tu web.</span>
          </h2>

          <p>
            Nos encargamos de la parte técnica y te guiamos
            en cada etapa. Tú solo necesitas contarnos qué
            quieres conseguir.
          </p>
        </header>

        <div className="process-steps">
          {steps.map((step, index) => (
            <article
              className="process-step"
              key={step.number}
              data-scroll-reveal
              style={{
                '--reveal-delay': `${index * 100}ms`,
              }}
            >
              <div className="process-step__number">
                {step.number}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          ))}
        </div>

        <div
          className="process-note"
          data-scroll-reveal
        >
          <div className="process-note__content">
            <h3>¿Todavía no tienes todo claro?</h3>
            <p>
              No necesitas saber de diseño ni de programación.
              Cuéntanos tu idea y partimos desde ahí.
            </p>
          </div>

          <a
            href="#solicitar-cotizacion"
            className="process-button"
          >
            Empezar mi solicitud
            <HiOutlineArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;