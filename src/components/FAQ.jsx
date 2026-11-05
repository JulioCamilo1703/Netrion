
import React from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import './FAQ.css';

const questions = [
  {
    question: '¿Qué tipo de página web necesita mi negocio?',
    answer:
      'Depende de lo que quieras conseguir. Una página informativa puede ser suficiente para presentar tus servicios; una web multipágina permite organizar más contenido y una tienda virtual está orientada a mostrar productos y gestionar compras. Si todavía no lo tienes claro, cuéntanos sobre tu negocio y te orientaremos.',
  },
  {
    question: '¿Cuánto cuesta crear una página web?',
    answer:
      'Nuestros precios parten desde S/ 350 para una página web informativa y desde S/ 700 para un sitio multipágina de hasta cinco páginas. El precio final depende de las características y funciones acordadas. Las tiendas virtuales se cotizan según el alcance del proyecto.',
  },
  {
    question: '¿Qué información necesito para empezar?',
    answer:
      'Lo ideal es contar con el nombre del negocio, una descripción de tus servicios y los datos de contacto. Si tienes logo, fotografías o textos preparados, también puedes compartirlos. Si todavía te falta definir algunos detalles, podemos orientarte durante la propuesta.',
  },
  {
    question: '¿El dominio y el hosting están incluidos?',
    answer:
      'Depende del paquete y de lo que se acuerde para tu proyecto. En la propuesta se especificará qué incluye el servicio, qué recursos se necesitan y si existen costos adicionales por dominio, alojamiento u otros servicios.',
  },
  {
    question: '¿Cuánto tiempo demora el desarrollo?',
    answer:
      'El tiempo depende del tipo de página, sus funcionalidades y la información disponible. Antes de comenzar, definiremos el alcance y el plazo estimado para tu proyecto.',
  },
  {
    question: '¿Puedo solicitar cambios durante el desarrollo?',
    answer:
      'Sí, los cambios se coordinan según las condiciones de la propuesta. Definiremos las revisiones incluidas y cómo se cotizarán las solicitudes que estén fuera del alcance acordado.',
  },
  {
    question: '¿Podré actualizar el contenido de mi web?',
    answer:
      'Depende de cómo se desarrolle el sitio. Las opciones para editar textos, imágenes o productos se evaluarán según las necesidades de tu negocio y se especificarán en la propuesta.',
  },
  {
    question: '¿Qué funciones puede tener una tienda virtual?',
    answer:
      'Se pueden evaluar funciones como catálogo de productos, carrito de compras, métodos de pago y gestión de pedidos. Las funciones exactas dependerán de los requisitos del negocio y del alcance contratado.',
  },
];

const FAQ = () => {
  return (
    <section
      className="faq-section"
      aria-labelledby="faq-title"
    >
      <div id="preguntas-frecuentes" />
      <div className="faq-container">
        <header
          className="faq-heading"
          data-scroll-reveal
        >
          <span className="faq-eyebrow">
            PREGUNTAS FRECUENTES
          </span>

          <h2 id="faq-title">
            Resolvamos tus
            <span> dudas.</span>
          </h2>

          <p>
            Encuentra respuestas sobre nuestros servicios,
            precios y proceso de trabajo antes de comenzar.
          </p>
        </header>

        <div className="faq-list">
          {questions.map((item, index) => (
            <details
              className="faq-item"
              key={item.question}
              data-scroll-reveal
              style={{
                '--reveal-delay': `${Math.min(index * 60, 240)}ms`,
              }}
            >
              <summary>
                <span>{item.question}</span>
                <span
                  className="faq-item__icon"
                  aria-hidden="true"
                />
              </summary>

              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>

        <div
          className="faq-cta"
          data-scroll-reveal
        >
          <p>
            ¿Tu pregunta es diferente? Cuéntanos qué necesitas
            y revisaremos tu solicitud.
          </p>

          <a
            href="#solicitar-cotizacion"
            className="faq-cta__link"
          >
            Consultar mi proyecto
            <HiOutlineArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
