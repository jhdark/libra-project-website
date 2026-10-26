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
