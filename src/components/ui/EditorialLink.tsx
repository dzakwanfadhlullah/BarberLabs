'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface EditorialLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}

export function EditorialLink({
  href,
  children,
  external = false,
  className = '',
}: EditorialLinkProps) {
  const linkClasses = `group inline-flex items-center gap-2 text-[16px] font-semibold text-black border-b border-black pb-[6px] transition-all duration-180 hover:gap-3 ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClasses}
      >
        {children}
        <ArrowRight className="w-4 h-4 transition-transform duration-180 group-hover:translate-x-0.5" />
      </a>
    );
  }

  return (
    <Link href={href} className={linkClasses}>
      {children}
      <ArrowRight className="w-4 h-4 transition-transform duration-180 group-hover:translate-x-0.5" />
    </Link>
  );
}
