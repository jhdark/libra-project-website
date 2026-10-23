import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Where the site is served from. Defaults to GitHub Pages under the repo
// name; override at build time for another host, e.g. an MIT domain:
//   SITE_URL=https://libra.mit.edu BASE_PATH=/ npm run build
const site = process.env.SITE_URL ?? 'https://jhdark.github.io';
const base = process.env.BASE_PATH ?? '/libra-project-website';

export default defineConfig({
  site,
  base,
  vite: { plugins: [tailwindcss()] },
});
