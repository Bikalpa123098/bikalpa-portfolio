import { projects } from "@/config/projects";
import { ProjectCard } from "./ui/ProjectCard";
import { SectionHeading } from "./ui/SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="section-pad border-t border-line">
      <div className="container-x">
        <SectionHeading
          index="03"
          label="Selected Work"
          title={
            <>
              Things I&apos;ve <em className="italic text-accent">built.</em>
            </>
          }
          description="A few projects that reflect how I think — structured, curious, and always aiming for an interface that feels good to use."
        />

        <div className="space-y-6">
          <ProjectCard project={projects[0]} />

          <div className="grid gap-6 md:grid-cols-2">
            {projects.slice(1, 3).map((project) => (
              <ProjectCard key={project.index} project={project} />
            ))}
          </div>

          <ProjectCard project={projects[3]} />
        </div>

        <p className="mt-10 border-t border-line pt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-muted/60">
          Live demo &amp; source links are placeholders — added as these projects
          go live.
        </p>
      </div>
    </section>
  );
}
