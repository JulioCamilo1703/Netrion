import React, { useEffect, useRef } from 'react';

/**
 * Fireflies — puntos luminosos que flotan suavemente como luciérnagas.
 * Se adaptan al tema claro/oscuro.
 */
const MicroCrosses = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Usar clientWidth/clientHeight para evitar el "respiro"
    // causado por la barra del navegador móvil
    let W = document.documentElement.clientWidth;
    let H = window.screen.height; // alto de pantalla física, no cambia
    canvas.width  = W;
    canvas.height = H;
    canvas.style.width  = W + 'px';
    canvas.style.height = H + 'px';

    const isLight = () =>
      document.documentElement.getAttribute('data-theme') === 'light';

    // Colores turquesa para dark, versión más intensa para light
    const COLORS_DARK  = ['#00FFE1', '#00CFC8', '#66FFF0', '#00F5B8', '#00B8D9'];
    const COLORS_LIGHT = ['#009B94', '#00B8B0', '#007A80', '#00A8D0', '#00909A'];

    // Respetar preferencia de accesibilidad — no animar si el usuario lo pidió
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const isMobile = W < 768;
    const COUNT = isMobile
      ? Math.min(50, Math.floor((W * H) / 18000))   // móvil: mitad de partículas
      : Math.min(180, Math.floor((W * H) / 9000));

    const makeFirefly = () => {
      const colors = isLight() ? COLORS_LIGHT : COLORS_DARK;
      // Tamaños variados: la mayoría pequeños, algunos medianos, pocos grandes
      const r = Math.random();
      const size = r < 0.6 ? 1 + Math.random() * 1.5   // pequeños
                 : r < 0.9 ? 2.5 + Math.random() * 1.5  // medianos
                 :            4 + Math.random() * 2;      // grandes (glow fuerte)

      return {
        x:         Math.random() * W,
        y:         Math.random() * H,
        size,
        // movimiento ondulante — deriva lenta + onda sinusoidal
        baseVx:    (Math.random() - 0.5) * 0.06,
        baseVy:    (Math.random() - 0.5) * 0.06,
        waveAmp:   0.1 + Math.random() * 0.2,
        waveFreq:  0.003 + Math.random() * 0.005,
        wavePhase: Math.random() * Math.PI * 2,
        // pulso de brillo — cada luciérnaga parpadea a su ritmo
        alpha:     Math.random(),
        maxAlpha:  size > 3.5 ? 0.85 + Math.random() * 0.15
                 : size > 2   ? 0.5  + Math.random() * 0.3
                 :               0.25 + Math.random() * 0.3,
        dAlpha:    (0.004 + Math.random() * 0.008) * (Math.random() < 0.5 ? 1 : -1),
        // halo — radio del glow proporcional al tamaño
        glowRadius: size * (3 + Math.random() * 3),
        color:      colors[Math.floor(Math.random() * colors.length)],
        t:          Math.random() * 1000,
      };
    };

    let flies = Array.from({ length: COUNT }, makeFirefly);

    // En móvil limitamos a ~30 FPS para ahorrar batería
    const TARGET_FPS = isMobile ? 30 : 60;
    const FRAME_MS   = 1000 / TARGET_FPS;
    let lastTime = 0;

    let raf;
    const draw = (timestamp) => {
      raf = requestAnimationFrame(draw);

      // Throttle FPS en móvil
      if (timestamp - lastTime < FRAME_MS) return;
      lastTime = timestamp;

      ctx.clearRect(0, 0, W, H);

      flies.forEach(f => {
        f.t += 1;

        // Movimiento ondulante suave
        f.wavePhase += f.waveFreq;
        f.x += f.baseVx + Math.sin(f.wavePhase) * f.waveAmp;
        f.y += f.baseVy + Math.cos(f.wavePhase * 0.7) * f.waveAmp * 0.6;

        // Wrap edges
        if (f.x < -20)    f.x = W + 20;
        if (f.x > W + 20) f.x = -20;
        if (f.y < -20)    f.y = H + 20;
        if (f.y > H + 20) f.y = -20;

        // Parpadeo
        f.alpha += f.dAlpha;
        if (f.alpha >= f.maxAlpha) { f.alpha = f.maxAlpha; f.dAlpha *= -1; }
        if (f.alpha <= 0.02)       { f.alpha = 0.02;       f.dAlpha *= -1; }

        ctx.save();

        if (!isMobile) {
          // Desktop: glow radial completo
          const grd = ctx.createRadialGradient(
            f.x, f.y, 0,
            f.x, f.y, f.glowRadius
          );
          grd.addColorStop(0,   hexAlpha(f.color, f.alpha * 0.6));
          grd.addColorStop(0.4, hexAlpha(f.color, f.alpha * 0.15));
          grd.addColorStop(1,   hexAlpha(f.color, 0));

          ctx.fillStyle = grd;
          ctx.beginPath();
          ctx.arc(f.x, f.y, f.glowRadius, 0, Math.PI * 2);
          ctx.fill();
        }

        // — Núcleo brillante —
        ctx.globalAlpha = f.alpha;
        ctx.fillStyle   = '#ffffff';
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.size * 0.4, 0, Math.PI * 2);
        ctx.fill();

        // — Punto de color —
        ctx.globalAlpha = f.alpha * 0.9;
        ctx.fillStyle   = f.color;
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });
    };

    raf = requestAnimationFrame(draw);

    // Pausar cuando la pestaña/app no es visible — ahorra batería
    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else {
        lastTime = 0;
        raf = requestAnimationFrame(draw);
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    let resizeTimer;
    const onResize = () => {
      // Debounce para ignorar cambios menores (barra del navegador móvil)
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const newW = document.documentElement.clientWidth;
        // Solo recalcular si el ANCHO cambia (orientación real)
        // Ignorar cambios solo de alto (barra del navegador)
        if (newW === W) return;
        W = newW;
        H = window.screen.height;
        canvas.width  = W;
        canvas.height = H;
        canvas.style.width  = W + 'px';
        canvas.style.height = H + 'px';
        const newCount = Math.min(180, Math.floor((W * H) / 9000));
        flies = Array.from({ length: newCount }, makeFirefly);
      }, 150);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position:      'fixed',
        top:           0,
        left:          0,
        /* Usar píxeles fijos vía JS — no % ni dvh para evitar
           el "respiro" cuando la barra de navegación móvil
           aparece y desaparece */
        pointerEvents: 'none',
        zIndex:        -1,
      }}
      aria-hidden="true"
    />
  );
};

// Convierte hex + alpha (0-1) a rgba string
function hexAlpha(hex, a) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a.toFixed(3)})`;
}

export default MicroCrosses;