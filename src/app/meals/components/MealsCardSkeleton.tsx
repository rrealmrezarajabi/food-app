const SkeletonCard = () => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
      
      <div className="h-44 w-full bg-zinc-800 animate-pulse" />

      
      <div className="p-4">
        <div className="h-5 w-3/4 bg-zinc-800 rounded-md animate-pulse" />
        <div className="mt-3 space-y-2">
          <div className="h-4 w-full bg-zinc-800 rounded-md animate-pulse" />
          <div className="h-4 w-11/12 bg-zinc-800 rounded-md animate-pulse" />
          <div className="h-4 w-2/3 bg-zinc-800 rounded-md animate-pulse" />
        </div>
        <div className="mt-4 h-4 w-24 bg-zinc-800 rounded-md animate-pulse" />
      </div>
    </div>
  );
};

export default function MealsListSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
