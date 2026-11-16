import { ArrowUpRight } from "lucide-react";
import { rustExperiments, rustTopics } from "@/config/projects";
import { rustRepos } from "@/config/site";
import { GithubIcon } from "./ui/BrandIcons";
import { Reveal } from "./ui/Reveal";

function RustTerminal() {
  return (
    <div className="overflow-hidden rounded-[3px] border border-line bg-[#101010] shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
      <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-1.5 w-1.5 rounded-full bg-[#3a3a3a]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#3a3a3a]" />
          <span className="h-1.5 w-1.5 rounded-full bg-accent/40" />
        </div>
        <span className="font-mono text-[10px] text-muted">ownership.rs</span>
        <span className="font-mono text-[9px] text-accent/70">rustc</span>
      </div>

      <div className="overflow-x-auto p-6 font-mono text-[12px] leading-7 sm:text-[13px]">
        <pre className="min-w-max">
          <code>
            <span className="text-[#5f5f5f]">{"// ownership in practice\n\n"}</span>
            <span className="text-accent">fn</span>{" "}
            <span className="text-accent-soft">main</span>
            {"() {\n"}
            {"    "}
            <span className="text-accent">let</span>{" name = "}
            <span className="text-accent-soft">String</span>
            {"::from("}
            <span className="text-[#d8c6a0]">&quot;Rust&quot;</span>
            {");\n"}
            {"    "}
            <span className="text-accent">let</span>{" borrowed = &name;\n\n"}
            {"    "}
            <span className="text-accent-soft">println!</span>
            {"(\n        "}
            <span className="text-[#d8c6a0]">&quot;Still learning {}&quot;</span>
            {", borrowed,\n    );\n"}
            {"}"}
          </code>
        </pre>
      </div>

      <div className="flex items-center gap-2 border-t border-line px-5 py-3 font-mono text-[10px] text-muted/60">
        <span className="text-accent/70">$</span> cargo run — learning in public
      </div>
    </div>
  );
}

export function RustJourney() {
  return (
    <section
      id="learning"
      className="section-pad relative overflow-hidden border-t border-line"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[12%] top-1/3 h-[560px] w-[560px] rounded-full bg-[radial-gradient(closest-side,rgba(198,168,120,0.055),transparent)]"
      />

      <div className="container-x relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <div className="mb-7 flex flex-wrap items-center gap-4">
              <span className="overline text-accent">04 / Learning journal</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-accent/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-accent/80">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Currently learning
              </span>
            </div>

            <h2 className="font-display text-[clamp(2.6rem,5.4vw,4.6rem)] leading-[1.03] tracking-[-0.025em] text-ink">
              Beyond the browser —{" "}
              <em className="italic text-accent">exploring Rust.</em>
            </h2>

            <div className="mt-7 max-w-xl space-y-5 text-[15px] leading-8 text-muted">
              <p>
                Rust isn&apos;t on this site because I&apos;ve mastered it. It&apos;s
                here because I&apos;m actively learning it, and I want that
                curiosity to be part of the story.
              </p>
              <p>
                I&apos;m studying memory safety, ownership, borrowing, and the
                ideas that sit closer to the machine than the browser. It
                changes how I think about code — even the TypeScript I write
                every day.
              </p>
              <p>
                This is an evolving journal: small programs, notes, and
                experiments shared honestly as I go. No expertise claimed —
                just a developer following a question wherever it leads.
              </p>
            </div>

            <div className="mt-9">
              <p className="overline mb-3 text-muted">Learning repositories</p>
              <ul className="space-y-2.5">
                {rustRepos.map((repo) => (
                  <li key={repo.url}>
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link group/repo w-full justify-start border-b border-line pb-2.5"
                    >
                      <GithubIcon className="h-3.5 w-3.5 shrink-0" />
                      <span className="min-w-0 truncate">{repo.label}</span>
                      <ArrowUpRight
                        className="ml-auto h-3 w-3 shrink-0 transition-transform duration-300 group-hover/repo:translate-x-0.5 group-hover/repo:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div>
              <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-line bg-card px-3 py-1.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-accent/40 font-mono text-[9px] text-accent">
                  Rs
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  In progress
                </span>
              </div>
              <RustTerminal />
            </div>
          </Reveal>
        </div>

        <div className="mt-20 sm:mt-24">
          <div className="mb-6 flex items-center gap-5">
            <h3 className="overline shrink-0 text-muted">Topics on the desk</h3>
            <span className="h-px w-full bg-line" aria-hidden="true" />
            <span className="font-mono text-[10px] text-muted/60">
              08 topics
            </span>
          </div>

          <div className="grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
            {rustTopics.map((topic, i) => (
              <div
                key={topic}
                className="bg-canvas p-5 transition-colors duration-300 hover:bg-card sm:p-6"
              >
                <span className="font-mono text-[10px] text-accent/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-sm leading-6 text-ink">{topic}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <h3 className="font-display text-3xl text-ink">Small experiments.</h3>
            <p className="mt-3 max-w-xs text-sm leading-7 text-muted">
              Practice projects and tiny programs — stepping stones, not
              polished products.
            </p>
          </div>

          <ul className="border-y border-line">
            {rustExperiments.map((experiment, i) => (
              <li
                key={experiment.title}
                className="group flex items-start gap-5 border-b border-line py-5 last:border-0"
              >
                <span className="mt-1 font-mono text-[10px] text-accent/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h4 className="text-sm text-ink transition-colors duration-300 group-hover:text-accent">
                    {experiment.title}
                  </h4>
                  <p className="mt-1 text-xs leading-6 text-muted">
                    {experiment.detail}
                  </p>
                </div>
                <ArrowUpRight
                  className="mt-1 h-3.5 w-3.5 text-muted/50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                  aria-hidden="true"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
