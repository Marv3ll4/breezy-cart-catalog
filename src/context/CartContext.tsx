
import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Product } from '@/data/products';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  itemCount: number;
  total: number;
}

type CartAction = 
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: number }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'CLEAR_CART' };

interface CartContextType {
  state: CartState;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
}

const initialState: CartState = {
  items: [],
  itemCount: 0,
  total: 0
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(item => item.product.id === action.payload.id);
      
      if (existingItemIndex >= 0) {
        // Item exists, increase quantity
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1
        };
        
        return {
          ...state,
          items: updatedItems,
          itemCount: state.itemCount + 1,
          total: state.total + action.payload.price
        };
      } else {
        // New item
        return {
          ...state,
          items: [...state.items, { product: action.payload, quantity: 1 }],
          itemCount: state.itemCount + 1,
          total: state.total + action.payload.price
        };
      }
    }
    
    case 'REMOVE_ITEM': {
      const itemIndex = state.items.findIndex(item => item.product.id === action.payload);
      if (itemIndex === -1) return state;
      
      const item = state.items[itemIndex];
      const updatedTotal = state.total - (item.product.price * item.quantity);
      const updatedItemCount = state.itemCount - item.quantity;
      
      return {
        ...state,
        items: state.items.filter(item => item.product.id !== action.payload),
        itemCount: updatedItemCount,
        total: updatedTotal
      };
    }
    
    case 'UPDATE_QUANTITY': {
      const itemIndex = state.items.findIndex(item => item.product.id === action.payload.id);
      if (itemIndex === -1) return state;
      
      const item = state.items[itemIndex];
      const quantityDifference = action.payload.quantity - item.quantity;
      
      if (action.payload.quantity <= 0) {
        // Remove item if quantity is 0 or negative
        return {
          ...state,
          items: state.items.filter(item => item.product.id !== action.payload.id),
          itemCount: state.itemCount - item.quantity,
          total: state.total - (item.product.price * item.quantity)
        };
      }
      
      const updatedItems = [...state.items];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        quantity: action.payload.quantity
      };
      
      return {
        ...state,
        items: updatedItems,
        itemCount: state.itemCount + quantityDifference,
        total: state.total + (quantityDifference * item.product.price)
      };
    }
    
    case 'CLEAR_CART':
      return initialState;
      
    default:
      return state;
  }
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  
  const addToCart = (product: Product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };
  
  const removeFromCart = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };
  
  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };
  
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  
  return (
    <CartContext.Provider value={{ 
      state, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
