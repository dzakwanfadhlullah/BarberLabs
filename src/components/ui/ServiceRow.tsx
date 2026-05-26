'use client';

import Link from 'next/link';
import { Service } from '@/lib/types';
import { formatDuration } from '@/lib/data/services';

interface ServiceRowProps {
  service: Service;
  linked?: boolean;
  onClick?: () => void;
}

export function ServiceRow({ service, linked = true, onClick }: ServiceRowProps) {
  const content = (
    <div className="group grid grid-cols-[1fr_auto_auto] gap-4 md:gap-8 py-4 md:py-5 border-b border-[var(--color-border)] cursor-pointer transition-all duration-180 hover:border-[var(--color-gray-700)]">
      <span className="text-[15px] md:text-[16px] font-semibold text-black tracking-[-0.01em]">
        {service.name}
      </span>
      <span className="text-[14px] md:text-[15px] text-[var(--color-text-muted)] tabular-nums">
        {formatDuration(service.duration)}
      </span>
      <span className="text-[14px] md:text-[15px] font-medium text-black tabular-nums">
        {service.priceFormatted}
      </span>
    </div>
  );

  if (onClick) {
    return <button type="button" onClick={onClick} className="w-full text-left">{content}</button>;
  }

  if (linked) {
    return (
      <Link href={`/book?service=${service.id}`}>
        {content}
      </Link>
    );
  }

  return content;
}
