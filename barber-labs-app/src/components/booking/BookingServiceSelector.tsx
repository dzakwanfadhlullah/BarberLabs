'use client';

import { Service } from '@/lib/types';
import { formatDuration } from '@/lib/data/services';

interface BookingServiceSelectorProps {
  services: Service[];
  selected: Service | null;
  onSelect: (service: Service) => void;
}

export function BookingServiceSelector({
  services,
  selected,
  onSelect,
}: BookingServiceSelectorProps) {
  return (
    <div>
      {services.map((service) => {
        const isSelected = selected?.id === service.id;
        return (
          <button
            key={service.id}
            type="button"
            onClick={() => onSelect(service)}
            className={`w-full text-left grid grid-cols-[1fr_auto_auto_auto] md:grid-cols-[1fr_auto_auto_auto] items-center gap-3 md:gap-6 py-4 border-b transition-all duration-180 ${
              isSelected
                ? 'border-black'
                : 'border-[var(--color-border)] hover:border-[var(--color-gray-500)]'
            }`}
          >
            <span className={`text-[15px] md:text-[16px] font-semibold tracking-[-0.01em] ${isSelected ? 'text-black' : 'text-black'}`}>
              {service.name}
            </span>
            <span className="text-[13px] md:text-[14px] text-[var(--color-text-muted)] tabular-nums">
              {formatDuration(service.duration)}
            </span>
            <span className="text-[13px] md:text-[14px] font-medium text-black tabular-nums">
              {service.priceFormatted}
            </span>
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-180 ${
                isSelected
                  ? 'border-black bg-black'
                  : 'border-[var(--color-border)]'
              }`}
            >
              {isSelected && (
                <div className="w-2 h-2 rounded-full bg-white" />
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}
