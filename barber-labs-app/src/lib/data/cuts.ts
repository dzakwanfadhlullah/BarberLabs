import { Cut } from '@/lib/types';

export const cuts: Cut[] = [
  {
    id: 'low-fade-apr-2026',
    title: 'Low Fade',
    slug: 'low-fade-apr-2026',
    date: 'APR 2026',
    category: 'Fade',
    image: '/images/cut-low-fade.jpg',
    barberId: 'alex-reyes',
    barberName: 'Alex Reyes',
    serviceId: 'fade-taper',
    shortDescription: 'Clean low fade with natural texture and soft neckline.',
  },
  {
    id: 'chair-detail-mar-2026',
    title: 'Chair Detail',
    slug: 'chair-detail-mar-2026',
    date: 'MAR 2026',
    category: 'Details',
    image: '/images/cut-chair.jpg',
    barberId: null,
    barberName: 'Barber Labs',
    serviceId: null,
    shortDescription: 'A look at the precision tools and station setup.',
  },
  {
    id: 'mid-taper-mar-2026',
    title: 'Mid Taper',
    slug: 'mid-taper-mar-2026',
    date: 'MAR 2026',
    category: 'Taper',
    image: '/images/cut-mid-taper.jpg',
    barberId: 'jordan-kim',
    barberName: 'Jordan Kim',
    serviceId: 'fade-taper',
    shortDescription: 'Classic mid taper with seamless blend and clean finish.',
  },
  {
    id: 'tools-feb-2026',
    title: 'Tools',
    slug: 'tools-feb-2026',
    date: 'FEB 2026',
    category: 'Details',
    image: '/images/cut-tools.jpg',
    barberId: null,
    barberName: 'Barber Labs',
    serviceId: null,
    shortDescription: 'Professional-grade clippers, trimmers, and shears.',
  },
  {
    id: 'station-jan-2026',
    title: 'Station',
    slug: 'station-jan-2026',
    date: 'JAN 2026',
    category: 'Details',
    image: '/images/cut-station.jpg',
    barberId: null,
    barberName: 'Barber Labs',
    serviceId: null,
    shortDescription: 'Clean workspace. Every tool in its place.',
  },
  {
    id: 'textured-crop-feb-2026',
    title: 'Textured Crop',
    slug: 'textured-crop-feb-2026',
    date: 'FEB 2026',
    category: 'Scissor',
    image: '/images/cut-textured-crop.jpg',
    barberId: 'sam-patel',
    barberName: 'Sam Patel',
    serviceId: 'regular-cut',
    shortDescription: 'Textured top with clean short sides. Natural and relaxed.',
  },
  {
    id: 'beard-detail-jan-2026',
    title: 'Beard Detail',
    slug: 'beard-detail-jan-2026',
    date: 'JAN 2026',
    category: 'Beard',
    image: '/images/cut-beard.jpg',
    barberId: 'jordan-kim',
    barberName: 'Jordan Kim',
    serviceId: 'beard-trim',
    shortDescription: 'Defined beard lines with precise edge work.',
  },
  {
    id: 'curly-top-jan-2026',
    title: 'Curly Top',
    slug: 'curly-top-jan-2026',
    date: 'JAN 2026',
    category: 'Scissor',
    image: '/images/cut-curly-top.jpg',
    barberId: 'sam-patel',
    barberName: 'Sam Patel',
    serviceId: 'regular-cut',
    shortDescription: 'Maintained curls on top with faded sides.',
  },
  {
    id: 'detail-dec-2025',
    title: 'Detail',
    slug: 'detail-dec-2025',
    date: 'DEC 2025',
    category: 'Details',
    image: '/images/cut-detail.jpg',
    barberId: null,
    barberName: 'Barber Labs',
    serviceId: null,
    shortDescription: 'Close-up of precision neckline and temple work.',
  },
  {
    id: 'skin-fade-dec-2025',
    title: 'Skin Fade',
    slug: 'skin-fade-dec-2025',
    date: 'DEC 2025',
    category: 'Fade',
    image: '/images/cut-skin-fade.jpg',
    barberId: 'alex-reyes',
    barberName: 'Alex Reyes',
    serviceId: 'fade-taper',
    shortDescription: 'Tight skin fade with sharp line-up and zero blend.',
  },
];

export function getCutBySlug(slug: string): Cut | undefined {
  return cuts.find((c) => c.slug === slug);
}

export function getCutsByCategory(category: string): Cut[] {
  if (category === 'All') return cuts;
  return cuts.filter((c) => c.category === category);
}

export function getRelatedCuts(currentSlug: string, limit: number = 4): Cut[] {
  const current = getCutBySlug(currentSlug);
  if (!current) return cuts.slice(0, limit);
  return cuts
    .filter((c) => c.slug !== currentSlug)
    .sort((a, b) => (a.category === current.category ? -1 : 1))
    .slice(0, limit);
}

export const cutCategories = ['All', 'Fade', 'Taper', 'Scissor', 'Beard', 'Details'] as const;
