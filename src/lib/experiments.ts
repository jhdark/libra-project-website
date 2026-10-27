import type { CollectionEntry } from 'astro:content';

// Each experiment's key colour is a stop on the plasma colour map
// (--color-key-1 to --color-key-5 in global.css), picked by its `order`, so a
// new experiment gets one without any code change. A sixth would wrap round.
const KEYS = 5;
export const keyColour = (order: number) => `var(--color-key-${((Math.max(order, 1) - 1) % KEYS) + 1})`;

export interface CampaignTable {
  headers: string[];
  rows: string[][];
}

// Read the "Campaigns" table from an experiment guide's Markdown body, so the
// homepage sheet stays in step with the guide. Returns null when the guide
// has no such table.
export function campaignsOf(entry: CollectionEntry<'experiments'>): CampaignTable | null {
  const body = entry.body ?? '';
  const section = body.split(/^## /m).find((s) => /^Campaigns\b/.test(s));
  if (!section) return null;
  const lines = section.split('\n').filter((l) => l.trim().startsWith('|'));
  if (lines.length < 3) return null;
  const cells = (line: string) => line.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
  const [head, , ...rest] = lines;
  return { headers: cells(head), rows: rest.map(cells) };
}

// Split a value into plain text, "TBC" markers and <mark>…</mark> spans, so
// templates can set TBC in the muted colour and mark text that has not been
// verified against a published source (see "Fact-checking" in CLAUDE.md).
const MARK = /<mark>([\s\S]*?)<\/mark>/;
export const tbcParts = (text: string) =>
  text.split(new RegExp(MARK.source)).flatMap((chunk, i) =>
    chunk.split(/(\(TBC\)|\bTBC\b)/).filter(Boolean).map((part) => ({ text: part, tbc: /TBC/.test(part), mark: i % 2 === 1 })),
  );

// The same value as plain text, for attributes and meta tags.
export const plainText = (text: string) => text.replace(new RegExp(MARK.source, 'g'), '$1');
