"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import Container from "@/components/ui/Container";

export default function AboutSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const input = [0, 0.3, 0.8, 1];

  const y = useTransform(scrollYProgress, input, [14, 0, 0, 12]);
  const opacity = useTransform(scrollYProgress, input, [0.7, 1, 1, 0.8]);
  const scale = useTransform(
    scrollYProgress,
    input,
    [0.94, 1, 1.01, 0.98],
  );

  return (
    <section
      id="about"
      ref={ref}
      className="flex items-center justify-center section-style"
    >
      <Container className="max-w-4xl space-y-12">
        <div className="space-y-6">
          <h2 className="section-title">About me</h2>
          <motion.div style={{ scale, y, opacity ,transformOrigin: "top center"}} className="space-y-4">
            <p className="section-content">
              I'm Joan, a designer and developer born in 1993 in Tarragona,
              focused on creating interactive and visually engaging digital
              experiences across web and game-inspired interfaces.
            </p>
            <p className="section-content">
              I enjoy bringing ideas to life through clean, functional
              interfaces and thoughtful interactions. I like working on products
              where details matter and where design and development come
              together naturally. Right now, I'm looking for a Frontend
              Developer role where I can contribute to real projects, keep
              learning, and grow within a team environment.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
