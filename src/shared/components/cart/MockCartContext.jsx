
import React, { createContext, useContext, useState, useMemo } from 'react';
import pollo from '../../../assets/pollo01.png'
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const initialCartItems = [
    {
      id: '1',
      name: '1/4 pollo con papas + ensalada + gaseosa de dos litros y papa al horno',
      price: 30.0,
      discount: 10,
      image: [{ url: pollo }],
      quantity: 1,
    },
    {
      id: '2',
      name: 'Bebida Refrescante',
      price: 5.0,
      discount: 0,
      image: [{ url: pollo}],
      quantity: 2,
    },
    {
      id: '2',
      name: 'Bebida Refrescante',
      price: 5.0,
      discount: 0,
      image: [{ url: pollo}],
      quantity: 2,
    },
    {
      id: '2',
      name: 'Bebida Refrescante',
      price: 5.0,
      discount: 0,
      image: [{ url: pollo}],
      quantity: 2,
    },
    {
      id: '2',
      name: 'Bebida Refrescante',
      price: 5.0,
      discount: 0,
      image: [{ url: pollo}],
      quantity: 2,
    },
  ];
  const [cartItems, setCartItems] = useState(initialCartItems);

  // Abrir/cerrar sidebar
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  // Calcular total bruto sin descuentos
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
    openCart,
    closeCart,
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
