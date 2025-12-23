import MealsListSkeleton from "./components/MealsCardSkeleton";

export default function MealsLoading() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="mb-10 space-y-3">
        <div className="h-8 w-48 bg-zinc-800 rounded-md animate-pulse" />
        <div className="h-4 w-72 bg-zinc-800 rounded-md animate-pulse" />
      </div>

      <MealsListSkeleton />
    </div>
  );
}
