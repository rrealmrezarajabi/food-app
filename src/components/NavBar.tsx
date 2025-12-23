import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-zinc-900 text-zinc-100 shadow-lg px-6 py-4 flex items-center justify-between">
      <Link href="/">
        <div className="text-2xl font-bold text-emerald-400">Food App</div>
      </Link>

      <div className="flex gap-6 font-medium">
        <Link
          href="/meals"
          className="text-zinc-300 hover:text-emerald-400 transition-colors"
        >
          Explore Meals
        </Link>

        <Link
          href="/community"
          className="text-zinc-300 hover:text-emerald-400 transition-colors"
        >
          Join Community
        </Link>
      </div>
    </nav>
  );
}
