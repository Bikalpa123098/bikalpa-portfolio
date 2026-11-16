import { ArrowUpRight } from "lucide-react";
import { exploringTopics } from "@/config/projects";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function Exploring() {
  return (
    <section id="exploring" className="section-pad border-t border-line">
      <div className="container-x">
        <SectionHeading
          index="06"
          label="What I'm Exploring"
          title={
            <>
              The road <em className="italic text-accent">ahead.</em>
            </>
          }
          description="Curiosity doesn't stop at the frontend. These are the directions I'm reading about, experimenting with, and slowly making my own."
        />

        <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {exploringTopics.map((topic, i) => (
            <Reveal key={topic.title} delay={i * 0.05}>
              <div className="group h-full bg-canvas p-7 transition-colors duration-300 hover:bg-card sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <ArrowUpRight
                    className="h-3.5 w-3.5 text-muted/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-7 font-display text-2xl leading-snug text-ink">
                  {topic.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">{topic.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="overline mt-8 text-muted/60">
          An evolving roadmap — always adding to it.
        </p>
      </div>
    </section>
  );
}
