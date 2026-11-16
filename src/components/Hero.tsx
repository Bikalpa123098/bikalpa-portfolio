"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./ui/BrandIcons";
import { site } from "@/config/site";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function Portrait() {
  const corners = [
    "-left-2 -top-2 border-l border-t",
    "-right-2 -top-2 border-r border-t",
    "-bottom-2 -left-2 border-l border-b",
    "-bottom-2 -right-2 border-r border-b",
  ];

  return (
    <div className="relative mx-auto w-full max-w-[360px] select-none">
      <div
        aria-hidden="true"
        className="seal-ring pointer-events-none absolute -inset-5 rounded-full border border-dashed border-accent/15"
      />

      {corners.map((corner) => (
        <span
          key={corner}
          aria-hidden="true"
          className={`absolute z-10 h-5 w-5 border-accent/40 ${corner}`}
        />
      ))}

      <div className="relative aspect-[4/5] overflow-hidden rounded-[3px] border border-line-strong bg-card shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
        <Image
          src="/portrait-placeholder.svg"
          alt="Portrait placeholder — replace with your photograph"
          fill
          priority
          sizes="(max-width: 1024px) 70vw, 360px"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-canvas via-canvas/70 to-transparent px-6 pb-6 pt-24"
        />
        <div className="absolute inset-x-0 bottom-0 px-6 pb-6">
          <p className="overline text-accent">{site.name}</p>
          <p className="mt-1.5 font-mono text-[10px] text-muted">
            {site.role}
          </p>
        </div>
      </div>

      <div className="float-y absolute -bottom-5 -right-3 z-20 flex items-center gap-2 rounded-[3px] border border-line bg-card px-3 py-2 shadow-[0_16px_40px_rgba(0,0,0,0.45)] sm:-right-6">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        <span className="font-mono text-[10px] text-muted">
          currently learning Rust
        </span>
      </div>
    </div>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-28 pt-32 sm:pb-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[15%] -top-[10%] h-[720px] w-[720px] rounded-full bg-[radial-gradient(closest-side,rgba(198,168,120,0.075),transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:120px_100%]"
      />

      <div className="container-x relative w-full">
        <motion.div
          variants={container}
          initial={reduceMotion ? false : "hidden"}
          animate="show"
          className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12"
        >
          <div>
            <motion.div variants={item} className="mb-8 flex flex-wrap items-center gap-4">
              <span className="overline text-accent">Aspiring Frontend Developer</span>
              <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
              <span className="overline text-muted">{site.location}</span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display text-[clamp(2.5rem,5.5vw,4.9rem)] leading-[1.04] tracking-[-0.03em] text-ink"
            >
              Building <em className="italic text-accent">thoughtful</em> digital
              experiences,
              <br className="hidden xl:block" /> one line of code at a time.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-8 max-w-xl text-[15px] leading-8 text-muted sm:text-base"
            >
              I&apos;m Bikalpa — a frontend developer focused on clean, responsive,
              and human-centered web experiences. Curious by nature, always
              learning, always building.
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary group">
                Explore my work
                <ArrowDownRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
              <a href="#contact" className="btn-secondary group">
                Let&apos;s connect
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-6">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 px-3.5 py-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                  Open to learning &amp; collaborating
                </span>
              </span>

              <div className="flex items-center gap-4">
                <a
                  href={site.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                  aria-label="GitHub profile (placeholder link)"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                  aria-label="LinkedIn profile (placeholder link)"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={item}
            className="hidden justify-end lg:flex"
          >
            <Portrait />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
