"use client";

import { useMemo, useState } from "react";
import MealsList from "./MealsList";
import { Meal } from "@/lib/types/meals";

type Props = {
  meals: Meal[];
};

export default function MealsSearch({ meals }: Props) {
  const [query, setQuery] = useState("");

  const filteredMeals = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return meals;

    return meals.filter((meal) => meal.name.toLowerCase().includes(q));
  }, [query, meals]);

  return (
    <div>
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search meals..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-md rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-zinc-100 placeholder-zinc-500 outline-none focus:border-emerald-500 transition"
        />
      </div>

      {filteredMeals.length > 0 ? (
        <MealsList meals={filteredMeals} />
      ) : (
        <p className="text-zinc-400 text-center mt-20">No meals found 🍽️</p>
      )}
    </div>
  );
}
