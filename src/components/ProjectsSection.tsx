import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye, ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");

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

  return (
    <section id="projects" className="py-20 bg-background">
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
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`font-ailrons px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-foreground hover:bg-primary/10 border border-border hover:border-primary/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Carousel */}
        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {filteredProjects.map((project, index) => (
              <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in"
                     style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Project Image */}
                  <div className="relative h-64 bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden">
                    {/* Floating Icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md">
                      <Eye className="w-5 h-5 text-primary" />
                    </div>
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="font-ailrons text-xs text-primary bg-primary/15 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/20 inline-block mb-2">
                          {project.category}
                        </span>
                        <Button 
                          size="sm"
                          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-4 py-2 font-ailrons font-medium transition-all duration-300 hover:scale-105 w-full"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Project
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-4">
                    <h3 className="font-horas font-bold text-lg text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="font-ailrons text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="font-ailrons">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;