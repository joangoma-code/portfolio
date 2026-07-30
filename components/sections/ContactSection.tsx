"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import Container from "@/components/ui/Container";
import { contacts } from "@/data/contacts";

export default function ContactSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const input = [0, 0.3, 0.5, 0.8];

  const y = useTransform(scrollYProgress, input, [14, 0, 0, 12]);
  const opacity = useTransform(scrollYProgress, input, [0.7, 1, 1, 0.8]);
  const scale = useTransform(scrollYProgress, input, [0.94, 1, 1.01, 0.98]);

  return (
    <section
      id="contact"
      ref={ref}
      className="flex items-center justify-center section-style"
    >
      <Container className="max-w-4xl space-y-12">
        <div className="space-y-6">
          <h2 className="section-title">Contact</h2>
          <motion.div
            style={{ scale, y, opacity, transformOrigin: "top center" }}
            className="space-y-4"
          >
            <p className="section-content">
              I'm currently open to new Frontend Developer opportunities where I
              can contribute to meaningful products and keep learning with a
              great team.
            </p>
          </motion.div>
        </div>

        <motion.div
          style={{ scale, y, opacity, transformOrigin: "top center" }}
          className="section-content flex flex-col gap-6 md:flex-row md:gap-12"
        >
          {contacts.map((contact) => (
            <ContactItem
              key={contact.label}
              contact={contact}
              scale={scale}
              y={y}
              opacity={opacity}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

//------------------------------------
function ContactItem({
  contact,
  scale,
  y,
  opacity,
}: {
  contact: { label: string; href: string };
  scale: any;
  y: any;
  opacity: any;
}) {
  return (
    <motion.a
      style={{ scale, y, opacity, transformOrigin: "top center" }}
      href={contact.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-xl font-medium transition-opacity duration-300 hover:opacity-60"
    >
      {contact.label}
    </motion.a>
  );
}
