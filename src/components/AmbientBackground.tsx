const AmbientBackground = () => {
  // Generate floating squares with varied sizes and positions
  const squares = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 80 + 20, // 20-100px
    left: Math.random() * 100, // 0-100%
    delay: Math.random() * 20, // 0-20s delay
    duration: Math.random() * 15 + 15, // 15-30s duration
    opacity: Math.random() * 0.15 + 0.05, // 0.05-0.2 opacity
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Squares */}
      {squares.map((square) => (
        <div
          key={square.id}
          className="absolute bg-primary animate-square-float"
          style={{
            width: `${square.size}px`,
            height: `${square.size}px`,
            left: `${square.left}%`,
            opacity: square.opacity,
            animationDelay: `${square.delay}s`,
            animationDuration: `${square.duration}s`,
            bottom: '-100px',
          }}
        />
      ))}
      
      {/* Additional smaller squares for depth */}
      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={`small-${i}`}
          className="absolute bg-primary/30 animate-square-float-slow"
          style={{
            width: `${Math.random() * 30 + 10}px`,
            height: `${Math.random() * 30 + 10}px`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 25}s`,
            animationDuration: `${Math.random() * 20 + 25}s`,
            bottom: '-50px',
          }}
        />
      ))}
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-background/5 pointer-events-none"></div>
    </div>
  );
};

export default AmbientBackground;