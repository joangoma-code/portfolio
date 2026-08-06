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
  const { y, opacity, scale } = useTextMotion(scrollYProgress);

  return (
    <motion.a
      style={{ scale, y, opacity, transformOrigin: "top center" }}
      ref={itemRef}
      href={contact.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-xl font-medium transition-opacity duration-300 hover:opacity-60"
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
      <Container className="max-w-4xl space-y-12" ref={ref}>
        <div className="space-y-6">
          <h2 className="section-title">Contact</h2>
          <motion.p
            style={{ scale, y, opacity, transformOrigin: "top center" }}
            className="section-content"
          >
            I'm currently open to new Frontend Developer opportunities where I
            can contribute to meaningful products and keep learning with a great
            team.
          </motion.p>
        </div>

        <div className="section-content flex flex-col gap-6 md:flex-row md:gap-12">
          {contacts.map((contact) => (
            <ContactItem key={contact.label} contact={contact} />
          ))}
        </div>
      </Container>
    </section>
  );
}
