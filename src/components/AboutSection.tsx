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

          {/* Photo Collage */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div
                  key={index}
                  className="aspect-square bg-gradient-accent rounded-lg overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 group relative"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Camera className="w-8 h-8 text-primary opacity-60 group-hover:opacity-80 transition-opacity" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="font-ailrons text-xs text-foreground">Project {index}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What We Stand For */}
        <div className={`mt-20 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <h3 className="font-horas font-bold text-3xl md:text-4xl text-foreground mb-12">
            What We Stand For
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Quality",
                description: "We deliver exceptional quality in every frame, ensuring your vision comes to life with stunning clarity and precision."
              },
              {
                title: "Authenticity", 
                description: "Every story is unique. We capture authentic moments and genuine emotions that reflect your true essence."
              },
              {
                title: "Collaboration",
                description: "We work closely with our clients, valuing your input and ideas to create something truly extraordinary together."
              },
              {
                title: "Timelines",
                description: "We respect your time and deliver projects on schedule without compromising on the quality you deserve."
              }
            ].map((value, index) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h4 className="font-horas font-bold text-xl text-foreground mb-3">
                  {value.title}
                </h4>
                <p className="font-ailrons text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;