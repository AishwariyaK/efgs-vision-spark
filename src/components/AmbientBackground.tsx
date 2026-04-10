const CameraIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="18" width="52" height="34" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="32" cy="35" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="32" cy="35" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <rect x="22" y="12" width="20" height="8" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="48" cy="24" r="2" fill="currentColor" />
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

const PhotoFrameIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="10" width="52" height="44" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="10" y="14" width="44" height="36" rx="1" stroke="currentColor" strokeWidth="1" fill="none" />
    <polyline points="10,42 22,30 34,42 42,34 54,42" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="22" cy="24" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
  </svg>
);

const DroneIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Body */}
    <rect x="22" y="26" width="20" height="12" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
    {/* Camera lens */}
    <circle cx="32" cy="38" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    {/* Arms */}
    <line x1="22" y1="30" x2="10" y2="20" stroke="currentColor" strokeWidth="2" />
    <line x1="42" y1="30" x2="54" y2="20" stroke="currentColor" strokeWidth="2" />
    <line x1="22" y1="34" x2="10" y2="44" stroke="currentColor" strokeWidth="2" />
    <line x1="42" y1="34" x2="54" y2="44" stroke="currentColor" strokeWidth="2" />
    {/* Propellers */}
    <ellipse cx="10" cy="20" rx="8" ry="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <ellipse cx="54" cy="20" rx="8" ry="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <ellipse cx="10" cy="44" rx="8" ry="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <ellipse cx="54" cy="44" rx="8" ry="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
  </svg>
);

const FilmCameraIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Body */}
    <rect x="8" y="20" width="36" height="28" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
    {/* Lens */}
    <circle cx="26" cy="34" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="26" cy="34" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
    {/* Film reels on top */}
    <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="16" cy="16" r="2" fill="currentColor" />
    <circle cx="34" cy="16" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="34" cy="16" r="2" fill="currentColor" />
    {/* Viewfinder */}
    <polygon points="44,28 56,22 56,42 44,36" stroke="currentColor" strokeWidth="2" fill="none" />
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

const icons = [CameraIcon, TripodIcon, PhotoFrameIcon, DroneIcon, FilmCameraIcon, FilmRollIcon];

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
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
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
