# Design directions

Three homepage directions were mocked up during the October 2026 redesign
(with the hallmark design skill in `.agents/skills/hallmark`). **B, Lab
record, was chosen and is what the site uses.** A and C are kept here so a
homepage can be rebuilt in either direction later.

Each mock is a single static HTML file with real content from the repo at the
time. To view them, serve the repo root and open this folder:

```sh
python3 -m http.server 8765
# http://localhost:8765/docs/design-directions/
```

All three share the same rules: the official PSFC lockup is used unaltered in
the footer only (MIT core colours; black or white on a coloured background),
each experiment gets a key colour from the PSFC accent palette, and Plasma
Pink is never used for small text (3.7:1 on the off-white paper).

## A. Control room (`a-control-room.html`)

The PSFC brand applied directly, closest to psfc.mit.edu.

- **Colour:** near-black ground `#121212` in three steps (`#1c1c1c`,
  `#282828`), Plasma Pink `#DF1AD2` as the only action colour with `#121212`
  text on it (4.65:1), Hydrogen Periwinkle `#BFB3FF` for tags and focus.
- **Type:** Hanken Grotesk at light weight (300) for display, standing in for
  Neue Haas Grotesk Display; Roboto Mono for measurements.
- **Shape:** index-first. A large statement beside BABY's key facts as a
  readout panel, then the experiments as big numbered rows, a featured paper,
  a large count of Zenodo records beside the latest DOIs, news.
- **Trade-off:** lowest brand risk, but long guides read less comfortably on
  dark, and it echoes the parent site closely.

## B. Lab record (`b-lab-record.html`), chosen

A LIBRA sub-brand set like a printed lab record. The production design is a
refined version of this mock; see "Design system" in `CLAUDE.md`.

- **Colour:** PSFC off-white paper `#F7F5F0`, MIT red `#750014` for the
  primary action and links, Plasma Pink only as a mark on data.
- **Type:** Hanken Grotesk heads, Roboto Serif body, Roboto Mono figures.
- **Shape:** the BABY campaigns table as the hero, then a ledger of
  experiments, the paper as a statement, an ink band of open data, news.

## C. Apparatus (`c-apparatus.html`)

A LIBRA sub-brand led by the hardware.

- **Colour:** cool paper `#F3F5F9`, PSFC Industrial Blue `#1966FF` for fills
  (white text 4.77:1) and `#1457D9` for links on paper (5.67:1), periwinkle
  as the second colour, ink footer.
- **Type:** Hanken Grotesk for display and body, Roboto Mono for figures.
- **Shape:** map and diagram. The LIBRA-PINT CAD model
  (`public/models/libra_pint_model.glb`, via `@google/model-viewer`) as the
  hero, the four experiments on a programme line (filled marker running, open
  marker planned), BABY's key facts, paper and data side by side, news.
- **Trade-off:** the most distinctive, but until the other experiments have
  models or photographs the homepage leans on one object.

## Building a homepage from A or C

Keep the content model and components; swap the tokens in
`src/styles/global.css` for the direction's colours and faces, then recompose
`src/pages/index.astro` in the direction's shape. The mock's CSS holds every
value needed.
