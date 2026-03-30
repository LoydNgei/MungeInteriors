import Link from "next/link";

const stats = [
  { label: "Lead time", value: "4-6 weeks" },
  { label: "Materials", value: "Solid ash + linen" },
  { label: "Customization", value: "24 fabric tones" },
  { label: "Warranty", value: "5-year care" },
];

const featuredPieces = [
  {
    name: "Arc Lounge Chair",
    price: "$420",
    detail: "Rounded oak frame with linen seat.",
    tag: "New",
    gradient:
      "linear-gradient(135deg, rgba(244,233,220,1) 0%, rgba(231,209,189,1) 50%, rgba(224,197,175,1) 100%)",
  },
  {
    name: "Tide Sofa",
    price: "$1,480",
    detail: "Deep seat, soft back, tight weave linen.",
    tag: "Best Seller",
    gradient:
      "linear-gradient(135deg, rgba(239,230,219,1) 0%, rgba(220,197,174,1) 55%, rgba(210,183,156,1) 100%)",
  },
  {
    name: "Cliff Side Table",
    price: "$260",
    detail: "Compact solid ash with hand finish.",
    tag: "Small Space",
    gradient:
      "linear-gradient(135deg, rgba(233,226,217,1) 0%, rgba(214,200,187,1) 55%, rgba(201,180,162,1) 100%)",
  },
  {
    name: "Hollow Shelf",
    price: "$540",
    detail: "Slim profile shelving with warm tone.",
    tag: "Preorder",
    gradient:
      "linear-gradient(135deg, rgba(238,231,223,1) 0%, rgba(223,206,191,1) 55%, rgba(211,189,171,1) 100%)",
  },
];

const services = [
  {
    title: "Quiet planning",
    description:
      "We map your daily flow first, then build a plan that keeps every surface breathable.",
  },
  {
    title: "Material storytelling",
    description:
      "Each piece is paired with woods, textiles, and finishes that age gently together.",
  },
  {
    title: "Tailored finishing",
    description:
      "Add custom dimensions, stain tones, and hardware to fit smaller rooms perfectly.",
  },
];

export default function Page() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-32 top-0 h-64 w-64 rounded-full bg-[var(--accent)]/10 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-[var(--accent-2)]/10 blur-3xl" />
        <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
                Calm living essentials
              </p>
              <h1 className="font-display mt-4 text-4xl leading-tight text-[var(--ink)] sm:text-5xl lg:text-6xl">
                Simple furniture for everyday rituals.
              </h1>
              <p className="mt-5 text-lg text-[var(--muted)]">
                Munge Interiors builds small-batch pieces that bring ease to
                compact homes. Thoughtful lines, warm woods, and fabrics that
                invite you to slow down.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--ink)] px-6 py-3 text-xs uppercase tracking-[0.3em] text-[var(--paper)] transition hover:bg-[var(--accent)]"
                >
                  Shop the collection
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--edge)] px-6 py-3 text-xs uppercase tracking-[0.3em] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  Our story
                </Link>
              </div>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-[var(--edge)] bg-white/70 px-4 py-5"
                  >
                    <p className="font-display text-2xl text-[var(--ink)]">
                      {stat.value}
                    </p>
                    <p className="text-sm text-[var(--muted)]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl border border-[var(--edge)] bg-white/80 p-6 shadow-[0_25px_60px_-40px_rgba(42,31,24,0.7)] backdrop-blur">
                <div className="grid gap-4">
                  <div
                    className="h-44 rounded-2xl"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(245,237,228,1) 0%, rgba(230,208,190,1) 55%, rgba(218,191,170,1) 100%)",
                    }}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <div
                      className="h-32 rounded-2xl"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(240,230,221,1) 0%, rgba(220,200,184,1) 60%, rgba(210,183,164,1) 100%)",
                      }}
                    />
                    <div className="flex h-32 flex-col justify-between rounded-2xl border border-[var(--edge)] bg-[var(--paper-strong)] p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                        Studio pick
                      </p>
                      <p className="font-display text-lg">Tide Sofa</p>
                      <p className="text-xs text-[var(--muted)]">
                        Linen in sand • Ash legs
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[var(--edge)] bg-white/90 px-4 py-3 text-sm">
                    <span className="text-[var(--muted)]">
                      Materials kit ships in 48 hours.
                    </span>
                    <span className="font-medium text-[var(--ink)]">
                      Free samples
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-6 hidden rounded-2xl border border-[var(--edge)] bg-white/90 px-4 py-3 text-xs uppercase tracking-[0.3em] text-[var(--muted)] shadow-[0_15px_40px_-25px_rgba(42,31,24,0.6)] md:block">
                Soft curves. Honest materials.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-8 pt-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              Featured pieces
            </p>
            <h2 className="font-display mt-3 text-3xl">
              Crafted for smaller spaces.
            </h2>
          </div>
          <p className="max-w-md text-sm text-[var(--muted)]">
            Light silhouettes, soft edges, and built-in storage that never
            overwhelms the room.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featuredPieces.map((piece) => (
            <article
              key={piece.name}
              className="rounded-3xl border border-[var(--edge)] bg-white/80 p-5 shadow-[0_18px_40px_-32px_rgba(42,31,24,0.6)]"
            >
              <div
                className="h-40 rounded-2xl"
                style={{ background: piece.gradient }}
              />
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <p className="font-display text-lg text-[var(--ink)]">
                    {piece.name}
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                    {piece.tag}
                  </p>
                </div>
                <span className="text-sm font-medium text-[var(--ink)]">
                  {piece.price}
                </span>
              </div>
              <p className="mt-3 text-sm text-[var(--muted)]">
                {piece.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              Design approach
            </p>
            <h2 className="font-display mt-4 text-3xl">
              Designed to breathe, built to last.
            </h2>
            <p className="mt-4 text-base text-[var(--muted)]">
              We keep every room intentional. That means pieces that hold their
              own without stealing attention, and materials that feel better the
              more you live with them.
            </p>
            <div className="mt-8 rounded-3xl border border-[var(--edge)] bg-[var(--paper-strong)] p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                Quick consult
              </p>
              <p className="mt-2 font-display text-2xl">
                Share your floor plan, get a layout in 48 hours.
              </p>
              <a
                href="mailto:hello@mungeinteriors.com"
                className="mt-4 inline-flex text-xs uppercase tracking-[0.3em] text-[var(--accent)]"
              >
                Start a project
              </a>
            </div>
          </div>
          <div className="grid gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-[var(--edge)] bg-white/80 p-6"
              >
                <p className="font-display text-xl text-[var(--ink)]">
                  {service.title}
                </p>
                <p className="mt-3 text-sm text-[var(--muted)]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-[var(--edge)] bg-[var(--paper-strong)] px-6 py-12 text-center md:px-12">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            Ready to furnish softly
          </p>
          <h2 className="font-display mt-4 text-3xl">
            Build a calm room with just a few pieces.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-[var(--muted)]">
            Start with our essentials and add custom storage when you are ready.
            We help you choose proportions, finishes, and fabrics that feel
            light and lived-in.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
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
              Request samples
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
