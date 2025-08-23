import { Button } from "@/components/ui/button";
import { ChevronDown, Play } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9a92a9d&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>


      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-primary rounded-full animate-float opacity-30" style={{ animationDelay: '2s' }}></div>
        {/* Scroll animation effect */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-8 bg-primary/20 rounded-full"></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Main Title */}
        <div className="animate-fade-in">
          <h1 className="font-horas font-bold text-xl sm:text-2xl md:text-6xl lg:text-7xl text-white leading-tight">
            <span className="inline whitespace-nowrap hero-title-spacing">Everything For Good</span>
            <span className="block font-ailrons text-sm sm:text-base md:text-3xl lg:text-4xl text-white/80 mt-1 md:mt-2 hero-title-spacing">
              Production
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <p className="font-ailrons text-sm sm:text-base md:text-xl text-white/80 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
            Capture your beautiful moments and turn them into memories
          </p>
        </div>

        {/* CTA Button */}
        <div className="animate-scale-in flex flex-col items-center" style={{ animationDelay: '0.6s' }}>
          <Button variant="hero" size="xl" className="group mb-8">
            Explore More
          </Button>
          
          {/* Scroll Indicator */}
          <div className="flex flex-col items-center text-white/60 animate-float">
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