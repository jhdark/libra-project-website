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

// Split a value into plain text and "TBC" markers, so templates can set the
// markers in the muted colour.
export const tbcParts = (text: string) =>
  text.split(/(\(TBC\)|\bTBC\b)/).filter(Boolean).map((part) => ({ text: part, tbc: /TBC/.test(part) }));
