"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { Meal } from "@/lib/types/meals";

type CartContextType = {
  cart: Meal[];
  addToCart: (meal: Meal) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

const CART_KEY = "food_app_cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Meal[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem(CART_KEY);
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (meal: Meal) => {
    const exist = cart.find((item) => item.id === meal.id);
    if (exist) {
      return;
    } else {
      setCart((item) => [...item, meal]);
    }
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}
