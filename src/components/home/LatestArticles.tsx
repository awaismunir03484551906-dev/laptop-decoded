import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, TrendingUp, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const LatestArticles = () => {
  const articles = [
    {
      id: 1,
      title: "2024 Laptop CPU Battle: Intel 14th Gen vs AMD Ryzen 8000 Series",
      excerpt: "We compare the latest processors from Intel and AMD to help you choose the best CPU for your next laptop purchase.",
      category: "Hardware Guide",
      author: "Sarah Chen",
      publishDate: "2024-01-15",
      readTime: "8 min read",
      image: "/placeholder.svg",
      featured: true,
      trending: true,
    },
    {
      id: 2,
      title: "The Rise of ARM Laptops: MacBook vs Windows ARM Performance",
      excerpt: "Apple's M3 chip dominance faces new competition from Qualcomm Snapdragon X Elite. Here's how they stack up.",
      category: "Trend Analysis",
      author: "Mike Rodriguez",
      publishDate: "2024-01-12",
      readTime: "6 min read",
      image: "/placeholder.svg",
      featured: false,
      trending: true,
    },
    {
      id: 3,
      title: "Best Laptop Deals This Month: January 2024 Edition",
      excerpt: "Our curated list of the best laptop discounts and deals available right now, updated weekly.",
      category: "Deals & Savings",
      author: "Alex Thompson",
      publishDate: "2024-01-10",
      readTime: "5 min read",
      image: "/placeholder.svg",
      featured: false,
      trending: false,
    },
    {
      id: 4,
      title: "How to Extend Your Laptop Battery Life: 15 Expert Tips",
      excerpt: "Learn proven strategies to maximize your laptop's battery performance and longevity with our comprehensive guide.",
      category: "Maintenance",
      author: "Jessica Park",
      publishDate: "2024-01-08",
      readTime: "10 min read",
      image: "/placeholder.svg",
      featured: false,
      trending: false,
    },
  ];

  const categories = [
    { name: "All Articles", count: 247, active: true },
    { name: "Reviews", count: 89, active: false },
    { name: "Guides", count: 72, active: false },
    { name: "Comparisons", count: 45, active: false },
    { name: "News", count: 41, active: false },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Latest Articles & Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest laptop news, buying guides, and expert 
            analysis from our team of tech professionals.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={category.active ? "default" : "outline"}
              size="sm"
              className="text-sm"
            >
              {category.name}
              <Badge variant="secondary" className="ml-2 text-xs">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto">
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Badge variant="default">Featured</Badge>
                    {articles[0].trending && (
                      <Badge variant="secondary" className="flex items-center">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                    <Badge variant="outline">{articles[0].category}</Badge>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground leading-tight">
                    {articles[0].title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {articles[0].excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {articles[0].author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(articles[0].publishDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {articles[0].readTime}
                    </div>
                  </div>
                  
                  <Button asChild className="w-fit">
                    <Link to={`/blog/${articles[0].id}`}>
                      Read Full Article
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {articles.slice(1).map((article) => (
            <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                      {article.category}
                    </Badge>
                  </div>
                  {article.trending && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Trending
                      </Badge>
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <div className="space-y-3">
                  <h3 className="font-bold text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border">
                    <div className="flex items-center space-x-2">
                      <span>{article.author}</span>
                      <span>•</span>
                      <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                    </div>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/blog">
              View All Articles
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;