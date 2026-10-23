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
