"use client";

import { useState, useLayoutEffect } from "react";

import Container from "@/components/ui/Container";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { projects } from "@/data/projects";
import { DiamondPlus, DiamondMinus, } from "lucide-react";

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  useLayoutEffect(() => {
    if (isClosing) {
      document.getElementById("proyectos")?.scrollIntoView({
        behavior: "instant",
        block: "end",
      });

      setIsClosing(false);
    }
  }, [isClosing]);

  const visibleProjects = showAll
    ? projects
    : projects.slice(0, 2);

  const handleToggle = () => {
  if (showAll) {
    setIsClosing(true);
    setShowAll(false);
  } else {
    setShowAll(true);
  }
};

  return (
    <>
      <section
        id="proyectos"
        className="flex min-h-screen items-center justify-center py-4"
      >
        <Container>
          <div className="space-y-16">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl space-y-6">
                <h2 className="text-5xl font-bold leading-tight md:text-7xl">
                  Proyectos
                </h2>

                <p className="text-lg leading-relaxed opacity-70 md:text-xl">
                  Una selección de proyectos enfocados en diseño digital,
                  desarrollo frontend, videojuegos y experiencia de usuario.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {visibleProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>

            <div className="flex justify-center gap-8">
              <button
                onClick={handleToggle}
                className="flex items-center text-(--color-foreground) hover:text-(--color-border)"  
              >
                {showAll ? 
                <DiamondMinus className="size-10 stroke-1"/> 
                : 
                <DiamondPlus className="size-10 stroke-1"/>
                }
              </button>
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