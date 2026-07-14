import { useEffect, useState } from "react";
import { Instagram, Menu, X } from "lucide-react";

const LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#ambiente", label: "Ambiente" },
  { href: "#visite", label: "Visite" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--jf-cream)]/90 shadow-[0_1px_0_var(--jf-line)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#top" className="flex items-baseline gap-1.5">
          <span className="font-display text-2xl italic text-[var(--jf-espresso)]">
            Just
          </span>
          <span className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--jf-olive-dark)]">
            Food&amp;Coffee
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-[13px] font-semibold uppercase tracking-wide text-[var(--jf-ink)]/80 transition-colors hover:text-[var(--jf-terracotta)]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.instagram.com/justfoodcoffee/"
            target="_blank"
            rel="noreferrer"
            className="text-[var(--jf-ink)]/80 transition-colors hover:text-[var(--jf-terracotta)]"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href="#visite"
            className="rounded-full bg-[var(--jf-terracotta)] px-5 py-2 font-body text-[13px] font-bold uppercase tracking-wide text-[var(--jf-cream)] shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
          >
            Como chegar
          </a>
        </div>

        <button
          className="text-[var(--jf-ink)] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-[var(--jf-line)] bg-[var(--jf-cream)] px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-body text-sm font-semibold uppercase tracking-wide text-[var(--jf-ink)]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://www.instagram.com/justfoodcoffee/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold text-[var(--jf-ink)]"
            >
              <Instagram size={16} /> @justfoodcoffee
            </a>
            <a
              href="#visite"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-[var(--jf-terracotta)] px-5 py-2 text-center font-body text-[13px] font-bold uppercase tracking-wide text-[var(--jf-cream)]"
            >
              Como chegar
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
