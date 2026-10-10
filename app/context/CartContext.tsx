'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { JuiceItem } from '../data/juices';

export interface CartItem {
  juice: JuiceItem;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (juice: JuiceItem, qty?: number) => void;
  removeFromCart: (juiceId: string) => void;
  updateQuantity: (juiceId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load cart from localStorage on client mount if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem('zest_cart');
      if (saved) {
        setCart(JSON.parse(saved));
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('zest_cart', JSON.stringify(cart));
    } catch {
      // Ignore
    }
  }, [cart]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3200);
  };

  const addToCart = (juice: JuiceItem, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.juice.id === juice.id);
      if (existing) {
        return prev.map((item) =>
          item.juice.id === juice.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }
      return [...prev, { juice, quantity: qty }];
    });
    showToast(`Added ${juice.name} to your order! 🍊`);
  };

  const removeFromCart = (juiceId: string) => {
    setCart((prev) => prev.filter((item) => item.juice.id !== juiceId));
  };

  const updateQuantity = (juiceId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(juiceId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.juice.id === juiceId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce(
    (sum, item) => sum + item.juice.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        isCartOpen,
        setIsCartOpen,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
