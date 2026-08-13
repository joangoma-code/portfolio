"use client";

import { motion, useScroll } from "motion/react";
import { useRef } from "react";

import Container from "@/components/ui/Container";
import { useTextMotion } from "@/hooks/useTextMotion";

function AboutParagraph({ children }: { children: React.ReactNode }) {
  const itemRef = useRef<HTMLParagraphElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"],
  });
  const { y, opacity, scale } = useTextMotion(scrollYProgress);

  return (
    <motion.p
      ref={itemRef}
      style={{ scale, y, opacity, transformOrigin: "top center" }}
      className="section-content"
    >
      {children}
    </motion.p>
  );
}
// --------------------------------------------------------

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
      tabIndex={0}
      className="flex items-center justify-center section-style"
    >
      <Container className="max-w-4xl space-y-6" ref={ref}>
        <motion.h2 style={{ y, opacity, scale }} className="section-title">
          About me
        </motion.h2>
        <AboutParagraph>
          I'm Joan, a designer and developer born in 1993 in Tarragona, focused
          on creating interactive and visually engaging digital experiences
          across web and game-inspired interfaces.
        </AboutParagraph>
        <AboutParagraph>
          I enjoy bringing ideas to life through clean, functional interfaces
          and thoughtful interactions. I like working on products where details
          matter and where design and development come together naturally. Right
          now, I'm looking for a Frontend Developer role where I can contribute
          to real projects, keep learning, and grow within a team environment.
        </AboutParagraph>
      </Container>
    </section>
  );
}
