import React from 'react';
import {
  HiOutlineDesktopComputer,
  HiOutlineViewGrid,
  HiOutlineShoppingCart,
  HiOutlineArrowRight,
} from 'react-icons/hi';

import './Services.css';

const services = [
  {
    icon: <HiOutlineDesktopComputer />,
    name: 'Página Web Informativa',
    description:
      'Presenta tu negocio, muestra tus servicios y facilita que tus clientes te encuentren.',
    price: 'Desde S/ 850',
    features: [
      'Diseño personalizado y adaptable',
      'Formulario o contacto por WhatsApp',
      'Optimización básica de rendimiento',
    ],
  },
  {
    icon: <HiOutlineViewGrid />,
    name: 'Sitio Web Multipágina',
    description:
      'Organiza todo tu contenido en secciones independientes para explicar mejor lo que ofreces.',
    price: 'Desde S/ 1,200',
    features: [
      'Hasta 5 páginas',
      'Navegación y estructura organizada',
      'Optimización básica de rendimiento',
    ],
  },
  {
    icon: <HiOutlineShoppingCart />,
    name: 'Tienda Virtual',
    description:
      'Presenta tus productos en internet y crea una experiencia de compra adaptada a tu negocio.',
    price: 'Cotización personalizada',
    features: [
      'Catálogo de productos',
      'Carrito y gestión de pedidos según alcance',
      'Funciones definidas en la propuesta',
    ],
  },
];

const Services = () => {
  return (
    <section
      className="services-section"
      aria-labelledby="services-title"
    >
      <div id="servicios" />
      <div className="services-container">
        <div
          className="services-heading"
          data-scroll-reveal
        >
          <span className="services-eyebrow">
            SOLUCIONES WEB
          </span>

          <h2 id="services-title">
            La web que tu negocio necesita.
          </h2>

          <p>
            Cada negocio es diferente. Cuéntanos qué haces y
            qué necesitas; te ayudaremos a encontrar la opción
            más adecuada.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article
              className="service-card"
              key={service.name}
              data-scroll-reveal
              style={{
                '--reveal-delay': `${index * 120}ms`,
              }}
            >
              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.name}</h3>

              <p className="service-description">
                {service.description}
              </p>

              <p className="service-price">
                {service.price}
              </p>

              <ul className="service-features">
                {service.features.map((feature) => (
                  <li key={feature}>
                    <span aria-hidden="true">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#solicitar-cotizacion"
                className="service-link"
              >
                Me interesa
                <HiOutlineArrowRight aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>

        <p
          className="services-note"
          data-scroll-reveal
        >
          ¿No sabes cuál elegir? No necesitas tenerlo todo
          definido. Cuéntanos sobre tu negocio y te orientaremos.
        </p>
      </div>
    </section>
  );
};

export default Services;