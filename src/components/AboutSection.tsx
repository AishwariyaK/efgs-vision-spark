import { useEffect, useRef, useState } from "react";
import { Camera, Video, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

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
          <div className={`${isVisible ? 'animate-fade-in animate-slide-up' : 'opacity-0 translate-y-10'} transition-all duration-700`}>
            <h2 className="font-horas font-bold text-4xl md:text-5xl text-foreground mb-6">
              About Our Vision
            </h2>
            <div className="space-y-6 font-ailrons text-lg text-muted-foreground leading-relaxed">
              <p>
                Everything for Good Production is a premium photography and videography 
                studio specializing in creating timeless stories. With an eye for detail and 
                a passion for perfection, we transform ordinary moments into extraordinary 
                memories.
              </p>
              <p>
                Our team of professional photographers and videographers brings years of 
                experience and artistic vision to every project, ensuring that each frame 
                captures not just an image, but an emotion.
              </p>
            </div>
            
            <div className="mt-8">
              <Button variant="outline" className="font-ailrons">
                Learn More About Us
              </Button>
            </div>
          </div>

          {/* Photo Collage - Modern Layout */}
          <div className={`${isVisible ? 'animate-fade-in animate-scale-in' : 'opacity-0 scale-95'} transition-all duration-700 delay-300`}>
            <div className="grid grid-cols-2 gap-4">
              {/* Large Camera Image */}
              <div className="row-span-2 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group relative">
                <div className="h-full flex items-center justify-center p-8">
                  <Camera className="w-16 h-16 text-gray-600" />
                </div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              
              {/* Photographer */}
              <div className="bg-gradient-to-br from-amber-100 to-orange-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group relative aspect-square">
                <div className="h-full flex items-center justify-center p-6">
                  <Users className="w-12 h-12 text-amber-700" />
                </div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              
              {/* Video Camera */}
              <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group relative aspect-square">
                <div className="h-full flex items-center justify-center p-6">
                  <Video className="w-12 h-12 text-blue-700" />
                </div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              
              {/* Drone */}
              <div className="col-span-2 bg-gradient-to-br from-green-100 to-emerald-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group relative">
                <div className="h-24 flex items-center justify-center">
                  <Award className="w-12 h-12 text-green-700" />
                </div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* What We Stand For */}
        <div className={`mt-20 text-center ${isVisible ? 'animate-fade-in animate-slide-up' : 'opacity-0 translate-y-10'} transition-all duration-700 delay-500`}>
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
              <div 
                key={value.title} 
                className={`text-center group ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'} transition-all duration-500`}
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <div className="w-8 h-8 bg-primary rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                </div>
                <h4 className="font-horas font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="font-ailrons text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
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