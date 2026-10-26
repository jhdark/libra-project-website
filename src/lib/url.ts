// Build an internal link that respects the configured `base`, so the site
// works both on GitHub Pages (/libra-project-website/...) and at a domain root.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path = '') => `${base}/${path.replace(/^\//, '')}`;

// Links in content data may be external (https://, mailto:) or a file on this
// site given relative to public/ (e.g. media/talks/poster.pdf).
export const linkHref = (href: string) => (/^([a-z]+:|#)/i.test(href) ? href : url(href));

// Frontmatter dates are midnight UTC; format in UTC so they don't shift a day.
export const formatDate = (date: Date) =>
  date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

// A publication's journal or DOI link becomes the link on its title; the
// rest stay as separate links.
type Link = { label: string; href: string };
export const titleLink = (links: Link[] = []) => {
  const main = links.find((l) => /^(journal|doi)$/i.test(l.label));
  return { titleHref: main ? linkHref(main.href) : undefined, others: links.filter((l) => l !== main) };
};
