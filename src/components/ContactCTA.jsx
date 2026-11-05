import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { HiOutlineArrowRight } from 'react-icons/hi';
import './ContactCTA.css';

const WA_NUMBER  = '51958902239';
const WA_MESSAGE = encodeURIComponent(
  'Hola, estoy interesado/a en solicitar una cotización para una página web. Me gustaría conocer sus servicios y comentarles un poco sobre mi negocio.'
);
const WA_URL   = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;
const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfG55wWlSkQnspqfBAg20APvgtPwyyCqxdlw9282ahXNYtP3Q/viewform';

const ContactCTA = () => (
  <section
    className="contact-cta-section"
    id="contacto"
    data-scroll-reveal
  >
    <div className="contact-cta">
      <div className="contact-cta__content">

        <span className="contact-cta__eyebrow">EMPECEMOS POR TU IDEA</span>

        <h2>
          Tu negocio tiene algo que mostrar.
          <span> Hagámoslo visible.</span>
        </h2>

        <p>
          Cuéntanos sobre tu negocio y qué quieres lograr.
          No necesitas tener todo definido; te orientamos
          hacia la solución más adecuada.
        </p>

        <div className="contact-cta__channels">

          {/* Fila 1: botones juntos con separador */}
          <div className="contact-cta__buttons-row">
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
            </div>

            <span className="contact-cta__sep" aria-hidden="true">o</span>

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
            </div>
          </div>

          {/* Fila 2: notas alineadas debajo de cada botón */}
          <div className="contact-cta__notes-row">
            <div className="contact-cta__channel">
              <small className="contact-cta__channel-note">
                Completa el formulario y déjanos conocer tu idea.
              </small>
            </div>

            <span className="contact-cta__sep" aria-hidden="true" style={{visibility:'hidden'}}>o</span>

            <div className="contact-cta__channel">
              <small className="contact-cta__channel-note">
                Solo mensajes de texto. Las llamadas
                se coordinan por este mismo canal.
              </small>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
);

export default ContactCTA;