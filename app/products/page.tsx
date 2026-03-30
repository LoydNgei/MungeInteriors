const filters = ["All", "Living", "Dining", "Bedroom", "Storage"];

const products = [
  {
    name: "Arc Lounge Chair",
    price: "$420",
    size: "W70 x D75 x H78 cm",
    material: "Ash, linen blend",
    badge: "New",
    gradient:
      "linear-gradient(135deg, rgba(244,233,220,1) 0%, rgba(231,209,189,1) 50%, rgba(224,197,175,1) 100%)",
  },
  {
    name: "Tide Sofa",
    price: "$1,480",
    size: "W190 x D85 x H76 cm",
    material: "Solid ash, linen",
    badge: "Best Seller",
    gradient:
      "linear-gradient(135deg, rgba(239,230,219,1) 0%, rgba(220,197,174,1) 55%, rgba(210,183,156,1) 100%)",
  },
  {
    name: "Cliff Side Table",
    price: "$260",
    size: "W45 x D45 x H52 cm",
    material: "Ash, matte seal",
    badge: "Small Space",
    gradient:
      "linear-gradient(135deg, rgba(233,226,217,1) 0%, rgba(214,200,187,1) 55%, rgba(201,180,162,1) 100%)",
  },
  {
    name: "Hollow Shelf",
    price: "$540",
    size: "W120 x D30 x H180 cm",
    material: "Oak, woven cane",
    badge: "Preorder",
    gradient:
      "linear-gradient(135deg, rgba(238,231,223,1) 0%, rgba(223,206,191,1) 55%, rgba(211,189,171,1) 100%)",
  },
  {
    name: "Mesa Dining Table",
    price: "$980",
    size: "W160 x D85 x H74 cm",
    material: "Oak, satin finish",
    badge: "Dining",
    gradient:
      "linear-gradient(135deg, rgba(242,234,225,1) 0%, rgba(224,206,189,1) 55%, rgba(211,186,167,1) 100%)",
  },
  {
    name: "Shell Nightstand",
    price: "$310",
    size: "W50 x D40 x H50 cm",
    material: "Walnut, linen drawer",
    badge: "Bedroom",
    gradient:
      "linear-gradient(135deg, rgba(241,233,226,1) 0%, rgba(223,204,189,1) 55%, rgba(209,184,166,1) 100%)",
  },
  {
    name: "Basin Console",
    price: "$720",
    size: "W130 x D40 x H80 cm",
    material: "Ash, soft-edge tray",
    badge: "Storage",
    gradient:
      "linear-gradient(135deg, rgba(240,233,226,1) 0%, rgba(221,202,187,1) 55%, rgba(208,181,165,1) 100%)",
  },
  {
    name: "Drift Coffee Table",
    price: "$480",
    size: "W90 x D60 x H35 cm",
    material: "Oak, beveled edge",
    badge: "Living",
    gradient:
      "linear-gradient(135deg, rgba(243,235,226,1) 0%, rgba(225,205,188,1) 55%, rgba(212,187,168,1) 100%)",
  },
];

export default function Products() {
  const activeFilter = "All";

  return (
    <div>
      <section className="mx-auto w-full max-w-6xl px-6 py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Product collection
            </p>
            <h1 className="font-display mt-4 text-4xl leading-tight sm:text-5xl">
              Furniture that keeps the room open.
            </h1>
            <p className="mt-5 text-lg text-[var(--muted)]">
              Shop our core pieces or request a made-to-order adjustment. Every
              item is designed to feel light, warm, and practical for daily
              living.
            </p>
          </div>
          <div className="rounded-3xl border border-[var(--edge)] bg-white/80 p-6 shadow-[0_24px_50px_-40px_rgba(42,31,24,0.6)]">
            <div
              className="h-48 rounded-2xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(244,235,226,1) 0%, rgba(227,206,189,1) 55%, rgba(212,187,168,1) 100%)",
              }}
            />
            <div className="mt-5 rounded-2xl border border-[var(--edge)] bg-[var(--paper-strong)] p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                Made to order
              </p>
              <p className="mt-2 font-display text-xl">
                Adjust width, height, or finish without extra wait time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-8">
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              aria-pressed={filter === activeFilter}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
                filter === activeFilter
                  ? "border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)]"
                  : "border-[var(--edge)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="rounded-3xl border border-[var(--edge)] bg-white/80 p-5 shadow-[0_18px_40px_-32px_rgba(42,31,24,0.6)]"
            >
              <div
                className="h-44 rounded-2xl"
                style={{ background: product.gradient }}
              />
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <p className="font-display text-lg text-[var(--ink)]">
                    {product.name}
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                    {product.badge}
                  </p>
                </div>
                <span className="text-sm font-medium text-[var(--ink)]">
                  {product.price}
                </span>
              </div>
              <p className="mt-3 text-sm text-[var(--muted)]">
                {product.size}
              </p>
              <p className="text-sm text-[var(--muted)]">{product.material}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-[var(--edge)] bg-[var(--paper-strong)] px-6 py-12 text-center md:px-12">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            Need a custom set
          </p>
          <h2 className="font-display mt-4 text-3xl">
            Build a bundle with storage, seating, and lighting.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-[var(--muted)]">
            Tell us your room size and we will recommend a calm, cohesive
            bundle. You can swap fabrics, finishes, and sizes before we begin.
          </p>
          <a
            href="mailto:hello@mungeinteriors.com"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--ink)] px-6 py-3 text-xs uppercase tracking-[0.3em] text-[var(--paper)] transition hover:bg-[var(--accent)]"
          >
            Start a bundle
          </a>
        </div>
      </section>
    </div>
  );
}
