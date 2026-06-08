import type { Project } from "@/types/Project";

export const projects: Project[] = [
  {
    title: "Personal Portfolio Website",
    description:
      "A responsive portfolio website designed and developed to showcase my frontend projects, technical skills, and design approach.",

    details: {
      objective:
        "Build a professional online presence, improve UI consistency, and create a scalable architecture using reusable components.",

      process: [
        "Planned the information architecture and content hierarchy.",
        "Designed a consistent visual system for typography, spacing, and layouts.",
        "Developed reusable UI components following a component-based approach.",
        "Optimized the experience across desktop, tablet, and mobile devices.",
      ],

      contributions: [
        "Planned the site structure and content hierarchy.",
        "Designed a consistent visual system for layouts, spacing, and typography.",
        "Built reusable components and responsive layouts.",
        "Applied accessibility and performance best practices.",
      ],

      learnings: [
        "Component architecture and code organization.",
        "Responsive design and accessibility.",
        "Creating reusable and maintainable UI systems.",
      ],

      outcome:
        "A clean, responsive, and scalable portfolio that showcases projects and demonstrates frontend development skills through a real-world application.",

      highlights: [
        // "Responsive Design",
        // "Reusable Components",
        "Mobile-First Approach",
        "Scalable Architecture",
        "Performance Optimization",
      ],
    },
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Node.js"],
    image: "@/public/window.svg",
  },

  {
    title: "Interactive Web Interface (Vue.js Project)",
    description:
      "User-centered web interface built as a university frontend project.",

    details: {
      objective: "Build an interactive and responsive web interface.",

      process: [
        "Defined UI structure and component hierarchy before implementation.",
      ],

      implementation: ["Developed with Vue.js, Vite and modular components."],

      outcome: "Functional responsive interface with clean UX.",

      learnings: [
        "Improved understanding of Vue.js and component-based development.",
      ],
      highlights: [""],
    },

    technologies: ["Vue.js", "Vite", "JavaScript", "CSS"],
    image: "@/public/window.svg",
  },
];
