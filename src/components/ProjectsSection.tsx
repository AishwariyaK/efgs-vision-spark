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
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`font-ailrons px-6 py-3 rounded-lg transition-all duration-300 ${
                filter === category
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "bg-card text-card-foreground hover:bg-primary/20 border border-border"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              data-index={index}
              className={`project-card group relative bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 hover:scale-105 ${
                visibleProjects.has(index) ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image Placeholder */}
              <div className="relative h-48 bg-gradient-accent">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/30 rounded-full flex items-center justify-center">
                    <Eye className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="hero" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="font-ailrons font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="font-ailrons text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-ailrons text-xs text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                    <ExternalLink className="w-4 h-4 text-primary group-hover:text-primary-foreground" />
                  </div>
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