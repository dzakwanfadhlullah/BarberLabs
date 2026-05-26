'use client';

import { useState, useMemo, useCallback, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { MessageCircle, CalendarClock, Clock, AlertCircle } from 'lucide-react';
import { services, getServiceById } from '@/lib/data/services';
import { barbers, getBarberById } from '@/lib/data/barbers';
import { hours } from '@/lib/data/hours';
import { Service, Barber } from '@/lib/types';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { EditorialLink } from '@/components/ui/EditorialLink';
import { BookingServiceSelector } from '@/components/booking/BookingServiceSelector';
import { BookingBarberSelector } from '@/components/booking/BookingBarberSelector';
import { DatePicker } from '@/components/booking/DatePicker';
import { TimeSlotPicker, generateTimeSlots } from '@/components/booking/TimeSlotPicker';
import { ContactFields } from '@/components/booking/ContactFields';
import { BookingSummary, formatDate } from '@/components/booking/BookingSummary';

const WHATSAPP_NUMBER = '6281234567890';

function BookingContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const preService = searchParams.get('service');
  const preBarber = searchParams.get('barber');

  const [selectedService, setSelectedService] = useState<Service | null>(
    preService ? getServiceById(preService) || services[0] : services[0]
  );
  const [selectedBarber, setSelectedBarber] = useState<Barber | null>(
    preBarber && preBarber !== 'any' ? getBarberById(preBarber) || null : null
  );
  const [isAnyBarber, setIsAnyBarber] = useState(!preBarber || preBarber === 'any');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [notes, setNotes] = useState('');
  const [policyAccepted, setPolicyAccepted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleBarberSelect = useCallback((barber: Barber | null) => {
    if (barber === null) {
      setIsAnyBarber(true);
      setSelectedBarber(null);
    } else {
      setIsAnyBarber(false);
      setSelectedBarber(barber);
    }
    setSelectedTime(null);
  }, []);

  const closedDays = useMemo(() => {
    return hours.filter(h => h.isClosed).map(h => {
      const map: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
      return map[h.day];
    });
  }, []);

  const timeSlots = useMemo(() => {
    if (!selectedDate) return [];
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayName = dayNames[selectedDate.getDay()];
    const dayHours = hours.find(h => h.day === dayName);
    if (!dayHours || dayHours.isClosed) return [];
    return generateTimeSlots(dayHours.open, dayHours.close);
  }, [selectedDate]);

  const handleContactChange = useCallback((field: string, value: string | boolean) => {
    if (field === 'name') setName(value as string);
    else if (field === 'whatsapp') setWhatsapp(value as string);
    else if (field === 'notes') setNotes(value as string);
    else if (field === 'policyAccepted') setPolicyAccepted(value as boolean);
    setErrors(prev => ({ ...prev, [field]: '' }));
  }, []);

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (!selectedService) e.service = 'Choose a service.';
    if (!selectedDate) e.date = 'Choose a date.';
    if (!selectedTime) e.time = 'Choose a time.';
    if (!name.trim()) e.name = 'Enter your name.';
    if (!whatsapp.trim() || whatsapp.trim().length < 8) e.whatsapp = 'Enter a valid WhatsApp number.';
    if (!policyAccepted) e.policy = 'Please accept the booking policy.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleConfirm = () => {
    if (!validate()) return;
    const barberName = isAnyBarber ? 'Any Barber' : selectedBarber?.name || 'Any Barber';
    const dateStr = formatDate(selectedDate);
    const msg = encodeURIComponent(
      `Hello Barber Labs, I want to book an appointment.\n\nService: ${selectedService!.name}\nBarber: ${barberName}\nDate: ${dateStr}\nTime: ${selectedTime}\nName: ${name}\nWhatsApp: ${whatsapp}${notes ? `\nNotes: ${notes}` : ''}`
    );
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
    window.open(url, '_blank');
    const params = new URLSearchParams({
      service: selectedService!.name,
      barber: barberName,
      date: dateStr,
      time: selectedTime!,
    });
    router.push(`/booking-confirmed?${params.toString()}`);
  };

  return (
    <div className="px-[var(--page-padding-x)] pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-8 lg:gap-12 xl:gap-16">
        {/* Left: Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pt-8 lg:pt-16"
        >
          <SectionLabel number="01" title="Booking" className="mb-6" />
          <h1 className="text-[clamp(36px,6vw,64px)] font-extrabold leading-[0.95] tracking-[-0.06em] text-black">
            Book /<br />your cut
          </h1>
          <p className="mt-4 text-[16px] leading-[1.4] text-[var(--color-text-secondary)] max-w-[260px]">
            Choose your service, select a time, and confirm your chair.
          </p>
        </motion.div>

        {/* Center: Form Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="pt-4 lg:pt-16 space-y-10"
        >
          {/* Service */}
          <div>
            <SectionLabel number="02" title="Service" className="mb-4" />
            <BookingServiceSelector services={services} selected={selectedService} onSelect={setSelectedService} />
            {errors.service && <p className="mt-2 text-[13px] text-[var(--color-error)]">{errors.service}</p>}
          </div>

          {/* Barber */}
          <div>
            <SectionLabel number="03" title="Barber" className="mb-4" />
            <BookingBarberSelector barbers={barbers} selected={selectedBarber} isAnyBarber={isAnyBarber} onSelect={handleBarberSelect} />
          </div>

          {/* Date */}
          <div>
            <SectionLabel number="04" title="Date" className="mb-4" />
            <DatePicker selected={selectedDate} onSelect={(d) => { setSelectedDate(d); setSelectedTime(null); }} closedDays={closedDays} />
            {errors.date && <p className="mt-2 text-[13px] text-[var(--color-error)]">{errors.date}</p>}
          </div>

          {/* Time */}
          <div>
            <SectionLabel number="05" title="Time" className="mb-4" />
            {selectedDate ? (
              <>
                {timeSlots.length > 0 && (
                  <p className="text-[12px] text-[var(--color-text-muted)] mb-3">
                    Times shown for {formatDate(selectedDate)}
                  </p>
                )}
                <TimeSlotPicker slots={timeSlots} selected={selectedTime} onSelect={setSelectedTime} />
              </>
            ) : (
              <p className="text-[14px] text-[var(--color-text-muted)]">Select a date first.</p>
            )}
            {errors.time && <p className="mt-2 text-[13px] text-[var(--color-error)]">{errors.time}</p>}
          </div>

          {/* Contact */}
          <div>
            <SectionLabel number="06" title="Contact" className="mb-4" />
            <ContactFields name={name} whatsapp={whatsapp} notes={notes} policyAccepted={policyAccepted} errors={errors} onChange={handleContactChange} />
          </div>

          {/* Mobile Summary + CTA */}
          <div className="lg:hidden">
            <div className="border border-[var(--color-border)] p-4 mb-4">
              <h3 className="text-[15px] font-bold text-black mb-4">Booking summary</h3>
              <BookingSummary service={selectedService} barber={selectedBarber} isAnyBarber={isAnyBarber} date={selectedDate} time={selectedTime} />
            </div>
            <PrimaryButton onClick={handleConfirm} fullWidth icon={<MessageCircle className="w-4 h-4" />}>
              Confirm via WhatsApp
            </PrimaryButton>
            <p className="mt-3 text-[12px] text-[var(--color-text-muted)] text-center">
              You can reschedule up to 2 hours before your appointment.
            </p>
          </div>
        </motion.div>

        {/* Right: Sticky Summary (Desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:block pt-16"
        >
          <div className="sticky top-[90px]">
            <div className="border-l border-[var(--color-border)] pl-8">
              <SectionLabel number="07" title="Your Booking" className="mb-6" />
              <BookingSummary service={selectedService} barber={selectedBarber} isAnyBarber={isAnyBarber} date={selectedDate} time={selectedTime} />
              <div className="mt-6">
                <PrimaryButton onClick={handleConfirm} fullWidth icon={<MessageCircle className="w-4 h-4" />}>
                  Confirm via WhatsApp
                </PrimaryButton>
              </div>
              <p className="mt-3 text-[12px] text-[var(--color-text-muted)]">
                Your booking is secure and confidential.
              </p>
            </div>

            {/* Booking Notes */}
            <div className="border-l border-[var(--color-border)] pl-8 mt-10">
              <SectionLabel number="08" title="Booking Notes" className="mb-4" />
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CalendarClock className="w-4 h-4 mt-0.5 text-[var(--color-text-muted)]" />
                  <div>
                    <p className="text-[13px] font-semibold text-black">Reschedule</p>
                    <p className="text-[12px] text-[var(--color-text-muted)]">You can reschedule up to 2 hours before your appointment.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 mt-0.5 text-[var(--color-text-muted)]" />
                  <div>
                    <p className="text-[13px] font-semibold text-black">Please Arrive On Time</p>
                    <p className="text-[12px] text-[var(--color-text-muted)]">A 10-minute grace period is provided.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 mt-0.5 text-[var(--color-text-muted)]" />
                  <div>
                    <p className="text-[13px] font-semibold text-black">No Show Policy</p>
                    <p className="text-[12px] text-[var(--color-text-muted)]">No-shows may be subject to a service charge.</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <EditorialLink href="/policy">Read booking policy</EditorialLink>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="px-[var(--page-padding-x)] py-20 text-[var(--color-text-muted)]">Loading...</div>}>
      <BookingContent />
    </Suspense>
  );
}
