/**
 * Stacked wordmark for Bikalpa Koirala.
 *   BI
 *    KU.
 * Kept as one component so the mark stays identical everywhere it appears.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex flex-col font-logo leading-[0.82] tracking-[-0.02em] text-ink ${className}`}
    >
      <span>BI</span>
      <span className="pl-[0.32em]">
        KU<span className="text-accent">.</span>
      </span>
    </span>
  );
}
