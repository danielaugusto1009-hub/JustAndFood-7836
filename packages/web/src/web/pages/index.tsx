import {
  Clock,
  Instagram,
  Leaf,
  MapPin,
  PawPrint,
  ShoppingBag,
  Sprout,
  Star,
  TreePine,
  Wallet,
} from "lucide-react";
import { Reveal } from "../components/reveal";
import { LeafDivider } from "../components/leaf-divider";
import { Nav } from "../components/nav";
import { Footer } from "../components/footer";

const MENU: {
  category: string;
  note?: string;
  items: { name: string; desc?: string; price?: string }[];
}[] = [
  {
    category: "Croissants Artesanais",
    note: "Assados na casa, recheados na hora",
    items: [
      {
        name: "Croissant Artesanal",
        desc: "Recheado com creme de frango e requeijão, finalizado com farofa verde de ervas",
      },
      {
        name: "Croissant Brie com Parma",
        desc: "Brie cremoso com fatias de presunto parma",
      },
      { name: "Croissant Camarão", desc: "Recheio cremoso de camarão" },
      {
        name: "Croissant Marguerita",
        desc: "Molho de tomate, muçarela e manjericão",
      },
      { name: "Croissant Pepperoni", desc: "Muçarela e pepperoni" },
      {
        name: "Croissant Carne de Sol",
        desc: "Carne de sol desfiada com toque nordestino",
      },
    ],
  },
  {
    category: "Pratos & Quiches",
    note: "Os mais elogiados da casa",
    items: [
      { name: "Quiche da Casa", desc: "Receita própria, servida quentinha" },
      {
        name: "Carne de Sol",
        desc: "Preparo tradicional nordestino, sempre bem avaliada",
      },
      { name: "Tamboril", desc: "Peixe preparado com tempero da casa" },
    ],
  },
  {
    category: "Cafés Quentes & Gelados",
    note: "Do espresso puro aos especiais da casa",
    items: [
      { name: "Espresso", desc: "Café puro e concentrado" },
      {
        name: "Macchiato",
        desc: "Espresso com um toque de espuma de leite",
      },
      {
        name: "Cappuccino da Casa",
        desc: "Leite vaporizado com pó especial — o queridinho da Just",
      },
      { name: "Moccachino", desc: "Café em camadas com chocolate" },
      { name: "Latte Nutella", desc: "Café cremoso com Nutella" },
      {
        name: "Orange Coffee",
        desc: "Café gelado surpreendente com toque cítrico",
      },
      {
        name: "Iced Latte Protein",
        desc: "Café gelado com whey protein, sem açúcar, 20g de proteína",
      },
    ],
  },
  {
    category: "Sucos & Doces",
    note: "Opções leves e criações da casa",
    items: [
      { name: "Sucos Naturais", desc: "Criação própria, feitos com fruta de verdade" },
      { name: "Coxinha", desc: "Clássica e crocante" },
      { name: "Bolinho de Brigadeiro", desc: "Docinho tradicional da casa" },
    ],
  },
];

const COMBOS = [
  {
    name: "Combo da Semana",
    desc: "De segunda a sexta (exceto terça, dia do sanduíche), uma combinação irresistível da casa",
    price: "R$ 34,90",
  },
  {
    name: "Brigadeirudo",
    desc: "Bolinho de brigadeiro + coxinha de frango + Latte Nutella",
    price: "R$ 38,90",
  },
  {
    name: "Combo Férias",
    desc: "Bolinho de chocolate com brigadeiro e kit kat + coxinha + suco de laranja",
    price: "R$ 38,00",
  },
];

const GALLERY = [
  { src: "/images/ambiente.png", alt: "Jardim aconchegante da Just Food&Coffee" },
  { src: "/images/croissant.png", alt: "Croissant artesanal recheado" },
  { src: "/images/cappuccino.png", alt: "Cappuccino da casa" },
  { src: "/images/brunch.png", alt: "Brunch com quiche, croissant e suco" },
];

function SectionTitle({
  eyebrow,
  title,
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <p className="font-body text-xs font-bold uppercase tracking-[0.28em] text-[var(--jf-terracotta)]">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-4xl font-semibold leading-[1.1] text-[var(--jf-espresso)] sm:text-5xl">
        {title}
      </h2>
      <LeafDivider className={align === "center" ? "mt-5" : "mt-5 justify-start"} />
    </div>
  );
}

