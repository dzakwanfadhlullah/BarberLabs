import { Hour, LocationInfo } from '@/lib/types';

export const hours: Hour[] = [
  { day: 'Mon', open: '', close: '', isClosed: true },
  { day: 'Tue', open: '10:00', close: '19:00', isClosed: false },
  { day: 'Wed', open: '10:00', close: '19:00', isClosed: false },
  { day: 'Thu', open: '10:00', close: '20:00', isClosed: false },
  { day: 'Fri', open: '10:00', close: '20:00', isClosed: false },
  { day: 'Sat', open: '09:00', close: '18:00', isClosed: false },
  { day: 'Sun', open: '', close: '', isClosed: true },
];

export const locationInfo: LocationInfo = {
  name: 'Barber Labs',
  street: '124 Industrial Ave',
  city: 'Brooklyn, NY 11237',
  mapsUrl: 'https://maps.google.com/?q=124+Industrial+Ave+Brooklyn+NY+11237',
  whatsappNumber: '+6281234567890',
  whatsappUrl: 'https://wa.me/6281234567890',
  paymentMethods: ['Cash', 'QRIS', 'Bank Transfer'],
  parkingNote: 'Street parking available. Nearest landmark: Industrial Park entrance.',
};

export function formatHours(hour: Hour): string {
  if (hour.isClosed) return 'Closed';
  return `${hour.open}–${hour.close}`;
}

export function isOpenToday(): boolean {
  const dayIndex = new Date().getDay(); // 0=Sun
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = hours.find(h => h.day === dayNames[dayIndex]);
  return today ? !today.isClosed : false;
}
