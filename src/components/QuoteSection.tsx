import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

const QuoteSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Quote request:", formData);
  };

  return (
    <section id="quote" className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-horas font-bold text-4xl md:text-6xl text-foreground mb-6">
            Get Your Quote
          </h2>
          <p className="font-ailrons text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Tell us about your project and we'll provide you with a 
            personalized quote tailored to your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-ailrons text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-ailrons text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block font-ailrons text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className="block font-ailrons text-sm font-medium text-foreground mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a service</option>
                    <option value="photography">Photography</option>
                    <option value="videography">Videography</option>
                    <option value="drone">Drone Photography & Videography</option>
                    <option value="post-production">Post Production</option>
                    <option value="digital-marketing">Digital Marketing</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block font-ailrons text-sm font-medium text-foreground mb-2">
                  Project Details *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full"
                  placeholder="Tell us about your project, timeline, and any specific requirements..."
                />
              </div>

              <Button type="submit" variant="hero" size="xl" className="w-full">
                Request Quote
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border">
              <h3 className="font-horas font-bold text-2xl text-foreground mb-8">
                Let's Discuss Your Vision
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-horas font-semibold text-foreground mb-1">Phone</h4>
                    <p className="font-ailrons text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-horas font-semibold text-foreground mb-1">Email</h4>
                    <p className="font-ailrons text-muted-foreground">hello@efgproduction.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-horas font-semibold text-foreground mb-1">Studio</h4>
                    <p className="font-ailrons text-muted-foreground">
                      123 Creative Avenue<br />
                      Los Angeles, CA 90210
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-horas font-semibold text-foreground mb-4">Response Time</h4>
                <p className="font-ailrons text-muted-foreground">
                  We typically respond to quote requests within 24 hours. For urgent projects, 
                  please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;