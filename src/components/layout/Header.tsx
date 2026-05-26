'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const navLinks = [
  { href: '/cuts', label: 'Cuts' },
  { href: '/barbers', label: 'Barbers' },
  { href: '/location', label: 'Location' },
];

export function Header() {
  const pathname = usePathname();
  const isBookingPage = pathname === '/book';

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--color-border-soft)]"
    >
      <div className="flex items-center justify-between px-[var(--page-padding-x)] h-[60px] md:h-[72px]">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Barberlabs"
            width={1078}
            height={231}
            className="h-[22px] md:h-[28px] w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[15px] font-medium tracking-[-0.02em] transition-colors duration-180 hover:text-black ${pathname === link.href
                ? 'text-black'
                : 'text-[var(--color-text-muted)]'
                }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book"
            className={`text-[15px] font-semibold tracking-[-0.02em] px-5 h-10 flex items-center transition-all duration-180 ${isBookingPage
              ? 'bg-black text-white'
              : 'bg-black text-white hover:bg-[var(--color-gray-700)]'
              }`}
          >
            Book
          </Link>
        </nav>

        {/* Mobile Nav */}
        <div className="flex md:hidden items-center gap-4">
          {isBookingPage ? (
            <Link
              href="/"
              className="text-[14px] font-medium text-black"
            >
              Close
            </Link>
          ) : (
            <Link
              href="/book"
              className="text-[14px] font-semibold text-black"
            >
              Book
            </Link>
          )}
        </div>
      </div>
    </motion.header>
  );
}
