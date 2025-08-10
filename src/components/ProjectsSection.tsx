import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Eye, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  const categories = ["All", "Corporate", "Commercial", "Ceremonies", "Aerial"];

  const projects = [
    { id: 1, title: "Corporate Vision", category: "Corporate", description: "Brand storytelling through cinematic visuals" },
    { id: 2, title: "Wedding Dreams", category: "Ceremonies", description: "Capturing love stories with elegance" },
    { id: 3, title: "Product Launch", category: "Commercial", description: "Dynamic product showcase campaign" },
    { id: 4, title: "Sky Perspective", category: "Aerial", description: "Breathtaking aerial cinematography" },
    { id: 5, title: "Brand Identity", category: "Corporate", description: "Professional corporate video production" },
    { id: 6, title: "Commercial Ad", category: "Commercial", description: "High-impact advertising campaign" },
    { id: 7, title: "Event Coverage", category: "Ceremonies", description: "Memorable event documentation" },
    { id: 8, title: "Landscape Film", category: "Aerial", description: "Stunning aerial landscape footage" },
  ];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleProjects(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const projectElements = sectionRef.current?.querySelectorAll('.project-card');
    projectElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredProjects]);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-horas font-bold text-4xl md:text-5xl text-foreground mb-6">
            Our Projects
          </h2>
          <p className="font-ailrons text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of stunning visual storytelling projects
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`font-ailrons px-8 py-4 rounded-full text-sm font-semibold transition-all duration-500 transform hover:scale-105 ${
                filter === category
                  ? "bg-primary text-primary-foreground shadow-glow scale-105"
                  : "bg-background text-foreground hover:bg-primary/10 border-2 border-border hover:border-primary/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid - Modern Masonry Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              data-index={index}
              className={`project-card group break-inside-avoid bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-700 hover:scale-105 hover:-rotate-1 ${
                visibleProjects.has(index) ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ 
                animationDelay: `${index * 0.15}s`,
                height: index % 3 === 0 ? '320px' : index % 2 === 0 ? '280px' : '350px'
              }}
            >
              {/* Project Image with Modern Overlay */}
              <div className="relative h-full bg-gradient-accent overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-primary/5"></div>
                
                {/* Floating Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-horas font-bold text-xl text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="font-ailrons text-sm text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="font-ailrons text-xs text-primary bg-primary/15 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20">
                        {project.category}
                      </span>
                      <Button 
                        size="sm"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-2 font-ailrons font-semibold transition-all duration-300 hover:scale-105"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Subtle Pattern Overlay */}
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full bg-gradient-to-br from-transparent via-primary/5 to-primary/10"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button variant="outline_hero" size="xl">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;