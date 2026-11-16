"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/config/site";
import { Logo } from "@/components/ui/Logo";

const sectionIds = navItems.map((item) => item.href.slice(1));

export function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min((window.scrollY / max) * 100, 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.1, 0.5] }
    );
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
          scrolled
            ? "border-line bg-canvas/85 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="h-px w-full bg-line/50" aria-hidden="true">
          <div
            className="h-full bg-accent/80 transition-[width] duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <nav
          className="container-x flex h-20 items-center justify-between"
          aria-label="Primary navigation"
        >
          <a href="#home" className="group flex items-center gap-3" aria-label="Bikalpa Koirala — home">
            <Logo className="text-xl" />
            <span className="hidden h-4 w-px bg-line sm:block" aria-hidden="true" />
            <span className="hidden text-xs text-muted sm:block">Bikalpa Koirala</span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const id = item.href.slice(1);
              const isActive = active === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative rounded-[2px] px-4 py-2 text-[13px] transition-colors duration-300 ${
                    isActive ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  {isActive && !reduceMotion && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-[2px] border border-accent/30 bg-accent/[0.06]"
                      transition={{ type: "spring", stiffness: 420, damping: 36 }}
                    />
                  )}
                  {isActive && reduceMotion && (
                    <span className="absolute inset-0 rounded-[2px] border border-accent/30 bg-accent/[0.06]" />
                  )}
                  <span className="relative">{item.label}</span>
                </a>
              );
            })}
          </div>

          <a
            href="#contact"
            className="hidden rounded-[3px] border border-line px-4 py-2 text-xs text-ink transition-colors duration-300 hover:border-accent/50 hover:text-accent md:inline-flex"
          >
            Let&apos;s talk
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-[2px] border border-line text-ink md:hidden"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-canvas/98 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="container-x flex h-20 items-center justify-between">
              <Logo className="text-xl" />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-[2px] border border-line text-ink"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav className="container-x mt-8 flex flex-col" aria-label="Mobile navigation">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.35 }}
                  className="flex items-baseline gap-5 border-b border-line py-5 font-display text-[2.5rem] leading-none text-ink"
                >
                  <span className="font-mono text-[11px] text-accent">0{i + 1}</span>
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
