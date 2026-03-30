import type { Metadata } from "next";
import Link from "next/link";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
];

export const metadata: Metadata = {
  title: "Munge Interiors",
  description: "Simple furniture pieces for calm, modern spaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${body.variable} ${display.variable} h-full`}
    >
      <body className="min-h-full bg-[var(--paper)] text-[var(--ink)]">
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 border-b border-[var(--edge)] bg-[var(--paper-glass)] backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4">
              <Link
                href="/"
                className="font-display text-xl tracking-tight"
              >
                Munge Interiors
              </Link>
              <nav className="hidden items-center gap-6 text-sm md:flex">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[var(--muted)] transition hover:text-[var(--ink)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="flex items-center gap-3">
                <a
                  href="mailto:hello@mungeinteriors.com"
                  className="hidden rounded-full border border-[var(--edge)] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] sm:inline-flex"
                >
                  Book Consult
                </a>
                <Link
                  href="/products"
                  className="inline-flex rounded-full bg-[var(--ink)] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[var(--paper)] transition hover:bg-[var(--accent)]"
                >
                  Shop
                </Link>
              </div>
            </div>
            <nav className="flex items-center justify-center gap-6 border-t border-[var(--edge)] px-6 py-3 text-xs uppercase tracking-[0.3em] text-[var(--muted)] md:hidden">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-[var(--ink)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t border-[var(--edge)] bg-[var(--paper)]">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-display text-lg text-[var(--ink)]">
                  Munge Interiors
                </p>
                <p>Simple pieces for calm, lived-in rooms.</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:hello@mungeinteriors.com"
                  className="transition hover:text-[var(--ink)]"
                >
                  hello@mungeinteriors.com
                </a>
                <span>+254 700 000 000</span>
                <span>Mon–Sat, 10am–6pm</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
