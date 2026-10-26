# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Website for the LIBRA project (tritium breeding experiments, MIT PSFC), built
with Astro + Tailwind CSS v4. Structure follows the OSSFE 2027 site. Deployed
to GitHub Pages; `site` and `base` in `astro.config.mjs` come from the
`SITE_URL` / `BASE_PATH` env vars so the same build can target an MIT domain.
Build internal links with `url()` from `src/lib/url.ts`, never hardcoded
absolute paths.

## Writing style

- **Never use em dashes in any copy, code comments, or commit messages.**
  Use a comma, colon, parentheses, or a period instead.
- Don't invent facts about the experiments or people. Mark anything unknown as
  TBC or TODO for the team to fill in.

## PSFC brand

LIBRA is a group within the MIT Plasma Science and Fusion Center, and the site
is a LIBRA sub-brand of the PSFC identity. The PSFC branding files (logos,
fonts, templates, guidelines) were supplied for reference only and **must not
be committed**; the rules that matter are here.

- **Logo:** the PSFC logo is the MIT logotype with "Plasma Science & Fusion
  Center" (one-line or two-line lockup), used as supplied in one MIT core
  colour (MIT red, silver gray, bright red, black, white), and only black or
  white on a coloured background. Never altered or recoloured. Custom lockups
  (for example MIT with LIBRA) only come from PSFC communications. The site
  names the centre in type instead of using the logo file.
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

## Development

Node comes from the conda env: `conda activate libra-website`. Then
`npm install`, `npm run dev` (serves at `localhost:4321/libra-project-website/`),
`npm run build`. There is no test suite.

## Architecture

- `src/content.config.ts` defines the `experiments` and `news` collections
  (Markdown in `src/content/`). Experiment frontmatter drives cards, status
  badges, the key facts sidebar and the repository list.
- `src/data/*.json` holds people, publications and Zenodo records.
  Publications (`experiments: [slug]`) and datasets (`experiment: slug`) link
  to experiments by file slug and are shown on that experiment's page.
- `src/layouts/Base.astro` is the shared shell (Nav, Footer, draft badge).
  Inner pages start with `PageHeader`.
- Colours and fonts are `@theme` tokens in `src/styles/global.css`
  (`libra-navy/deep/steel`, `paper`, `surface`, `line`, `ink*`, `accent`,
  `tritium`). Use these, not raw Tailwind colours.
- Keep content in Markdown/JSON and out of templates: this keeps a later
  move to WordPress possible (see PLAN.md).
