"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { experiences } from "@/data/experiences";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useTextMotion } from "@/hooks/useTextMotion";

import Container from "@/components/ui/Container";
import ExperienceItem from "./ExperienceItem";

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const isMd = useMediaQuery("(min-width: 768px)");
  const timelineProgress = useTransform(
    scrollYProgress,
    isMd ? [0.35, 0.74] : [0.2, 0.85],
    [0, 1],
  );

  const { y, opacity, scale } = useTextMotion(scrollYProgress);

  return (
    <section
      id="experiences"
      className="flex items-center justify-center section-style"
    >
      <Container ref={ref} className="space-y-16">
        <div className="max-w-3xl space-y-6">
          <motion.h2 style={{ y, opacity, scale }} className="section-title">
            Experiences
          </motion.h2>
        </div>

        <div className="relative">
          {/* Linea timeline */}
          <div className="absolute left-4 top-5 bottom-25 w-0.5 -translate-x-1/2 overflow-hidden rounded-full bg-(--color-foreground2)/40 md:left-1/2">
            <motion.div
              style={{ scaleY: timelineProgress, originY: 0 }}
              className="h-full w-full rounded-full bg-(--color-foreground2)"
            />
          </div>

          <div className="flex flex-col">
            {experiences.map((experience, index) => (
              <ExperienceItem
                key={experience.title}
                experience={experience}
                side={index % 2 ? "right" : "left"}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
