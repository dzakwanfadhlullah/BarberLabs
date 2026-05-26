'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cuts, cutCategories, getCutsByCategory } from '@/lib/data/cuts';
import { PageHero } from '@/components/ui/PageHero';
import { GalleryItem } from '@/components/ui/GalleryItem';
import { EditorialLink } from '@/components/ui/EditorialLink';

export default function CutsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filtered = getCutsByCategory(activeFilter);

  return (
    <div className="px-[var(--page-padding-x)] pb-[var(--section-gap)]">
      <PageHero
        headline={<>Cuts</>}
        subline="Selected cuts, details, tools, and station archive."
        compact
      />
      <p className="mt-1 text-[28px] md:text-[36px] font-extrabold tracking-[-0.04em] text-[var(--color-text-muted)]">
        2025–2026
      </p>

      {/* Filters */}
      <div className="mt-8 flex items-center gap-5 overflow-x-auto pb-2 scrollbar-hide">
        {cutCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveFilter(cat)}
            className={`text-[14px] font-medium whitespace-nowrap transition-all duration-180 pb-1 ${
              activeFilter === cat
                ? 'text-black border-b border-black font-semibold'
                : 'text-[var(--color-text-muted)] hover:text-black'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery */}
      <motion.div
        key={activeFilter}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="mt-8"
      >
        {filtered.length === 0 ? (
          <p className="text-[14px] text-[var(--color-text-muted)] py-8">
            No cuts found for this category.
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
            {filtered.map((cut, i) => (
              <GalleryItem
                key={cut.id}
                cut={cut}
                size={i === 0 || i === 4 ? 'medium' : 'small'}
              />
            ))}
          </div>
        )}
      </motion.div>

      <div className="mt-10">
        <EditorialLink href="/book">Book Appointment</EditorialLink>
      </div>
    </div>
  );
}
