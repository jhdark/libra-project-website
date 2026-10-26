# LIBRA website plan

## Goal

One place for LIBRA communications: who is involved, what we have published
and presented, where the data and code are, and detailed guides for every
experiment under the LIBRA umbrella.

## Audiences

1. **The fusion community and funders.** What LIBRA is, results, papers.
2. **Researchers reusing our work.** Data, code, DOIs, how to cite.
3. **The team and new members.** Detailed experiment guides and procedures.

## Site map

| Page | URL | Content source |
| --- | --- | --- |
| Home | `/` | Hero, mission, experiments, featured paper, latest news, open data |
| Experiments | `/experiments` | Cards for each experiment |
| Experiment guide | `/experiments/<slug>` | `src/content/experiments/<slug>.md` plus linked repos, datasets, publications |
| People | `/people` | `src/data/people.json` |
| Publications | `/publications` | `src/data/publications.json`, filterable by type |
| Data & Code | `/data` | `src/data/datasets.json`, Zenodo, GitHub, libra-toolbox |
| News | `/news`, `/news/<slug>` | `src/content/news/*.md` |

Every experiment guide follows the same outline: Overview, Experimental setup,
Diagnostics, Running an experiment, Data and analysis. A sidebar shows the
table of contents and key facts, and the page footer lists the repositories,
Zenodo records and publications for that experiment.

## Questions for the team

- What do LIBRA-Pi and LIBRA-Pint stand for, and what are they? Is
  `libra-pie-neutronics` part of LIBRA-Pi?
- Is "Liquid Immersion Blanket: Robust Accountancy" the right expansion of LIBRA?
- People page: roles, affiliations, photos, and how to group people
  (leadership, staff, students, alumni, collaborators).
- Journal reference for the BABY paper (currently linked as the arXiv preprint).
- Talks and posters to list (the current ones are example entries).
- Funders and partner logos for the homepage.
- A project logo (the current mark is a placeholder).
- Domain: GitHub Pages for now, then MIT?

## Hosting and WordPress

The site builds to static HTML, so it can be hosted on GitHub Pages now and
moved later without changes. Options for MIT, roughly in order of effort:

1. **Static hosting at MIT.** If PSFC or IS&T can serve a static folder (or
   point a `*.mit.edu` name at GitHub Pages with a CNAME), we keep this site
   as is: build with `SITE_URL=... BASE_PATH=/` and upload `dist/`. Worth
   asking about this first, since it is the least work.
2. **Headless WordPress.** Content is edited in an MIT WordPress instance and
   this Astro site pulls it from the WordPress REST API at build time, through
   a custom content loader in `src/content.config.ts`. Pages keep their
   current design; only the source of the data changes. This suits a team that
   wants a web editor rather than editing Markdown in git.
3. **Full WordPress site.** If MIT requires a WordPress-rendered site, the
   content migrates easily because it is already separated from the design:
   Markdown posts and guides import as WordPress posts and pages, and the JSON
   files (people, publications, datasets) map onto custom post types (for
   example with Advanced Custom Fields). The design would be rebuilt as a
   WordPress theme using the same colours and layout.

To keep all three options open, content stays in Markdown and JSON and out of
the page templates.

## Possible next steps

- Generate `datasets.json` from the Zenodo API at build time so new records
  appear automatically.
- Pull repository lists from the GitHub API instead of listing them by hand.
- Photos and diagrams for the experiment guides.
- Search across experiment guides (for example Pagefind).
