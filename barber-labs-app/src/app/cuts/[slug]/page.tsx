import { notFound } from 'next/navigation';
import Image from 'next/image';
import { cuts, getCutBySlug, getRelatedCuts } from '@/lib/data/cuts';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { EditorialLink } from '@/components/ui/EditorialLink';
import { GalleryItem } from '@/components/ui/GalleryItem';

export function generateStaticParams() {
  return cuts.map((cut) => ({ slug: cut.slug }));
}

export default async function CutDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cut = getCutBySlug(slug);
  if (!cut) notFound();

  const related = getRelatedCuts(slug, 4);

  const bookParams = new URLSearchParams();
  if (cut.serviceId) bookParams.set('service', cut.serviceId);
  if (cut.barberId) bookParams.set('barber', cut.barberId);

  return (
    <div className="px-[var(--page-padding-x)] pb-[var(--section-gap)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 pt-8 lg:pt-16">
        {/* Left: Info */}
        <div>
          <p className="text-[12px] uppercase text-[var(--color-text-muted)] tracking-wide mb-2">
            {cut.category} · {cut.date}
          </p>
          <h1 className="text-[36px] md:text-[48px] font-extrabold tracking-[-0.04em] leading-[1] text-black">
            {cut.title}
          </h1>
          <p className="mt-4 text-[16px] leading-[1.5] text-[var(--color-text-secondary)] max-w-md">
            {cut.shortDescription}
          </p>

          <div className="mt-8 space-y-4">
            {cut.serviceId && (
              <div>
                <p className="text-[12px] uppercase text-[var(--color-text-muted)] tracking-wide">Service</p>
                <p className="text-[15px] font-semibold text-black mt-0.5">
                  {cut.serviceId === 'fade-taper' ? 'Fade / Taper' : cut.serviceId === 'regular-cut' ? 'Regular Cut' : cut.serviceId === 'beard-trim' ? 'Beard Trim' : cut.serviceId}
                </p>
              </div>
            )}
            <div>
              <p className="text-[12px] uppercase text-[var(--color-text-muted)] tracking-wide">Barber</p>
              <p className="text-[15px] font-semibold text-black mt-0.5">{cut.barberName}</p>
            </div>
          </div>

          <div className="mt-8">
            <EditorialLink href={`/book?${bookParams.toString()}`}>
              Book this cut
            </EditorialLink>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative aspect-[4/5] bg-[var(--color-gray-100)] overflow-hidden">
          <Image
            src={cut.image}
            alt={cut.title}
            fill
            className="object-cover grayscale"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>

      {/* Related Cuts */}
      {related.length > 0 && (
        <div className="mt-[var(--section-gap)]">
          <SectionLabel number="—" title="Related Cuts" className="mb-6" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((r) => (
              <GalleryItem key={r.id} cut={r} size="small" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
