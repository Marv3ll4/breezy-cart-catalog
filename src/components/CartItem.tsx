
import React from 'react';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Product } from '@/data/products';

interface CartItemProps {
  product: Product;
  quantity: number;
}

const CartItem: React.FC<CartItemProps> = ({ product, quantity }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const subtotal = product.price * quantity;

  const handleDecrease = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    } else {
      removeFromCart(product.id);
    }
  };

  const handleIncrease = () => {
    updateQuantity(product.id, quantity + 1);
  };

  return (
    <div className="flex items-center py-4 gap-4 cart-item-transition">
      <div className="h-20 w-20 rounded-md overflow-hidden flex-shrink-0">
        <img 
          src={product.image} 
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="flex-grow min-w-0">
        <h4 className="font-medium text-sm line-clamp-1">{product.name}</h4>
        <div className="text-sm text-gray-500 mt-1">${product.price.toFixed(2)}</div>
        
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              className="h-7 w-7"
              onClick={handleDecrease}
            >
              <Minus className="h-3 w-3" />
            </Button>
            
            <span className="w-6 text-center">{quantity}</span>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="h-7 w-7"
              onClick={handleIncrease}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
      </div>
      
      <Button 
        variant="ghost" 
        size="icon"
        className="text-gray-400 hover:text-red-500"
        onClick={() => removeFromCart(product.id)}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default CartItem;
