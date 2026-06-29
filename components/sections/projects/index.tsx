"use client";

import { useState, useLayoutEffect } from "react";
import { DiamondPlus, DiamondMinus } from "lucide-react";

import { projects } from "@/data/projects";
import Container from "@/components/ui/Container";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

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

  const visibleProjects = showAll ? projects : projects.slice(0, 2);

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
        id="projects"
        className="flex min-h-screen items-center justify-center py-4"
      >
        <Container>
          <div className="space-y-16">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl space-y-6">
                <h2 className="section-title">Projects</h2>
                <p className=" section-content text-lg leading-relaxed opacity-70 md:text-xl ">
                  A selection of digital projects exploring UI design,
                  interaction, and frontend development.
                </p>
              </div>
            </div>

            <div className="grid gap-8 section-content md:grid-cols-2">
              {visibleProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>

            {projects.length > 2 && (
              <div className="flex justify-center gap-8">
                <button
                  onClick={handleToggle}
                  className="flex items-center text-(--color-foreground) hover:text-(--color-border)"
                >
                  {
                    // mostrar opcion para visibilizar el selector
                    showAll ? (
                      <DiamondMinus strokeWidth={1} className="size-10" />
                    ) : (
                      <DiamondPlus strokeWidth={1} className="size-10" />
                    )
                  }
                </button>
              </div>
            )}
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
