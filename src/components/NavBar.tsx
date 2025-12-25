"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="w-full bg-zinc-900 text-zinc-100 shadow-lg px-7 py-4 flex items-center justify-between">
      <Link href="/">
        <div className="text-2xl font-bold text-emerald-400">Food App</div>
      </Link>

      <div className="flex gap-6 font-medium items-center">
        <Link
          href="/meals"
          className="text-zinc-300 hover:text-emerald-400 transition-colors"
        >
          Explore Meals
        </Link>

        <Link
          href="/community"
          className="text-zinc-300 hover:text-emerald-400 transition-colors"
        >
          Join Community
        </Link>

        <Link
          href="/cart"
          className="relative text-zinc-300 hover:text-emerald-400 transition-colors"
        >
          Cart
          {cart.length > 0 && (
            <span className="absolute -top-3 -right-5 bg-emerald-500 text-black text-xs font-bold px-2 py-0.5 rounded-full">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
