"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import Button from "@/components/ui/Button";
import Mountain1 from "../ui/mountains/Mountain1";
import Mountain2 from "../ui/mountains/Mountain2";
import Mountain3 from "../ui/mountains/Mountain3";

export default function HomeSection() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const isMd = useMediaQuery("(min-width: 768px)");
  const multiplyFactor = isMd ? 1.5 : 1;
  const mountain1Y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 20 * multiplyFactor],
  );
  const mountain2Y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 60 * multiplyFactor],
  );
  const mountain3Y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 90 * multiplyFactor],
  );
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 160 * multiplyFactor],
  );

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex items-center justify-center min-h-dvh overflow-hidden bg-linear-to-t from-(--color-background4) from-10% to-(--color-background5)"
    >
      <motion.div
        style={{ y: contentY }}
        className="container-style max-w-7xl z-50 mt-30 mb-60"
      >
        <p className="mb-4 text-sm uppercase tracking-[0.3em] opacity-90">
          Frontend Developer · React · Next.js · TypeScript
        </p>

        <h1 className="text-5xl font-bold leading-tight md:text-7xl">
          Joan Goma
        </h1>

        <p className="mt-6 max-w-prose text-lg leading-relaxed">
          Focused on building simple, fast, and thoughtful web experiences. I
          enjoy turning ideas into real products through code.
        </p>

        <p className="mt-4 text-sm opacity-80">
          Open to Frontend Developer opportunities.
        </p>

        <div className="section-content mt-10 flex gap-4">
          <Button href="#projects">
            View Projects
          </Button>

          <Button href="#contact" variant="secondary">
            Get in touch
          </Button>
        </div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 pointer-events-none">
        <motion.div
          style={{ y: mountain1Y }}
          className="absolute -bottom-1 w-full z-40"
        >
          <Mountain1 className="w-full" />
        </motion.div>

        <motion.div
          style={{ y: mountain2Y }}
          className="absolute -bottom-1 w-full z-30"
        >
          <Mountain2 className="w-full" />
        </motion.div>

        <motion.div
          style={{ y: mountain3Y }}
          className="absolute -bottom-1 w-full z-20"
        >
          <Mountain3 className="w-full" />
        </motion.div>
      </div>
    </section>
  );
}
