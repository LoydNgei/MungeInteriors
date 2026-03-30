import Link from "next/link";

const values = [
  {
    title: "Calm first",
    description:
      "We design for slower mornings and quieter evenings, keeping lines soft and proportions light.",
  },
  {
    title: "Honest materials",
    description:
      "Solid woods, woven textures, and stoneware finishes that feel grounded and age gracefully.",
  },
  {
    title: "Human scale",
    description:
      "Every piece is built to fit compact rooms without sacrificing comfort or storage.",
  },
];

const milestones = [
  {
    year: "2016",
    detail: "Studio opened with a two-piece collection for studio apartments.",
  },
  {
    year: "2019",
    detail: "Introduced modular shelving and our first made-to-order program.",
  },
  {
    year: "2023",
    detail: "Expanded into whole-room styling and calm lighting partnerships.",
  },
];

export default function About() {
  return (
    <div>
      <section className="mx-auto w-full max-w-6xl px-6 py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              About the studio
            </p>
            <h1 className="font-display mt-4 text-4xl leading-tight sm:text-5xl">
              We build interiors that breathe.
            </h1>
            <p className="mt-5 text-lg text-[var(--muted)]">
              Munge Interiors started as a small workshop focused on furnishing
              tiny apartments. Today we design calm, practical pieces that make
              compact spaces feel open and lived-in.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full bg-[var(--ink)] px-6 py-3 text-xs uppercase tracking-[0.3em] text-[var(--paper)] transition hover:bg-[var(--accent)]"
              >
                Explore products
              </Link>
              <a
                href="mailto:hello@mungeinteriors.com"
                className="inline-flex items-center justify-center rounded-full border border-[var(--edge)] px-6 py-3 text-xs uppercase tracking-[0.3em] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                Visit the studio
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-[var(--edge)] bg-white/80 p-6 shadow-[0_24px_50px_-40px_rgba(42,31,24,0.6)]">
            <div
              className="h-48 rounded-2xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(242,232,223,1) 0%, rgba(226,205,186,1) 50%, rgba(210,182,160,1) 100%)",
              }}
            />
            <div className="mt-5 rounded-2xl border border-[var(--edge)] bg-[var(--paper-strong)] p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                Studio note
              </p>
              <p className="mt-2 font-display text-xl">
                We design with natural light in mind, so every surface feels
                soft through the day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              Values
            </p>
            <h2 className="font-display mt-3 text-3xl">
              Guiding principles for every piece.
            </h2>
          </div>
          <p className="max-w-md text-sm text-[var(--muted)]">
            We keep the collection small so we can obsess over textures,
            proportions, and how each piece lives in the room.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-3xl border border-[var(--edge)] bg-white/80 p-6"
            >
              <p className="font-display text-xl">{value.title}</p>
              <p className="mt-3 text-sm text-[var(--muted)]">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              Studio timeline
            </p>
            <h2 className="font-display mt-3 text-3xl">
              A calm evolution.
            </h2>
            <p className="mt-4 text-sm text-[var(--muted)]">
              We grew by listening closely to how people live in smaller homes,
              then shaping a collection that removes the noise.
            </p>
          </div>
          <div className="grid gap-4">
            {milestones.map((item) => (
              <div
                key={item.year}
                className="flex flex-col gap-2 rounded-3xl border border-[var(--edge)] bg-white/80 p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <p className="font-display text-2xl">{item.year}</p>
                <p className="text-sm text-[var(--muted)] sm:max-w-md">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-[var(--edge)] bg-[var(--paper-strong)] px-6 py-12 text-center md:px-12">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            Want to collaborate
          </p>
          <h2 className="font-display mt-4 text-3xl">
            We love working with architects and boutique hotels.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-[var(--muted)]">
            Share your mood board and floor plan. We will help craft a furniture
            set that feels airy, warm, and perfectly balanced.
          </p>
          <a
            href="mailto:hello@mungeinteriors.com"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--ink)] px-6 py-3 text-xs uppercase tracking-[0.3em] text-[var(--paper)] transition hover:bg-[var(--accent)]"
          >
            Start a collaboration
          </a>
        </div>
      </section>
    </div>
  );
}
