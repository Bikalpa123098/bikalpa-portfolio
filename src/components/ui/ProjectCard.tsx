"use client";

import type { MouseEvent, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/config/projects";
import { GithubIcon } from "./BrandIcons";
import { ProjectVisual } from "./ProjectVisual";
import { Reveal } from "./Reveal";

function ProjectLink({
  href,
  placeholder,
  children,
  icon,
}: {
  href: string;
  placeholder: boolean;
  children: ReactNode;
  icon: ReactNode;
}) {
  const handlePlaceholder = (event: MouseEvent<HTMLAnchorElement>) => {
    if (placeholder) event.preventDefault();
  };

  return (
    <a
      href={href}
      onClick={handlePlaceholder}
      title={placeholder ? "Link placeholder — add your URL in src/config/projects.ts" : undefined}
      aria-label={placeholder ? `${children} (link placeholder)` : undefined}
      className="text-link group/link"
    >
      {icon}
      {children}
      <span className="sr-only">{placeholder ? " — placeholder" : ""}</span>
    </a>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const isFeature = project.variant !== "default";
  const visualOnLeft = project.variant === "feature-left";

  return (
    <Reveal delay={Number(project.index) * 0.04}>
      <article
        className={`group relative overflow-hidden rounded-[3px] border border-line bg-card transition-all duration-500 hover:border-accent/30 hover:bg-[#191919] ${
          isFeature ? "lg:grid lg:grid-cols-2" : "flex h-full flex-col"
        }`}
      >
        {/* Visual preview */}
        <div
          className={`${
            isFeature
              ? `p-4 sm:p-6 ${visualOnLeft ? "lg:order-1" : "lg:order-2"}`
              : "p-3 pb-0"
          }`}
        >
          <div
            className={`transition-transform duration-700 ease-out group-hover:scale-[1.015] ${
              isFeature
                ? "aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[300px]"
                : "aspect-[16/10]"
            }`}
          >
            <ProjectVisual visual={project.visual} />
          </div>
        </div>

        {/* Content */}
        <div
          className={`flex flex-col justify-center p-6 sm:p-8 ${
            isFeature ? `lg:order-2 lg:p-12 ${visualOnLeft ? "" : "lg:order-1"}` : "flex-1"
          }`}
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="font-mono text-[11px] tracking-[0.18em] text-accent">
              {project.index} / 04
            </span>
            {project.note && (
              <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                {project.note}
              </span>
            )}
          </div>

          <h3 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-tight tracking-[-0.01em] text-ink">
            {project.name}
          </h3>

          <p className="mt-4 max-w-xl text-[14px] leading-7 text-muted">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-[2px] border border-line px-2.5 py-1 font-mono text-[10px] text-muted"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-line pt-6">
            <ProjectLink
              href={project.demo}
              placeholder={project.placeholderLinks}
              icon={<ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />}
            >
              Live demo
            </ProjectLink>
            <ProjectLink
              href={project.repo}
              placeholder={project.placeholderLinks}
              icon={<GithubIcon className="h-3.5 w-3.5" />}
            >
              Source code
            </ProjectLink>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
