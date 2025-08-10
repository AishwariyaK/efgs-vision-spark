import { useEffect, useRef, useState } from "react";

const ClientsSection = () => {
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

  const clients = [
    "Netflix", "Disney", "Apple", "Google", "Microsoft", "Amazon",
    "Sony", "Warner Bros", "Universal", "HBO", "Tesla", "Nike"
  ];

  return (
    <section id="clients" ref={sectionRef} className="py-20 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="font-horas font-bold text-4xl md:text-5xl text-foreground mb-6">
            Clients We've Worked With
          </h2>
          <p className="font-ailrons text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading brands and organizations worldwide
          </p>
        </div>

        {/* Clients Grid */}
        <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <div
                key={client}
                className="flex items-center justify-center h-16 bg-background rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 group"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <span className="font-ailrons font-semibold text-muted-foreground group-hover:text-primary transition-colors text-sm">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Statement */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <p className="font-ailrons text-lg text-muted-foreground max-w-3xl mx-auto">
            From startups to Fortune 500 companies, we've helped brands tell their stories 
            through compelling visual content that drives engagement and delivers results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;