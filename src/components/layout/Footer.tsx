import Link from 'next/link';
import Image from 'next/image';
import { locationInfo } from '@/lib/data/hours';

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] mt-auto">
      <div className="px-[var(--page-padding-x)] py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-6 md:gap-8">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] font-medium text-[var(--color-text-muted)] hover:text-black transition-colors duration-180"
          >
            Instagram
          </a>
          <a
            href={locationInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] font-medium text-[var(--color-text-muted)] hover:text-black transition-colors duration-180"
          >
            WhatsApp
          </a>
          <a
            href={locationInfo.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] font-medium text-[var(--color-text-muted)] hover:text-black transition-colors duration-180"
          >
            Maps
          </a>
        </div>
        <div className="flex items-center gap-5">
          <Link
            href="/policy"
            className="text-[14px] font-medium text-[var(--color-text-muted)] hover:text-black transition-colors duration-180"
          >
            Policy
          </Link>
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Barberlabs"
              width={120}
              height={28}
              className="h-6 w-auto opacity-50"
            />
            <span className="text-[13px] text-[var(--color-text-muted)]">
              © 2026
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

