import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { HiOutlineArrowRight } from 'react-icons/hi';
import './ContactCTA.css';

// Número de WhatsApp — solo dígitos, sin espacios ni símbolos
const WA_NUMBER = '51958902239';

// Mensaje precargado que verá el cliente al abrir WhatsApp
const WA_MESSAGE = encodeURIComponent(
  'Hola, estoy interesado/a en solicitar una cotización para una página web. Me gustaría conocer sus servicios y comentarles un poco sobre mi negocio.'
);

const WA_URL  = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;
const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfG55wWlSkQnspqfBAg20APvgtPwyyCqxdlw9282ahXNYtP3Q/viewform';

const ContactCTA = () => {
  return (
    <section
      className="contact-cta-section"
      id="solicitar-cotizacion"
      data-scroll-reveal
    >
      <div className="contact-cta">
        <div className="contact-cta__content">
          <span className="contact-cta__eyebrow">
            EMPECEMOS POR TU IDEA
          </span>

          <h2>
            Tu negocio tiene algo que mostrar.
            <span> Hagámoslo visible.</span>
          </h2>

          <p>
            Cuéntanos sobre tu negocio y qué quieres lograr.
            No necesitas tener todo definido; te orientamos
            hacia la solución más adecuada.
          </p>

          {/* Dos canales de contacto */}
          <div className="contact-cta__channels">

            {/* Canal 1 — Formulario */}
            <div className="contact-cta__channel">
              <a
                href={FORM_URL}
                className="contact-cta__button contact-cta__button--form"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HiOutlineArrowRight aria-hidden="true" />
                Cuéntanos tu proyecto
              </a>
              <small className="contact-cta__channel-note">
                Completa el formulario y déjanos conocer tu idea.
              </small>
            </div>

            {/* Separador */}
            <div className="contact-cta__divider" aria-hidden="true">
              <span>o</span>
            </div>

            {/* Canal 2 — WhatsApp */}
            <div className="contact-cta__channel">
              <a
                href={WA_URL}
                className="contact-cta__button contact-cta__button--wa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp aria-hidden="true" />
                Contactar por WhatsApp
              </a>
              <small className="contact-cta__channel-note">
                Solo mensajes de texto. Las llamadas
                se coordinan por este mismo canal.
              </small>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;