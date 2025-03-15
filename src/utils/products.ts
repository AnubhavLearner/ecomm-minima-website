
import { Product } from './types';

export const products: Product[] = [
  {
    id: "aaaaa",
    name: "Premium Wireless Headphones",
    category: "Audio",
    price: 299.99,
    discountPrice: 249.99,
    rating: 4.8,
    reviews: 245,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: ["#000000", "#FFFFFF", "#C0C0C0"],
    description: "Experience immersive sound with our flagship wireless headphones. Featuring active noise cancellation, premium audio drivers, and up to 30 hours of battery life.",
    details: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Premium audio drivers",
      "Bluetooth 5.2 connectivity",
      "Comfortable over-ear design",
      "Quick charge - 5 hours in 10 minutes"
    ],
    featured: true,
    bestSeller: true
  },
  {
    id: "aaaab",
    name: "Ultra-Slim Laptop Pro",
    category: "Computers",
    price: 1499.99,
    rating: 4.9,
    reviews: 187,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602080858428-57174f9431cf?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: ["#808080", "#C0C0C0"],
    description: "Powerful performance in an ultralight package. This premium laptop features the latest processor, stunning display, and all-day battery life in a sleek, minimalist design.",
    details: [
      "Latest generation processor",
      "16GB RAM, 512GB SSD",
      "14-inch 4K display",
      "Ultra-thin aluminum chassis",
      "All-day battery life",
      "Thunderbolt 4 ports"
    ],
    featured: true,
    new: true
  },
  {
    id: "aaaac",
    name: "Smart Fitness Watch",
    category: "Wearables",
    price: 199.99,
    discountPrice: 169.99,
    rating: 4.6,
    reviews: 312,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: ["#000000", "#FFFFFF", "#FF0000"],
    sizes: ["S", "M", "L"],
    description: "Take control of your fitness journey with our advanced smart watch. Track workouts, monitor health metrics, and stay connected with notifications, all with a sleek, minimalist design.",
    details: [
      "Advanced health monitoring",
      "20+ workout modes",
      "GPS tracking",
      "5 ATM water resistance",
      "7-day battery life",
      "Always-on display"
    ],
    bestSeller: true
  },
  {
    id: "aaaad",
    name: "Minimalist Desk Lamp",
    category: "Home",
    price: 79.99,
    rating: 4.7,
    reviews: 128,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: ["#000000", "#FFFFFF", "#C0C0C0"],
    description: "Elevate your workspace with our minimalist desk lamp. Featuring adjustable brightness, color temperature control, and a sleek, modern design that complements any interior.",
    details: [
      "Adjustable brightness levels",
      "Color temperature control",
      "Touch-sensitive controls",
      "USB charging port",
      "Energy-efficient LED",
      "5-year warranty"
    ],
    featured: true
  },
  {
    id: "aaaae",
    name: "Premium Wireless Earbuds",
    category: "Audio",
    price: 149.99,
    discountPrice: 129.99,
    rating: 4.5,
    reviews: 276,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: ["#000000", "#FFFFFF", "#0000FF"],
    description: "Immerse yourself in premium audio with our wireless earbuds. Enjoy crystal-clear sound, active noise cancellation, and a comfortable fit for all-day listening.",
    details: [
      "Active noise cancellation",
      "8-hour battery life (28 with case)",
      "Water and sweat resistant",
      "Touch controls",
      "Wireless charging case",
      "Customizable ear tips"
    ],
    new: true
  },
  {
    id: "aaaaf",
    name: "Designer Mechanical Keyboard",
    category: "Accessories",
    price: 159.99,
    rating: 4.7,
    reviews: 142,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618384887517-7ced21a2ca1e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598662779094-110c2bad80b5?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: ["#000000", "#808080", "#C0C0C0"],
    description: "Elevate your typing experience with our premium mechanical keyboard. Featuring tactile switches, customizable RGB lighting, and a sleek, minimalist design built to last.",
    details: [
      "Premium mechanical switches",
      "Customizable RGB lighting",
      "Aircraft-grade aluminum frame",
      "Programmable keys",
      "Detachable USB-C cable",
      "Compatible with all major operating systems"
    ],
    featured: true
  },
  {
    id: "aaaag",
    name: "Smart Home Hub",
    category: "Smart Home",
    price: 129.99,
    rating: 4.6,
    reviews: 198,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1558002038-1055e2cfae43?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551651056-3746090fbdda?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522050212171-61b01dd24579?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: ["#FFFFFF", "#808080"],
    description: "Control your entire smart home ecosystem with our intuitive hub. Connect lights, thermostats, security, and more from a single, elegant device with voice and app control.",
    details: [
      "Compatible with 100+ smart devices",
      "Voice assistant integration",
      "Easy setup process",
      "Energy usage tracking",
      "Custom routines and automations",
      "Advanced security protocols"
    ],
    new: true
  },
  {
    id: "aaaah",
    name: "Minimalist Leather Wallet",
    category: "Accessories",
    price: 49.99,
    rating: 4.8,
    reviews: 215,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1556382363-8427ffa64068?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614254613444-0a5cb1c272c2?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: ["#000000", "#964B00", "#808080"],
    description: "Carry your essentials in style with our minimalist leather wallet. Crafted from premium full-grain leather, featuring a slim profile with smart organization for cards and cash.",
    details: [
      "Premium full-grain leather",
      "RFID blocking technology",
      "Ultra-slim profile",
      "6 card slots and cash pocket",
      "Hand-stitched details",
      "Ages beautifully with use"
    ],
    bestSeller: true
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getBestSellerProducts = (): Product[] => {
  return products.filter(product => product.bestSeller);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.new);
};

export const getRelatedProducts = (currentProductId: string, category: string): Product[] => {
  return products
    .filter(product => product.id !== currentProductId && product.category === category)
    .slice(0, 4);
};
