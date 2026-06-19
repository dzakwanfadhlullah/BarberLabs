'use client';

import { Branch } from '@/lib/types';

interface BookingBranchSelectorProps {
  branches: Branch[];
  selected: Branch | null;
  onSelect: (branch: Branch) => void;
}

export function BookingBranchSelector({
  branches,
  selected,
  onSelect,
}: BookingBranchSelectorProps) {
  return (
    <div>
      {branches.map((branch) => {
        const isSelected = selected?.id === branch.id;

        return (
          <button
            key={branch.id}
            type="button"
            aria-pressed={isSelected}
            onClick={() => onSelect(branch)}
            className={`w-full text-left grid grid-cols-[1fr_auto] items-center gap-4 py-4 border-b transition-all duration-180 ${
              isSelected
                ? 'border-black'
                : 'border-[var(--color-border)] hover:border-[var(--color-gray-500)]'
            }`}
          >
            <span>
              <span className="block text-[15px] md:text-[16px] font-semibold tracking-[-0.01em] text-black">
                {branch.name}
              </span>
              <span className="block mt-1 text-[12px] md:text-[13px] text-[var(--color-text-muted)]">
                {branch.address}
              </span>
            </span>
            <span
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-180 ${
                isSelected
                  ? 'border-black bg-black'
                  : 'border-[var(--color-border)]'
              }`}
            >
              {isSelected && <span className="w-2 h-2 rounded-full bg-white" />}
            </span>
          </button>
        );
      })}
    </div>
  );
}
