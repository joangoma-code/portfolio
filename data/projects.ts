import type { Project } from "@/types/Project";
//import image from "@/public/portfolio_screenshot.webp"

export const projects: Project[] = [
  {
    image: "/portfolio_screenshot.webp",

    title: "Personal Portfolio Website",

    description:
      "A responsive portfolio website designed and developed to showcase my frontend projects, technical skills, and UI/UX approach.",

    objective:
      "Build a professional portfolio while improving UI consistency, component architecture, and responsive design.",

    contributions: [
      "Developed a reusable component system.",
      "Designed a consistent visual system for layouts, spacing, and typography.",
      "Implemented a responsive UI using a mobile-first approach.",
      "Organized the project to improve scalability and maintainability.",
      "Improved performance through a lightweight and optimized structure.",
    ],

    outcome:
      "A clean and scalable portfolio that showcases projects and reflects frontend development skills in a real-world context.",

    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  },

  {
    image: "/project1.webp",

    title: "Interactive Web Interface (Vue.js Project)",

    description:
      "A user-centered web interface developed as a university frontend project using Vue.js.",

    objective:
      "Build an interactive and responsive web interface using modern frontend practices.",

    contributions: [
      "Developed a component-based interface using Vue.js and Vite.",
      "Structured the UI with a clear component hierarchy.",
      "Implemented responsive layouts for different screen sizes.",
      "Focused on creating a clean and intuitive user experience.",
    ],

    outcome:
      "A functional and responsive web interface with a clean and user-friendly UX.",

    technologies: ["Vue.js", "Vite", "JavaScript", "CSS"],
  },
];
