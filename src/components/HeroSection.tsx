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
      <div className="relative z-10 text-center px-4 sm:px-6 w-full flex flex-col items-center justify-center">
        {/* Main Title */}
        <div className="animate-fade-in mb-6 md:mb-8">
          <h1 className="font-horas font-bold text-white leading-tight">
            <span className="block whitespace-nowrap uppercase text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl hero-title-spacing-mobile sm:hero-title-spacing-tablet md:hero-title-spacing-desktop">
              EVERYTHING FOR GOOD
            </span>
            <span className="block font-ailrons uppercase text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white/80 mt-2 md:mt-3 lg:mt-4 hero-title-spacing-mobile sm:hero-title-spacing-tablet md:hero-title-spacing-desktop">
              PRODUCTION
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <div className="animate-slide-up animate-fade-in max-w-3xl mx-auto" style={{ animationDelay: '0.3s' }}>
          <p className="font-ailrons text-sm sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-8 md:mb-12 leading-relaxed animate-pulse-text">
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