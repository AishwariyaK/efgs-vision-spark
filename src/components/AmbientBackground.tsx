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
    <rect x="18" y="52" width="6" height="4" rx="1" fill="currentColor" opacity="0.5" />
    <rect x="40" y="52" width="6" height="4" rx="1" fill="currentColor" opacity="0.5" />
    <rect x="22" y="24" width="20" height="16" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
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

const icons = [CameraIcon, FilmRollIcon, PhotoFrameIcon, FilmStripIcon, ApertureIcon, TripodIcon];

// Pre-generate deterministic items
const items = Array.from({ length: 18 }, (_, i) => {
  const Icon = icons[i % icons.length];
  return {
    id: i,
    Icon,
    size: 30 + (i * 13) % 35,
    left: ((i * 5.5 + 3) % 96),
    delay: (i * 1.7) % 22,
    duration: 20 + (i * 3) % 15,
    opacity: 0.07 + (i % 5) * 0.015,
  };
});

const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {items.map((item) => (
        <div
          key={item.id}
          className="absolute text-primary animate-camera-float"
          style={{
            left: `${item.left}%`,
            bottom: '-80px',
            opacity: item.opacity,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
          }}
        >
          <item.Icon size={item.size} />
        </div>
      ))}
    </div>
  );
};

export default AmbientBackground;
