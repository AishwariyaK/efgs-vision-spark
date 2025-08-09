import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    { icon: MapPin, label: "Studio Address", value: "123 Creative Street, Art District, City 12345" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: Mail, label: "Email", value: "hello@efgproduction.com" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-horas font-bold text-4xl md:text-5xl text-foreground mb-6">
            Let's Create Together
          </h2>
          <p className="font-ailrons text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your vision to life? Get in touch and let's discuss your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="bg-card p-8 rounded-2xl shadow-elegant border border-border">
              <h3 className="font-horas font-bold text-2xl text-foreground mb-6">
                Send us a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative group">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-input border-border font-ailrons transition-all duration-300 focus:border-primary focus:shadow-glow/30"
                      required
                    />
                  </div>
                  <div className="relative group">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-input border-border font-ailrons transition-all duration-300 focus:border-primary focus:shadow-glow/30"
                      required
                    />
                  </div>
                </div>
                
                <div className="relative group">
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-input border-border font-ailrons transition-all duration-300 focus:border-primary focus:shadow-glow/30"
                  />
                </div>
                
                <div className="relative group">
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="bg-input border-border font-ailrons transition-all duration-300 focus:border-primary focus:shadow-glow/30 resize-none"
                    required
                  />
                </div>
                
                <Button type="submit" variant="hero" size="xl" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.label}
                    className="flex items-start space-x-4 p-4 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-ailrons font-semibold text-foreground mb-1">
                        {info.label}
                      </h4>
                      <p className="font-ailrons text-muted-foreground">
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="bg-card p-6 rounded-lg shadow-card">
                <h4 className="font-ailrons font-semibold text-foreground mb-4">
                  Follow Our Work
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                    </a>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-primary p-6 rounded-lg text-center">
                <h4 className="font-horas font-bold text-xl text-primary-foreground mb-2">
                  Ready to Start?
                </h4>
                <p className="font-ailrons text-primary-foreground/80 mb-4">
                  Get a personalized quote for your project
                </p>
                <Button variant="outline_hero" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Get Quote Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t border-border">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-horas font-bold text-xl text-foreground mb-4 md:mb-0">
              EFG Production
            </div>
            <div className="font-ailrons text-muted-foreground text-center md:text-right">
              <p>&copy; 2024 Everything For Good Production. All rights reserved.</p>
              <p className="text-sm mt-1">Crafted with passion for visual storytelling</p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;