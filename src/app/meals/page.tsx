import { getMeals } from "@/lib/api/meals";
import { Meal } from "@/lib/types/meals";
import MealsSearch from "./components/MealsSearch";

export default async function MealsPage() {
  const meals: Meal[] = await getMeals();

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-zinc-100">Explore Meals</h1>
        <p className="mt-2 text-zinc-400">
          Discover tasty meals and simple recipes.
        </p>
      </div>

      
      <MealsSearch meals={meals} />
    </div>
  );
}