function Index() {
  return (
    <div id="top" className="jf-body min-h-screen">
      <Nav />

      {/* HERO */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <img
          src="/images/hero.png"
          alt="Jardim ao ar livre da Just Food&Coffee em Natal"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--jf-espresso)]/85 via-[var(--jf-espresso)]/35 to-[var(--jf-espresso)]/10" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-32 sm:px-8">
          <div className="jf-fade-up max-w-2xl">
            <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-[var(--jf-gold)]">
              Capim Macio · Natal, RN
            </p>
            <h1 className="mt-4 font-display text-5xl italic leading-[1.05] text-[var(--jf-cream)] sm:text-6xl md:text-7xl">
              A sua cafeteria
              <br />
              <span className="not-italic font-normal">ao ar livre</span>
            </h1>
            <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-[var(--jf-cream)]/85 sm:text-lg">
              Mais que café, um lugar pra criar memórias. Conversas, encontros
              e um cardápio único, em meio a um jardim aconchegante.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#cardapio"
                className="rounded-full bg-[var(--jf-terracotta)] px-7 py-3 font-body text-sm font-bold uppercase tracking-wide text-[var(--jf-cream)] shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5"
              >
                Ver cardápio
              </a>
              <a
                href="#visite"
                className="rounded-full border border-[var(--jf-cream)]/60 px-7 py-3 font-body text-sm font-bold uppercase tracking-wide text-[var(--jf-cream)] transition-colors hover:bg-[var(--jf-cream)]/10"
              >
                Como chegar
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 font-body text-sm text-[var(--jf-cream)]/85">
              <span className="flex items-center gap-2">
                <Star size={16} className="fill-[var(--jf-gold)] text-[var(--jf-gold)]" />
                4.7 · 808 avaliações no Google
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} /> Seg a Sáb · 15h às 21h
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="relative px-6 py-24 sm:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
          <Reveal>
            <p className="font-body text-xs font-bold uppercase tracking-[0.28em] text-[var(--jf-terracotta)]">
              Nossa história
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-[1.1] text-[var(--jf-espresso)] sm:text-5xl">
              Um espaço pra criar memórias
            </h2>
            <p className="mt-6 font-body text-base leading-relaxed text-[var(--jf-ink)]/80">
              A Just nasceu de um sonho simples: criar um espaço onde as
              pessoas pudessem se reconectar — com a natureza, com boas
              conversas e com um café de verdade. Em contato com o verde, ao
              ar livre, a Just é o cantinho de Natal pra relaxar, trabalhar,
              matar a saudade ou simplesmente aproveitar a tarde.
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-[var(--jf-ink)]/80">
              Aqui você nunca toma só um cafezinho: tem cardápio de
              croissants recheados, quiches, pratos elogiadíssimos como
              carne de sol e tamboril, cafés especiais e um jardim com
              cantinho kids e casa na árvore pra toda a família.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: TreePine, label: "Jardim & casa na árvore" },
                { icon: Sprout, label: "Área kids" },
                { icon: PawPrint, label: "Pet friendly" },
                { icon: ShoppingBag, label: "Leve embora" },
              ].map((b) => (
                <span
                  key={b.label}
                  className="flex items-center gap-2 rounded-full border border-[var(--jf-line)] bg-[var(--jf-paper)] px-4 py-2 font-body text-xs font-semibold text-[var(--jf-espresso)]"
                >
                  <b.icon size={14} className="text-[var(--jf-olive)]" />
                  {b.label}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-[var(--jf-olive)]/10" />
              <img
                src="/images/ambiente.png"
                alt="Ambiente da Just Food&Coffee"
                className="aspect-[4/5] w-full rounded-[2.5rem] object-cover shadow-xl"
                style={{ borderTopLeftRadius: "6rem" }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CARDÁPIO */}
      <section id="cardapio" className="bg-[var(--jf-paper)] px-6 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionTitle eyebrow="O que servimos" title="Cardápio" />
            <p className="mx-auto mt-6 max-w-xl text-center font-body text-sm text-[var(--jf-ink)]/70">
              Uma seleção direto do nosso cardápio real — croissants
              artesanais, pratos elogiados, cafés especiais e combos da
              casa. Preço médio de R$ 40–60 por pessoa.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-14 md:grid-cols-2">
            {MENU.map((group, gi) => (
              <Reveal key={group.category} delay={gi * 100}>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-[var(--jf-espresso)]">
                    {group.category}
                  </h3>
                  {group.note && (
                    <p className="mt-1 font-body text-xs uppercase tracking-wide text-[var(--jf-olive-dark)]">
                      {group.note}
                    </p>
                  )}
                  <div className="mt-5 space-y-4">
                    {group.items.map((item) => (
                      <div
                        key={item.name}
                        className="border-b border-[var(--jf-line)] pb-4"
                      >
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="font-body text-[15px] font-bold text-[var(--jf-ink)]">
                            {item.name}
                          </span>
                          {item.price && (
                            <span className="whitespace-nowrap font-display text-sm font-semibold text-[var(--jf-terracotta)]">
                              {item.price}
                            </span>
                          )}
                        </div>
                        {item.desc && (
                          <p className="mt-1 font-body text-[13px] leading-relaxed text-[var(--jf-ink)]/65">
                            {item.desc}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* COMBOS */}
          <Reveal delay={200}>
            <div className="mt-20">
              <h3 className="text-center font-display text-2xl font-semibold text-[var(--jf-espresso)]">
                Combos da Casa
              </h3>
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {COMBOS.map((c) => (
                  <div
                    key={c.name}
                    className="rounded-2xl border border-[var(--jf-gold)]/40 bg-[var(--jf-cream)] p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
                  >
                    <p className="font-display text-lg font-semibold text-[var(--jf-espresso)]">
                      {c.name}
                    </p>
                    <p className="mt-2 font-body text-[13px] leading-relaxed text-[var(--jf-ink)]/70">
                      {c.desc}
                    </p>
                    <p className="mt-4 font-display text-xl font-semibold text-[var(--jf-terracotta)]">
                      {c.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* AMBIENTE / GALERIA */}
      <section id="ambiente" className="px-6 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionTitle eyebrow="Nosso cantinho" title="Ambiente & Jardim" />
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
            {GALLERY.map((img, i) => (
              <Reveal key={img.src} delay={i * 90}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`aspect-[3/4] w-full rounded-2xl object-cover shadow-sm ${
                    i % 2 === 1 ? "translate-y-6" : ""
                  }`}
                />
              </Reveal>
            ))}
          </div>

          <Reveal delay={250}>
            <p className="mx-auto mt-14 max-w-2xl text-center font-display text-2xl italic leading-snug text-[var(--jf-espresso)]">
              "Um café agradável, em área aberta, com comidas saborosas."
            </p>
            <p className="mt-3 text-center font-body text-xs uppercase tracking-widest text-[var(--jf-olive-dark)]">
              — Avaliação de cliente no Google
            </p>
          </Reveal>
        </div>
      </section>

      {/* VISITE */}
      <section id="visite" className="bg-[var(--jf-espresso)] px-6 py-24 text-[var(--jf-cream)] sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-center font-body text-xs font-bold uppercase tracking-[0.28em] text-[var(--jf-gold)]">
              Venha nos conhecer
            </p>
            <h2 className="mt-3 text-center font-display text-4xl font-semibold text-[var(--jf-cream)] sm:text-5xl">
              Visite a Just
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            <Reveal delay={0}>
              <div className="flex flex-col items-center gap-3 text-center">
                <MapPin className="text-[var(--jf-gold)]" size={26} />
                <p className="font-display text-lg font-semibold">Endereço</p>
                <p className="max-w-[220px] font-body text-sm text-[var(--jf-cream)]/75">
                  R. Dr. Orlando de Azevedo, 1981 — Capim Macio, Natal - RN,
                  59082-050
                </p>
                <a
                  href="https://maps.google.com/?q=Just+Food%26Coffee,+R.+Dr.+Orlando+de+Azevedo,+1981+-+Capim+Macio,+Natal+-+RN"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 font-body text-xs font-bold uppercase tracking-wide text-[var(--jf-gold)] underline-offset-4 hover:underline"
                >
                  Abrir no mapa
                </a>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="flex flex-col items-center gap-3 text-center">
                <Clock className="text-[var(--jf-gold)]" size={26} />
                <p className="font-display text-lg font-semibold">Horário</p>
                <p className="font-body text-sm text-[var(--jf-cream)]/75">
                  Segunda a sábado: 15h às 21h
                  <br />
                  Domingo: fechado
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="flex flex-col items-center gap-3 text-center">
                <Wallet className="text-[var(--jf-gold)]" size={26} />
                <p className="font-display text-lg font-semibold">
                  Preço médio
                </p>
                <p className="font-body text-sm text-[var(--jf-cream)]/75">
                  R$ 40 – R$ 60 por pessoa
                  <br />
                  Cartões aceitos · Leve embora
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={280}>
            <div className="mt-16 overflow-hidden rounded-[2rem] border border-[var(--jf-cream)]/15">
              <iframe
                title="Mapa Just Food&Coffee"
                src="https://www.google.com/maps?q=Just+Food%26Coffee+R.+Dr.+Orlando+de+Azevedo+1981+Capim+Macio+Natal+RN&output=embed"
                width="100%"
                height="380"
                loading="lazy"
                style={{ border: 0, filter: "grayscale(0.15) sepia(0.08)" }}
              />
            </div>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-12 flex flex-col items-center gap-4">
              <a
                href="https://www.instagram.com/justfoodcoffee/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--jf-terracotta)] px-8 py-3 font-body text-sm font-bold uppercase tracking-wide text-[var(--jf-cream)] shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <Instagram size={18} /> Siga @justfoodcoffee
              </a>
              <div className="flex items-center gap-2 font-body text-xs text-[var(--jf-cream)]/60">
                <Leaf size={14} /> Feito com carinho em Natal-RN
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Index;
