"use client";

import type { Experience } from "@/types/Experience";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import ExperienceCard from "./ExperienceCard";

type ExperienceItemProps = {
  experience: Experience;
  side?: "left" | "right";
  index: number;
};

export default function ExperienceItem({
  experience,
  side = "left",
  index,
}: ExperienceItemProps) {
  const itemRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start center", "end center"],
  });

  const isMd = useMediaQuery("(min-width: 768px)");

  const inputRange = isMd ? [0.1, 0.3, 0.8, 1] : [0, 0.15, 0.85, 1]; 

  const y = useTransform(scrollYProgress, inputRange, [14, 0, 0, 12]);
  const opacity = useTransform(scrollYProgress, inputRange, [0.74, 1, 1, 0.92]);
  const scale = useTransform(
    scrollYProgress,
    inputRange,
    [0.96, 1.03, 1.03, 0.99],
  );
  const pointOpacity = useTransform(
    scrollYProgress,
    inputRange,
    [0.35, 1, 1, 0.75],
  );
  const pointScale = useTransform(
    scrollYProgress,
    inputRange,
    [1, 1.4, 1.4, 1],
  );

  return (
    <div
      ref={itemRef}
      className={`relative flex w-full items-start ${
        index !== 0 ? "mt-10 md:-mt-32" : ""
      }`}
    >
      <motion.div
        style={{ opacity: pointOpacity, scale: pointScale }}
        className="absolute left-4 top-8 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-(--color-foreground2) md:left-1/2"
      />

      <motion.div style={{ scale, y, opacity }} className="w-full">
        <ExperienceCard experience={experience} side={side} />
      </motion.div>
    </div>
  );
}
