"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { projects } from "@/data/projects";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import ProjectCard from "./ProjectCard";

type ProjectItemProps = {
  project: (typeof projects)[0];
  index: number;
  onOpen: () => void;
};

export default function ProjectItem({ project, index, onOpen }: ProjectItemProps) {
  const itemRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"],
  });

  const isMd = useMediaQuery("(min-width: 768px)");
  const inputRange = isMd ? [0, 0.3, 0.7, 0.9] : [0, 0.3, 0.5, 0.9];
  const opacity = useTransform(scrollYProgress, inputRange, [0.74, 1, 1, 0.92]);
  const scale = useTransform(scrollYProgress, inputRange, [0.96, 1, 1.01, 0.99]);
  const y = useTransform(scrollYProgress, inputRange, [14, 0, 0, 12]);
  const rotate = useTransform(scrollYProgress, inputRange, [
    index % 2 === 0 ? -2 : 2,
    0,
    0,
    index % 2 === 0 ? -1 : 1,
  ]);

  return (
    <motion.div
      ref={itemRef}
      style={
        isMd
          ? {
              opacity,
              scale,
              y,
              rotate,
              transformOrigin: index % 2 === 0 ? "bottom right" : "bottom left",
            }
          : {
              opacity,
              scale,
              y,
              rotate: 0,
              transformOrigin: "bottom center",
            }
      }
    >
      <ProjectCard project={project} onClick={onOpen} />
    </motion.div>
  );
}
