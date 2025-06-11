
import React, { createContext, useContext, useState, useMemo } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const initialCartItems = [
    {
      id: '1',
      name: 'Menú del Día',
      price: 30.0,
      discount: 10,
      image: [{ url: 'https://via.placeholder.com/80?text=Menú' }],
      quantity: 1,
    },
    {
      id: '2',
      name: 'Bebida Refrescante',
      price: 5.0,
      discount: 0,
      image: [{ url: 'https://via.placeholder.com/80?text=Bebida' }],
      quantity: 2,
    },
  ];
  const [cartItems, setCartItems] = useState(initialCartItems);

  const subTotal = useMemo(() => {
    return cartItems.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);
  }, [cartItems]);

  const getCartTotal = () => {
    return cartItems.reduce((sum, item) => {
      const priceAfterDiscount = item.price - (item.price * (item.discount/100));
      return sum + priceAfterDiscount * item.quantity;
    }, 0);
  };

  const removeFromCart = (itemId) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQty) => {
    setCartItems(prev =>
      prev.map(item => {
        if (item.id === itemId) {
          const qty = Math.max(1, newQty);
          return { ...item, quantity: qty };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    getCartTotal,
    removeFromCart,
    updateQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de un CartProvider');
  }
  return context;
};
