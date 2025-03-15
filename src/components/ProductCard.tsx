
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/utils/types";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <Link
      to={`/productDetails/${product.id}`}
      className="group relative flex flex-col bg-background rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-secondary/20">
        {!imageLoaded && (
          <div className="absolute inset-0 image-shimmer" />
        )}
        
        <img
          src={isHovered && product.images.length > 1 ? product.images[1] : product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={handleImageLoad}
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.new && (
            <span className="text-xs font-medium px-2 py-1 bg-accent text-white rounded">
              New
            </span>
          )}
          {product.bestSeller && (
            <span className="text-xs font-medium px-2 py-1 bg-primary text-white rounded">
              Best Seller
            </span>
          )}
          {product.discountPrice && (
            <span className="text-xs font-medium px-2 py-1 bg-destructive text-white rounded">
              Sale
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <Button
          variant="secondary"
          size="icon"
          className={`absolute top-3 right-3 h-8 w-8 rounded-full transition-all duration-300 ${
            isFavorite ? "bg-destructive text-white" : "bg-background/80 text-foreground"
          }`}
          onClick={toggleFavorite}
        >
          <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
        </Button>
      </div>

      {/* Product Info */}
      <div className="flex flex-col p-4 flex-grow">
        <div className="mb-1 text-sm text-muted-foreground">{product.category}</div>
        <h3 className="font-medium line-clamp-1 text-foreground transition-colors group-hover:text-accent">
          {product.name}
        </h3>
        
        {/* Price */}
        <div className="mt-2 flex items-center gap-2">
          {product.discountPrice ? (
            <>
              <span className="font-semibold">${product.discountPrice.toFixed(2)}</span>
              <span className="text-sm text-muted-foreground line-through">${product.price.toFixed(2)}</span>
            </>
          ) : (
            <span className="font-semibold">${product.price.toFixed(2)}</span>
          )}
        </div>

        {/* Ratings */}
        <div className="mt-2 flex items-center">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
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
          <span className="ml-1 text-xs text-muted-foreground">
            ({product.reviews})
          </span>
        </div>

        {/* Available Colors */}
        {product.colors && product.colors.length > 0 && (
          <div className="mt-3 flex gap-1">
            {product.colors.map((color, idx) => (
              <div
                key={idx}
                className="w-4 h-4 rounded-full border border-border"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Quick add button appears on hover/touch */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 sm:hidden md:block touch-manipulation">
        <Button className="w-full" variant="secondary" size="sm">
          <ShoppingBag className="h-4 w-4 mr-2" />
          Quick Add
        </Button>
      </div>
      
      {/* Always visible on mobile */}
      <div className="p-4 pt-0 md:hidden">
        <Button className="w-full" variant="secondary" size="sm">
          <ShoppingBag className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </Link>
  );
};

export default ProductCard;
