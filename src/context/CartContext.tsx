"use client";
import { createContext, useContext, useState } from "react";
import { Meal } from "@/lib/types/meals";

interface cartItem extends Meal{
    qty:number
}

type CartContextType = {
  cart: cartItem[];
  addToCart: (meal: Meal) => void;
  removeFromCart:(id:number)=> void
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<cartItem[]>([]);

  const addToCart = (meal:Meal) => {
    const exist = cart.find((item)=> item.id === meal.id)
    if(exist){
        setCart(
            cart.map((item)=> item.id === meal.id ? {...item , qty:item.qty + 1 } : item)
        )
    }
    else{
        setCart([...cart , {...meal , qty:1}])
    }
  };

  const removeFromCart = (id:number) => {
    setCart(
        cart.filter((item=> item.id !== id))
    )
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
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
