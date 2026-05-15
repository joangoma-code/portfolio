"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";

import { projects } from "@/data/projects";

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

            <div className="flex justify-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-(--color-border) text-3xl transition-all duration-300 hover:bg-(--color-card)"
              >
                {showAll ? "-" : "+"}
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