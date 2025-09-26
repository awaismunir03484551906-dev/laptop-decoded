import { Link } from "react-router-dom";
import { Laptop, Mail, Twitter, Youtube, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Reviews",
      links: [
        { name: "Latest Reviews", href: "/reviews" },
        { name: "Gaming Laptops", href: "/reviews/gaming" },
        { name: "Business Laptops", href: "/reviews/business" },
        { name: "Budget Laptops", href: "/reviews/budget" },
      ],
    },
    {
      title: "Guides",
      links: [
        { name: "Buyer's Guide", href: "/buyers-guide" },
        { name: "CPU Comparison", href: "/guides/cpu" },
        { name: "GPU Guide", href: "/guides/gpu" },
        { name: "Maintenance Tips", href: "/guides/maintenance" },
      ],
    },
    {
      title: "Brands",
      links: [
        { name: "Apple MacBook", href: "/brands/apple" },
        { name: "Dell", href: "/brands/dell" },
        { name: "Lenovo", href: "/brands/lenovo" },
        { name: "HP", href: "/brands/hp" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Comparisons", href: "/comparisons" },
        { name: "FAQ", href: "/faq" },
        { name: "Contact", href: "/contact" },
      ],
    },
  ];

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
    { name: "GitHub", icon: Github, href: "#" },
    { name: "Email", icon: Mail, href: "mailto:contact@laptophub.com" },
  ];

  return (
    <footer className="bg-muted/50 border-t border-border mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Laptop className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl text-gradient">LaptopHub</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Your trusted source for laptop reviews, comparisons, and expert buying advice. 
              Making laptop shopping simple and informed.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} LaptopHub. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;