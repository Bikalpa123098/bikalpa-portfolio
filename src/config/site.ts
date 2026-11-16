/**
 * Central place for identity + external links.
 * Project demo/repo links remain placeholders in projects.ts until you have them.
 */
export const site = {
  name: "Bikalpa Koirala",
  role: "Aspiring Frontend Developer",
  location: "Nepal",
  email: "koiralabikalpa665@gmail.com",
  socials: {
    github: "https://github.com/Bikalpa123098",
    linkedin: "https://www.linkedin.com/in/bikalpa-koirala-bb70b6255/",
  },
} as const;

export const rustRepos = [
  {
    label: "Learning ownership in Rust",
    url: "https://github.com/Bikalpa123098/learning-ownership-in-rust.git",
  },
  {
    label: "Variables & datatypes in Rust",
    url: "https://github.com/Bikalpa123098/variable_and_datatype_in_Rust.git",
  },
  {
    label: "Functions & control flow in Rust",
    url: "https://github.com/Bikalpa123098/funtion-and-control-flow-in-rust.git",
  },
  {
    label: "First Rust practice session",
    url: "https://github.com/Bikalpa123098/first-rust-practice-session.git",
  },
] as const;

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Learning", href: "#learning" },
  { label: "Contact", href: "#contact" },
] as const;
