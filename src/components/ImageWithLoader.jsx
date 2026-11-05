
import React, { useEffect, useRef, useState } from 'react';
import './ImageWithLoader.css';

const ImageWithLoader = ({
  src,
  alt,
  className = '',
  wrapperClassName = '',
  style,
  wrapperStyle,
  loading = 'lazy',
  fetchPriority = 'auto',
}) => {
  const imageRef = useRef(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    setStatus('loading');

    const image = imageRef.current;

    // Detecta imágenes que ya terminaron de cargar,
    // por ejemplo, desde la caché del navegador.
    if (image?.complete) {
      setStatus(image.naturalWidth > 0 ? 'loaded' : 'error');
    }
  }, [src]);

  const handleLoad = () => {
    setStatus('loaded');
  };

  const handleError = () => {
    setStatus('error');
  };

  return (
    <div
      className={`image-loader ${wrapperClassName}`}
      style={wrapperStyle}
    >
      <div
        className={[
          'image-loader__placeholder',
          status === 'loaded' ? 'is-hidden' : '',
          status === 'error' ? 'has-error' : '',
        ].filter(Boolean).join(' ')}
        aria-hidden={status !== 'error'}
        role={status === 'error' ? 'status' : undefined}
      >
        {status === 'error' && 'No se pudo cargar la imagen'}
      </div>

      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className={[
          'image-loader__image',
          className,
          status === 'loaded' ? 'is-loaded' : '',
        ].filter(Boolean).join(' ')}
        style={style}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};

export default ImageWithLoader;
