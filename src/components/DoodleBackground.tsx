const DoodleBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Camera Doodles */}
      <div className="absolute top-20 left-10 animate-float opacity-10">
        <svg width="40" height="32" viewBox="0 0 40 32" className="fill-primary">
          <rect x="4" y="8" width="32" height="20" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="20" cy="18" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
          <rect x="8" y="4" width="8" height="4" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      </div>
      
      {/* Film Strip */}
      <div className="absolute top-1/4 right-20 animate-float opacity-8" style={{ animationDelay: '1.5s' }}>
        <svg width="24" height="60" viewBox="0 0 24 60" className="fill-primary">
          <rect x="2" y="0" width="20" height="60" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
          <rect x="4" y="4" width="4" height="4" fill="currentColor"/>
          <rect x="16" y="4" width="4" height="4" fill="currentColor"/>
          <rect x="4" y="12" width="4" height="4" fill="currentColor"/>
          <rect x="16" y="12" width="4" height="4" fill="currentColor"/>
          <rect x="4" y="20" width="4" height="4" fill="currentColor"/>
          <rect x="16" y="20" width="4" height="4" fill="currentColor"/>
        </svg>
      </div>

      {/* Microphone Doodle */}
      <div className="absolute bottom-1/3 left-1/4 animate-float opacity-12" style={{ animationDelay: '0.8s' }}>
        <svg width="20" height="36" viewBox="0 0 20 36" className="fill-primary">
          <rect x="6" y="2" width="8" height="16" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M2 14c0 4.4 3.6 8 8 8s8-3.6 8-8" stroke="currentColor" strokeWidth="2" fill="none"/>
          <line x1="10" y1="22" x2="10" y2="30" stroke="currentColor" strokeWidth="2"/>
          <line x1="6" y1="30" x2="14" y2="30" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </div>

      {/* Clapperboard */}
      <div className="absolute top-2/3 right-1/4 animate-float opacity-10" style={{ animationDelay: '2.2s' }}>
        <svg width="36" height="28" viewBox="0 0 36 28" className="fill-primary">
          <rect x="2" y="8" width="32" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M2 8L34 8L30 2L6 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <line x1="10" y1="2" x2="14" y2="8" stroke="currentColor" strokeWidth="2"/>
          <line x1="18" y1="2" x2="22" y2="8" stroke="currentColor" strokeWidth="2"/>
          <line x1="26" y1="2" x2="30" y2="8" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </div>

      {/* Studio Light */}
      <div className="absolute bottom-20 right-10 animate-float opacity-8" style={{ animationDelay: '1.2s' }}>
        <svg width="32" height="40" viewBox="0 0 32 40" className="fill-primary">
          <circle cx="16" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
          <line x1="16" y1="22" x2="16" y2="32" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 32L20 32L18 36L14 36Z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <line x1="6" y1="12" x2="2" y2="12" stroke="currentColor" strokeWidth="2"/>
          <line x1="26" y1="12" x2="30" y2="12" stroke="currentColor" strokeWidth="2"/>
          <line x1="9.76" y1="5.76" x2="7.05" y2="3.05" stroke="currentColor" strokeWidth="2"/>
          <line x1="22.24" y1="5.76" x2="24.95" y2="3.05" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </div>

      {/* Play Button */}
      <div className="absolute top-1/2 left-20 animate-float opacity-12" style={{ animationDelay: '3s' }}>
        <svg width="28" height="28" viewBox="0 0 28 28" className="fill-primary">
          <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M11 9L19 14L11 19V9Z" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      {/* Headphones */}
      <div className="absolute bottom-1/4 left-2/3 animate-float opacity-10" style={{ animationDelay: '0.5s' }}>
        <svg width="32" height="24" viewBox="0 0 32 24" className="fill-primary">
          <path d="M4 12C4 6.48 8.48 2 14 2H18C23.52 2 28 6.48 28 12V16" stroke="currentColor" strokeWidth="2" fill="none"/>
          <rect x="2" y="12" width="6" height="8" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
          <rect x="24" y="12" width="6" height="8" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      {/* Video Camera */}
      <div className="absolute top-1/3 right-1/3 animate-float opacity-8" style={{ animationDelay: '2.8s' }}>
        <svg width="40" height="24" viewBox="0 0 40 24" className="fill-primary">
          <rect x="2" y="6" width="24" height="16" rx="3" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M26 10L34 6V18L26 14" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      {/* Floating Dots */}
      <div className="absolute top-10 left-1/2 w-2 h-2 bg-primary/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-10 left-1/3 w-1 h-1 bg-primary/30 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/4 left-3/4 w-3 h-3 bg-primary/15 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
      <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-primary/25 rounded-full animate-bounce" style={{ animationDelay: '1.8s' }}></div>

      {/* Subtle Lines */}
      <div className="absolute top-0 left-1/4 w-px h-20 bg-gradient-to-b from-transparent via-primary/10 to-transparent animate-pulse"></div>
      <div className="absolute bottom-0 right-1/3 w-px h-16 bg-gradient-to-t from-transparent via-primary/8 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-0 h-px w-24 bg-gradient-to-r from-transparent via-primary/12 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
    </div>
  );
};

export default DoodleBackground;