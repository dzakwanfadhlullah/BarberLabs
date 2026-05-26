'use client';

interface TimeSlotPickerProps {
  slots: string[];
  selected: string | null;
  unavailable?: string[];
  onSelect: (time: string) => void;
}

export function TimeSlotPicker({ slots, selected, unavailable = [], onSelect }: TimeSlotPickerProps) {
  if (slots.length === 0) {
    return (
      <p className="text-[14px] text-[var(--color-text-muted)] py-4">
        No available slots on this date. Choose another date.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {slots.map((slot) => {
        const isUnavail = unavailable.includes(slot);
        const isSel = selected === slot;
        return (
          <button
            key={slot}
            type="button"
            disabled={isUnavail}
            onClick={() => !isUnavail && onSelect(slot)}
            className={`h-11 text-[13px] md:text-[14px] font-medium tabular-nums border transition-all duration-180 ${
              isSel
                ? 'bg-black text-white border-black'
                : isUnavail
                ? 'bg-[var(--color-gray-50)] text-[var(--color-gray-300)] border-[var(--color-border-soft)] cursor-not-allowed'
                : 'bg-white text-black border-[var(--color-border)] hover:border-black'
            }`}
          >
            {slot}
          </button>
        );
      })}
    </div>
  );
}

export function generateTimeSlots(openTime: string, closeTime: string, interval: number = 30): string[] {
  const slots: string[] = [];
  const [oH, oM] = openTime.split(':').map(Number);
  const [cH, cM] = closeTime.split(':').map(Number);
  let cur = oH * 60 + oM;
  const end = cH * 60 + cM - interval;
  while (cur <= end) {
    const h = Math.floor(cur / 60);
    const m = cur % 60;
    slots.push(`${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`);
    cur += interval;
  }
  return slots;
}
