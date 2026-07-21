"use client";

import { useRef } from "react";
import { experiences } from "@/data/experiences";

import Container from "@/components/ui/Container";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceSection() {
  const ref = useRef<HTMLElement | null>(null);

  return (
    <section
      id="experiences"
      ref={ref}
      className="flex items-center justify-center section-style"
    >
      <Container className="space-y-16">
        <div className="max-w-3xl space-y-6">
          <h2 className="section-title">Experiencies</h2>
        </div>

        <div className="relative">
          {/* Linea timeline */}
          <div className="absolute left-4 top-5 bottom-25 w-0.5 -translate-x-1/2 bg-(--color-foreground2) md:left-1/2" />

          <div className="flex flex-col">
            {experiences.map((experience, index) => (
              <div
                key={experience.title}
                className={`relative flex w-full items-start ${
                  index !== 0 ? "mt-10 md:-mt-32" : ""
                }`}
              >
                {/* Punto timeline */}
                <div className="absolute left-4 top-8 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-(--color-foreground2) md:left-1/2" />

                <ExperienceCard
                  experience={experience}
                  side={index % 2 ? "right" : "left"}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
