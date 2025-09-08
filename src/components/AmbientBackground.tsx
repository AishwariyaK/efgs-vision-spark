const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Animated Gradient Orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl animate-slow-drift"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-primary/15 to-primary/3 rounded-full blur-3xl animate-slow-drift-reverse"></div>
      <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-2xl animate-gentle-float"></div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary/30 rounded-full animate-particle-float"></div>
      <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-primary/20 rounded-full animate-particle-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/3 left-3/4 w-0.5 h-0.5 bg-primary/40 rounded-full animate-particle-float" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-primary/25 rounded-full animate-particle-float" style={{ animationDelay: '6s' }}></div>
      <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-primary/15 rounded-full animate-particle-float" style={{ animationDelay: '1s' }}></div>
      
      {/* Subtle Flowing Lines */}
      <div className="absolute top-0 left-1/3 h-full w-px bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-line-flow"></div>
      <div className="absolute top-0 right-1/4 h-full w-px bg-gradient-to-b from-transparent via-primary/3 to-transparent animate-line-flow" style={{ animationDelay: '3s' }}></div>
      <div className="absolute left-0 top-1/3 w-full h-px bg-gradient-to-r from-transparent via-primary/4 to-transparent animate-line-flow-horizontal"></div>
      
      {/* Ambient Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.01] via-transparent to-primary/[0.02] animate-ambient-glow"></div>
    </div>
  );
};

export default AmbientBackground;