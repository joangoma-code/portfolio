import type { Project } from "@/types/Project"

export const projects: Project[] = [
  {
    title: "Component-Based Design System",
    description:
      "Scalable design system focused on reusable UI components and visual consistency.",

    details: {
      objective:
        "Create a reusable UI foundation for consistent interfaces.",

      process:
        "Component-driven approach inspired by atomic design principles.",

      implementation:
        "Built reusable components with React and Tailwind CSS.",

      outcome:
        "Consistent UI system that speeds up development.",

      learnings:
        "Better understanding of scalable UI architecture and design systems.",
    },

    image: "@/public/window.svg",
    technologies: ["Figma", "React", "Tailwind", "Design Systems"],
  },

  {
    title: "Interactive Web Interface (Vue.js Project)",
    description:
      "User-centered web interface built as a university frontend project.",

    details: {
      objective:
        "Build an interactive and responsive web interface.",

      process:
        "Defined UI structure and component hierarchy before implementation.",

      implementation:
        "Developed with Vue.js, Vite and modular components.",

      outcome:
        "Functional responsive interface with clean UX.",

      learnings:
        "Improved understanding of Vue.js and component-based development.",
    },

    image: "@/public/window.svg",
    technologies: ["Vue.js", "Vite", "JavaScript", "CSS"],
  },
];