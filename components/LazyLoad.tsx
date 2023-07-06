import React, { useRef, useEffect } from 'react';

const LazyLoadComponent = ({ children }) => {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Jeśli element jest widoczny, załaduj zawartość
          // np. pobierz dane z API lub wstaw odpowiednie komponenty
          // w zależności od Twoich potrzeb
        }
      },
      {
        threshold: 0.1 // Ustaw próg widoczności elementu
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return <div ref={ref}>{children}</div>;
};

export default LazyLoadComponent;
