import { useEffect, useRef, useState } from "react";
import { Camera, Video, Award, Users } from "lucide-react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Camera, value: "500+", label: "Photos Captured" },
    { icon: Video, value: "200+", label: "Videos Produced" },
    { icon: Award, value: "50+", label: "Awards Won" },
    { icon: Users, value: "300+", label: "Happy Clients" },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-primary/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <h2 className="font-horas font-bold text-4xl md:text-5xl text-foreground mb-6">
              About Our Vision
            </h2>
            <div className="space-y-6 font-ailrons text-lg text-muted-foreground leading-relaxed">
              <p>
                At EFG Production, we believe every moment tells a story worth preserving. 
                Our passion for visual storytelling drives us to capture the essence of 
                your most precious memories with artistic precision and technical excellence.
              </p>
              <p>
                With years of experience in photography and videography, we specialize in 
                creating cinematic experiences that transcend ordinary documentation. 
                From intimate ceremonies to grand corporate events, we transform fleeting 
                moments into timeless treasures.
              </p>
              <p>
                Our commitment to innovation and quality ensures that every project receives 
                the attention it deserves, resulting in stunning visuals that capture not 
                just images, but emotions and stories that will be cherished forever.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-card p-6 rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 group"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <stat.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-horas font-bold text-3xl text-foreground mb-2">
                      {stat.value}
                    </h3>
                    <p className="font-ailrons text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className={`mt-20 text-center ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <div className="bg-card p-8 rounded-2xl shadow-elegant max-w-4xl mx-auto border border-border">
            <h3 className="font-horas font-bold text-2xl text-foreground mb-4">
              Our Mission
            </h3>
            <p className="font-ailrons text-lg text-muted-foreground leading-relaxed">
              "To transform ordinary moments into extraordinary memories through the art of visual storytelling, 
              ensuring every frame captures the genuine emotion and beauty of life's most precious experiences."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;