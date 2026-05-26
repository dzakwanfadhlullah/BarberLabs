import { Barber } from '@/lib/types';

export const barbers: Barber[] = [
  {
    id: 'alex-reyes',
    name: 'Alex Reyes',
    slug: 'alex-reyes',
    specialty: 'Fades, Texture, Classic Cuts',
    shortBio: 'Focused on clean fades, natural texture, and consistent short styles. Precision in every detail.',
    availability: 'Tue–Sun',
    availableDays: [2, 3, 4, 5, 6], // Tue-Sat (Sun excluded for stricter scheduling)
    portraitImage: '/images/barber-alex.jpg',
    selectedCuts: ['low-fade-apr-2026', 'textured-crop-feb-2026', 'skin-fade-dec-2025'],
    isAvailable: true,
  },
  {
    id: 'jordan-kim',
    name: 'Jordan Kim',
    slug: 'jordan-kim',
    specialty: 'Tapers, Scissor Cuts, Beards',
    shortBio: 'Sharp tapers and detailed scissor work. Known for clean lines and beard precision.',
    availability: 'Mon–Sat',
    availableDays: [1, 2, 3, 4, 5, 6], // Mon-Sat
    portraitImage: '/images/barber-jordan.jpg',
    selectedCuts: ['mid-taper-mar-2026', 'beard-detail-jan-2026'],
    isAvailable: true,
  },
  {
    id: 'sam-patel',
    name: 'Sam Patel',
    slug: 'sam-patel',
    specialty: 'Short Styles, Lineups, Details',
    shortBio: 'Specializes in short precise styles, sharp lineups, and finishing details that make the difference.',
    availability: 'Wed–Sun',
    availableDays: [0, 3, 4, 5, 6], // Wed-Sun
    portraitImage: '/images/barber-sam.jpg',
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
