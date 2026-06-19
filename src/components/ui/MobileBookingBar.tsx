import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface MobileBookingBarProps {
  href: string;
  label: string;
  note?: string;
}

export function MobileBookingBar({ href, label, note = 'Request via WhatsApp' }: MobileBookingBarProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--color-border)] bg-white/95 px-[var(--page-padding-x)] py-3 backdrop-blur-sm md:hidden">
      <Link
        href={href}
        className="flex h-[52px] items-center justify-between bg-black px-4 text-white"
      >
        <span>
          <span className="block text-[15px] font-semibold leading-none">{label}</span>
          <span className="mt-1 block text-[11px] font-medium text-white/70">{note}</span>
        </span>
        <ArrowRight className="h-4 w-4 flex-shrink-0" />
      </Link>
    </div>
  );
}
