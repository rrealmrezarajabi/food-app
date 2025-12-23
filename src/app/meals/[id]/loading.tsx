export default function MealDetailLoading() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 animate-pulse">
      {/* Top bar */}
      <div className="flex items-center justify-between gap-4">
        <div className="h-4 w-32 bg-zinc-800 rounded-md" />
        <div className="h-4 w-20 bg-zinc-800 rounded-md" />
      </div>

      {/* Hero image skeleton */}
      <div className="mt-6 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
        <div className="h-[260px] sm:h-[360px] md:h-[440px] bg-zinc-800" />
      </div>

      {/* Content */}
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {/* Sidebar skeleton */}
        <aside className="md:col-span-1">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 space-y-4">
            <div className="h-5 w-40 bg-zinc-800 rounded-md" />
            <div className="h-4 w-full bg-zinc-800 rounded-md" />
            <div className="h-4 w-11/12 bg-zinc-800 rounded-md" />
            <div className="h-10 w-full bg-zinc-800 rounded-xl mt-4" />
          </div>
        </aside>

        {/* Instructions skeleton */}
        <section className="md:col-span-2">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 space-y-4">
            <div className="h-6 w-48 bg-zinc-800 rounded-md" />

            <div className="space-y-3">
              <div className="h-4 w-full bg-zinc-800 rounded-md" />
              <div className="h-4 w-full bg-zinc-800 rounded-md" />
              <div className="h-4 w-11/12 bg-zinc-800 rounded-md" />
              <div className="h-4 w-10/12 bg-zinc-800 rounded-md" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
