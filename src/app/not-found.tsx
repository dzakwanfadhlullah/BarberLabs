import { EditorialLink } from '@/components/ui/EditorialLink';

export default function NotFound() {
  return (
    <div className="px-[var(--page-padding-x)] py-16 md:py-24">
      <p className="text-[12px] uppercase tracking-wide text-[var(--color-text-muted)]">404</p>
      <h1 className="mt-3 text-[clamp(44px,8vw,96px)] font-extrabold leading-[0.95] tracking-[-0.06em] text-black">
        Page /
        <br />
        not found
      </h1>
      <p className="mt-6 max-w-sm text-[16px] leading-[1.5] text-[var(--color-text-secondary)]">
        The archive item may have moved. You can return home or book directly.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <EditorialLink href="/">Back to Home</EditorialLink>
        <EditorialLink href="/book">Book Appointment</EditorialLink>
      </div>
    </div>
  );
}
