# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Website for the LIBRA project (tritium breeding experiments, MIT PSFC), built
with Astro + Tailwind CSS v4. Structure follows the OSSFE 2027 site. Deployed
to GitHub Pages; `site` and `base` in `astro.config.mjs` come from the
`SITE_URL` / `BASE_PATH` env vars so the same build can target an MIT domain.
Build internal links with `url()` from `src/lib/url.ts`, never hardcoded
absolute paths.
In Markdown and MDX, write internal links from the site root
(`[BABY 1 L](/experiments/baby-1l)`); `src/lib/base-links.mjs` adds the base.
Never use relative page links (`../baby-1l`): they break without a trailing slash.

## Writing style

- **Never use em dashes in any copy, code comments, or commit messages.**
  Use a comma, colon, parentheses, or a period instead.
- Don't invent facts about the experiments or people. Mark anything unknown as
  TBC or TODO for the team to fill in.

## Fact-checking

The sources of truth for facts about the experiments are the published
papers (the BABY papers are in `public/media/papers/`) and the repositories
of the LIBRA-project GitHub organisation, above all each run's
`data/general.json` and `data/processed_data.json`. For people, a public
profile or ORCID. Anything not yet checked against one of these is wrapped
in `<mark>…</mark>`: in Markdown and MDX bodies, and inside strings in
frontmatter and `src/data/*.json`, which `Tbc` renders. Marked text shows in
the review pink, and any page holding some gets a notice under the nav.
`docs/fact-check.md` records what was checked, against what, and what is
still open. When the team confirms a marked fact, remove the tags (and update
the log); never add a fact without either a source or a mark.

## PSFC brand

LIBRA is a group within the MIT Plasma Science and Fusion Center, and the site
is a LIBRA sub-brand of the PSFC identity. The PSFC branding folder (logos,
fonts, templates, guidelines) was supplied for reference and is not
committed as a whole; individual assets the site actually uses can be
(for example `public/images/brand/psfc-icon-32.png`). The rules that matter
are here.

- **Logo:** the PSFC logo is the MIT logotype with "Plasma Science & Fusion
  Center" (one-line or two-line lockup), used as supplied in one MIT core
  colour (MIT red, silver gray, bright red, black, white), and only black or
  white on a coloured background. Never altered or recoloured. Custom lockups
  (for example MIT with LIBRA) only come from PSFC communications. The site
  currently names the centre in type in the footer.
- **MIT core colours:** MIT red `#750014`, silver gray `#8B959E` (fails as text
  on light paper), bright red `#FF1423`, black, white.
- **PSFC palette:** Plasma Pink `#DF1AD2` and Hydrogen Periwinkle `#BFB3FF`
  (primary); Aurora Green `#9DFC7E`, Electric Arc Aqua `#98ECFF` (accents);
  Industrial Blue `#1966FF`, Heated `#F25757`, Orange Edge `#FFA630`
  (secondary). PSFC slide templates use off-white `#F7F5F0` paper.
- **Contrast:** Plasma Pink is 3.7:1 on the off-white and white on pink is
  4.03:1, so pink is for marks and fills, never small text.
- **Type:** Neue Haas Grotesk is the PSFC primary face (Text up to 20px,
  Display above), Adobe Fonts only. Roboto Serif and Roboto Mono are the
  sanctioned secondary faces for subheads and captions on the web.

## Reference material that must not be committed

- `PSFC Branding Assets/` (if present) and `1 Team Presentations/` were
  supplied for reference and are git-ignored. Never commit the folders;
  copy in only the individual files the site uses. Use only what is public (posters, conference talks,
  published papers) for site copy; ARPA-E quarterly reviews and memos,
  safety and beryllium committee decks, budgets, unpublished results and
  personal data stay off the site. Results already public in a LIBRA-project
  GitHub repository may be shown, labelled as not yet published.

## Development

Node comes from the conda env: `conda activate libra-website`. Then
`npm install`, `npm run dev` (serves at `localhost:4321/libra-project-website/`),
`npm run build`. There is no test suite; after a build,
`python3 scripts/check-links.py dist /libra-project-website` checks every
internal link (add `--external` to test outside links too).

## Architecture

- `src/content.config.ts` defines the `experiments` and `news` collections
  (Markdown in `src/content/`). Experiment frontmatter drives cards, status
  badges, the key facts sidebar and the repository list.
- `src/data/*.json` holds people, publications and Zenodo records.
  Publications (`experiments: [slug]`) and datasets (`experiment: slug`) link
  to experiments by file slug and are shown on that experiment's page.
- `src/layouts/Base.astro` is the shared shell (Nav, Footer).
  Inner pages start with `PageHeader`.
- Colours, fonts and sizes are tokens in `src/styles/global.css`; see
  "Design system" below. Use these, not raw Tailwind colours.
- Keep content in Markdown/JSON and out of templates: this keeps a later
  move to WordPress possible (see PLAN.md).

## Design system

The "Lab record" direction (see `docs/design-directions/` for the
alternatives): a LIBRA sub-brand of the PSFC identity, set like a printed lab
record. Paper, rules and type carry the design; there are no cards, shadows,
gradients, pills or icons (the exceptions, by choice: the GitHub mark and
the sun and moon theme switch in the nav, and the profile link marks on
People). It was designed with the hallmark skill
(`.agents/skills/hallmark`, not committed); the stamp at the top of
`global.css` records its decisions and waivers, but day-to-day edits only need
the rules below.

