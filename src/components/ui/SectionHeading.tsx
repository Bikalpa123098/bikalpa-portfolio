import type { ReactNode } from "react";

type SectionHeadingProps = {
  index: string;
  label: string;
  title: ReactNode;
  description?: string;
};

export function SectionHeading({
  index,
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <header className="mb-12 sm:mb-16">
      <div className="mb-6 flex items-center gap-4">
        <span className="font-mono text-[11px] tracking-[0.2em] text-accent">
          {index}
        </span>
        <span className="h-px w-10 bg-accent/50" aria-hidden="true" />
        <span className="overline text-muted">{label}</span>
      </div>

      <h2 className="font-display text-[clamp(2.4rem,5vw,4.1rem)] leading-[1.04] tracking-[-0.02em] text-ink">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-2xl text-[15px] leading-7 text-muted">
          {description}
        </p>
      )}
    </header>
  );
}
