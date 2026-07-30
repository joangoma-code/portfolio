"use client";

import { motion, MotionValue, useTransform } from "motion/react";

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
  const input = [
    index * 0.1,
    0.25 + index * 0.1,
    0.75 + index * 0.1,
    1,
  ];

  const opacity = useTransform(scrollYProgress, input, [0.4, 1, 1, 0.6]);
  const scale = useTransform(scrollYProgress, input, [0.89, 1, 1.01, 0.92]);
  const y = useTransform(scrollYProgress, input, [60, 0, 0, -30]);
  const rotate = useTransform(scrollYProgress, input, [
    index === 0 ? -3 : index === 2 ? 3 : 0,
    0,
    0,
    index === 0 ? -1 : index === 2 ? 1 : 0,
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
