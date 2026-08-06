import { useTransform } from "motion/react";

export function useTextMotion(scrollYProgress: any) {
  const input = [0, 0.3, 0.7, 1];
  return {
    y: useTransform(scrollYProgress, input, [14, 0, 0, 12]),
    opacity: useTransform(scrollYProgress, input, [0.4, 1, 1, 0.6]),
    scale: useTransform(scrollYProgress, input, [0.94, 1, 1.01, 0.98]),
  };
}
