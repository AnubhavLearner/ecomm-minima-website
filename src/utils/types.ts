
export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  images: string[];
  rating: number;
  reviews: number;
  brand: string;
  featured: boolean;
  stock?: number;  // Make stock optional
  colors?: string[];
  sizes?: string[];
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
