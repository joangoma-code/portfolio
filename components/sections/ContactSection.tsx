"use client";

import { motion, useScroll } from "motion/react";
import { useRef } from "react";

import Container from "@/components/ui/Container";
import { contacts } from "@/data/contacts";
import { useTextMotion } from "@/hooks/useTextMotion";

//------------------------------------
function ContactItem({
  contact,
}: {
  contact: { label: string; href: string };
}) {
  const itemRef = useRef<HTMLAnchorElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"],
  });
  const { y, opacity } = useTextMotion(scrollYProgress);

  return (
    <motion.a
      style={{ y, opacity }}
      ref={itemRef}
      href={contact.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-xl font-medium transition-all duration-300 hover:text-(--color-primary) focus:text-(--color-primary)"
    >
      {contact.label}
    </motion.a>
  );
}

//-------------------------------------

export default function ContactSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const { y, opacity, scale } = useTextMotion(scrollYProgress);

  return (
    <section
      id="contact"
      className="flex items-center justify-center section-style"
    >
      <Container className="space-y-6" ref={ref}>
        <motion.h2 style={{ opacity, scale }} className="section-title">
          Contact
        </motion.h2>
        <motion.p
          style={{ y, opacity, scale, transformOrigin: "top center" }}
          className="section-content"
        >
          I'm currently open to new Frontend Developer opportunities where I can
          contribute to meaningful products, grow my skills, and keep learning
          with a great team.
        </motion.p>

        <motion.div
          style={{ scale, transformOrigin: "top center" }}
          className="section-content flex flex-col gap-6 md:flex-row md:gap-12"
        >
          {contacts.map((contact) => (
            <ContactItem key={contact.label} contact={contact} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
