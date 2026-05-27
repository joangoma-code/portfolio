import { experiences } from "@/data/experiences";

import Container from "@/components/ui/Container";
import ExperienceCard from "./ExperienceCard";


export default function ExperienceSection() {
  return (
    <section
      id="experiencia"
      className="flex min-h-screen items-center justify-center py-4"
    >
      <Container>
        <div className="space-y-20">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-5xl font-bold leading-tight md:text-7xl">
              Experiencia
            </h2>

            <p className="text-lg leading-relaxed opacity-70 md:text-xl">
              Aunque mi experiencia en el sector digital es junior, he trabajado
              en entornos profesionales donde he desarrollado habilidades
              transferibles clave.
            </p>
          </div>

          <div className="relative">
            {/* Linea timeline */}
            <div className="absolute left-4 top-0 h-full w-px bg-(--color-foreground2) md:left-1/2 md:-translate-x-1/2" />

            <div className="flex flex-col">
              {experiences.map((experience, index) => (
                <div
                  key={experience.title}
                  className={`relative flex w-full items-start ${
                    index !== 0 ? "mt-12 md:-mt-8" : ""
                  }`}
                >
                  {/* Punto timeline */}
                  <div className="absolute left-4 top-8 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-(--color-foreground2) md:left-1/2" />

                  <ExperienceCard
                    experience={experience}
                    side={index % 2 === 0 ? "left" : "right"}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}