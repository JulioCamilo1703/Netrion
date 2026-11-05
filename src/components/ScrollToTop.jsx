import React, { useState, useEffect } from 'react';
import { HiArrowUp } from 'react-icons/hi';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`scroll-to-top ${visible ? 'scroll-to-top--visible' : ''}`}
      onClick={handleClick}
      aria-label="Volver al inicio"
    >
      <HiArrowUp />
    </button>
  );
};

export default ScrollToTop;
