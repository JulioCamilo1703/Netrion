import { useState, useEffect } from 'react';

/**
 * useTypewriter — escribe y borra un texto con efecto de cursor.
 * @param {string[]} texts    - lista de frases a escribir en bucle
 * @param {number}   speed    - ms por carácter al escribir  (default 60)
 * @param {number}   pause    - ms antes de borrar           (default 1800)
 * @param {number}   delSpeed - ms por carácter al borrar    (default 35)
 */
const useTypewriter = (texts, speed = 60, pause = 1800, delSpeed = 35) => {
  const [displayed, setDisplayed] = useState('');
  const [idx,       setIdx]       = useState(0);
  const [writing,   setWriting]   = useState(true);
  const [charIdx,   setCharIdx]   = useState(0);

  useEffect(() => {
    const current = texts[idx % texts.length];

    if (writing) {
      if (charIdx < current.length) {
        const t = setTimeout(() => setCharIdx(c => c + 1), speed);
        setDisplayed(current.slice(0, charIdx));
        return () => clearTimeout(t);
      } else {
        setDisplayed(current);
        const t = setTimeout(() => setWriting(false), pause);
        return () => clearTimeout(t);
      }
    } else {
      if (charIdx > 0) {
        const t = setTimeout(() => setCharIdx(c => c - 1), delSpeed);
        setDisplayed(current.slice(0, charIdx));
        return () => clearTimeout(t);
      } else {
        setIdx(i => i + 1);
        setWriting(true);
      }
    }
  }, [charIdx, writing, idx, texts, speed, pause, delSpeed]);

  return displayed;
};

export default useTypewriter;