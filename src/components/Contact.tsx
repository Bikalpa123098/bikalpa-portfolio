import { ArrowUpRight, Mail } from "lucide-react";
import { site } from "@/config/site";
import { GithubIcon, LinkedinIcon } from "./ui/BrandIcons";
import { ContactForm } from "./ui/ContactForm";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const contactLinks = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/Bikalpa123098",
    href: site.socials.github,
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/bikalpa-koirala-bb70b6255",
    href: site.socials.linkedin,
    icon: LinkedinIcon,
  },
];

export function Contact() {
  return (
    <section id="contact" className="section-pad border-t border-line">
      <div className="container-x">
        <SectionHeading
          index="07"
          label="Contact"
          title={
            <>
              Have an idea? <em className="italic text-accent">Let&apos;s build something meaningful.</em>
            </>
          }
        />

        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <p className="max-w-sm text-[15px] leading-8 text-muted">
              Whether it&apos;s a project, a question, or simply a conversation
              about the craft — my inbox is open. I&apos;ll get back to you as
              soon as I can.
            </p>

            <div className="mt-10 border-t border-line">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 border-b border-line py-5"
                  >
                    <Icon
                      className="h-4 w-4 shrink-0 text-accent/70"
                      aria-hidden="true"
                    />
                    <span className="flex-1">
                      <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                        {link.label}
                      </span>
                      <span className="mt-1 block break-all text-sm text-ink transition-colors duration-300 group-hover:text-accent">
                        {link.value}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-muted/50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
            </div>

            <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.14em] text-muted/50">
              Currently based in Nepal · open to remote conversations
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[3px] border border-line bg-card p-7 sm:p-10">
              <div className="mb-9 flex items-center justify-between gap-4">
                <h3 className="font-display text-3xl text-ink">Send a message</h3>
                <span className="font-mono text-[10px] text-accent/70">
                  07 / form
                </span>
              </div>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
