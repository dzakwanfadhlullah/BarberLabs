'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { CheckCircle2, MapPin, MessageCircle } from 'lucide-react';
import { locationInfo } from '@/lib/data/hours';
import { EditorialLink } from '@/components/ui/EditorialLink';

function ConfirmedContent() {
  const params = useSearchParams();
  const service = params.get('service');
  const barber = params.get('barber');
  const date = params.get('date');
  const time = params.get('time');

  return (
    <div className="px-[var(--page-padding-x)] pb-[var(--section-gap)] max-w-xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-12 md:pt-20"
      >
        <CheckCircle2 className="w-10 h-10 text-black mb-6" strokeWidth={1.5} />
        <h1 className="text-[32px] md:text-[44px] font-extrabold tracking-[-0.04em] leading-[1] text-black">
          Booking request sent
        </h1>
        <p className="mt-4 text-[16px] leading-[1.5] text-[var(--color-text-secondary)]">
          We will confirm your appointment via WhatsApp.
        </p>
      </motion.div>

      {/* Booking details */}
      {(service || barber || date || time) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 border border-[var(--color-border)] p-5"
        >
          <div className="space-y-4">
            {service && (
              <div>
                <p className="text-[12px] uppercase text-[var(--color-text-muted)] tracking-wide">Service</p>
                <p className="text-[15px] font-semibold text-black mt-0.5">{service}</p>
              </div>
            )}
            {barber && (
              <div>
                <p className="text-[12px] uppercase text-[var(--color-text-muted)] tracking-wide">Barber</p>
                <p className="text-[15px] font-semibold text-black mt-0.5">{barber}</p>
              </div>
            )}
            {date && (
              <div>
                <p className="text-[12px] uppercase text-[var(--color-text-muted)] tracking-wide">Date</p>
                <p className="text-[15px] font-semibold text-black mt-0.5">{date}</p>
              </div>
            )}
            {time && (
              <div>
                <p className="text-[12px] uppercase text-[var(--color-text-muted)] tracking-wide">Time</p>
                <p className="text-[15px] font-semibold text-black mt-0.5">{time}</p>
              </div>
            )}
          </div>

          <div className="mt-5 pt-4 border-t border-[var(--color-border)]">
            <p className="text-[14px] font-semibold text-black">{locationInfo.name}</p>
            <p className="text-[13px] text-[var(--color-text-muted)]">
              {locationInfo.street}, {locationInfo.city}
            </p>
          </div>
        </motion.div>
      )}

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 flex flex-col sm:flex-row gap-4"
      >
        <EditorialLink href={locationInfo.mapsUrl} external>
          Open Maps
        </EditorialLink>
        <EditorialLink href={locationInfo.whatsappUrl} external>
          Contact via WhatsApp
        </EditorialLink>
        <EditorialLink href="/">Back to Home</EditorialLink>
      </motion.div>
    </div>
  );
}

export default function BookingConfirmedPage() {
  return (
    <Suspense fallback={<div className="px-[var(--page-padding-x)] py-20">Loading...</div>}>
      <ConfirmedContent />
    </Suspense>
  );
}
