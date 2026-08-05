"use client";

import { useState, useRef, useLayoutEffect } from "react";
import { DiamondPlus, DiamondMinus } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";

import { projects } from "@/data/projects";
import Container from "@/components/ui/Container";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useTextMotion } from "@/hooks/useTextMotion";

function ProjectItem({
  project,
  onOpen,
}: {
  project: (typeof projects)[0];
  onOpen: () => void;
}) {
  const itemRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"],
  });

  const isMd = useMediaQuery("(min-width: 768px)");
  const inputRange = isMd? [0, 0.3, 0.7, 0.9] : [0, 0.3, 0.5, 0.9];
  const opacity = useTransform(scrollYProgress, inputRange, [0.74, 1, 1, 0.92]);
  const scale = useTransform(
    scrollYProgress,
    inputRange,
    [0.96, 1.03, 1.03, 0.99],
  );

  return (
    <motion.div ref={itemRef} style={{ opacity, scale }}>
 
        <ProjectCard project={project} onClick={onOpen} />
  
    </motion.div>
  );
}

//------------------------------------------------------------------------------

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
  const {y, opacity, scale} = useTextMotion(scrollYProgress);
  return (
    <>
    <section
    id="projects"
    className="flex items-center justify-center section-style"
    >
        <Container className="space-y-16" ref={ref}>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl space-y-6">
              <h2 className="section-title">Projects</h2>
              <motion.p
                style={{ y, opacity, scale }}
                className="section-content text-lg leading-relaxed opacity-70 md:text-xl "
              >
                A selection of digital projects exploring UI design,
                interaction, and frontend development.
              </motion.p>
            </div>
          </div>

          <div className="grid gap-8 section-content md:grid-cols-2">
            {visibleProjects.map((project) => (
              <ProjectItem
                key={project.title}
                project={project}
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
