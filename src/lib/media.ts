import type { ImageMetadata } from 'astro';
import media from '../data/media.json';

// Photos are listed in src/data/media.json and stored in src/assets/photos/,
// so Astro can resize them and serve modern formats.
const files = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.{jpg,jpeg,png,webp}', { eager: true });

export interface Photo {
  file: string;
  kind: 'photo' | 'drawing';
  experiment: string;
  alt: string;
  caption: string;
  date: string;
  credit: string;
  image: ImageMetadata;
}

export const photos: Photo[] = media.photos.flatMap((p) => {
  const image = files[`../assets/photos/${p.file}`]?.default;
  if (!image) {
    console.warn(`media.json lists ${p.file}, but it is not in src/assets/photos/`);
    return [];
  }
  return [{ ...p, kind: p.kind as Photo['kind'], image }];
});

export const photosFor = (experiment: string) => photos.filter((p) => p.experiment === experiment);
export const photo = (file: string) => photos.find((p) => p.file === file);

// "2023-10" -> "October 2023"
export const formatMonth = (yyyyMm: string) => {
  if (!/^\d{4}-\d{2}$/.test(yyyyMm)) return yyyyMm;
  const [y, m] = yyyyMm.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString('en-GB', { month: 'long', year: 'numeric', timeZone: 'UTC' });
};
