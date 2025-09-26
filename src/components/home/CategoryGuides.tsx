import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Gamepad2, 
  Briefcase, 
  GraduationCap, 
  Palette, 
  Code, 
  DollarSign,
  ArrowRight,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";

const CategoryGuides = () => {
  const categories = [
    {
      icon: Gamepad2,
      title: "Gaming Laptops",
      description: "High-performance laptops with dedicated GPUs for smooth gaming",
      priceRange: "$800 - $3,500",
      popularity: "Most Popular",
      features: ["RTX/RX Graphics", "High Refresh Displays", "Advanced Cooling"],
      color: "from-red-500/10 to-orange-500/10",
      link: "/buyers-guide/gaming",
    },
    {
      icon: Briefcase,
      title: "Business Laptops",
      description: "Professional laptops built for productivity and reliability",
      priceRange: "$600 - $2,000",
      popularity: "Professional Choice",
      features: ["Long Battery Life", "Security Features", "Durable Build"],
      color: "from-blue-500/10 to-cyan-500/10",
      link: "/buyers-guide/business",
    },
    {
      icon: GraduationCap,
      title: "Student Laptops",
      description: "Affordable, reliable laptops perfect for academic work",
      priceRange: "$300 - $800",
      popularity: "Budget Friendly",
      features: ["Lightweight", "All-day Battery", "Affordable"],
      color: "from-green-500/10 to-emerald-500/10",
      link: "/buyers-guide/student",
    },
    {
      icon: Palette,
      title: "Creative Workstations",
      description: "Powerful laptops for designers, video editors, and artists",
      priceRange: "$1,200 - $4,000",
      popularity: "Creator's Pick",
      features: ["4K+ Displays", "Color Accuracy", "Powerful CPUs"],
      color: "from-purple-500/10 to-pink-500/10",
      link: "/buyers-guide/creative",
    },
    {
      icon: Code,
      title: "Programming Laptops",
      description: "Developer-focused laptops with excellent keyboards and performance",
      priceRange: "$700 - $2,500",
      popularity: "Developer's Choice",
      features: ["Fast SSD", "Ample RAM", "Great Keyboards"],
      color: "from-gray-500/10 to-slate-500/10",
      link: "/buyers-guide/programming",
    },
    {
      icon: DollarSign,
      title: "Budget Laptops",
      description: "Best value laptops that don't compromise on essential features",
      priceRange: "$250 - $600",
      popularity: "Best Value",
      features: ["Essential Performance", "Reliable", "Great Value"],
      color: "from-yellow-500/10 to-amber-500/10",
      link: "/buyers-guide/budget",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Find Laptops by Use Case
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're gaming, working, studying, or creating, we have 
            detailed buying guides to help you find the perfect laptop for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br ${category.color} border-0`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-background/80 w-fit">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {category.popularity}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
                <p className="text-muted-foreground text-sm">
                  {category.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Price Range */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Price Range:</span>
                  <span className="font-semibold text-foreground">{category.priceRange}</span>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <span className="text-sm font-medium text-foreground">Key Features:</span>
                  <div className="flex flex-wrap gap-1">
                    {category.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button asChild variant="ghost" className="w-full justify-between group-hover:bg-background/80">
                  <Link to={category.link}>
                    View Buying Guide
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Popular Comparisons */}
        <div className="bg-gradient-card rounded-2xl p-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Still Not Sure? Compare Popular Models
            </h3>
            <p className="text-muted-foreground mb-6">
              Check out our detailed comparisons between the most popular laptop models 
              to make an informed decision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="default">
                <Link to="/comparisons/macbook-vs-dell-xps">
                  MacBook vs Dell XPS
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/comparisons/intel-vs-amd">
                  Intel vs AMD Guide
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/comparisons">
                  <Users className="mr-2 h-4 w-4" />
                  All Comparisons
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryGuides;