import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import QuoteSection from "@/components/QuoteSection";
import ClientsSection from "@/components/ClientsSection";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  const animated = useScrollAnimation();

  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <div data-animate="about" className={`animate-on-scroll ${animated.includes('about') ? 'animate' : ''}`}>
          <AboutSection />
        </div>
        <div data-animate="services" className={`animate-on-scroll ${animated.includes('services') ? 'animate' : ''}`}>
          <ServicesSection />
        </div>
        <div data-animate="clients" className={`animate-on-scroll ${animated.includes('clients') ? 'animate' : ''}`}>
          <ClientsSection />
        </div>
        <div data-animate="projects" className={`animate-on-scroll ${animated.includes('projects') ? 'animate' : ''}`}>
          <ProjectsSection />
        </div>
        <div data-animate="quote" className={`animate-on-scroll ${animated.includes('quote') ? 'animate' : ''}`}>
          <QuoteSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
