'use client';

import Link from 'next/link';
import { Barber } from '@/lib/types';

interface BarberRowProps {
  barber: Barber;
  showAvailability?: boolean;
}

export function BarberRow({ barber, showAvailability = false }: BarberRowProps) {
  return (
    <Link href={`/barbers/${barber.slug}`}>
      <div className="group grid grid-cols-[20px_1fr] md:grid-cols-[24px_180px_1fr] lg:grid-cols-[24px_180px_1fr_auto] items-start md:items-center gap-3 md:gap-4 py-4 md:py-[18px] border-b border-[var(--color-border)] cursor-pointer transition-all duration-180 hover:border-[var(--color-gray-700)]">
        <span className="text-[14px] text-[var(--color-text-muted)] mt-0.5 md:mt-0">+</span>
        <span className="text-[15px] md:text-[16px] font-semibold text-black tracking-[-0.01em]">
          {barber.name}
        </span>
        <span className="hidden md:block text-[14px] text-[var(--color-text-secondary)]">
          {barber.specialty}
        </span>
        {showAvailability && (
          <span className="hidden lg:block text-[13px] text-[var(--color-text-muted)]">
            Available {barber.availability}
          </span>
        )}
        {/* Mobile: specialty below name */}
        <div className="md:hidden col-start-2 -mt-1">
          <span className="text-[13px] text-[var(--color-text-muted)]">
            {barber.specialty}
          </span>
        </div>
      </div>
    </Link>
  );
}
