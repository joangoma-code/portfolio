"use client";

import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import Container from "@/components/ui/Container";
import { skills } from "@/data/skills";
import { useMediaQuery } from "@/hooks/useMediaQuery";

//-------------SkillItem------------------------------
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

  return (
    <motion.li
      ref={itemRef}
      style={isMd ? undefined : { opacity, scale, y }}
      className="rounded-full border border-(--color-background3) bg-(--color-background2) px-4 py-2 text-lg text-(--color-foreground) transition-colors duration-300 hover:border-(--color-border)"
    >
      {item}
    </motion.li>
  );
}

//-------------SkillColumn------------------------------
function SkillColumn({
  category,
  index,
  isMd,
  scrollYProgress,
}: {
  category: (typeof skills)[number];
  index: number;
  isMd: boolean;
  scrollYProgress: MotionValue<number>;
}) {

  const input = [
    Math.max(0, index * 0.18),
    0.35 + index * 0.12,
    0.6 + index * 0.12,
    1,
  ];

  const opacity = useTransform(scrollYProgress, input, [0.35, 1, 1, 0.4]);
  const scale = useTransform(scrollYProgress, input, [0.88, 1.04, 1, 0.92]);
  const y = useTransform(scrollYProgress, input, [60, 0, 0, -40]);
  const rotate = useTransform(scrollYProgress, input, [
    index === 0 ? -6 : index === 2 ? 6 : 0,
    0,
    0,
    index === 0 ? -3 : index === 2 ? 3 : 0,
  ]);

  return (
    <motion.div
      style={
        isMd
          ? {
              opacity,
              scale,
              y,
              rotate,
              transformOrigin: "bottom center",
            }
          : undefined
      }
      className="space-y-4"
    >
      <h3 className="text-2xl font-semibold">{category.title}</h3>

      <ul className="space-y-3">
        {category.items.map((item) => (
          <SkillItem key={item} item={item} isMd={isMd} />
        ))}
      </ul>
    </motion.div>
  );
}
//-------------SkillSection------------------------------
export default function SkillSection() {
  const ref = useRef<HTMLElement | null>(null);

  const isMd = useMediaQuery("(min-width: 768px)");

  // Scroll único para escritorio
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="skills"
      ref={ref}
      className={isMd ? "relative h-[160vh]" : "section-style"}
    >
      <div
        className={
          isMd
            ? "sticky top-0 flex h-screen items-center"
            : "section-style flex items-center justify-center"
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
