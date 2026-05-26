'use client';

import { motion } from 'framer-motion';

interface PageHeroProps {
  headline: React.ReactNode;
  subline?: string;
  children?: React.ReactNode;
  className?: string;
  compact?: boolean;
}

export function PageHero({
  headline,
  subline,
  children,
  className = '',
  compact = false,
}: PageHeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`${compact ? 'pt-8 md:pt-12' : 'pt-12 md:pt-20'} ${className}`}
    >
      <h1
        className="text-[length:var(--text-hero)] font-extrabold leading-[0.95] tracking-[-0.06em] text-black"
        style={{
          fontSize: compact
            ? 'clamp(36px, 6vw, 64px)'
            : 'var(--text-hero)',
        }}
      >
        {headline}
      </h1>
      {subline && (
        <p className="mt-5 md:mt-6 text-[17px] md:text-[18px] leading-[1.4] tracking-[-0.02em] text-[var(--color-text-secondary)] max-w-md">
          {subline}
        </p>
      )}
      {children && <div className="mt-6 md:mt-8">{children}</div>}
    </motion.div>
  );
}
