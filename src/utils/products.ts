
import { Product } from "./types";

// Mock products data
const products: Product[] = [
  {
    id: "p1",
    name: "Wireless Noise-Cancelling Headphones",
    category: "Audio",
    price: 349.99,
    rating: 4.8,
    reviews: 1254,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=1000&auto=format&fit=crop",
    ],
    colors: ["#000000", "#ffffff", "#c0c0c0"],
    description: "Premium wireless headphones with industry-leading noise cancellation technology.",
    details: [
      "Up to 30 hours of battery life",
      "Active Noise Cancellation",
      "Bluetooth 5.0 connectivity",
      "Touch controls",
      "Compatible with voice assistants",
    ],
    featured: true,
    bestSeller: true,
  },
  {
    id: "p2",
    name: "Ultra-Thin Laptop",
    category: "Computing",
    price: 1299.99,
    rating: 4.7,
    reviews: 876,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593642634367-d91a135587b5?q=80&w=1000&auto=format&fit=crop",
    ],
    colors: ["#808080", "#c0c0c0"],
    description: "Powerful yet incredibly thin and light laptop for professionals on the go.",
    details: [
      "12th Gen Intel Core i7 processor",
      "16GB RAM",
      "512GB SSD",
      "14-inch 4K display",
      "12 hours battery life",
    ],
    featured: true,
  },
  {
    id: "p3",
    name: "Smart Watch Series 5",
    category: "Wearables",
    price: 399.99,
    discountPrice: 349.99,
    rating: 4.6,
    reviews: 743,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1000&auto=format&fit=crop",
    ],
    colors: ["#000000", "#c0c0c0", "#FFD700"],
    sizes: ["38mm", "42mm"],
    description: "Advanced smartwatch with health tracking features and always-on display.",
    details: [
      "ECG and heart rate monitoring",
      "Water resistant to 50 meters",
      "GPS + Cellular",
      "Always-on Retina display",
      "18-hour battery life",
    ],
    featured: true,
    bestSeller: true,
    new: true,
  },
  {
    id: "p4",
    name: "Wireless Earbuds Pro",
    category: "Audio",
    price: 199.99,
    rating: 4.5,
    reviews: 892,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1628786078129-88f7255299dd?q=80&w=1000&auto=format&fit=crop",
    ],
    colors: ["#000000", "#ffffff"],
    description: "True wireless earbuds with active noise cancellation and spatial audio.",
    details: [
      "Active Noise Cancellation",
      "Transparency mode",
      "Spatial audio with dynamic head tracking",
      "Sweat and water resistant",
      "Up to 6 hours of listening time",
    ],
    bestSeller: true,
  },
  {
    id: "p5",
    name: "4K Ultra HD Smart TV",
    category: "Computing",
    price: 1499.99,
    discountPrice: 1299.99,
    rating: 4.4,
    reviews: 512,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601944179066-29b8f7e24a3e?q=80&w=1000&auto=format&fit=crop",
    ],
    description: "Premium 4K Ultra HD Smart TV with OLED display technology.",
    details: [
      "65-inch OLED display",
      "4K Ultra HD resolution",
      "Smart TV with voice control",
      "Dolby Vision and Atmos",
      "Multiple HDMI and USB ports",
    ],
    featured: true,
  },
  {
    id: "p6",
    name: "Premium Mechanical Keyboard",
    category: "Accessories",
    price: 149.99,
    rating: 4.9,
    reviews: 324,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1619008054559-aa8c110d0e0f?q=80&w=1000&auto=format&fit=crop",
    ],
    colors: ["#000000", "#c0c0c0", "#008080"],
    description: "High-performance mechanical keyboard with customizable RGB lighting.",
    details: [
      "Mechanical switches with 50 million keystroke lifespan",
      "Full RGB backlighting with per-key customization",
      "Aircraft-grade aluminum frame",
      "Detachable USB-C cable",
      "Programmable macros",
    ],
    new: true,
  },
  {
    id: "p7",
    name: "Wireless Charging Pad",
    category: "Accessories",
    price: 59.99,
    discountPrice: 49.99,
    rating: 4.3,
    reviews: 278,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1625768376503-68d2495d78c4?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1658946699372-a04fae19ab0b?q=80&w=1000&auto=format&fit=crop",
    ],
    colors: ["#000000", "#ffffff"],
    description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
    details: [
      "15W fast charging",
      "Slim and compact design",
      "LED charging indicator",
      "Foreign object detection",
      "Overcharge protection",
    ],
    bestSeller: true,
  },
  {
    id: "p8",
    name: "Smart Home Hub",
    category: "Computing",
    price: 129.99,
    rating: 4.2,
    reviews: 156,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1558002038-1055e2e89a68?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596207891316-23851be3cc20?q=80&w=1000&auto=format&fit=crop",
    ],
    colors: ["#ffffff", "#000000", "#808080"],
    description: "Central hub for controlling all your smart home devices.",
    details: [
      "Compatible with 1000+ smart home devices",
      "Voice control capability",
      "Energy usage monitoring",
      "Custom automation routines",
      "Advanced security features",
    ],
    new: true,
  },
  {
    id: "p9",
    name: "Portable Bluetooth Speaker",
    category: "Audio",
    price: 99.99,
    rating: 4.4,
    reviews: 421,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1000&auto=format&fit=crop",
    ],
    colors: ["#000000", "#FF0000", "#0000FF"],
    description: "Durable, waterproof Bluetooth speaker with exceptional sound quality.",
    details: [
      "20 hours battery life",
      "IPX7 waterproof rating",
      "Built-in microphone for calls",
      "Connect multiple speakers",
      "Compact and portable design",
    ],
    featured: true,
  },
  {
    id: "p10",
    name: "Ergonomic Office Chair",
    category: "Accessories",
    price: 299.99,
    discountPrice: 249.99,
    rating: 4.7,
    reviews: 189,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589884629108-3193400c7cc9?q=80&w=1000&auto=format&fit=crop",
    ],
    colors: ["#000000", "#808080", "#A52A2A"],
    description: "Premium ergonomic office chair designed for comfort during long work sessions.",
    details: [
      "Adjustable lumbar support",
      "4D armrests",
      "Breathable mesh backrest",
      "Adjustable headrest",
      "5-year warranty",
    ],
  },
  {
    id: "p11",
    name: "Fitness Tracker Band",
    category: "Wearables",
    price: 89.99,
    rating: 4.3,
    reviews: 345,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?q=80&w=1000&auto=format&fit=crop",
    ],
    colors: ["#000000", "#FF0000", "#008000"],
    sizes: ["S", "M", "L"],
    description: "Advanced fitness tracker with heart rate monitoring and GPS.",
    details: [
      "24/7 heart rate monitoring",
      "Built-in GPS",
      "Sleep tracking",
      "Water resistant to 50m",
      "7-day battery life",
    ],
    new: true,
  },
  {
    id: "p12",
    name: "Wireless Gaming Mouse",
    category: "Accessories",
    price: 79.99,
    rating: 4.6,
    reviews: 267,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1605773527852-c546a8584ea3?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614775077393-5eceafb4be46?q=80&w=1000&auto=format&fit=crop",
    ],
    colors: ["#000000", "#FF0000"],
    description: "High-precision wireless gaming mouse with customizable buttons.",
    details: [
      "25,000 DPI optical sensor",
      "Ultra-low latency wireless connection",
      "8 programmable buttons",
      "RGB lighting",
      "70-hour battery life",
    ],
    bestSeller: true,
  },
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getBestSellerProducts = (): Product[] => {
  return products.filter(product => product.bestSeller);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.new);
};

export const getAllProducts = (): Product[] => {
  return products;
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (category: string, currentId: string): Product[] => {
  return products
    .filter(product => product.category === category && product.id !== currentId)
    .slice(0, 4);
};
