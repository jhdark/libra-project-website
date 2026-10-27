// Markdown links to pages on this site are written from the site root, e.g.
// [BABY 1 L](/experiments/baby-1l). This Sätteri plugin prefixes them with the
// configured `base`, so they work on GitHub Pages and at a domain root alike.
// Relative links (../baby-1l) break when a page is served without a trailing
// slash, which is how url() links to pages.
export const baseLinks = (base) => {
  const prefix = base.replace(/\/$/, '');
  return () => ({
    name: 'base-links',
    element: {
      filter: ['a'],
      visit(node, ctx) {
        const href = node.properties?.href;
        if (typeof href === 'string' && href.startsWith('/') && !href.startsWith('//') && !href.startsWith(`${prefix}/`)) {
          ctx.setProperty(node, 'href', `${prefix}${href}`);
        }
      },
    },
  });
};
