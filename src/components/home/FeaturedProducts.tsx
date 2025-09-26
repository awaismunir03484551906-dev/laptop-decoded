import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ChevronRight, Cpu, HardDrive, Monitor } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const featuredLaptops = [
    {
      id: 1,
      name: "MacBook Air M3",
      brand: "Apple",
      category: "Ultrabook",
      rating: 4.8,
      reviews: 342,
      price: "$1,199",
      originalPrice: "$1,299",
      image: "/placeholder.svg",
      specs: {
        cpu: "Apple M3 8-core",
        ram: "16GB",
        storage: "512GB SSD",
        display: "13.6\" Retina",
      },
      highlights: ["All-day battery", "Silent operation", "Premium build"],
      badge: "Editor's Choice",
      badgeVariant: "default" as const,
    },
    {
      id: 2,
      name: "Dell XPS 13 Plus",
      brand: "Dell",
      category: "Premium",
      rating: 4.6,
      reviews: 198,
      price: "$999",
      originalPrice: "$1,199",
      image: "/placeholder.svg",
      specs: {
        cpu: "Intel Core i7-13700H",
        ram: "16GB",
        storage: "512GB SSD",
        display: "13.4\" OLED",
      },
      highlights: ["OLED display", "Carbon fiber", "Thunderbolt 4"],
      badge: "Best Value",
      badgeVariant: "secondary" as const,
    },
    {
      id: 3,
      name: "ASUS ROG Zephyrus G14",
      brand: "ASUS",
      category: "Gaming",
      rating: 4.7,
      reviews: 456,
      price: "$1,599",
      originalPrice: "$1,799",
      image: "/placeholder.svg",
      specs: {
        cpu: "AMD Ryzen 9 7940HS",
        ram: "32GB",
        storage: "1TB SSD",
        display: "14\" QHD 165Hz",
      },
      highlights: ["RTX 4070", "165Hz display", "AniMe Matrix"],
      badge: "Gaming Pick",
      badgeVariant: "destructive" as const,
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Featured Laptop Reviews
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our expert team has tested and reviewed these top-rated laptops 
            across different categories and price points.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredLaptops.map((laptop) => (
            <Card key={laptop.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="relative p-0">
                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <Badge variant={laptop.badgeVariant} className="font-semibold">
                    {laptop.badge}
                  </Badge>
                </div>
                
                {/* Product Image */}
                <div className="aspect-video bg-gradient-card rounded-t-lg flex items-center justify-center overflow-hidden">
                  <img
                    src={laptop.image}
                    alt={`${laptop.name} - ${laptop.category} laptop`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Header */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-primary font-medium">{laptop.brand}</span>
                      <span className="text-sm text-muted-foreground">{laptop.category}</span>
                    </div>
                    <CardTitle className="text-xl line-clamp-1">{laptop.name}</CardTitle>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(laptop.rating)
                              ? "fill-primary text-primary"
                              : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium">{laptop.rating}</span>
                    <span className="text-sm text-muted-foreground">({laptop.reviews})</span>
                  </div>

                  {/* Specs */}
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Cpu className="h-4 w-4 mr-2 text-primary" />
                      <span>{laptop.specs.cpu}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <HardDrive className="h-4 w-4 mr-2 text-primary" />
                      <span>{laptop.specs.ram} • {laptop.specs.storage}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Monitor className="h-4 w-4 mr-2 text-primary" />
                      <span>{laptop.specs.display}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1">
                    {laptop.highlights.map((highlight, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-foreground">{laptop.price}</span>
                        <span className="text-sm text-muted-foreground line-through">
                          {laptop.originalPrice}
                        </span>
                      </div>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link to={`/reviews/${laptop.id}`}>
                        Read Review
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/reviews">
              View All Reviews
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;