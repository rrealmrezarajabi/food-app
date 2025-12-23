"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Slide = {
  id: number;
  name: string;
  image: string;
};

export default function RecipeSlideshow({
  slides,
  intervalMs = 3500,
}: {
  slides: Slide[];
  intervalMs?: number;
}) {
  const safeSlides = useMemo(() => slides?.filter(Boolean) ?? [], [slides]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (safeSlides.length <= 1) return;

    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % safeSlides.length);
    }, intervalMs);

    return () => clearInterval(t);
  }, [safeSlides.length, intervalMs]);

  if (!safeSlides.length) return null;

  const prev = () =>
    setIndex((i) => (i - 1 + safeSlides.length) % safeSlides.length);
  const next = () => setIndex((i) => (i + 1) % safeSlides.length);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-lg">
      {/* Slide */}
      <div className="relative h-[240px] sm:h-[320px] md:h-[380px]">
        <Image
          key={safeSlides[index].id}
          src={safeSlides[index].image}
          alt={safeSlides[index].name}
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/30 to-transparent" />

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
          <p className="text-sm text-zinc-300">Today’s pick</p>
          <h3 className="mt-1 text-xl sm:text-2xl font-bold text-zinc-50">
            {safeSlides[index].name}
          </h3>
        </div>
      </div>

      {/* Controls */}
      {safeSlides.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-zinc-950/60 px-3 py-2 text-zinc-100 hover:bg-zinc-950/80 border border-zinc-700 transition"
            aria-label="Previous slide"
            type="button"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-zinc-950/60 px-3 py-2 text-zinc-100 hover:bg-zinc-950/80 border border-zinc-700 transition"
            aria-label="Next slide"
            type="button"
          >
            ›
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {safeSlides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full border border-zinc-600 transition ${
                  i === index ? "bg-emerald-400" : "bg-zinc-800"
                }`}
                aria-label={`Go to slide ${i + 1}`}
                type="button"
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
