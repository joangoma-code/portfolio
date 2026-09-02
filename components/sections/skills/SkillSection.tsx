"use client";

import { motion, useScroll, useReducedMotion } from "motion/react";
import { useRef } from "react";

import Container from "@/components/ui/Container";
import { skills } from "@/data/skills";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useTextMotion } from "@/hooks/useTextMotion";

import SkillColumn from "./SkillColumn";

export default function SkillSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  const isMd = useMediaQuery("(min-width: 768px)");
  const isTouchDevice = useMediaQuery("(pointer: coarse)");
  const shouldReduceMotion = useReducedMotion();

  const enableSticky = isMd && !shouldReduceMotion && !isTouchDevice;

  const { scrollYProgress: sectionScrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const { y, opacity, scale } = useTextMotion(scrollYProgress);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={enableSticky ? "relative h-[140vh]" : "section-style"}
    >
      <div
        className={
          enableSticky
            ? "sticky top-0 flex h-screen items-center justify-center"
            : "flex items-center justify-center"
        }
      >
        <Container ref={ref} className="space-y-12">
            <motion.h2 style={{ y, opacity, scale }} className="section-title">
              Skills
            </motion.h2>

            <div className="grid gap-8 px-6 md:grid-cols-3">
              {skills.map((category, index) => (
                <SkillColumn
                  key={category.title}
                  category={category}
                  index={index}
                  isMd={isMd}
                  scrollYProgress={sectionScrollYProgress}
                />
              ))}
            </div>
        </Container>
      </div>
    </section>
  );
}
