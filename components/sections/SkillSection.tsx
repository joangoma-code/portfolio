"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import Container from "@/components/ui/Container";
import { skills } from "@/data/skills";
import { useMediaQuery } from "@/hooks/useMediaQuery";

function SkillItem({ item, isMd }: { item: string; isMd: boolean }) {
  const itemRef = useRef<HTMLLIElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"],
  });

  const input = [0, 0.2, 0.5, 0.8, 1];

  const opacity = useTransform(
    scrollYProgress,
    input,
    [0.35, 0.65, 1, 0.65, 0.35],
  );

  const scale = useTransform(
    scrollYProgress,
    input,
    [0.9, 0.96, 1.06, 0.96, 0.9],
  );

  const y = useTransform(scrollYProgress, input, [12, 4, 0, 4, 12]);

  const filter = useTransform(scrollYProgress, input, [
    "brightness(0.7)",
    "brightness(0.9)",
    "brightness(1.2)",
    "brightness(0.9)",
    "brightness(0.7)",
  ]);

  return (
    <motion.li
      ref={itemRef}
      style={isMd ? undefined : { opacity, scale, y, filter }}
      className="rounded-full border border-(--color-background3) bg-(--color-background2) px-4 py-2 text-lg text-(--color-foreground) transition-colors duration-300 hover:border-(--color-border)"
    >
      {item}
    </motion.li>
  );
}

export default function SkillSection() {
  const ref = useRef<HTMLElement | null>(null);
  const isMd = useMediaQuery("(min-width: 768px)");

  return (
    <section
      id="skills"
      ref={ref}
      className="section-style flex items-center justify-center"
    >
      <Container>
        <div className="space-y-12">
          <h2 className="section-title">Skills</h2>

          <div className="grid gap-8 px-6 md:grid-cols-3">
            {skills.map((category) => (
              <div key={category.title} className="space-y-4">
                <h3 className="text-2xl font-semibold">{category.title}</h3>

                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <SkillItem key={item} item={item} isMd={isMd} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
