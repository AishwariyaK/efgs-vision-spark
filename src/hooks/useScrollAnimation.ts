import { useEffect, useState } from 'react';

export const useScrollAnimation = () => {
  const [animated, setAnimated] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('data-animate');
          if (id) {
            if (entry.isIntersecting) {
              // Add to animated array when entering viewport
              setAnimated(prev => {
                if (!prev.includes(id)) {
                  return [...prev, id];
                }
                return prev;
              });
            } else {
              // Remove from animated array when leaving viewport
              setAnimated(prev => prev.filter(animatedId => animatedId !== id));
            }
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element fully enters/leaves
      }
    );

    // Observe elements whenever component mounts or updates
    const observeElements = () => {
      const elements = document.querySelectorAll('[data-animate]');
      elements.forEach((el) => observer.observe(el));
    };

    // Initial observation
    observeElements();
    
    // Re-observe after a short delay to catch any dynamically added elements
    const timeoutId = setTimeout(observeElements, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []); // No dependencies to ensure clean re-observation

  return animated;
};