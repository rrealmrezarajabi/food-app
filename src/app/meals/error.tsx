"use client";

import Link from "next/link";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function MealsPageError({ error, reset }: Props) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 text-center">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-zinc-100">
          Couldn’t load meals 🍽️
        </h1>

        <p className="mt-4 text-zinc-400 leading-relaxed">
          Something went wrong while fetching the meals. Please try again or
          come back later.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-zinc-950 hover:bg-emerald-400 transition"
          >
            Retry
          </button>

          <Link
            href="/"
            className="rounded-xl border border-zinc-700 bg-zinc-950 px-5 py-3 font-semibold text-zinc-100 hover:bg-zinc-800 transition"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
