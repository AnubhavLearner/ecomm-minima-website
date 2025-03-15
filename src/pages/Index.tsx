
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getBestSellerProducts, getNewProducts } from "@/utils/products";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bestSellers = getBestSellerProducts();
  const newArrivals = getNewProducts();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* Featured Products Section */}
      <FeaturedProducts />

      {/* Best Sellers Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-accent mb-2 block">Customer Favorites</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Best Sellers</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our most popular products based on sales. Updated daily.
            </p>
          </div>

          <div className="product-grid">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button variant="outline" className="rounded-full">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-accent mb-2 block">Fresh Additions</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">New Arrivals</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The latest additions to our collection of premium products.
            </p>
          </div>

          <div className="product-grid">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button className="rounded-full">
              Shop New Arrivals
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Banner */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Audio Category */}
            <CategoryBanner 
              title="Audio" 
              description="Premium sound for everyday life"
              imageSrc="https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1000&auto=format&fit=crop"
              href="/shop?category=Audio"
            />
            
            {/* Computing Category */}
            <CategoryBanner 
              title="Computing" 
              description="Powerful tools for modern work"
              imageSrc="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=1000&auto=format&fit=crop"
              href="/shop?category=Computers"
            />
            
            {/* Accessories Category */}
            <CategoryBanner 
              title="Accessories" 
              description="Essential additions to your tech"
              imageSrc="https://images.unsplash.com/photo-1625768376503-68d2495d78c4?q=80&w=1000&auto=format&fit=crop"
              href="/shop?category=Accessories"
            />
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Our Commitment
            </h2>
            <p className="max-w-2xl mx-auto opacity-90">
              At Minima, we believe in creating products that combine beauty, functionality, 
              and sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <CommitmentCard 
              title="Quality Materials" 
              description="We source only the finest materials to ensure durability and performance."
            />
            <CommitmentCard 
              title="Sustainable Practices" 
              description="Our production methods are designed to minimize environmental impact."
            />
            <CommitmentCard 
              title="Thoughtful Design" 
              description="Every detail is considered to create a seamless user experience."
            />
            <CommitmentCard 
              title="Fair Production" 
              description="We ensure ethical working conditions throughout our supply chain."
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const CategoryBanner = ({ 
  title, 
  description, 
  imageSrc, 
  href 
}: { 
  title: string; 
  description: string; 
  imageSrc: string; 
  href: string;
}) => {
  return (
    <div className="group relative overflow-hidden rounded-lg aspect-[3/4] md:aspect-auto md:h-[400px]">
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 z-10" />
      <img 
        src={imageSrc} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
        <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-white/80 mb-4">{description}</p>
        <Button asChild variant="outline" className="bg-white/10 text-white border-white/30 backdrop-blur-sm hover:bg-white hover:text-black w-fit">
          <a href={href}>
            Explore
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
};

const CommitmentCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="text-center">
      <h3 className="text-xl font-medium mb-3">{title}</h3>
      <p className="opacity-90">{description}</p>
    </div>
  );
};

export default Index;
