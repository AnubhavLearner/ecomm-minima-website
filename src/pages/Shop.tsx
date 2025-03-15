
import { useState, useEffect } from "react";
import { ArrowRight, Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getAllProducts } from "@/utils/products";
import { Product } from "@/utils/types";

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    const allProducts = getAllProducts();
    setProducts(allProducts);
    setFilteredProducts(allProducts);
  }, []);

  const categories = ["all", "Audio", "Computing", "Accessories", "Wearables"];

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === category));
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <div className="pt-24 md:pt-32 pb-6 md:pb-10 bg-secondary/30">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-semibold text-center mb-2">Shop</h1>
          <p className="text-muted-foreground text-center max-w-xl mx-auto">
            Browse our collection of premium products designed for modern life.
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 py-8 md:py-12">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Mobile Filters Toggle */}
            <div className="lg:hidden flex justify-between items-center mb-4">
              <div className="text-sm text-muted-foreground">
                {filteredProducts.length} Products
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-2"
                onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </Button>
            </div>

            {/* Sidebar Filters */}
            <aside className={`lg:w-1/4 xl:w-1/5 lg:block ${isMobileFilterOpen ? 'block' : 'hidden'}`}>
              <div className="sticky top-24 space-y-6 p-4 rounded-lg border bg-card">
                <div>
                  <h3 className="font-medium mb-3 flex items-center">
                    <Filter className="h-4 w-4 mr-2" />
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center">
                        <button
                          className={`text-sm py-1 w-full text-left transition ${
                            selectedCategory === category
                              ? "text-accent font-medium"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                          onClick={() => handleCategoryChange(category)}
                        >
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
            
            {/* Products Grid */}
            <div className="lg:w-3/4 xl:w-4/5">
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-xl font-medium">
                  {selectedCategory === "all" 
                    ? "All Products" 
                    : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
                </h2>
                <div className="text-sm text-muted-foreground hidden lg:block">
                  {filteredProducts.length} Products
                </div>
              </div>
              
              {filteredProducts.length > 0 ? (
                <div className="product-grid">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">No products found in this category.</p>
                  <Button 
                    variant="outline" 
                    onClick={() => handleCategoryChange("all")}
                  >
                    View All Products
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
