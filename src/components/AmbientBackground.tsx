import { useEffect, useState } from "react";

const CameraIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="18" width="52" height="34" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="32" cy="35" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="32" cy="35" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <rect x="22" y="12" width="20" height="8" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="48" cy="24" r="2" fill="currentColor" />
  </svg>
);

const FilmRollIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="32" cy="32" r="3" fill="currentColor" />
    <circle cx="32" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="32" cy="52" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="12" cy="32" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="52" cy="32" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="18" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="46" cy="46" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="46" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="18" cy="46" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
  </svg>
);

const PhotoFrameIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="10" width="52" height="44" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="10" y="14" width="44" height="36" rx="1" stroke="currentColor" strokeWidth="1" fill="none" />
    <polyline points="10,42 22,30 34,42 42,34 54,42" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="22" cy="24" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
  </svg>
);

const FilmStripIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="14" y="4" width="36" height="56" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="18" y="8" width="6" height="4" rx="1" fill="currentColor" opacity="0.5" />
    <rect x="40" y="8" width="6" height="4" rx="1" fill="currentColor" opacity="0.5" />
    <rect x="18" y="16" width="6" height="4" rx="1" fill="currentColor" opacity="0.5" />
    <rect x="40" y="16" width="6" height="4" rx="1" fill="currentColor" opacity="0.5" />
    <rect x="18" y="44" width="6" height="4" rx="1" fill="currentColor" opacity="0.5" />
    <rect x="40" y="44" width="6" height="4" rx="1" fill="currentColor" opacity="0.5" />
    <rect x="18" y="52" width="6" height="4" rx="1" fill="currentColor" opacity="0.5" />
    <rect x="40" y="52" width="6" height="4" rx="1" fill="currentColor" opacity="0.5" />
    <rect x="22" y="24" width="20" height="16" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
  </svg>
);

const TripodIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="6" width="24" height="18" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="32" cy="15" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <line x1="32" y1="24" x2="32" y2="34" stroke="currentColor" strokeWidth="2" />
    <line x1="32" y1="34" x2="16" y2="58" stroke="currentColor" strokeWidth="2" />
    <line x1="32" y1="34" x2="48" y2="58" stroke="currentColor" strokeWidth="2" />
    <line x1="32" y1="34" x2="32" y2="58" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const ApertureIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="2" fill="none" />
    <line x1="32" y1="8" x2="44" y2="32" stroke="currentColor" strokeWidth="1.5" />
    <line x1="52.8" y1="20" x2="32" y2="32" stroke="currentColor" strokeWidth="1.5" />
    <line x1="52.8" y1="44" x2="20" y2="32" stroke="currentColor" strokeWidth="1.5" />
    <line x1="32" y1="56" x2="20" y2="32" stroke="currentColor" strokeWidth="1.5" />
    <line x1="11.2" y1="44" x2="32" y2="32" stroke="currentColor" strokeWidth="1.5" />
    <line x1="11.2" y1="20" x2="44" y2="32" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const iconComponents = [CameraIcon, FilmRollIcon, PhotoFrameIcon, FilmStripIcon, TripodIcon, ApertureIcon];

interface FloatingItem {
  id: number;
  IconComponent: typeof CameraIcon;
  size: number;
  left: number;
  startY: number;
  speed: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
}

const AmbientBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items: FloatingItem[] = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    IconComponent: iconComponents[i % iconComponents.length],
    size: 28 + (i * 7) % 30,
    left: (i * 17.3 + 5) % 95,
    startY: (i * 311) % 3000,
    speed: 0.15 + (i % 5) * 0.03,
    opacity: 0.06 + (i % 4) * 0.02,
    rotation: (i * 47) % 360,
    rotationSpeed: (i % 2 === 0 ? 1 : -1) * (0.01 + (i % 3) * 0.005),
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {items.map((item) => {
        const y = item.startY - scrollY * item.speed;
        const rot = item.rotation + scrollY * item.rotationSpeed;
        return (
          <div
            key={item.id}
            className="absolute text-primary"
            style={{
              left: `${item.left}%`,
              top: `${y}px`,
              opacity: item.opacity,
              transform: `rotate(${rot}deg)`,
              willChange: "transform",
            }}
          >
            <item.IconComponent size={item.size} />
          </div>
        );
      })}
    </div>
  );
};

export default AmbientBackground;
