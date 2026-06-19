'use client';

import { useEffect } from 'react';

export default function ErrorPage({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="px-[var(--page-padding-x)] py-16 md:py-24">
      <p className="text-[12px] uppercase tracking-wide text-[var(--color-text-muted)]">Error</p>
      <h1 className="mt-3 text-[clamp(40px,7vw,84px)] font-extrabold leading-[0.95] tracking-[-0.06em] text-black">
        Something /
        <br />
        went wrong
      </h1>
      <p className="mt-6 max-w-sm text-[16px] leading-[1.5] text-[var(--color-text-secondary)]">
        Refresh the page or try again. Your booking is still handled through WhatsApp.
      </p>
      <button
        type="button"
        onClick={() => unstable_retry()}
        className="mt-8 h-[52px] border border-black bg-black px-6 text-[16px] font-semibold text-white"
      >
        Try again
      </button>
    </div>
  );
}
