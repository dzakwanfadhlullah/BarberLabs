export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number; // minutes
  price: number; // in IDR
  priceFormatted: string;
  category: string;
  isAvailable: boolean;
}

export interface Barber {
  id: string;
  name: string;
  slug: string;
  specialty: string;
  shortBio: string;
  availability: string;
  availableDays: number[]; // 0=Sun, 1=Mon, etc.
  portraitImage: string;
  selectedCuts: string[]; // cut IDs
  isAvailable: boolean;
}

export interface Cut {
  id: string;
  title: string;
  slug: string;
  date: string;
  category: CutCategory;
  image: string;
  barberId: string | null;
  barberName: string;
  serviceId: string | null;
  shortDescription: string;
}

export type CutCategory = 'Fade' | 'Taper' | 'Scissor' | 'Beard' | 'Details';

export interface Hour {
  day: string;
  open: string;
  close: string;
  isClosed: boolean;
}

export interface Policy {
  number: string;
  title: string;
  description: string;
}

export interface BookingData {
  service: Service | null;
  barber: Barber | null;
  date: Date | null;
  time: string | null;
  customerName: string;
  whatsappNumber: string;
  notes: string;
  policyAccepted: boolean;
}

export interface LocationInfo {
  name: string;
  street: string;
  city: string;
  mapsUrl: string;
  whatsappNumber: string;
  whatsappUrl: string;
  paymentMethods: string[];
  parkingNote: string;
}
