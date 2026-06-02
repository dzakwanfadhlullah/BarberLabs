import { Barber } from '@/lib/types';

export const barbers: Barber[] = [
  {
    id: 'galang',
    name: 'Galang',
    slug: 'galang',
    branchId: 1,
    specialty: 'Fades, Texture, Classic Cuts',
    shortBio: 'Focused on clean fades, natural texture, and consistent short styles. Precision in every detail.',
    availability: 'Tue-Sat',
    availableDays: [2, 3, 4, 5, 6],
    portraitImage: '/images/barber-galang.png',
    selectedCuts: ['low-fade-apr-2026', 'textured-crop-feb-2026', 'skin-fade-dec-2025'],
    isAvailable: true,
  },
  {
    id: 'aldit',
    name: 'Aldit',
    slug: 'aldit',
    branchId: 2,
    specialty: 'Tapers, Scissor Cuts, Beards',
    shortBio: 'Sharp tapers and detailed scissor work. Known for clean lines and beard precision.',
    availability: 'Tue-Sat',
    availableDays: [2, 3, 4, 5, 6],
    portraitImage: '/images/barber-aldit.png',
    selectedCuts: ['mid-taper-mar-2026', 'beard-detail-jan-2026'],
    isAvailable: true,
  },
  {
    id: 'budi',
    name: 'Budi',
    slug: 'budi',
    branchId: 3,
    specialty: 'Short Styles, Lineups, Details',
    shortBio: 'Specializes in short precise styles, sharp lineups, and finishing details that make the difference.',
    availability: 'Wed-Sat',
    availableDays: [3, 4, 5, 6],
    portraitImage: '/images/barber-budi.png',
    selectedCuts: ['curly-top-jan-2026', 'detail-dec-2025'],
    isAvailable: true,
  },
];

export function getBarberById(id: string): Barber | undefined {
  return barbers.find((b) => b.id === id);
}

export function getBarberBySlug(slug: string): Barber | undefined {
  return barbers.find((b) => b.slug === slug);
}

export function getBarbersByBranchId(branchId: number): Barber[] {
  return barbers.filter((b) => b.branchId === branchId);
}
