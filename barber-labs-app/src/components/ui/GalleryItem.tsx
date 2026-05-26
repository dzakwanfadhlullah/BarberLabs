'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Cut } from '@/lib/types';

interface GalleryItemProps {
  cut: Cut;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export function GalleryItem({ cut, size = 'small', className = '' }: GalleryItemProps) {
  const aspectMap = {
    small: 'aspect-square',
    medium: 'aspect-[4/5]',
    large: 'aspect-[3/2]',
  };

  return (
    <Link href={`/cuts/${cut.slug}`} className={`group block ${className}`}>
      <div className={`relative ${aspectMap[size]} overflow-hidden bg-[var(--color-gray-100)]`}>
        <Image
          src={cut.image}
          alt={cut.title}
          fill
          className="object-cover grayscale transition-all duration-300 group-hover:contrast-[1.08]"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>
      <div className="mt-2.5">
        <p className="text-[14px] font-semibold leading-[1.2] text-black">
          {cut.title}
        </p>
        <p className="text-[12px] font-normal uppercase text-[var(--color-text-muted)] mt-0.5 tracking-wide">
          {cut.date}
        </p>
      </div>
    </Link>
  );
}