### Tokens (`src/styles/global.css`)

- **Paper:** `paper` (PSFC off-white `#F7F5F0`), `paper-2` and `paper-3` for
  bands and hover, `sheet` for a table set as a printed page. Tinted, never
  pure white.
- **Ink:** `ink` (text and firm rules), `ink-2` (secondary text), `muted`
  (labels, captions, TBC), `rule` (hairlines), `rule-2` (the 2px firm rule).
- **Accent:** `accent` is MIT red: the one filled button per page, links and
  the current nav item; `accent-2` on hover. `signal` is Plasma Pink and
  `signal-wash` its tint: they mark data (the active campaign, a callout),
  never carry text.
- **Dark band:** `on-ink`, `on-ink-2`, `on-ink-rule`, `on-ink-link` for text
  on an `ink` background (the homepage open data band). Any rule that paints
  a dark surface also sets its text colour.
- **Experiment keys:** `key-1` to `key-6` from the PSFC accent palette.
- **Type:** `font-display` Hanken Grotesk 600 for heads, nav and buttons
  (standing in for Neue Haas Grotesk); `font-body` Roboto Serif for reading;
  `font-mono` Roboto Mono only for figures, dates in tables, DOIs and code.
  Sizes: `text-display` (h1), `text-display-s` (a statement), `text-section`
  (h2), `text-title` (item heads), `text-lead` (the line under a head).
- **Spacing and layout:** `--space-*` (2 to 144px), `--section-gap*`,
  `--gap-columns`; `.wrap` is the centred 1440px container with
  `--gutter` padding. Do not use Tailwind's `container`: its breakpoint widths
  override ours.
- Tokens live in `@theme static` so component `<style>` blocks can read any of
  them with `var(--color-...)`.

### Shared classes

`.btn`, `.btn-primary` (one per page), `.btn-on-ink`; `.link` (running text)
and `.link-strong` (standalone links); `.lead`; `.split-head` (a section head
left, its line or link right, a firm rule beneath); `.num` and `.tbc`;
`.prose-libra` for Markdown (guides and news posts).

### Media and brand

- Photos and drawings: `src/assets/photos/`, listed with alt text, caption,
  date, credit and experiment in `src/data/media.json` (`src/lib/media.ts`,
  `Figure`). A photo tagged with an experiment slug appears in that guide's
  "In the lab" section. Strip metadata and avoid identifiable faces.
- Videos: `public/media/video/`, web-compressed MP4 and WebM with a poster.
  The homepage hero (`HeroVideo`) plays `lab-loop` muted, with a pause
  button, and not at all under reduced motion.
- `brand/` is the LIBRA brand kit (wordmark, colours, guide). It is not
  published on the site.

### Components

- `HeroVideo`: the homepage hero over the lab footage loop.
- `PageHeader`: title, intro and an optional slot for page facts (status, a
  date). Never a label above the title.
- `ExperimentLedger`: the experiments as one ruled table, each row a link.
- `ExperimentCard`: a full-width entry on the experiments index.
- `ExperimentKey`: an experiment's square colour key.
- `CampaignSheet`: an experiment's Campaigns table, read from its guide's
  Markdown by `campaignsOf()` in `src/lib/experiments.ts`, with the active
  campaign marked in pink. The homepage shows the first active experiment
  that has one.
- `CadViewer`: an interactive GLB model from `public/models/`; with
  `cutaway`, a button in its top right swaps in the cut-away model.
  `scripts/cad/` converts STEP files and makes the cut-aways.
- `Diagram`: a line diagram from `src/assets/diagrams/*.svg`, inlined so it
  uses the site's fonts and tokens via the `dg-*` classes. Blue lines are
  gas carrying tritium released from the salt, orange is gas collecting
  permeated tritium, dashed is a route not yet confirmed (TBC).
- `PageHeader` takes an optional `figure` slot; experiment guides put their
  stage render from the scale-up path there.
- `PublicationItem`, `NewsList`, `PersonEntry`, `StatusBadge`, `Tbc` (sets
  "TBC" in `muted`).

### How experiments get their identity

Each experiment gets a key colour from its `order` in frontmatter
(`keyColour()` in `src/lib/experiments.ts`: order 1 is `key-1`, and so on,
wrapping after 6). A new experiment needs no code change. The key appears as
a square beside the name in the ledger, the experiments index, the data
table, and as a band under the guide's header. Keys are fills with a 1px ink
edge, never text colour (the pastel keys fail contrast as text).

### Rules that keep it from looking generated

- No small uppercase or letter-spaced labels, and no label line above a
  heading: let the heading say it, or use a caption below.
- No middle dots joining meta (`Preprint · 2024`), no arrows glued to links,
  no icon tiles, no pill badges, no glow or blur, no cards inside cards.
- One filled button per page; everything else outlined or a text link.
- Status is type: Active in the display face, Completed in ink, Planned in
  muted.
- Tables restack into labelled rows on phones rather than scrolling sideways.
- Every interactive element keeps the focus ring (`focus` token, 2px). Motion
  is limited to colour changes on hover, and the CAD viewer stops rotating
  under reduced motion.
- Copy: British English, no em dashes, no buzzwords; TBC and TODO stay
  visible.
