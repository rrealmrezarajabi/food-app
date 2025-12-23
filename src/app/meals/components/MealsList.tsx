import Image from "next/image";
import { Meal } from "@/lib/types/meals";
import Link from "next/link";
interface MealsListProps {
  meals: Meal[];
}

const MealsList = ({ meals }: MealsListProps) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {meals.map((meal) => (
        <div
          key={meal.id}
          className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-emerald-500/40 transition"
        >
          <div className="relative h-44">
            <Image
              src={meal.image}
              alt={meal.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="p-4">
            <h3 className="text-lg font-semibold text-zinc-100 line-clamp-1">
              {meal.name}
            </h3>

            <p className="mt-2 text-sm text-zinc-400 line-clamp-3">
              {meal.instructions}
            </p>

            <div className="mt-4">
              <Link href={`/meals/${meal.id}`}>
                {" "}
                <span className="text-sm font-medium text-emerald-400">
                  View Recipe →
                </span>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MealsList;
