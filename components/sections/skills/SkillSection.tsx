"use client";

import { useScroll } from "motion/react";
import { useRef } from "react";

import Container from "@/components/ui/Container";
import { skills } from "@/data/skills";
import { useMediaQuery } from "@/hooks/useMediaQuery";

import SkillColumn from "./SkillColumn";


export default function SkillSection() {
  const ref = useRef<HTMLElement | null>(null);

  const isMd = useMediaQuery("(min-width: 768px)");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="skills"
      ref={ref}
      className={isMd ? "relative h-[140vh]" : "section-style"}
    >
      <div
        className={
          isMd
            ? "sticky top-0 flex h-screen items-center"
            : "flex items-center justify-center"
        }
      >
        <Container>
          <div className="space-y-12">
            <h2 className="section-title">Skills</h2>

            <div className="grid gap-8 px-6 md:grid-cols-3">
              {skills.map((category, index) => (
                <SkillColumn
                  key={category.title}
                  category={category}
                  index={index}
                  isMd={isMd}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
