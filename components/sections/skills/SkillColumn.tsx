"use client";

import {
  motion,
  MotionValue,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { useRef } from "react";

import { skills } from "@/data/skills";
import SkillItem from "./SkillItem";

export default function SkillColumn({
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
  const shouldReduceMotion = useReducedMotion();
  const input = [index * 0.1, 0.25 + index * 0.1, 0.75 + index * 0.1, 1];
  const opacity = shouldReduceMotion ? 1 : useTransform(scrollYProgress, input, [0.4, 1, 1, 0.6]);
  const scale = useTransform(scrollYProgress, input, [0.89, 1, 1.01, 0.92]);
  const y = useTransform(scrollYProgress, input, [60, 0, 0, -30]);
  const rotate = useTransform(scrollYProgress, input, [
    index === 0 ? -3 : index === 2 ? 3 : 0.5,
    0,
    0,
    index === 0 ? -1 : index === 2 ? 1 : 0.2,
  ]);

  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const { scrollYProgress: titleScrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "end start"],
  });
  const itemInput = [0, 0.3, 0.7, 1];

  const titleOpacity = useTransform(
    titleScrollYProgress,
    itemInput,
    [0.35, 1, 1, 0.35],
  );
  const titleScale = useTransform(
    titleScrollYProgress,
    itemInput,
    [0.9, 1, 1.02, 0.9],
  );
  const titleY = useTransform(titleScrollYProgress, itemInput, [12, 0, 0, 12]);

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
          : { opacity: 1, scale: 1, y: 0, rotate: 0 }
      }
      className="space-y-4"
    >
      <motion.h3
        ref={titleRef}
        style={
          isMd
            ? { opacity: 1, scale: 1, y: 0 }
            : { opacity: titleOpacity, scale: titleScale, y: titleY }
        }
        className="text-2xl font-semibold"
      >
        {category.title}
      </motion.h3>

      <ul className="space-y-3">
        {category.items.map((item) => (
          <SkillItem key={item} item={item} isMd={isMd} />
        ))}
      </ul>
    </motion.div>
  );
}
