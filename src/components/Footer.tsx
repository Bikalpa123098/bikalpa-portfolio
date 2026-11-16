import { ArrowUp } from "lucide-react";
import { site } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container-x flex flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="font-display text-xl leading-none text-ink">
            BK<span className="text-accent">.</span>
          </span>
          <span className="h-4 w-px bg-line" aria-hidden="true" />
          <span className="text-xs text-muted">{site.name}</span>
        </div>

        <p className="text-center text-xs text-muted/70">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>

        <a href="#home" className="text-link">
          Back to top
          <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
