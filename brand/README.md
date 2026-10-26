# LIBRA brand kit

A working brand kit for LIBRA, the tritium breeding project at the MIT Plasma
Science and Fusion Center. It lives in the website repository but is **not
published on the site**: it is the source for slides, posters, documents and
anything else the team makes. The website's own tokens in
`src/styles/global.css` follow the same rules.

This is a starting point. LIBRA does not yet have an official logo; the
wordmark below is typographic and can be replaced if one is commissioned
through PSFC communications.

## Relationship to the PSFC brand

LIBRA is a group within the PSFC, so its identity is a sub-brand of the PSFC
and MIT identities, not a separate brand.

- The PSFC logo (the MIT logotype with "Plasma Science & Fusion Center") is
  used only as supplied by PSFC communications, in one MIT core colour (MIT
  red, silver gray, bright red, black, white), and only black or white on a
  coloured background. Never altered or recoloured.
- Do not build a combined MIT or PSFC logo with LIBRA. Custom lockups only
  come from PSFC communications.
- The full PSFC branding folder is not kept in this repository; copy in
  only the files a page or document uses (the site uses the PSFC site icon,
  `public/images/brand/psfc-icon-32.png`). Ask PSFC communications for
  anything else.
- Where the centre needs naming without its logo, set "MIT Plasma Science and
  Fusion Center" in type, as in the lockup below.

## Wordmark

`wordmark/` holds the LIBRA wordmark as outlined SVG (no font needed) and as
400 px PNG with a transparent background in `wordmark/png/`.

| File | Use |
| --- | --- |
| `libra-wordmark-ink.svg` | Default, on paper or white |
| `libra-wordmark-mit-red.svg` | On paper or white, where one accent is wanted |
| `libra-wordmark-paper.svg` | On ink or dark photographs |
| `libra-lockup-centre-ink.svg` | Wordmark with the centre's name, on light grounds |
| `libra-lockup-centre-paper.svg` | The same, on dark grounds |

- Set in Hanken Grotesk 600, letter-spaced 0.06 em, capitals only.
- **Clear space:** at least half the height of the letters on every side.
- **Minimum size:** 16 px (6 mm) letter height; below that, write "LIBRA" in
  the text face instead.
- Do not stretch, rotate, outline, add effects, or set it in Plasma Pink or
  an experiment key colour (they fail contrast).
- The experiment names (BABY, LIBRA-Pi, LIBRA-PINT, LIBRA-One) are written
  in type, not as logos.

## Colour

`colours/` holds the palette as `libra-colours.json`, `libra-colours.css`
(OKLCH tokens with hex in comments) and a swatch sheet,
`libra-swatches.svg`.

**Paper and ink** carry almost everything: PSFC off-white paper `#F7F5F0`,
ink `#1D1716` for text and rules, and muted `#5D5653` for captions. Never
pure white paper or pure black ink.

**MIT red** `#750014` is the one action colour: links and a single filled
button. It is 10.9:1 on the paper, so it can carry text.

**Plasma Pink** `#DF1AD2` (PSFC primary) marks data: the active row in a
table, the line a chart argues from, a callout edge. It is only 3.7:1 on the
paper, so it never carries small text, and white on pink is only 4.03:1.

**Experiment keys** come from the PSFC accent palette and are assigned by an
experiment's `order`:

| Order | Experiment | Colour |
| --- | --- | --- |
| 1 | BABY | Aurora Green `#9DFC7E` |
| 2 | LIBRA-Pi | Electric Arc Aqua `#98ECFF` |
| 3 | LIBRA-PINT | Orange Edge `#FFA630` |
| 4 | LIBRA-One | Hydrogen Periwinkle `#BFB3FF` |
| 5 | next | Industrial Blue `#1966FF` |
| 6 | next | Heated `#F25757` |

Keys are fills (a square beside the name, a band, a series in a chart),
always with a thin ink edge, and never text colours: the pastel keys fail
contrast on paper.

## Type

| Role | Face | Notes |
| --- | --- | --- |
| Headings, wordmark, buttons | Hanken Grotesk 600 | Stands in for Neue Haas Grotesk, the PSFC primary face, which is Adobe Fonts only. Swap in Neue Haas Grotesk Display where it is licensed. |
| Reading text, captions | Roboto Serif 400 | A PSFC-sanctioned secondary face. |
| Figures, DOIs, code | Roboto Mono 400 | PSFC-sanctioned. Only for numbers that compare, identifiers and code, never labels. |

All three are free (Google Fonts). Labels and captions are set in sentence
case in the text face, a step smaller; never small capitals or letter-spaced
capitals.

## Writing

- British English. No em dashes: use a comma, colon, parentheses or a full
  stop.
- Say what was measured, with its unit and source, and mark anything unknown
  as TBC rather than guessing.
- The name: LIBRA, Liquid Immersion Blanket: Robust Accountancy. BABY, Build
  A Better Yield. LIBRA-Pi covers π steradians around the neutron source.
  LIBRA-One is designed for a tritium breeding ratio above one.

## Imagery

- Real photographs of the experiments, at working distance, captioned with
  what they show. No stock photos, no renders of other organisations'
  machines.
- Avoid identifiable faces unless the person has agreed.
- Strip metadata (phone photos carry GPS location) before sharing.
- The website's photo library is `src/assets/photos/` with captions in
  `src/data/media.json`, and can be reused here.

## Still to make

- Slide and poster templates in this style (the PSFC templates can be used
  in the meantime).
- An official LIBRA logo, if the team wants one, through PSFC
  communications.
