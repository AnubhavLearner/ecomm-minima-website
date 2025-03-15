
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ChevronRight, 
  ChevronDown, 
  ShoppingBag, 
  Heart, 
  Share2,
  Minus,
  Plus,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getProductById, getRelatedProducts } from "@/utils/products";
import { Product } from "@/utils/types";
import { toast } from "@/components/ui/use-toast";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedColor, setSelectedColor] = useState<string | undefined>(undefined);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'description' | 'details'>('description');

  // Image loading states
  const [mainImageLoaded, setMainImageLoaded] = useState<boolean>(false);
  const [thumbnailsLoaded, setThumbnailsLoaded] = useState<boolean[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (id) {
      // Simulate loading time
      setIsLoading(true);
      setTimeout(() => {
        const foundProduct = getProductById(id);
        setProduct(foundProduct);
        
        if (foundProduct) {
          setSelectedImage(foundProduct.images[0]);
          setSelectedColor(foundProduct.colors ? foundProduct.colors[0] : undefined);
          setSelectedSize(foundProduct.sizes ? foundProduct.sizes[0] : undefined);
          setRelatedProducts(getRelatedProducts(id, foundProduct.category));
          setThumbnailsLoaded(Array(foundProduct.images.length).fill(false));
        }
        
        setIsLoading(false);
      }, 500);
    }
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    
    toast({
      title: "Added to cart",
      description: `${product.name} x ${quantity} has been added to your cart.`,
      duration: 3000,
    });
  };

  const handleThumbnailClick = (image: string) => {
    setMainImageLoaded(false);
    setSelectedImage(image);
  };

  const handleThumbnailLoad = (index: number) => {
    setThumbnailsLoaded(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  const handleMainImageLoad = () => {
    setMainImageLoaded(true);
  };

  const incrementQuantity = () => {
    setQuantity(prev => Math.min(prev + 1, 10));
  };

  const decrementQuantity = () => {
    setQuantity(prev => Math.max(prev - 1, 1));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-10 w-40 bg-secondary rounded mb-4"></div>
            <div className="text-muted-foreground">Loading product...</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-6">
              We couldn't find the product you're looking for.
            </p>
            <Button asChild>
              <Link to="/shop">Continue Shopping</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container-custom">
          {/* Breadcrumbs */}
          <nav className="mb-8 flex items-center text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="mx-2 h-4 w-4" />
            <Link to="/shop" className="hover:text-foreground transition-colors">
              Shop
            </Link>
            <ChevronRight className="mx-2 h-4 w-4" />
            <Link 
              to={`/shop?category=${product.category}`} 
              className="hover:text-foreground transition-colors"
            >
              {product.category}
            </Link>
            <ChevronRight className="mx-2 h-4 w-4" />
            <span className="text-foreground font-medium truncate max-w-[200px]">
              {product.name}
            </span>
          </nav>

          {/* Product Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square rounded-lg overflow-hidden bg-secondary/20">
                {!mainImageLoaded && (
                  <div className="absolute inset-0 image-shimmer"></div>
                )}
                <img
                  src={selectedImage}
                  alt={product.name}
                  className={`w-full h-full object-cover transition-opacity duration-300 ${
                    mainImageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={handleMainImageLoad}
                />
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => handleThumbnailClick(image)}
                    className={`relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0 transition-all ${
                      selectedImage === image
                        ? "ring-2 ring-accent"
                        : "ring-1 ring-border hover:ring-muted-foreground"
                    }`}
                  >
                    {!thumbnailsLoaded[index] && (
                      <div className="absolute inset-0 image-shimmer"></div>
                    )}
                    <img
                      src={image}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className={`w-full h-full object-cover transition-opacity duration-300 ${
                        thumbnailsLoaded[index] ? "opacity-100" : "opacity-0"
                      }`}
                      onLoad={() => handleThumbnailLoad(index)}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="mb-1 text-sm text-muted-foreground">
                {product.category}
              </div>
              <h1 className="text-3xl md:text-4xl font-semibold mb-2">
                {product.name}
              </h1>

              {/* Price */}
              <div className="flex items-baseline gap-3 mt-2 mb-4">
                {product.discountPrice ? (
                  <>
                    <span className="text-2xl font-semibold">
                      ${product.discountPrice.toFixed(2)}
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-sm bg-destructive/10 text-destructive px-2 py-0.5 rounded">
                      Save ${(product.price - product.discountPrice).toFixed(2)}
                    </span>
                  </>
                ) : (
                  <span className="text-2xl font-semibold">
                    ${product.price.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "text-accent fill-accent"
                          : i < product.rating
                          ? "text-accent/50 fill-accent/50"
                          : "text-muted-foreground/30 fill-muted-foreground/30"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-muted-foreground">
                  {product.rating.toFixed(1)} ({product.reviews} reviews)
                </span>
              </div>

              {/* Color Selection */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-medium">Color</span>
                    {selectedColor && (
                      <span className="text-sm text-muted-foreground">
                        {selectedColor === "#000000"
                          ? "Black"
                          : selectedColor === "#FFFFFF"
                          ? "White"
                          : selectedColor === "#C0C0C0"
                          ? "Silver"
                          : selectedColor === "#808080"
                          ? "Gray"
                          : selectedColor === "#FF0000"
                          ? "Red"
                          : selectedColor === "#0000FF"
                          ? "Blue"
                          : selectedColor === "#964B00"
                          ? "Brown"
                          : "Selected"}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3">
                    {product.colors.map((color, idx) => (
                      <button
                        key={idx}
                        className={`w-10 h-10 rounded-full transition-all relative ${
                          selectedColor === color
                            ? "ring-2 ring-offset-2 ring-accent"
                            : "ring-1 ring-border"
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => setSelectedColor(color)}
                        aria-label={`Select ${color} color`}
                      >
                        {selectedColor === color && (
                          <Check
                            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-5 w-5 ${
                              color === "#FFFFFF" ? "text-black" : "text-white"
                            }`}
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-medium">Size</span>
                    {selectedSize && (
                      <span className="text-sm text-muted-foreground">
                        {selectedSize}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3">
                    {product.sizes.map((size, idx) => (
                      <button
                        key={idx}
                        className={`w-12 h-12 flex items-center justify-center rounded-md transition-all ${
                          selectedSize === size
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-foreground hover:bg-secondary/80"
                        }`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-6">
                <span className="font-medium block mb-3">Quantity</span>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                    className="h-10 w-10 rounded-l-md rounded-r-none"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <div className="h-10 w-16 flex items-center justify-center border-y border-input">
                    {quantity}
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={incrementQuantity}
                    disabled={quantity >= 10}
                    className="h-10 w-10 rounded-r-md rounded-l-none"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Add to Cart & Wishlist */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  className="flex-1"
                  size="lg"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
                <Button variant="outline" size="lg" className="flex-1 sm:flex-none">
                  <Heart className="mr-2 h-5 w-5" />
                  Wishlist
                </Button>
                <Button variant="outline" size="icon" className="sm:flex-none">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              {/* Status */}
              <div className="flex gap-8 py-4 border-t border-b border-border mb-6">
                <div className="flex gap-2 items-center">
                  <span className="text-sm font-medium">Status:</span>
                  <span className={`text-sm ${product.inStock ? "text-green-600" : "text-destructive"}`}>
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="text-sm font-medium">SKU:</span>
                  <span className="text-sm text-muted-foreground">
                    {product.id.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Tabs */}
              <div className="mb-6">
                <div className="flex border-b border-border">
                  <button
                    className={`py-3 px-4 font-medium text-sm transition-colors border-b-2 -mb-px ${
                      activeTab === "description"
                        ? "border-accent text-foreground"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                    onClick={() => setActiveTab("description")}
                  >
                    Description
                  </button>
                  <button
                    className={`py-3 px-4 font-medium text-sm transition-colors border-b-2 -mb-px ${
                      activeTab === "details"
                        ? "border-accent text-foreground"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                    onClick={() => setActiveTab("details")}
                  >
                    Details
                  </button>
                </div>
                <div className="py-4">
                  {activeTab === "description" ? (
                    <p className="text-muted-foreground">
                      {product.description}
                    </p>
                  ) : (
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {product.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Related Products Section */}
          {relatedProducts.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-semibold mb-8">You May Also Like</h2>
              <div className="product-grid">
                {relatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetails;
