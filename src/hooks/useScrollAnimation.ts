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
              // Always add to animated array when entering viewport (allows re-animation)
              setAnimated(prev => {
                // Remove first if exists, then add to trigger re-animation
                const filtered = prev.filter(animatedId => animatedId !== id);
                return [...filtered, id];
              });
            } else {
              // Remove from animated array when leaving viewport (enables re-animation on re-entry)
              setAnimated(prev => prev.filter(animatedId => animatedId !== id));
            }
          }
        });
      },
      { 
        threshold: 0.15, // Slightly higher threshold for better trigger timing
        rootMargin: '0px 0px -30px 0px' // Adjust margin for better scroll detection
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