import { getMealById } from "@/lib/api/meals";
import Link from "next/link";
import Image from "next/image";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function MealDetailPage({ params }: Props) {
  const { id } = await params;

  const MealId = Number(id);

  const meal = await getMealById(MealId);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/meals"
          className="text-emerald-400 hover:text-emerald-300 transition font-medium"
        >
          ← Back to meals
        </Link>

       
      </div>

      <div className="mt-6 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
        <div className="relative h-65 sm:h-90 md:h-110">
          <Image
            src={meal.image}
            alt={meal.name}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-zinc-950/90 via-zinc-950/30 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
            <p className="text-emerald-400 text-sm font-semibold">Recipe</p>
            <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-50">
              {meal.name}
            </h1>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <aside className="md:col-span-1">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
            <h2 className="text-lg font-semibold text-zinc-100">
              About this meal
            </h2>

            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
              A simple and delicious recipe you can easily make at home.
            </p>

            <Link
              href="/community"
              className="mt-5 inline-flex w-full items-center justify-center rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-2 text-sm font-semibold text-zinc-100 hover:bg-zinc-800 transition"
            >
              Share in community
            </Link>
          </div>
        </aside>

        <section className="md:col-span-2">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
            <h2 className="text-xl font-bold text-zinc-100">Instructions</h2>

            <p className="mt-4 text-zinc-300 leading-relaxed whitespace-pre-line">
              {meal.instructions}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
