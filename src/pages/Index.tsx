import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CategoryGuides from "@/components/home/CategoryGuides";
import BrandShowcase from "@/components/home/BrandShowcase";
import LatestArticles from "@/components/home/LatestArticles";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <CategoryGuides />
        <BrandShowcase />
        <LatestArticles />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
