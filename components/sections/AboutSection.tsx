"use client";

import { motion, useScroll } from "motion/react";
import { useRef } from "react";

import Container from "@/components/ui/Container";
import { useTextMotion } from "@/hooks/useTextMotion";

export default function AboutSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const { y, opacity, scale } = useTextMotion(scrollYProgress);

  return (
    <section
      id="about"
      className="flex items-center justify-center section-style"
    >
      <Container className="max-w-4xl space-y-12" ref={ref}>
        <div className="space-y-6">
          <h2 className="section-title">About me</h2>
          <motion.p
            style={{ scale, y, opacity, transformOrigin: "top center" }}
            className="section-content"
          >
            I'm Joan, a designer and developer born in 1993 in Tarragona,
            focused on creating interactive and visually engaging digital
            experiences across web and game-inspired interfaces.
          </motion.p>
          <motion.p
            style={{ scale, y, opacity, transformOrigin: "top center" }}
            className="section-content"
          >
            I enjoy bringing ideas to life through clean, functional interfaces
            and thoughtful interactions. I like working on products where
            details matter and where design and development come together
            naturally. Right now, I'm looking for a Frontend Developer role
            where I can contribute to real projects, keep learning, and grow
            within a team environment.
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
