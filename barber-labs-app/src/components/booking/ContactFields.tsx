'use client';

interface ContactFieldsProps {
  name: string;
  whatsapp: string;
  notes: string;
  policyAccepted: boolean;
  errors: Record<string, string>;
  onChange: (field: string, value: string | boolean) => void;
}

export function ContactFields({ name, whatsapp, notes, policyAccepted, errors, onChange }: ContactFieldsProps) {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="booking-name" className="block text-[13px] font-semibold text-black mb-1.5">
          Your Name
        </label>
        <input
          id="booking-name"
          type="text"
          value={name}
          onChange={(e) => onChange('name', e.target.value)}
          placeholder="e.g. Alex Morgan"
          className="w-full h-12 border border-[var(--color-border)] bg-white px-3.5 text-[15px] transition-colors duration-180 focus:border-black focus:outline-none placeholder:text-[var(--color-gray-300)]"
        />
        {errors.name && <p className="mt-1 text-[13px] text-[var(--color-error)]">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="booking-whatsapp" className="block text-[13px] font-semibold text-black mb-1.5">
          WhatsApp Number
        </label>
        <input
          id="booking-whatsapp"
          type="tel"
          value={whatsapp}
          onChange={(e) => onChange('whatsapp', e.target.value)}
          placeholder="e.g. +62 812 3456 7890"
          className="w-full h-12 border border-[var(--color-border)] bg-white px-3.5 text-[15px] transition-colors duration-180 focus:border-black focus:outline-none placeholder:text-[var(--color-gray-300)]"
        />
        {errors.whatsapp && <p className="mt-1 text-[13px] text-[var(--color-error)]">{errors.whatsapp}</p>}
      </div>

      <div>
        <label htmlFor="booking-notes" className="block text-[13px] font-semibold text-black mb-1.5">
          Notes <span className="font-normal text-[var(--color-text-muted)]">(optional)</span>
        </label>
        <textarea
          id="booking-notes"
          value={notes}
          onChange={(e) => onChange('notes', e.target.value)}
          placeholder="Any preferences or requests..."
          rows={3}
          className="w-full border border-[var(--color-border)] bg-white px-3.5 py-3 text-[15px] transition-colors duration-180 focus:border-black focus:outline-none resize-none placeholder:text-[var(--color-gray-300)]"
        />
      </div>

      <div className="flex items-start gap-3 pt-1">
        <input
          id="booking-policy"
          type="checkbox"
          checked={policyAccepted}
          onChange={(e) => onChange('policyAccepted', e.target.checked)}
          className="mt-0.5 w-4 h-4 accent-black"
        />
        <label htmlFor="booking-policy" className="text-[13px] text-[var(--color-text-secondary)]">
          I agree to the{' '}
          <a href="/policy" target="_blank" className="underline font-medium text-black">
            booking policy
          </a>.
        </label>
      </div>
      {errors.policy && <p className="text-[13px] text-[var(--color-error)]">{errors.policy}</p>}
    </div>
  );
}
