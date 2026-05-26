import { policies } from '@/lib/data/policies';
import { PageHero } from '@/components/ui/PageHero';
import { PolicyNote } from '@/components/ui/PolicyNote';
import { EditorialLink } from '@/components/ui/EditorialLink';

export default function PolicyPage() {
  return (
    <div className="px-[var(--page-padding-x)] pb-[var(--section-gap)] max-w-2xl">
      <PageHero headline="Booking Policy" compact />
      <div className="mt-8">
        {policies.map((policy) => (
          <PolicyNote key={policy.number} policy={policy} />
        ))}
      </div>
      <div className="mt-8">
        <EditorialLink href="/book">Book Appointment</EditorialLink>
      </div>
    </div>
  );
}
