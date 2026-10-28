import type { Product } from "../types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "Comfortable headphones with clear sound.",
    price: 2499,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    rating: 4.7,
    stock: 18,
    vendorName: "Sound House",
  },
  {
    id: 2,
    name: "Classic Wristwatch",
    description: "A simple watch for everyday use.",
    price: 1799,
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    rating: 4.5,
    stock: 12,
    vendorName: "Time Avenue",
  },
  {
    id: 3,
    name: "Everyday Backpack",
    description: "A spacious backpack for work and travel.",
    price: 1299,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
    rating: 4.4,
    stock: 25,
    vendorName: "Urban Bags",
  },
  {
    id: 4,
    name: "Running Sneakers",
    description: "Lightweight sneakers for everyday movement.",
    price: 2199,
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    rating: 4.8,
    stock: 9,
    vendorName: "Active Wear",
  },
  {
    id: 5,
    name: "Desk Lamp",
    description: "A modern lamp for your study or workspace.",
    price: 899,
    category: "Home",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600",
    rating: 4.3,
    stock: 20,
    vendorName: "Bright Living",
  },
  {
    id: 6,
    name: "Travel Camera",
    description: "Capture your favorite moments on the go.",
    price: 15999,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600",
    rating: 4.6,
    stock: 6,
    vendorName: "Pixel Store",
  },
];