export default function Loading() {
  return (
    <div className="px-[var(--page-padding-x)] py-12 md:py-20">
      <div className="h-3 w-28 bg-[var(--color-gray-100)]" />
      <div className="mt-8 h-12 w-3/4 max-w-xl bg-[var(--color-gray-100)] md:h-20" />
      <div className="mt-4 h-4 w-64 bg-[var(--color-gray-100)]" />
      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index}>
            <div className="aspect-square bg-[var(--color-gray-100)]" />
            <div className="mt-3 h-3 w-20 bg-[var(--color-gray-100)]" />
            <div className="mt-2 h-2 w-14 bg-[var(--color-gray-100)]" />
          </div>
        ))}
      </div>
    </div>
  );
}
