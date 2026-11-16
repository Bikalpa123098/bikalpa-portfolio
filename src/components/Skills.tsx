import { skillGroups } from "@/config/skills";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="section-pad border-t border-line bg-surface/40">
      <div className="container-x">
        <SectionHeading
          index="02"
          label="Stack & Skills"
          title={
            <>
              The tools I use, and the ones I&apos;m{" "}
              <em className="italic text-accent">growing into.</em>
            </>
          }
          description="An honest snapshot of where I am today. No percentages, no progress bars — just what I work with and what I'm actively learning."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.id} delay={i * 0.08}>
              <div className="h-full rounded-[3px] border border-line bg-card p-6 sm:p-8">
                <div className="mb-2 flex items-center gap-3">
                  <span className="font-mono text-[11px] text-accent">
                    {group.index}
                  </span>
                  <span className="h-px w-7 bg-accent/40" aria-hidden="true" />
                </div>
                <h3 className="font-display text-2xl text-ink">{group.title}</h3>
                <p className="mt-2 text-xs leading-5 text-muted">{group.caption}</p>

                <ul className="mt-6">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="group flex items-center gap-4 border-b border-line py-3.5 last:border-0"
                    >
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-[2px] border font-mono text-[10px] transition-colors duration-300 ${
                          skill.learning
                            ? "border-dashed border-accent/40 text-accent/80"
                            : "border-line text-muted group-hover:border-accent/40 group-hover:text-accent"
                        }`}
                      >
                        {skill.abbr}
                      </span>
                      <span className="text-sm text-ink">{skill.name}</span>
                      {skill.learning && (
                        <span className="ml-auto rounded-full border border-dashed border-accent/30 px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.14em] text-accent/70">
                          learning
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-6 font-mono text-[10px] uppercase tracking-[0.14em] text-muted/70">
          <span className="inline-flex items-center gap-2">
            <span className="h-3 w-3 rounded-[2px] border border-line" />
            Comfortable using
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-3 w-3 rounded-[2px] border border-dashed border-accent/50" />
            Currently learning
          </span>
        </div>
      </div>
    </section>
  );
}
