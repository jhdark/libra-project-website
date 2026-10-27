"""Check every link in a built Astro site.

usage: npm run build && python3 scripts/check-links.py dist /libra-project-website [--external]

Internal links are resolved against each page's URL both with and without a
trailing slash, since the site links to pages without one (url()) but hosts
may redirect to the slash form. A link must work in both.
"""
import sys, os, re, subprocess
from html.parser import HTMLParser
from urllib.parse import urljoin, urlparse, unquote
from concurrent.futures import ThreadPoolExecutor

dist, base = sys.argv[1], sys.argv[2].rstrip('/')
check_external = '--external' in sys.argv


class Links(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links, self.ids = [], set()

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if 'id' in a:
            self.ids.add(a['id'])
        for k in ('href', 'src', 'poster', 'data-src', 'data-cutaway'):
            if a.get(k):
                self.links.append((tag, k, a[k]))
        if a.get('srcset'):
            for part in a['srcset'].split(','):
                self.links.append((tag, 'srcset', part.strip().split(' ')[0]))


pages, ids = {}, {}
for root, _, files in os.walk(dist):
    for f in files:
        if f.endswith('.html'):
            path = os.path.join(root, f)
            rel = os.path.relpath(path, dist).replace(os.sep, '/')
            p = Links()
            p.feed(open(path, encoding='utf-8').read())
            pages[rel] = p.links
            ids[rel] = p.ids


def target_file(pathname):
    """Map a URL path to a file in dist, or None."""
    if not pathname.startswith(base + '/') and pathname != base:
        return None
    rel = unquote(pathname[len(base):]).lstrip('/')
    for cand in (rel, rel + '/index.html' if rel else 'index.html', rel + '.html', rel.rstrip('/') + '/index.html'):
        if cand and os.path.isfile(os.path.join(dist, cand)):
            return cand
    return None


def page_urls(rel):
    if rel == 'index.html':
        return [base + '/']
    if rel.endswith('/index.html'):
        d = base + '/' + rel[: -len('/index.html')]
        return [d, d + '/']
    return [base + '/' + rel]


broken, external = [], {}
for rel, links in sorted(pages.items()):
    for tag, attr, href in links:
        if re.match(r'^(mailto:|tel:|javascript:|data:)', href):
            continue
        if re.match(r'^https?://|^//', href):
            external.setdefault(href, set()).add(rel)
            continue
        for page_url in page_urls(rel):
            u = urlparse(urljoin('http://x' + page_url, href))
            if href.startswith('#') or (u.fragment and not u.path):
                if u.fragment and u.fragment not in ids[rel]:
                    broken.append((rel, page_url, href, 'missing anchor'))
                break
            f = target_file(u.path)
            if f is None:
                broken.append((rel, page_url, href, 'resolves to ' + u.path))
            elif u.fragment and f.endswith('.html') and u.fragment not in ids.get(f, set()):
                broken.append((rel, page_url, href, 'missing anchor #' + u.fragment))

print(f'{len(pages)} pages, {sum(len(v) for v in pages.values())} links, {len(external)} external URLs')
print('\nBROKEN INTERNAL')
for b in sorted(set(broken)):
    print('  ', ' | '.join(b))

if check_external:
    def fetch(u):
        cmd = ['curl', '-s', '-o', '/dev/null', '-L', '--max-time', '25', '-A',
               'Mozilla/5.0 (X11; Linux x86_64) libra-linkcheck', '-w', '%{http_code} %{url_effective}', u]
        out = subprocess.run(cmd, capture_output=True, text=True).stdout.strip()
        return u, out
    print('\nEXTERNAL (non-200)')
    with ThreadPoolExecutor(12) as ex:
        for u, out in sorted(ex.map(fetch, external)):
            code = out.split(' ')[0]
            if code != '200':
                print('  ', code, u, '->', out.split(' ', 1)[-1], '| on', ', '.join(sorted(external[u])[:3]))
