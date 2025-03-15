
import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts } from "@/utils/products";

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState(getFeaturedProducts());
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Scroll products horizontally on mobile
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth"
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-secondary/30"
    >
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div
            className={`transition-all duration-700 delay-200 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-sm font-medium text-accent mb-2 block">
              Featured Collection
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Our Premium Selections
            </h2>
          </div>
          <div
            className={`hidden md:flex gap-3 transition-all duration-700 delay-300 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={scrollLeft}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={scrollRight}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile & Desktop Products */}
        <div
          ref={scrollContainerRef}
          className={`flex md:grid md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 scrollbar-hide transition-all duration-1000 delay-400 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="min-w-[260px] md:min-w-0 transition-all"
              style={{ 
                transitionDelay: `${400 + index * 100}ms`,
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden justify-center gap-3 mt-6">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={scrollLeft}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={scrollRight}
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
