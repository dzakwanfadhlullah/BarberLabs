import { hours, locationInfo, formatHours } from '@/lib/data/hours';
import { PageHero } from '@/components/ui/PageHero';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { EditorialLink } from '@/components/ui/EditorialLink';

export default function LocationPage() {
  return (
    <div className="px-[var(--page-padding-x)] pb-[var(--section-gap)]">
      <PageHero headline="Location" compact />

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        {/* Address + CTAs */}
        <div>
          <SectionLabel number="01" title="Address" className="mb-4" />
          <div className="mb-6">
            <p className="text-[16px] font-semibold text-black">{locationInfo.name}</p>
            <p className="text-[15px] text-[var(--color-text-secondary)] mt-1">{locationInfo.street}</p>
            <p className="text-[15px] text-[var(--color-text-secondary)]">{locationInfo.city}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <EditorialLink href={locationInfo.mapsUrl} external>Open in Maps</EditorialLink>
            <EditorialLink href={locationInfo.whatsappUrl} external>WhatsApp</EditorialLink>
          </div>

          <div className="mt-10">
            <SectionLabel number="02" title="Payment" className="mb-3" />
            <p className="text-[15px] text-[var(--color-text-secondary)]">
              {locationInfo.paymentMethods.join(', ')}
            </p>
          </div>

          <div className="mt-8">
            <SectionLabel number="03" title="Note" className="mb-3" />
            <p className="text-[15px] text-[var(--color-text-secondary)]">
              {locationInfo.parkingNote}
            </p>
          </div>

          <div className="mt-10">
            <EditorialLink href="/book">Book Appointment</EditorialLink>
          </div>
        </div>

        {/* Hours */}
        <div>
          <SectionLabel number="04" title="Hours" className="mb-4" />
          <div className="space-y-0">
            {hours.map((h) => (
              <div
                key={h.day}
                className="grid grid-cols-[80px_1fr] py-3 border-b border-[var(--color-border)] text-[15px]"
              >
                <span className="font-semibold text-black">{h.day}</span>
                <span className={h.isClosed ? 'text-[var(--color-text-muted)]' : 'text-[var(--color-text-secondary)]'}>
                  {formatHours(h)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
