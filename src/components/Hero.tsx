import Link from "next/link";
import RecipeSlideshow from "./RecipesSlideShow";

type Recipe = {
  id: number;
  name: string;
  image: string;
};

async function getTopRecipes(): Promise<Recipe[]> {
  const res = await fetch(
    "https://dummyjson.com/recipes?limit=3&select=id,name,image",
    { next: { revalidate: 60 } } 
  );

  if (!res.ok) return [];

  const data = await res.json();
  return (data?.recipes ?? []) as Recipe[];
}

export default async function Hero() {
  const recipes = await getTopRecipes();

  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-14 grid gap-8 md:grid-cols-2 items-center">
        {/* Text */}
        <div>
          <p className="text-emerald-400 font-semibold">Food App</p>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-50 leading-tight">
            Discover meals you’ll actually want to cook.
          </h1>
          <p className="mt-4 text-zinc-300 leading-relaxed">
            Explore recipes, save your favorites, and join the community to
            share your best meals.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/meals"
              className="rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-zinc-950 hover:bg-emerald-400 transition"
            >
              Explore Meals
            </Link>

            <Link
              href="/community"
              className="rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3 font-semibold text-zinc-100 hover:bg-zinc-800 transition"
            >
              Join Community
            </Link>
          </div>
        </div>

        {/* Slider */}
        <RecipeSlideshow slides={recipes} />
      </div>
    </section>
  );
}
