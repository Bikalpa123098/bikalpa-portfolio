export type SkillGroup = {
  id: string;
  index: string;
  title: string;
  caption: string;
  skills: { name: string; abbr: string; learning?: boolean }[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    index: "01",
    title: "Frontend",
    caption: "The tools I build with every day.",
    skills: [
      { name: "HTML5", abbr: "H5" },
      { name: "CSS3", abbr: "C3" },
      { name: "JavaScript", abbr: "JS" },
      { name: "React.js", abbr: "R" },
      { name: "TypeScript", abbr: "TS" },
      { name: "Tailwind CSS", abbr: "TW" },
    ],
  },
  {
    id: "exploring",
    index: "02",
    title: "Currently exploring",
    caption: "Learning in progress, no expertise claimed.",
    skills: [
      { name: "Rust", abbr: "Rs", learning: true },
      { name: "Next.js", abbr: "Nx", learning: true },
      { name: "Redux", abbr: "Rd", learning: true },
      { name: "Testing", abbr: "Ts", learning: true },
    ],
  },
  {
    id: "tools",
    index: "03",
    title: "Tools & workflow",
    caption: "The quiet machinery behind the work.",
    skills: [
      { name: "Git", abbr: "Git" },
      { name: "GitHub", abbr: "GH" },
      { name: "VS Code", abbr: "VS" },
      { name: "REST APIs", abbr: "API" },
      { name: "npm", abbr: "npm" },
    ],
  },
];
