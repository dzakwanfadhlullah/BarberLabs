import { Service } from '@/lib/types';

export const services: Service[] = [
  {
    id: 'superior-haircut',
    name: 'Superior Haircut',
    description: 'Premium haircut with full service.',
    duration: 45,
    price: 60000,
    priceFormatted: 'Rp60.000',
    category: 'haircut',
    isAvailable: true,
  },
  {
    id: 'long-trim-haircut',
    name: 'Long Trim Haircut',
    description: 'Detailed trim for longer styles.',
    duration: 60,
    price: 70000,
    priceFormatted: 'Rp70.000',
    category: 'haircut',
    isAvailable: true,
  },
  {
    id: 'down-perm-rootlift',
    name: 'Down Perm & Rootlift',
    description: 'Volume and texture with perm and rootlift.',
    duration: 90,
    price: 120000,
    priceFormatted: 'Rp120.000',
    category: 'perm',
    isAvailable: true,
  },
  {
    id: 'curly-perm',
    name: 'Curly Perm',
    description: 'Full curly perm styling.',
    duration: 120,
    price: 270000,
    priceFormatted: 'Rp270.000',
    category: 'perm',
    isAvailable: true,
  },
  {
    id: 'smooth-set',
    name: 'Smooth & Set',
    description: 'Smoothing treatment and styling set.',
    duration: 150,
    price: 320000,
    priceFormatted: 'Rp320.000',
    category: 'treatment',
    isAvailable: true,
  },
];

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}

export function formatDuration(minutes: number): string {
  return `${minutes} min`;
}
