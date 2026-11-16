export type ProjectVisual = "portfolio" | "stack" | "qa" | "rental";
export type ProjectVariant = "feature-left" | "feature-right" | "default";

export type Project = {
  index: string;
  name: string;
  description: string;
  stack: string[];
  visual: ProjectVisual;
  variant: ProjectVariant;
  note?: string;
  /** Placeholder links: marked so the UI can be honest about them. */
  demo: string;
  repo: string;
  placeholderLinks: boolean;
};

export const projects: Project[] = [
  {
    index: "01",
    name: "Portfolio Website",
    description:
      "My personal corner of the web — an exercise in restraint, typography, and building an experience that feels as considered as it looks. Responsive from the first line of CSS.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    visual: "portfolio",
    variant: "feature-left",
    note: "Featured work",
    demo: "#",
    repo: "#",
    placeholderLinks: true,
  },
  {
    index: "02",
    name: "Stack Visualizer",
    description:
      "An interactive take on the stack data structure, built with React. Push, pop, check isEmpty and isFull — capped at five elements to keep the concept tangible.",
    stack: ["React", "TypeScript", "CSS"],
    visual: "stack",
    variant: "default",
    demo: "#",
    repo: "#",
    placeholderLinks: true,
  },
  {
    index: "03",
    name: "Q&A Platform",
    description:
      "A Stack Overflow-inspired question and answer website, focused on clean UI and interactive functionality — asking, browsing, and discovering answers.",
    stack: ["React", "JavaScript", "CSS"],
    visual: "qa",
    variant: "default",
    demo: "#",
    repo: "#",
    placeholderLinks: true,
  },
  {
    index: "04",
    name: "Intu Mintu",
    description:
      "A vehicle rental concept for Nepal, designed to present rental services clearly and make booking enquiries feel simple, local, and approachable.",
    stack: ["React", "Tailwind CSS", "REST APIs"],
    visual: "rental",
    variant: "feature-right",
    note: "Concept",
    demo: "#",
    repo: "#",
    placeholderLinks: true,
  },
];

export const rustTopics = [
  "Variables & mutability",
  "Ownership & borrowing",
  "References & lifetimes",
  "Structs & enums",
  "Functions",
  "Pattern matching",
  "Error handling",
  "Collections",
];

export const rustExperiments = [
  {
    title: "Ownership playground",
    detail: "Small programs to feel out moves, borrows, and scopes.",
  },
  {
    title: "Tiny CLI utilities",
    detail: "Command-line practice built one concept at a time.",
  },
  {
    title: "Data structure practice",
    detail: "Rebuilding familiar structures to learn the Rust way.",
  },
];

export const exploringTopics = [
  {
    title: "Modern frontend architecture",
    detail: "Patterns that keep growing interfaces understandable.",
  },
  {
    title: "Backend development",
    detail: "The other half of the conversation — data, APIs, and servers.",
  },
  {
    title: "Systems programming",
    detail: "Getting closer to the machine through Rust and low-level ideas.",
  },
  {
    title: "Performance optimization",
    detail: "Making experiences feel instant, not just functional.",
  },
  {
    title: "Software engineering principles",
    detail: "Writing code that is maintainable, testable, and kind to teammates.",
  },
  {
    title: "Building real-world applications",
    detail: "Turning scattered knowledge into complete, useful products.",
  },
];
