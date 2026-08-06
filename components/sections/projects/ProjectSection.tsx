"use client";

import { useState, useRef, useLayoutEffect } from "react";
import { DiamondPlus, DiamondMinus } from "lucide-react";
import { motion, useScroll } from "motion/react";

import { projects } from "@/data/projects";
import Container from "@/components/ui/Container";
import ProjectModal from "./ProjectModal";
import { useTextMotion } from "@/hooks/useTextMotion";
import ProjectItem from "./ProjectItem";

export default function ProjectSection() {
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
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const { y, opacity, scale } = useTextMotion(scrollYProgress);
  return (
    <>
      <section
        id="projects"
        className="flex items-center justify-center section-style"
      >
        <Container className="space-y-16" ref={ref}>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl space-y-6">
              <h2 className="section-title">
                Projects
              </h2>
              <motion.p
                style={{y, opacity, scale }}
                className="section-content text-lg leading-relaxed opacity-70 md:text-xl "
              >
                A selection of digital projects exploring UI design,
                interaction, and frontend development.
              </motion.p>
            </div>
          </div>

          <div className="grid gap-8 section-content md:grid-cols-2">
            {visibleProjects.map((project, index) => (
              <ProjectItem
                key={project.title}
                project={project}
                index={index}
                onOpen={() => setSelectedProject(project)}
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
        </Container>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
