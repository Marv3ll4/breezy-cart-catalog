
import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, StarHalf, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Product } from '@/data/products';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart(product);
    toast(`Added ${product.name} to cart`, {
      description: `$${product.price.toFixed(2)}`,
    });
  };

  // Render stars based on rating
  const renderRating = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    return (
      <div className="star-rating">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`star-${i}`} className="fill-yellow-400 text-yellow-400" size={16} />
        ))}
        {hasHalfStar && <StarHalf className="fill-yellow-400 text-yellow-400" size={16} />}
        <span className="ml-1 text-sm text-gray-600">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <div className="product-card-transition hover-scale bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-primary rounded-full text-xs px-2 py-1 text-white">
          {product.category}
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-lg mb-1 line-clamp-2">{product.name}</h3>
        <p className="text-primary font-bold mb-2">${product.price.toFixed(2)}</p>
        <div className="mb-3">
          {renderRating(product.rating)}
        </div>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-grow">{product.description}</p>
        <Button 
          className="mt-auto w-full flex items-center justify-center gap-2" 
          onClick={handleAddToCart}
        >
          <ShoppingCart size={18} />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
