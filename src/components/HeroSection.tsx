import { Button } from "@/components/ui/button";
import { ChevronDown, Play } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-dark opacity-70"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary-glow rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-primary rounded-full animate-float opacity-30" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Main Title */}
        <div className="animate-fade-in">
          <h1 className="font-horas font-bold text-5xl md:text-7xl lg:text-8xl text-foreground mb-4 leading-tight">
            Everything For Good
          </h1>
          <p className="font-ailrons text-xl md:text-2xl text-muted-foreground mb-2">
            Production
          </p>
        </div>

        {/* Tagline */}
        <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <p className="font-ailrons text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Capture your beautiful moments and turn them into memories
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="animate-scale-in flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ animationDelay: '0.6s' }}>
          <Button variant="hero" size="xl" className="group">
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            View Our Work
          </Button>
          <Button variant="outline_hero" size="xl">
            Get Started
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="flex flex-col items-center text-foreground/60">
            <span className="font-ailrons text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;