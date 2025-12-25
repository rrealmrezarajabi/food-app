"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart(); 

  if (cart.length === 0) {
    return (
      <section className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold">Your Cart</h1>
        <p className="mt-3 text-zinc-400">Your cart is empty.</p>

        <Link
          href="/meals"
          className="inline-block mt-6 px-4 py-2 rounded-lg bg-emerald-500 text-black font-medium hover:bg-emerald-400 transition"
        >
          Browse meals
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-4xl mx-auto">
      <div className="flex items-end justify-between gap-4">
        <h1 className="text-2xl font-bold">Your Cart</h1>
        <p className="text-zinc-400 text-sm">
          Items:{" "}
          <span className="text-zinc-100 font-medium">{cart.length}</span>
        </p>
      </div>

      <div className="mt-6 grid gap-4">
        {cart.map((meal) => (
          <div
            key={meal.id}
            className="flex gap-4 bg-zinc-900 border border-zinc-800 rounded-2xl p-4"
          >
            <div className="relative w-28 h-20 overflow-hidden rounded-xl border border-zinc-800">
              <Image
                src={meal.image}
                alt={meal.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h2 className="font-semibold text-zinc-100 truncate">
                {meal.name}
              </h2>
              <p className="mt-1 text-sm text-zinc-400 line-clamp-2">
                {meal.instructions}
              </p>

              <div className="mt-3 flex justify-between items-center">
                <Link
                  href={`/meals/${meal.id}`}
                  className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition"
                >
                  View recipe →
                </Link>
                <button
                  onClick={() => removeFromCart(meal.id)}
                  className="px-4 py-2 rounded-lg border border-zinc-800 text-zinc-200 hover:border-red-500 transition"
                >
                  Remove From Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between gap-3">
        <Link
          href="/meals"
          className="px-4 py-2 rounded-lg border border-zinc-800 text-zinc-200 hover:border-emerald-500/50 transition"
        >
          Add more
        </Link>
        <button className="px-4 py-2 rounded-lg border border-zinc-800 text-zinc-200 hover:border-red-500 transition">
          clear cart
        </button>
      </div>
    </section>
  );
}
