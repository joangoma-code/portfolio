import { Project } from "@/types/Project"

export const projects: Project[] = [
  {
    title: "Aplicación web interactiva",
    description:
      "Diseño y desarrollo de una aplicación web enfocada en la experiencia de usuario.",
    details:
      "Proyecto centrado en el diseño UI/UX y desarrollo frontend de una aplicación web interactiva. El objetivo principal fue crear una interfaz clara, accesible y visualmente consistente, priorizando la experiencia del usuario y la navegación intuitiva.",
    image: "/projects/web-app.jpg",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Videojuego en Unity",
    description:
      "Desarrollo de un videojuego multiplataforma con niveles desbloqueables.",
    details:
      "Diseño y desarrollo de un videojuego utilizando Unity y C#. El proyecto incluye una estructura de progresión con niveles desbloqueables, sistemas de interacción y optimización para diferentes plataformas.",
    image: "/projects/unity-game.jpg",
    technologies: ["Unity", "C#", "Game Design"],
  },
  {
    title: "Design system del portfolio",
    description:
      "Creación del sistema visual y componentes reutilizables del portfolio.",
    details:
      "Diseño y construcción de un sistema de diseño escalable para mantener consistencia visual en todo el portfolio. Incluye tipografías, colores, espaciados y componentes reutilizables.",
    image: "/projects/design-system.jpg",
    technologies: ["Figma", "Tailwind CSS", "React"],
  },
  {
    title: "VideoReel 2021-2024 (UOC)",
    description:
      "Recopilación de proyectos visuales y multimedia realizados durante la formación.",
    details:
      "Video reel académico y creativo mostrando trabajos de animación, motion graphics, diseño visual y proyectos multimedia desarrollados durante la etapa formativa en la UOC.",
    image: "/projects/videoreel.jpg",
    technologies: ["After Effects", "Premiere Pro", "Motion Graphics"],
  },
];