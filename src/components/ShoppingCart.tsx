
import React from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ShoppingBag, ShoppingCart as CartIcon } from 'lucide-react';
import CartItem from './CartItem';
import { useCart } from '@/context/CartContext';
import { Separator } from '@/components/ui/separator';

interface ShoppingCartProps {
  isOpen: boolean;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ isOpen }) => {
  const { state, clearCart } = useCart();
  const { items, itemCount, total } = state;

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="p-4 bg-gray-50 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <CartIcon className="h-5 w-5" />
            <h2 className="font-medium">Shopping Cart ({itemCount})</h2>
          </div>
          <Button variant="ghost" size="sm" onClick={clearCart} disabled={items.length === 0}>
            Clear
          </Button>
        </div>

        {items.length > 0 ? (
          <>
            <ScrollArea className="flex-grow p-4">
              <div className="space-y-2">
                {items.map((item) => (
                  <React.Fragment key={item.product.id}>
                    <CartItem product={item.product} quantity={item.quantity} />
                    <Separator />
                  </React.Fragment>
                ))}
              </div>
            </ScrollArea>

            <div className="p-4 bg-gray-50 border-t">
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-gray-600">Subtotal:</div>
                <div className="font-medium">${total.toFixed(2)}</div>
              </div>

              <Button className="w-full" size="lg">
                Checkout (${total.toFixed(2)})
              </Button>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center flex-grow p-4 text-center">
            <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
            <h3 className="text-xl font-medium text-gray-800 mb-2">Your cart is empty</h3>
            <p className="text-gray-500 mb-6">Start adding items to your cart!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
