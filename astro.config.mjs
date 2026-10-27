import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';
import { satteri } from '@astrojs/markdown-satteri';
import { baseLinks } from './src/lib/base-links.mjs';

// Where the site is served from. Defaults to GitHub Pages under the repo
// name; override at build time for another host, e.g. an MIT domain:
//   SITE_URL=https://libra.mit.edu BASE_PATH=/ npm run build
const site = process.env.SITE_URL ?? 'https://jhdark.github.io';
const base = process.env.BASE_PATH ?? '/libra-project-website';

export default defineConfig({
  site,
  base,
  vite: { plugins: [tailwindcss()] },
  integrations: [mdx()],
  // Site-root links in Markdown and MDX get the base (see src/lib/base-links.mjs).
  markdown: { processor: satteri({ hastPlugins: [baseLinks(base)] }) },
  // BABY was split into BABY 100 mL and BABY 1 L; keep the old guide URL working.
  redirects: { '/experiments/baby': `${base.replace(/\/$/, '')}/experiments/` },
});