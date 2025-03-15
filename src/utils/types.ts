
export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  images: string[];
  rating: number;
  reviews: number;
  stock: number;
  brand: string;
  featured: boolean;
  colors?: string[];
  sizes?: string[];
  // Add missing properties
  bestSeller?: boolean;
  new?: boolean;
  discountPrice?: number;
  details?: string[];
  inStock?: boolean;
};

export type Category = {
  id: string;
  name: string;
  count: number;
};
