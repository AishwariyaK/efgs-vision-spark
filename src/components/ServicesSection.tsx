import { Camera, Video, Plane, Users, Building, Lightbulb, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Ideation & Strategy",
      description: "Creative concept development and strategic planning for impactful visual storytelling",
      features: ["Creative Concepts", "Story Development", "Visual Strategy", "Project Planning"],
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: PenTool,
      title: "Content Creation",
      description: "Original content development across multiple platforms and formats",
      features: ["Script Writing", "Storyboarding", "Visual Content", "Brand Messaging"],
      gradient: "from-accent/20 to-accent/5"
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Professional photography services capturing life's most beautiful moments",
      features: ["Portrait Photography", "Event Photography", "Product Photography", "Lifestyle Photography"],
      gradient: "from-primary/15 to-primary/5"
    },
    {
      icon: Video,
      title: "Cinematography",
      description: "Cinematic video production with artistic vision and technical excellence",
      features: ["Cinematic Films", "Commercial Videos", "Documentary Style", "Creative Direction"],
      gradient: "from-primary-glow/20 to-primary-glow/5"
    },
    {
      icon: Plane,
      title: "Aerial Photography & Videography",
      description: "Professional drone services for unique perspectives and breathtaking visuals",
      features: ["Aerial Photography", "Drone Videography", "Real Estate Aerials", "Landscape Cinematography"],
      gradient: "from-primary/10 to-primary-glow/10"
    },
    {
      icon: Building,
      title: "Post Production",
      description: "Complete post-production services from editing to final delivery",
      features: ["Video Editing", "Color Grading", "Audio Post", "Motion Graphics"],
      gradient: "from-secondary/20 to-secondary/5"
    },
    {
      icon: Users,
      title: "Digital Marketing",
      description: "Strategic digital marketing to amplify your visual content and brand reach",
      features: ["Social Media Strategy", "Content Distribution", "Brand Development", "Digital Campaigns"],
      gradient: "from-accent/15 to-accent/5"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-horas font-bold text-4xl md:text-6xl text-foreground mb-6">
            Our Services
          </h2>
          <p className="font-ailrons text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From intimate portraits to grand commercial productions, we bring your vision to life with 
            cutting-edge technology and creative storytelling.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="group relative bg-card border border-border rounded-lg p-8 hover:shadow-glow transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-horas font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-ailrons text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="font-ailrons text-sm text-muted-foreground flex items-center"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Button */}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:border-primary group-hover:text-primary transition-colors duration-300"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;