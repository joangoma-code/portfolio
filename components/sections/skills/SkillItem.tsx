"use client";

import { motion, useScroll, useTransform, } from "motion/react";
import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";
import { useEffect, useRef, useState } from "react";


export default function SkillItem({
  item,
  isMd,
}: {
  item: string;
  isMd: boolean;
}) {
  const itemRef = useRef<HTMLLIElement | null>(null);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isHoverActive, setIsHoverActive] = useState(false);
  const shouldReduceMotion = useHydratedReducedMotion();
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
    [0.9, 0.96, 1.02, 0.96, 0.9],
  );
  const y = useTransform(scrollYProgress, input, [12, 4, 0, 4, 12]);

  useEffect(() => {
    return () => {
      if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    };
  }, []);

  const handlePointerEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setIsHoverActive(true);
  };

  const handlePointerLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setIsHoverActive(false);
    }, 300);
  };

  return (
    <motion.li
      ref={itemRef}
      style={
        isMd || shouldReduceMotion
          ? { opacity: 1, scale: 1, y: 0 }
          : { opacity, scale, y }
      }
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      className={`rounded-full border border-(--color-background3) bg-(--color-background2) px-4 py-2 text-lg text-(--color-foreground) motion-safe:transition-colors motion-safe:duration-200 ${
        isHoverActive ? "border-(--color-border)" : ""
      }`}
    >
      {item}
    </motion.li>
  );
}
