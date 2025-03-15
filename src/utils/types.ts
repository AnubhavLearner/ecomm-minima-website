
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  discountPrice?: number;
  rating: number;
  reviews: number;
  inStock: boolean;
  images: string[];
  colors?: string[];
  sizes?: string[];
  description: string;
  details: string[];
  featured?: boolean;
  bestSeller?: boolean;
  new?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  color?: string;
  size?: string;
}
