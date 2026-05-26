import { Policy } from '@/lib/types';

export const policies: Policy[] = [
  {
    number: '01',
    title: 'Appointment',
    description: 'All services are by appointment.',
  },
  {
    number: '02',
    title: 'Reschedule',
    description: 'Please reschedule at least 2 hours before your appointment.',
  },
  {
    number: '03',
    title: 'Late Arrival',
    description: 'A 10-minute grace period is allowed.',
  },
  {
    number: '04',
    title: 'No Show',
    description: 'No-shows may be subject to cancellation or fee.',
  },
  {
    number: '05',
    title: 'Payment',
    description: 'Cash, QRIS, and bank transfer are accepted.',
  },
  {
    number: '06',
    title: 'Contact',
    description: 'For changes, contact us via WhatsApp.',
  },
];
