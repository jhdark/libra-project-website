// Build an internal link that respects the configured `base`, so the site
// works both on GitHub Pages (/libra-project-website/...) and at a domain root.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path = '') => `${base}/${path.replace(/^\//, '')}`;

// Frontmatter dates are midnight UTC; format in UTC so they don't shift a day.
export const formatDate = (date: Date) =>
  date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
