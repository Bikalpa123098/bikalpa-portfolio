import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const current = [
  { label: "Focusing on", value: "React · TypeScript · Tailwind CSS" },
  { label: "Learning", value: "Rust — memory safety & systems thinking" },
  { label: "Exploring", value: "Architecture, backend & performance" },
];

export function About() {
  return (
    <section id="about" className="section-pad border-t border-line">
      <div className="container-x">
        <SectionHeading
          index="01"
          label="About"
          title={
            <>
              A developer, <em className="italic text-accent">in progress.</em>
            </>
          }
        />

        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <blockquote className="relative border-l border-accent/50 pl-6 sm:pl-8">
              <span
                aria-hidden="true"
                className="block font-display text-7xl leading-[0.5] text-accent/25"
              >
                “
              </span>
              <p className="mt-4 font-display text-[clamp(1.5rem,2.6vw,2.15rem)] leading-[1.32] tracking-[-0.01em] text-ink">
                The best digital experiences are the ones that get out of the
                way — clear, fast, and quietly considered.
              </p>
              <footer className="overline mt-7 text-muted">
                My development philosophy
              </footer>
            </blockquote>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-5 text-[15px] leading-8 text-muted">
              <p>
                I&apos;m a BSc CSIT student at Bhairahawa Multiple Campus,
                currently in my sixth semester. What began as curiosity about
                how websites work turned into a real love for building them —
                for the small decisions that make an interface feel clear,
                fast, and natural to use.
              </p>
              <p>
                My main focus is frontend development, especially React,
                TypeScript, and Tailwind CSS. I like the balance it asks for:
                structure and creativity, logic and empathy for the person on
                the other side of the screen.
              </p>
              <p>
                I&apos;m also learning Rust — not because it&apos;s trendy, but
                because I want to understand what happens beneath the
                abstractions I work with every day. Ownership, borrowing, and
                memory safety are teaching me to think more carefully about
                code, whichever language I&apos;m writing.
              </p>
              <p>
                I don&apos;t have it all figured out, and that&apos;s the point.
                I learn by building, breaking things, reading, and rebuilding.
                Every project is a chance to be a little better than the last
                one.
              </p>
            </div>

            <div className="mt-10 space-y-4 border-t border-line pt-8">
              {current.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6"
                >
                  <span className="overline w-36 shrink-0 text-accent/80">
                    {row.label}
                  </span>
                  <span className="text-sm text-ink">{row.value}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
