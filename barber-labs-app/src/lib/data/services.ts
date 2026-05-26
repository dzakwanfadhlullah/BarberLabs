import { Service } from '@/lib/types';

export const services: Service[] = [
  {
    id: 'regular-cut',
    name: 'Regular Cut',
    description: 'Clean haircut with natural finish.',
    duration: 30,
    price: 75000,
    priceFormatted: 'Rp75.000',
    category: 'haircut',
    isAvailable: true,
  },
  {
    id: 'fade-taper',
    name: 'Fade / Taper',
    description: 'Precision fade or taper with clean blend.',
    duration: 40,
    price: 100000,
    priceFormatted: 'Rp100.000',
    category: 'haircut',
    isAvailable: true,
  },
  {
    id: 'haircut-wash',
    name: 'Haircut + Wash',
    description: 'Full haircut with wash and styling.',
    duration: 45,
    price: 120000,
    priceFormatted: 'Rp120.000',
    category: 'haircut',
    isAvailable: true,
  },
  {
    id: 'beard-trim',
    name: 'Beard Trim',
    description: 'Clean beard shape and detail.',
    duration: 20,
    price: 50000,
    priceFormatted: 'Rp50.000',
    category: 'beard',
    isAvailable: true,
  },
];

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}

export function formatDuration(minutes: number): string {
  return `${minutes} min`;
}
