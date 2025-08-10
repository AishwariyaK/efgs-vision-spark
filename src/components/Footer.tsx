import { MapPin, Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="font-horas font-bold text-2xl text-foreground">
              Everything for Good
              <span className="block font-ailrons text-lg text-muted-foreground">
                Production
              </span>
            </div>
            <p className="font-ailrons text-muted-foreground text-sm leading-relaxed">
              Premium photography and videography studio specializing in creating timeless stories.
            </p>
          </div>

          {/* Studio Address */}
          <div className="space-y-4">
            <h4 className="font-horas font-bold text-lg text-foreground">
              Studio Address
            </h4>
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div className="font-ailrons text-muted-foreground text-sm">
                <p>123 Creative Street</p>
                <p>Art District, City 12345</p>
                <p>United States</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-horas font-bold text-lg text-foreground">
              Follow Our Work
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="font-ailrons text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; 2024 Everything For Good Production. All rights reserved.
          </div>
          <div className="font-ailrons text-muted-foreground text-sm">
            Crafted with passion for visual storytelling
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;