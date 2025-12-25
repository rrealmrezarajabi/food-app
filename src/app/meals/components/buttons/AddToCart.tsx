"use client";
import { Meal } from "@/lib/types/meals";
import { useCart } from "@/context/CartContext";

type Props = {
  meal: Meal;
};

export default function AddToCartButton({ meal }: Props) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(meal)}
      className="text-sm px-3 py-1.5 rounded-lg bg-emerald-500 text-black font-medium hover:bg-emerald-400 transition"
    >
      Add
    </button>
  );
}
