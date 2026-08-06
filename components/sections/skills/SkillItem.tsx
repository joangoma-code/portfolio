"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function SkillItem({
  item,
  isMd,
}: {
  item: string;
  isMd: boolean;
}) {
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
      style={isMd ? { opacity: 1, scale: 1, y: 0 } : { opacity, scale, y }}
      className="rounded-full border border-(--color-background3) bg-(--color-background2) px-4 py-2 text-lg text-(--color-foreground) transition-colors duration-300 hover:border-(--color-border)"
    >
      {item}
    </motion.li>
  );
}
