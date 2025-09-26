import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const BrandShowcase = () => {
  const brands = [
    {
      name: "Apple",
      logo: "🍎",
      description: "Premium ultrabooks with industry-leading design and performance",
      specialties: ["MacBook Air", "MacBook Pro", "Mac Studio"],
      rating: 4.8,
      reviewCount: 156,
      priceRange: "$999 - $6,999",
      popularModel: "MacBook Air M3",
      bgColor: "from-gray-50 to-slate-100",
      textColor: "text-gray-900",
    },
    {
      name: "Dell",
      logo: "💻",
      description: "Business-focused laptops with excellent build quality and support",
      specialties: ["XPS Series", "Latitude", "Inspiron"],
      rating: 4.6,
      reviewCount: 203,
      priceRange: "$499 - $3,499",
      popularModel: "XPS 13 Plus",
      bgColor: "from-blue-50 to-cyan-100",
      textColor: "text-blue-900",
    },
    {
      name: "Lenovo",
      logo: "🔴",
      description: "Versatile laptops from budget-friendly to premium workstations",
      specialties: ["ThinkPad", "IdeaPad", "Legion Gaming"],
      rating: 4.5,
      reviewCount: 289,
      priceRange: "$299 - $4,999",
      popularModel: "ThinkPad X1 Carbon",
      bgColor: "from-red-50 to-orange-100",
      textColor: "text-red-900",
    },
    {
      name: "HP",
      logo: "🖥️",
      description: "Innovative designs with strong performance across all categories",
      specialties: ["Spectre", "Envy", "Pavilion"],
      rating: 4.4,
      reviewCount: 187,
      priceRange: "$399 - $2,999",
      popularModel: "Spectre x360",
      bgColor: "from-indigo-50 to-purple-100",
      textColor: "text-indigo-900",
    },
    {
      name: "ASUS",
      logo: "⚡",
      description: "Gaming powerhouses and creative workstations with cutting-edge tech",
      specialties: ["ROG Gaming", "ZenBook", "VivoBook"],
      rating: 4.7,
      reviewCount: 342,
      priceRange: "$449 - $4,499",
      popularModel: "ROG Zephyrus G14",
      bgColor: "from-orange-50 to-yellow-100",
      textColor: "text-orange-900",
    },
    {
      name: "Acer",
      logo: "🌟",
      description: "Value-oriented laptops with solid performance and affordability",
      specialties: ["Predator Gaming", "Swift", "Aspire"],
      rating: 4.3,
      reviewCount: 164,
      priceRange: "$299 - $2,499",
      popularModel: "Swift 3",
      bgColor: "from-green-50 to-emerald-100",
      textColor: "text-green-900",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Top Laptop Brands We Review
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From premium ultrabooks to gaming powerhouses, we cover all major 
            laptop brands with in-depth reviews and expert analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {brands.map((brand, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br ${brand.bgColor} border-0`}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Brand Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{brand.logo}</span>
                      <div>
                        <h3 className={`text-xl font-bold ${brand.textColor}`}>
                          {brand.name}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                            <span className="text-sm font-medium">{brand.rating}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            ({brand.reviewCount} reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-sm ${brand.textColor} opacity-80`}>
                    {brand.description}
                  </p>

                  {/* Specialties */}
                  <div className="space-y-2">
                    <span className={`text-sm font-medium ${brand.textColor}`}>
                      Popular Series:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {brand.specialties.map((specialty, specialtyIndex) => (
                        <Badge 
                          key={specialtyIndex} 
                          variant="secondary" 
                          className="text-xs bg-background/60"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Price Range & Popular Model */}
                  <div className="space-y-2 pt-2 border-t border-background/20">
                    <div className="flex justify-between text-sm">
                      <span className={`${brand.textColor} opacity-70`}>Price Range:</span>
                      <span className={`font-semibold ${brand.textColor}`}>
                        {brand.priceRange}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className={`${brand.textColor} opacity-70`}>Popular Model:</span>
                      <span className={`font-semibold ${brand.textColor}`}>
                        {brand.popularModel}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button 
                    asChild 
                    variant="ghost" 
                    className="w-full justify-between group-hover:bg-background/60"
                  >
                    <Link to={`/brands/${brand.name.toLowerCase()}`}>
                      View {brand.name} Reviews
                      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Brand Comparison CTA */}
        <div className="bg-gradient-card rounded-2xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Can't Choose Between Brands?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our detailed brand comparison guides help you understand the 
              strengths and weaknesses of each manufacturer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="default">
                <Link to="/comparisons/brand-guide">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Brand Comparison Guide
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/brands">
                  View All Brands
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;