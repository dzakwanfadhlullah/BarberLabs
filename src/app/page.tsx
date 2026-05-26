'use client';

import { motion } from 'framer-motion';
import { services } from '@/lib/data/services';
import { barbers } from '@/lib/data/barbers';
import { cuts } from '@/lib/data/cuts';
import { hours, locationInfo, formatHours, branches } from '@/lib/data/hours';
import { PageHero } from '@/components/ui/PageHero';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { EditorialLink } from '@/components/ui/EditorialLink';
import { ServiceRow } from '@/components/ui/ServiceRow';
import { BarberRow } from '@/components/ui/BarberRow';
import { GalleryItem } from '@/components/ui/GalleryItem';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  const previewCuts = cuts.slice(0, 8);

  return (
    <div className="px-[var(--page-padding-x)]">
      {/* Hero + Services — Desktop side-by-side */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] gap-12 lg:gap-16 xl:gap-24">
        {/* Hero */}
        <PageHero
          headline={
            <>
              Haircuts /<br />
              by appointment
            </>
          }
          subline="Clean cuts, clear schedule, no waiting."
        >
          <EditorialLink href="/book">Book Appointment</EditorialLink>
        </PageHero>

        {/* Services Preview */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.15 }}
          className="pt-4 lg:pt-20"
        >
          <SectionLabel number="01" title="Services" className="mb-4" />
          <div>
            {services.map((service) => (
              <ServiceRow key={service.id} service={service} />
            ))}
          </div>
          <p className="mt-4 text-[13px] text-[var(--color-text-muted)]">
            All Haircut including Beard & Moustache trim, Hairwash, Hot towel, Blowdry, Quick massage, Hairtonic and Styling with product. Don&apos;t worry our service is GUARANTEED 3 DAYS.
          </p>
        </motion.div>
      </div>

      {/* Cuts Archive Preview */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="mt-[var(--section-gap)]"
      >
        <SectionLabel number="02" title="Cuts 2025–2026" className="mb-8" />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-4 md:gap-5">
          {previewCuts.map((cut) => (
            <GalleryItem key={cut.id} cut={cut} size="small" />
          ))}
        </div>
        <div className="mt-6">
          <EditorialLink href="/cuts">View all cuts</EditorialLink>
        </div>
      </motion.section>

      {/* Bottom Section: Barbers + Location + About */}
      <div className="mt-[var(--section-gap)] border-t border-[var(--color-border)] pt-12 lg:pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 pb-[var(--section-gap)]">
        {/* Barbers Preview */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel number="03" title="Barbers" className="mb-4" />
          <div>
            {barbers.map((barber) => (
              <BarberRow key={barber.id} barber={barber} />
            ))}
          </div>
          <div className="mt-5">
            <EditorialLink href="/barbers">View all barbers</EditorialLink>
          </div>
        </motion.section>

        {/* Location & Hours Preview */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <SectionLabel number="04" title="Location & Hours" className="mb-4" />
          <div className="mb-6 space-y-3">
            {branches.map((b) => (
              <div key={b.id} className="py-0.5">
                <p className="text-[14px] font-bold text-black">{b.name}</p>
                <p className="text-[13px] text-[var(--color-text-secondary)] mt-0.5">
                  {b.address}
                </p>
              </div>
            ))}
          </div>
          <div className="space-y-1.5">
            {hours.map((h) => (
              <div key={h.day} className="grid grid-cols-[60px_1fr] text-[14px]">
                <span className="font-semibold text-black">{h.day}</span>
                <span className={h.isClosed ? 'text-[var(--color-text-muted)]' : 'text-[var(--color-text-secondary)]'}>
                  {formatHours(h)}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-5">
            <EditorialLink href={locationInfo.mapsUrl} external>
              View on map
            </EditorialLink>
          </div>
        </motion.section>

        {/* About */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SectionLabel number="05" title="About" className="mb-4" />
          <p className="text-[15px] leading-[1.6] text-[var(--color-text-secondary)]">
            Barber Labs is a modern barbershop focused on precision, consistency,
            and a better experience. Quality over quantity, every time.
          </p>
          <div className="mt-5">
            <EditorialLink href="/location">Learn more</EditorialLink>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
