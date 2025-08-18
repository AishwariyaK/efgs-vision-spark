import { useEffect, useState } from 'react';

export const useScrollAnimation = () => {
  const [animated, setAnimated] = useState<string[]>([]);

  useEffect(() => {
    // Clear previous animations to ensure they trigger on page refresh
    setAnimated([]);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-animate');
            if (id) {
              setAnimated(prev => {
                if (!prev.includes(id)) {
                  return [...prev, id];
                }
                return prev;
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe elements on every render to ensure animations work after page refresh
    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []); // Remove animated dependency to allow re-animation

  return animated;
};