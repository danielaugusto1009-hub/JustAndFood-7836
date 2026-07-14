# Just Food&Coffee — Design System

## Brand
Cafeteria ao ar livre em Natal-RN (Capim Macio). Espaço com jardim, área kids, casa na árvore,
clima aconchegante. Mascote: Justino. Instagram: @justfoodcoffee.

## Fonts
- Display/Headings: "Fraunces" (serif, elegante, com personalidade) — pesos 400/600/900, italic para destaques.
- Body/UI: "Manrope" — 400/500/600/700.

## Color Palette
- `--cream`: #FBF6EC — fundo principal, quente e aconchegante
- `--paper`: #F3EBDB — fundo de seções alternadas
- `--ink`: #2B2016 — texto principal, marrom quase preto
- `--espresso`: #3F2A1D — marrom café escuro (headers, footer)
- `--olive`: #5C6B3C — verde jardim (accent primário)
- `--olive-dark`: #3E4A26
- `--terracotta`: #C6603F — accent secundário (CTAs, destaques)
- `--gold`: #C99A4A — detalhes finos, linhas, ícones
- `--cream-line`: rgba(43,32,22,.12) — divisores

## Layout Principles
- Fundo quente crème, nunca branco puro.
- Seções assimétricas, imagens com bordas orgânicas/arch shapes, sobreposição de elementos folha.
- Espaço negativo generoso no hero, densidade controlada no cardápio.
- Cantos: mistura de arch-top (portas de jardim) em imagens + retângulos nítidos em cards de menu.
- Textura sutil de papel/grain de fundo, sem gradientes roxos.

## Components
- Nav: transparente sobre hero, vira sólido (cream) com blur ao rolar. Logo "Just" em Fraunces itálico + "Food&Coffee" em Manrope caps tracking.
- Botões: pill shape, terracotta preenchido (primário) / outline ink (secundário), hover levanta leve sombra.
- Cards de cardápio: fundo paper, borda fina gold, título Fraunces, preço em terracotta.
- Divisores: linha fina + folha/galho ilustrado sutil.
- Badges: "Seg à Sáb · 15h às 21h", "Pet friendly", "Kids area".

## Motion
- Hero: fade+rise staggered no load (título, subtítulo, CTA, imagem).
- Scroll reveal suave nas seções (fade+translateY 16px, stagger nos cards de menu).
- Parallax leve nas imagens de fundo do "Sobre" e do "Ambiente".

## Imagery
Fotos geradas no estilo do espaço real: jardim aconchegante, mesas de madeira, luz quente da tarde,
croissants recheados, cappuccino, área kids/casa na árvore. Sem inventar pratos fora do cardápio real.
