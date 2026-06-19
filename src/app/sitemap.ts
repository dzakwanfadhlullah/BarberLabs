import type { MetadataRoute } from 'next';
import { barbers } from '@/lib/data/barbers';
import { cuts } from '@/lib/data/cuts';

const siteUrl = 'https://barberlabs.id';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/book', '/cuts', '/barbers', '/location', '/policy', '/booking-confirmed'];
  const cutRoutes = cuts.map((cut) => `/cuts/${cut.slug}`);
  const barberRoutes = barbers.map((barber) => `/barbers/${barber.slug}`);

  return [...staticRoutes, ...cutRoutes, ...barberRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/book' ? 0.9 : 0.7,
  }));
}
