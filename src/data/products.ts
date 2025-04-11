
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
    category: "Electronics",
    rating: 4.5,
    description: "Experience crystal clear audio with our premium wireless headphones. Features active noise cancellation and 30-hour battery life."
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Electronics",
    rating: 4.3,
    description: "Stay connected with our Smart Watch Pro. Track your fitness goals, receive notifications, and monitor your health metrics."
  },
  {
    id: 3,
    name: "Ergonomic Office Chair",
    price: 299.95,
    image: "https://images.unsplash.com/photo-1595971294624-80bcf0d7eb24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D",
    category: "Furniture",
    rating: 4.7,
    description: "Work in comfort with our ergonomic office chair designed to provide maximum support for your back and posture."
  },
  {
    id: 4,
    name: "Professional DSLR Camera",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FtZXJhfGVufDB8fDB8fHww",
    category: "Electronics",
    rating: 4.8,
    description: "Capture stunning photos and videos with our professional DSLR camera featuring advanced image stabilization."
  },
  {
    id: 5,
    name: "Minimalist Desk Lamp",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFtcHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Home Decor",
    rating: 4.2,
    description: "Add elegance to your workspace with our minimalist desk lamp featuring adjustable brightness levels."
  },
  {
    id: 6,
    name: "Organic Cotton Sweater",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
    category: "Clothing",
    rating: 4.0,
    description: "Stay warm and stylish with our organic cotton sweater, perfect for layering in cooler weather."
  },
  {
    id: 7,
    name: "Ultra-thin Laptop",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fHww",
    category: "Electronics",
    rating: 4.6,
    description: "Powerful yet lightweight ultra-thin laptop with all-day battery life and stunning display."
  },
  {
    id: 8,
    name: "Handcrafted Ceramic Mug",
    price: 24.95,
    image: "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVnfGVufDB8fDB8fHww",
    category: "Home Decor",
    rating: 4.4,
    description: "Enjoy your favorite beverages in our handcrafted ceramic mug, available in multiple colors and designs."
  },
  {
    id: 9,
    name: "Indoor Plant Collection",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsYW50fGVufDB8fDB8fHww",
    category: "Home Decor",
    rating: 4.1,
    description: "Bring nature indoors with our collection of easy-to-maintain indoor plants to purify your air."
  },
  {
    id: 10,
    name: "Premium Yoga Mat",
    price: 89.95,
    image: "https://images.unsplash.com/photo-1591291621164-2c6367723315?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eW9nYSUyMG1hdHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Sports & Fitness",
    rating: 4.9,
    description: "Enhance your yoga practice with our premium non-slip yoga mat made from eco-friendly materials."
  },
  {
    id: 11,
    name: "Bluetooth Portable Speaker",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
    category: "Electronics",
    rating: 4.2,
    description: "Take your music anywhere with our waterproof bluetooth portable speaker with 20 hours of playback time."
  },
  {
    id: 12,
    name: "Leather Wallet",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbGV0fGVufDB8fDB8fHww",
    category: "Accessories",
    rating: 4.5,
    description: "Classic genuine leather wallet with multiple card slots and RFID protection technology."
  }
];

export const categories = Array.from(new Set(products.map(product => product.category)));

export const priceRange = {
  min: Math.min(...products.map(product => product.price)),
  max: Math.max(...products.map(product => product.price))
};
