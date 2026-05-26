import { barbers } from '@/lib/data/barbers';
import { PageHero } from '@/components/ui/PageHero';
import { BarberRow } from '@/components/ui/BarberRow';
import { EditorialLink } from '@/components/ui/EditorialLink';

export default function BarbersPage() {
  return (
    <div className="px-[var(--page-padding-x)] pb-[var(--section-gap)]">
      <PageHero
        headline="Barbers"
        subline="Choose by style, availability, or first available."
        compact
      />

      <div className="mt-8">
        {barbers.map((barber) => (
          <BarberRow key={barber.id} barber={barber} showAvailability />
        ))}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <EditorialLink href="/book?barber=any">Book first available</EditorialLink>
      </div>
    </div>
  );
}
