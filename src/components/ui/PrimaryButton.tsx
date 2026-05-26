'use client';

import { ArrowRight } from 'lucide-react';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

export function PrimaryButton({
  children,
  onClick,
  disabled = false,
  type = 'button',
  fullWidth = false,
  icon,
  className = '',
}: PrimaryButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-3
        bg-black text-white
        h-[52px] px-6
        text-[16px] font-semibold tracking-[-0.01em]
        border border-black
        transition-all duration-180
        hover:bg-[var(--color-gray-700)]
        disabled:bg-[var(--color-gray-300)] disabled:border-[var(--color-gray-300)] disabled:text-[var(--color-gray-500)] disabled:cursor-not-allowed
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
      <ArrowRight className="w-4 h-4 flex-shrink-0" />
    </button>
  );
}
