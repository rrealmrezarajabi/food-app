"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import { Meal } from "@/lib/types/meals";

type CartContextType = {
  cart: Meal[];
  addToCart: (meal: Meal) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

const CART_KEY = "food_app_cart";

type Action =
  | { type: "LOAD"; payload: Meal[] }
  | { type: "ADD"; payload: Meal }
  | { type: "REMOVE"; payload: number }
  | { type: "CLEAR" };

function cartReducer(cart: Meal[], action: Action): Meal[] {
  switch (action.type) {
    case "LOAD":
      return action.payload;
    case "ADD": {
      const meal = action.payload;
      const exist = cart.some((item) => item.id === meal.id);
      if (exist) return cart;
      return [...cart, meal];
    }

    case "REMOVE": {
      const mealId = action.payload;
      return cart.filter((item) => item.id !== mealId);
    }
    case "CLEAR":
      return [];
    default:
      return cart;
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  // const [cart, setCart] = useState<Meal[]>([]);
  const [cart, dispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    const storedCart = localStorage.getItem(CART_KEY);
    if (storedCart) {
      // setCart(JSON.parse(storedCart));
      dispatch({ type: "LOAD", payload: JSON.parse(storedCart) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (meal: Meal) => dispatch({ type: "ADD", payload: meal });

  const removeFromCart = (id: number) =>
    dispatch({ type: "REMOVE", payload: id });

  const clearCart = () => dispatch({ type: "CLEAR" });

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
