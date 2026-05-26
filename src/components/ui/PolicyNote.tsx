import { Policy } from '@/lib/types';

interface PolicyNoteProps {
  policy: Policy;
}

export function PolicyNote({ policy }: PolicyNoteProps) {
  return (
    <div className="py-5 border-b border-[var(--color-border)]">
      <h3 className="text-[15px] md:text-[16px] font-bold tracking-[-0.01em] text-black">
        {policy.number} / {policy.title}
      </h3>
      <p className="mt-2 text-[14px] md:text-[15px] leading-[1.5] text-[var(--color-text-secondary)]">
        {policy.description}
      </p>
    </div>
  );
}
