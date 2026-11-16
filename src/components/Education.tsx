import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Education() {
  return (
    <section
      id="education"
      className="section-pad border-t border-line bg-surface/40"
    >
      <div className="container-x">
        <SectionHeading
          index="05"
          label="Education"
          title={
            <>
              Where it <em className="italic text-accent">began.</em>
            </>
          }
        />

        <Reveal>
          <div className="flex flex-col gap-8 rounded-[3px] border border-line bg-card p-8 sm:p-10 md:flex-row md:items-center md:gap-12">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[3px] border border-accent/30 bg-accent/[0.05] font-display text-xl tracking-wide text-accent">
              CSIT
            </div>

            <div className="flex-1">
              <h3 className="font-display text-2xl leading-snug text-ink sm:text-3xl">
                BSc Computer Science and Information Technology{" "}
                <span className="text-muted">(BSc CSIT)</span>
              </h3>
              <p className="mt-3 text-sm text-muted">
                Bhairahawa Multiple Campus, Nepal
              </p>
            </div>

            <div className="inline-flex items-center gap-2 self-start rounded-full border border-line px-3.5 py-1.5 md:self-center">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                6th semester · in progress
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
