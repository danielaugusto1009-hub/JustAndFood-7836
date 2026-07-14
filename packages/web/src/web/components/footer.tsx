import { Instagram, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--jf-espresso)] px-6 py-14 text-[var(--jf-cream)] sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-3xl italic">Just</span>
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[var(--jf-gold)]">
              Food&amp;Coffee
            </span>
          </div>
          <p className="mt-4 font-body text-sm leading-relaxed text-[var(--jf-cream)]/70">
            Mais que café, um lugar pra criar memórias. Conversas, encontros e
            um cardápio único, em meio a um jardim aconchegante em Natal.
          </p>
          <a
            href="https://www.instagram.com/justfoodcoffee/"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 font-body text-sm font-semibold text-[var(--jf-cream)] transition-colors hover:text-[var(--jf-gold)]"
          >
            <Instagram size={17} /> @justfoodcoffee
          </a>
        </div>

        <div>
          <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-[var(--jf-gold)]">
            Horário
          </p>
          <ul className="mt-3 space-y-1.5 font-body text-sm text-[var(--jf-cream)]/80">
            <li>Segunda a sábado: 15h às 21h</li>
            <li>Domingo: fechado</li>
          </ul>
        </div>

        <div>
          <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-[var(--jf-gold)]">
            Endereço
          </p>
          <a
            href="https://maps.google.com/?q=Just+Food%26Coffee,+R.+Dr.+Orlando+de+Azevedo,+1981+-+Capim+Macio,+Natal+-+RN"
            target="_blank"
            rel="noreferrer"
            className="mt-3 flex max-w-[220px] items-start gap-2 font-body text-sm text-[var(--jf-cream)]/80 transition-colors hover:text-[var(--jf-gold)]"
          >
            <MapPin size={16} className="mt-0.5 shrink-0" />
            R. Dr. Orlando de Azevedo, 1981 — Capim Macio, Natal - RN,
            59082-050
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-[var(--jf-cream)]/15 pt-6 font-body text-xs text-[var(--jf-cream)]/50">
        © {new Date().getFullYear()} Just Food&amp;Coffee. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
