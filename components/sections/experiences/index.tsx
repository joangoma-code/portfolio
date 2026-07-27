"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { experiences } from "@/data/experiences";
import { useMediaQuery } from "@/hooks/useMediaQuery";

import Container from "@/components/ui/Container";
import TimelineItem from "./TimelineItem";

export default function ExperienceSection() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const isMd = useMediaQuery("(min-width: 768px)");
  const timelineProgress = useTransform(
    scrollYProgress,
    isMd ? [0.25, 1] : [0.14, 0.98],
    [0, 1],
  );

  return (
    <section
      id="experiences"
      ref={ref}
      className="flex items-center justify-center section-style"
    >
      <Container className="space-y-16">
        <div className="max-w-3xl space-y-6">
          <h2 className="section-title">Experiencies</h2>
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
              <TimelineItem
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
