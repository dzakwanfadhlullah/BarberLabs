interface SectionLabelProps {
  number: string;
  title: string;
  className?: string;
}

export function SectionLabel({ number, title, className = '' }: SectionLabelProps) {
  return (
    <h2
      className={`text-[16px] md:text-[18px] font-bold tracking-[-0.02em] text-black ${className}`}
    >
      {number} / {title}
    </h2>
  );
}
