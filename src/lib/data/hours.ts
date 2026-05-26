import { Hour, LocationInfo, Branch } from '@/lib/types';

export const hours: Hour[] = [
  { day: 'Mon', open: '', close: '', isClosed: true },
  { day: 'Tue', open: '10:00', close: '19:00', isClosed: false },
  { day: 'Wed', open: '10:00', close: '19:00', isClosed: false },
  { day: 'Thu', open: '10:00', close: '20:00', isClosed: false },
  { day: 'Fri', open: '10:00', close: '20:00', isClosed: false },
  { day: 'Sat', open: '09:00', close: '18:00', isClosed: false },
  { day: 'Sun', open: '', close: '', isClosed: true },
];

export const branches: Branch[] = [
  { id: 1, name: 'Barber Labs 1', address: 'Jln. Jatinangor No. 142 (next to Bebek Nangor)' },
  { id: 2, name: 'Barber Labs 2', address: 'Jln. Jatinangor No. 172 (across from Geprek Bebas)' },
  { id: 3, name: 'Barber Labs 3', address: 'Jln. Jatinangor No. 75 (across from Griya Jatinangor)' },
];

export const locationInfo: LocationInfo = {
  name: 'Barber Labs',
  street: 'Jln. Jatinangor No. 142',
  city: 'Sumedang, Jawa Barat',
  mapsUrl: 'https://maps.google.com/?q=Jatinangor',
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
