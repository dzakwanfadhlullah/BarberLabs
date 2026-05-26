'use client';

import Image from 'next/image';
import { Barber } from '@/lib/types';

interface BookingBarberSelectorProps {
  barbers: Barber[];
  selected: Barber | null;
  isAnyBarber: boolean;
  onSelect: (barber: Barber | null) => void;
}

export function BookingBarberSelector({
  barbers,
  selected,
  isAnyBarber,
  onSelect,
}: BookingBarberSelectorProps) {
  return (
    <div>
      {/* Any Barber option */}
      <button
        type="button"
        onClick={() => onSelect(null)}
        className={`w-full text-left grid grid-cols-[40px_1fr_auto] items-center gap-3 md:gap-4 py-4 border-b transition-all duration-180 ${
          isAnyBarber
            ? 'border-black'
            : 'border-[var(--color-border)] hover:border-[var(--color-gray-500)]'
        }`}
      >
        <div className="w-10 h-10 rounded-full bg-[var(--color-gray-100)] flex items-center justify-center">
          <span className="text-[14px] font-medium text-[var(--color-text-muted)]">✦</span>
        </div>
        <div>
          <p className="text-[15px] font-semibold text-black">Any Barber</p>
          <p className="text-[12px] text-[var(--color-text-muted)]">First available</p>
        </div>
        <div
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-180 ${
            isAnyBarber
              ? 'border-black bg-black'
              : 'border-[var(--color-border)]'
          }`}
        >
          {isAnyBarber && <div className="w-2 h-2 rounded-full bg-white" />}
        </div>
      </button>

      {/* Individual barbers */}
      {barbers.map((barber) => {
        const isSelected = !isAnyBarber && selected?.id === barber.id;
        return (
          <button
            key={barber.id}
            type="button"
            onClick={() => onSelect(barber)}
            className={`w-full text-left grid grid-cols-[40px_1fr_auto] items-center gap-3 md:gap-4 py-4 border-b transition-all duration-180 ${
              isSelected
                ? 'border-black'
                : 'border-[var(--color-border)] hover:border-[var(--color-gray-500)]'
            }`}
          >
            <div className="w-10 h-10 rounded-full overflow-hidden bg-[var(--color-gray-100)] relative">
              <Image
                src={barber.portraitImage}
                alt={barber.name}
                fill
                className="object-cover grayscale"
                sizes="40px"
              />
            </div>
            <div>
              <p className="text-[15px] font-semibold text-black">{barber.name}</p>
              <p className="text-[12px] text-[var(--color-text-muted)]">{barber.specialty}</p>
            </div>
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-180 ${
                isSelected
                  ? 'border-black bg-black'
                  : 'border-[var(--color-border)]'
              }`}
            >
              {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
            </div>
          </button>
        );
      })}
    </div>
  );
}
