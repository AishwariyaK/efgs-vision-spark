import { Camera, Video, Plane, Users, Building, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Camera,
      title: "Photography",
      description: "Professional photography services for all occasions",
      features: ["Portrait Photography", "Event Photography", "Product Photography", "Landscape Photography"],
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Video,
      title: "Videography",
      description: "Cinematic video production and storytelling",
      features: ["Music Videos", "Documentaries", "Promotional Videos", "Live Streaming"],
      gradient: "from-accent/20 to-accent/5"
    },
    {
      icon: Plane,
      title: "Aerial",
      description: "Breathtaking aerial photography and videography",
      features: ["Drone Photography", "Aerial Videography", "Real Estate Aerials", "Landscape Aerials"],
      gradient: "from-primary/15 to-primary-glow/10"
    },
    {
      icon: Building,
      title: "Corporate",
      description: "Professional corporate content creation",
      features: ["Corporate Events", "Company Profiles", "Training Videos", "Product Launches"],
      gradient: "from-secondary/20 to-secondary/5"
    },
    {
      icon: Users,
      title: "Commercial",
      description: "Commercial advertising and marketing content",
      features: ["TV Commercials", "Social Media Content", "Brand Campaigns", "Product Ads"],
      gradient: "from-primary-glow/20 to-primary-glow/5"
    },
    {
      icon: Heart,
      title: "Ceremonies",
      description: "Capturing life's most precious moments",
      features: ["Weddings", "Engagements", "Anniversaries", "Special Celebrations"],
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

        {/* Call to Action */}
        <div className="text-center animate-scale-in">
          <div className="bg-gradient-to-r from-primary/10 via-primary-glow/10 to-primary/10 rounded-2xl p-8 md:p-12 border border-primary/20">
            <h3 className="font-horas font-bold text-2xl md:text-3xl text-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="font-ailrons text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create something extraordinary together. 
              Every project is unique, and we're here to bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Get Free Consultation
              </Button>
              <Button variant="outline_hero" size="xl">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;