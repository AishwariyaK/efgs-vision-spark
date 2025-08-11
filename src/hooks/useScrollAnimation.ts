import { useEffect, useState } from 'react';

export const useScrollAnimation = () => {
  const [animated, setAnimated] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-animate');
            if (id && !animated.includes(id)) {
              setAnimated(prev => [...prev, id]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [animated]);

  return animated;
};