"use client";

import { useState } from "react";
import Container from "../ui/Container";
import ProjectCard from "../ui/ProjectCard";
import ProjectModal from "../ui/ProjectModal";

const projects = [
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

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const visibleProjects = showAll
    ? projects
    : projects.slice(0, 2);

  return (
    <>
      <section
        id="proyectos"
        className="flex min-h-screen items-center justify-center py-24"
      >
        <Container>
          <div className="space-y-16">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl space-y-6">
                <h2 className="text-5xl font-bold leading-tight md:text-7xl">
                  Proyectos
                </h2>

                <p className="text-lg leading-relaxed text-zinc-300 md:text-xl">
                  Una selección de proyectos enfocados en diseño digital,
                  desarrollo frontend, videojuegos y experiencia de usuario.
                </p>
              </div>

              <button
                onClick={() => setShowAll(!showAll)}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-3xl transition-all duration-300 hover:bg-white/10"
              >
                {showAll ? "−" : "+"}
              </button>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {visibleProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
            
          </div>
        </Container>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}