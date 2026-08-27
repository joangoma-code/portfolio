import { MotionValue, useTransform } from "motion/react";
import { useHydratedReducedMotion } from "./useHydratedReducedMotion";

export function useTextMotion(scrollYProgress: MotionValue<number>) {
  const shouldReduceMotion = useHydratedReducedMotion();
  const input = [0, 0.3, 0.7, 1];
  const opacityMotion = useTransform(scrollYProgress, input, [0.4, 1, 1, 0.6]);

  return {
    y: useTransform(scrollYProgress, input, [14, 0, 0, 12]),
    opacity: shouldReduceMotion ? 1 : opacityMotion,
    scale: useTransform(scrollYProgress, input, [0.94, 1, 1.01, 0.98]),
  };
}
