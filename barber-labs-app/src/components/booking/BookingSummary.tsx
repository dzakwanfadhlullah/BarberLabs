'use client';

import { Service, Barber } from '@/lib/types';
import { formatDuration } from '@/lib/data/services';
import { Calendar, Clock, Scissors, User } from 'lucide-react';

interface BookingSummaryProps {
  service: Service | null;
  barber: Barber | null;
  isAnyBarber: boolean;
  date: Date | null;
  time: string | null;
}

function formatDate(d: Date | null): string {
  if (!d) return '—';
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

export function BookingSummary({ service, barber, isAnyBarber, date, time }: BookingSummaryProps) {
  return (
    <div className="space-y-5">
      <div className="flex items-start gap-3">
        <Scissors className="w-4 h-4 mt-0.5 text-[var(--color-text-muted)]" />
        <div>
          <p className="text-[12px] text-[var(--color-text-muted)] uppercase tracking-wide">Service</p>
          <p className="text-[15px] font-semibold text-black mt-0.5">
            {service?.name || '—'}
          </p>
          {service && (
            <p className="text-[13px] text-[var(--color-text-muted)]">
              {formatDuration(service.duration)}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-start gap-3">
        <User className="w-4 h-4 mt-0.5 text-[var(--color-text-muted)]" />
        <div>
          <p className="text-[12px] text-[var(--color-text-muted)] uppercase tracking-wide">Barber</p>
          <p className="text-[15px] font-semibold text-black mt-0.5">
            {isAnyBarber ? 'Any Barber' : barber?.name || '—'}
          </p>
          {isAnyBarber && (
            <p className="text-[13px] text-[var(--color-text-muted)]">First available</p>
          )}
        </div>
      </div>

      <div className="flex items-start gap-3">
        <Calendar className="w-4 h-4 mt-0.5 text-[var(--color-text-muted)]" />
        <div>
          <p className="text-[12px] text-[var(--color-text-muted)] uppercase tracking-wide">Date</p>
          <p className="text-[15px] font-semibold text-black mt-0.5">{formatDate(date)}</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <Clock className="w-4 h-4 mt-0.5 text-[var(--color-text-muted)]" />
        <div>
          <p className="text-[12px] text-[var(--color-text-muted)] uppercase tracking-wide">Time</p>
          <p className="text-[15px] font-semibold text-black mt-0.5">{time || '—'}</p>
        </div>
      </div>

      <div className="pt-3 border-t border-[var(--color-border)]">
        <div className="flex justify-between items-center">
          <span className="text-[14px] font-semibold text-black">Total</span>
          <span className="text-[18px] font-bold text-black tabular-nums">
            {service?.priceFormatted || '—'}
          </span>
        </div>
      </div>
    </div>
  );
}

export { formatDate };
