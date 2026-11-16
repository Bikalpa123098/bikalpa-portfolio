import { CarFront } from "lucide-react";
import type { ProjectVisual as VisualKey } from "@/config/projects";

function Window({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-[3px] border border-line bg-[#101010]">
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
        <span className="h-1.5 w-1.5 rounded-full bg-[#3a3a3a]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#3a3a3a]" />
        <span className="h-1.5 w-1.5 rounded-full bg-accent/40" />
        <span className="ml-3 font-mono text-[9px] uppercase tracking-[0.2em] text-muted/70">
          {label}
        </span>
      </div>
      <div className="relative flex-1 overflow-hidden">{children}</div>
    </div>
  );
}

function PortfolioVisual() {
  return (
    <Window label="portfolio.tsx">
      <div className="flex h-full flex-col justify-center px-6 sm:px-9">
        <div className="overline mb-3 text-accent/80">Aspiring frontend developer</div>
        <div className="font-display text-[clamp(1.1rem,2.3vw,1.9rem)] leading-[1.1] text-ink">
          Building <span className="italic text-accent">thoughtful</span> digital
          <br />
          experiences.
        </div>
        <div className="mt-4 h-px w-14 bg-accent/60" aria-hidden="true" />
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-[2px] border border-accent/50 px-2 py-1 font-mono text-[8px] tracking-wider text-accent">
            EXPLORE WORK
          </span>
          <span className="rounded-[2px] border border-line px-2 py-1 font-mono text-[8px] tracking-wider text-muted">
            CONNECT
          </span>
        </div>
      </div>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-5 top-3 flex flex-col font-logo text-[4rem] leading-[0.85] tracking-[-0.02em] text-white/[0.035]"
      >
        <span>BI</span>
        <span className="pl-[0.32em]">KU</span>
      </span>
    </Window>
  );
}

function StackVisual() {
  return (
    <Window label="StackVisualizer.tsx">
      <div className="flex h-full items-center justify-center gap-2 px-4 sm:gap-2.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`flex h-[55%] min-h-14 w-8 items-end justify-center rounded-[2px] border sm:w-10 ${
              i < 3
                ? "border-accent/40 bg-accent/10"
                : "border-line bg-white/[0.02]"
            }`}
          >
            <span className="mb-2 font-mono text-[8px] text-accent/80">
              {i < 3 ? i + 1 : ""}
            </span>
          </div>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
        <span className="rounded-[2px] border border-line px-2 py-1 font-mono text-[8px] text-muted">
          PUSH()
        </span>
        <span className="rounded-[2px] border border-line px-2 py-1 font-mono text-[8px] text-muted">
          POP()
        </span>
        <span className="rounded-[2px] border border-line px-2 py-1 font-mono text-[8px] text-muted">
          ISEMPTY()
        </span>
      </div>
    </Window>
  );
}

function QaVisual() {
  const rows = [24, 17, 11, 8];
  return (
    <Window label="Q&A Platform">
      <div className="space-y-2.5 px-4 py-4 sm:px-6 sm:py-5">
        {rows.map((votes, i) => (
          <div
            key={i}
            className="flex items-start gap-3 border-b border-line/70 pb-2.5 last:border-0"
          >
            <div className="flex flex-col items-center rounded-[2px] border border-line px-1.5 py-1">
              <span className="font-mono text-[9px] leading-none text-accent">▲</span>
              <span className="mt-1 font-mono text-[9px] leading-none text-muted">
                {votes}
              </span>
            </div>
            <div className="flex-1 pt-0.5">
              <div className="h-1.5 w-4/5 rounded-full bg-white/15" />
              <div className="mt-2 h-1 w-3/5 rounded-full bg-white/[0.07]" />
              <div className="mt-2 inline-block rounded-[2px] bg-accent/10 px-1.5 py-0.5 font-mono text-[7px] text-accent/80">
                {["react", "typescript", "css", "javascript"][i]}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Window>
  );
}

function RentalVisual() {
  return (
    <Window label="intu-mintu">
      <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <span className="font-display text-lg text-ink sm:text-xl">
            Intu <span className="italic text-accent">Mintu</span>
          </span>
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-muted">
            Ride Nepal
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[3px] border border-line bg-white/[0.02]">
            <CarFront className="h-8 w-8 text-accent/60" strokeWidth={1.2} />
          </div>
          <div>
            <div className="font-display text-lg leading-tight text-ink sm:text-2xl">
              Go where you want.
            </div>
            <div className="mt-2 h-1 w-28 rounded-full bg-white/10" />
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {["Pickup", "Destination", "Dates"].map((field) => (
            <span
              key={field}
              className="rounded-[2px] border border-line px-2 py-1 font-mono text-[8px] text-muted"
            >
              {field}
            </span>
          ))}
        </div>
      </div>
    </Window>
  );
}

export function ProjectVisual({ visual }: { visual: VisualKey }) {
  switch (visual) {
    case "portfolio":
      return <PortfolioVisual />;
    case "stack":
      return <StackVisual />;
    case "qa":
      return <QaVisual />;
    case "rental":
      return <RentalVisual />;
  }
}
