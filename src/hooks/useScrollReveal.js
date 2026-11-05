import { useEffect } from 'react';

const useScrollReveal = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-scroll-reveal]');

    if (!elements.length) return;

    let lastScrollY = window.scrollY;
    let scrollDirection = 'down';

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        scrollDirection = 'down';
      } else if (currentScrollY < lastScrollY) {
        scrollDirection = 'up';
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const resetElement = (element, direction) => {
      // Quitamos la clase revealed sin animar la salida
      element.classList.add('scroll-reveal--no-transition');
      element.classList.remove('is-revealed');

      // Ajustamos la dirección del slide según desde dónde va a entrar
      if (direction === 'up') {
        // Va a re-entrar desde arriba → slide desde arriba (-28px)
        element.classList.add('scroll-reveal--from-above');
      } else {
        // Va a re-entrar desde abajo → slide desde abajo (+28px)
        element.classList.remove('scroll-reveal--from-above');
      }

      // Restauramos transiciones para la próxima entrada
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          element.classList.remove('scroll-reveal--no-transition');
        });
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target;

          if (entry.isIntersecting) {
            // Entra al viewport — animar siempre (tanto al bajar como al subir)
            element.classList.remove('scroll-reveal--no-transition');

            requestAnimationFrame(() => {
              element.classList.add('is-revealed');
            });

            return;
          }

          const rootTop = entry.rootBounds?.top ?? 0;
          const rootBottom = entry.rootBounds?.bottom ?? window.innerHeight;

          const exitedAbove = entry.boundingClientRect.bottom <= rootTop;
          const exitedBelow = entry.boundingClientRect.top >= rootBottom;

          // Resetear solo cuando sale por el lado correspondiente al scroll
          const shouldReset =
            (scrollDirection === 'down' && exitedAbove) ||
            (scrollDirection === 'up' && exitedBelow);

          if (shouldReset) {
            // Pasamos la dirección contraria: si el usuario bajó y salió por arriba,
            // la próxima vez que suba va a entrar desde arriba
            resetElement(element, scrollDirection === 'down' ? 'up' : 'down');
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);
};

export default useScrollReveal;