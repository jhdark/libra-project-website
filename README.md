# LIBRA project website

The central website for the [LIBRA project](https://github.com/LIBRA-project):
the team, publications and presentations, links to data and code, and
detailed guides for each experiment (BABY, LIBRA-Pi, LIBRA-Pint, LIBRA-One).

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).
The output is a plain static site in `dist/` that can be hosted anywhere.

## Running the site locally

You need Node.js 22.12 or newer. The easiest way to get it is the conda
environment in this repo.

1. Create and activate the environment (first time only for `create`):

   ```sh
   conda env create -f environment.yml
   conda activate libra-website
   ```

2. Install the JavaScript dependencies (first time, and whenever
   `package.json` changes):

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

4. Open <http://localhost:4321/libra-project-website/> in your browser. The
   page reloads automatically when you edit a file. Stop the server with
   `Ctrl+C`.

The `/libra-project-website/` path matches how the site is served on GitHub
Pages. To serve it at the root instead, run `BASE_PATH=/ npm run dev` and open
<http://localhost:4321/>.

### Other commands

| Command           | What it does                                        |
| :---------------- | :-------------------------------------------------- |
| `npm run build`   | Build the production site into `dist/`              |
| `npm run preview` | Serve the built `dist/` folder to check it locally  |

If you change `environment.yml`, update the environment with
`conda env update -f environment.yml --prune`.

## Editing content

Most content is Markdown or JSON, so editing it doesn't involve touching any page code.

| What                  | Where                                   |
| :-------------------- | :-------------------------------------- |
| Experiment guides     | `src/content/experiments/<slug>.md`     |
| News posts            | `src/content/news/<date>-<slug>.md`     |
| People                | `src/data/people.json`                  |
| Publications, talks   | `src/data/publications.json`            |
| Datasets and software | `src/data/datasets.json`                |
| Photos and drawings   | `src/assets/photos/` + `src/data/media.json` |
| Videos                | `public/media/video/`                   |

### Photos and videos

Photos and drawings live in `src/assets/photos/` and are listed in
`src/data/media.json` with their alt text, caption, date, credit and the
experiment they belong to. A photo tagged with an experiment's slug appears
in the "In the lab" section of that experiment's guide. To add one:

1. Export the image as JPEG (or PNG for drawings) with the long edge about
   2400 px and the metadata stripped (phone photos carry GPS location).
2. Put it in `src/assets/photos/` with a short descriptive file name.
3. Add an entry to `photos` in `src/data/media.json`. Use `"kind": "drawing"`
   for CAD and diagrams so they are shown whole rather than cropped.

Astro resizes and converts the images at build time. Avoid photos where
people can be identified unless they have agreed.

Videos go in `public/media/video/`, compressed for the web (H.264 MP4 and
WebM, a few MB at most, with a poster frame), and are listed under `videos`.
The homepage background is `lab-loop`.

To add a new experiment, copy one of the files in `src/content/experiments/`,
rename it (the file name becomes the URL), and edit its frontmatter and body.
It appears on the homepage and the experiments page automatically.

Publications and datasets are linked to experiments by slug (for example
`"experiments": ["baby"]`), so they also show up on that experiment's guide.

## Deployment

Pushing to `main` builds the site and deploys it to GitHub Pages via
`.github/workflows/deploy.yml`. Enable Pages in the repository settings with
"GitHub Actions" as the source.

To build for a different host or domain, set `SITE_URL` and `BASE_PATH`:

```sh
SITE_URL=https://libra.mit.edu BASE_PATH=/ npm run build
```

See [PLAN.md](PLAN.md) for the site structure and hosting options, including
WordPress.
