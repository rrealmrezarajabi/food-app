import Hero from "@/components/Hero";


export default function HomePage(){


    return (
      <>
        <Hero />
        <section className="mt-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-zinc-100 mb-6">
              Why Food App?
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {[
                {
                  title: "Easy Recipes",
                  desc: "Simple steps, no overthinking.",
                },
                { title: "Community Driven", desc: "Real people, real meals." },
                {
                  title: "Save Favorites",
                  desc: "Keep what you love in one place.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-zinc-900 border border-zinc-800 rounded-xl p-5"
                >
                  <h3 className="font-semibold text-zinc-100">{item.title}</h3>
                  <p className="mt-2 text-sm text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  
}