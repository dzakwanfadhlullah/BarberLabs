import { notFound } from 'next/navigation';
import Image from 'next/image';
import { barbers, getBarberBySlug } from '@/lib/data/barbers';
import { cuts } from '@/lib/data/cuts';
import { EditorialLink } from '@/components/ui/EditorialLink';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { GalleryItem } from '@/components/ui/GalleryItem';

export function generateStaticParams() {
  return barbers.map((b) => ({ slug: b.slug }));
}

export default async function BarberDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const barber = getBarberBySlug(slug);
  if (!barber) notFound();

  const barberCuts = cuts.filter((c) => c.barberId === barber.id);

  return (
    <div className="px-[var(--page-padding-x)] pb-[var(--section-gap)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 pt-8 lg:pt-16">
        {/* Left: Info */}
        <div>
          <h1 className="text-[36px] md:text-[56px] font-extrabold tracking-[-0.04em] leading-[1] text-black">
            {barber.name}
          </h1>
          <p className="mt-3 text-[18px] text-[var(--color-text-secondary)]">
            {barber.specialty}
          </p>
          <p className="mt-6 text-[15px] leading-[1.6] text-[var(--color-text-secondary)] max-w-md">
            {barber.shortBio}
          </p>
          <div className="mt-6">
            <p className="text-[12px] uppercase text-[var(--color-text-muted)] tracking-wide">Available</p>
            <p className="text-[15px] font-semibold text-black mt-0.5">{barber.availability}</p>
          </div>
          <div className="mt-8">
            <EditorialLink href={`/book?barber=${barber.id}`}>
              Book with {barber.name.split(' ')[0]}
            </EditorialLink>
          </div>
        </div>

        {/* Right: Portrait */}
        <div className="relative aspect-[4/5] bg-[var(--color-gray-100)] overflow-hidden">
          <Image
            src={barber.portraitImage}
            alt={barber.name}
            fill
            className="object-cover grayscale"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>

      {/* Selected Cuts */}
      {barberCuts.length > 0 && (
        <div className="mt-[var(--section-gap)]">
          <SectionLabel number="—" title={`Cuts by ${barber.name.split(' ')[0]}`} className="mb-6" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {barberCuts.map((c) => (
              <GalleryItem key={c.id} cut={c} size="small" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
