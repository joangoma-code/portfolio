// sections/ExperienceSection.tsx

import Container from "../ui/Container";
import ExperienceCard from "../ui/ExperienceCard";

const experiences = [
  {
    title: "Experiencia en atención al cliente y gestión",
    date: "2015 - Actualidad",
    description:
      "Trabajo continuado en retail y alimentación, desarrollando responsabilidad, comunicación y organización.",
  },
  {
    title: "Technical Artist Trainee - Magic Media",
    date: "2024",
    description:
      "Apoyo al equipo artístico en tareas técnicas para videojuegos, colaboración multidisciplinar y trabajo con herramientas gráficas.",
  },
  {
    title: "Interacción digital y multimedia - UOC",
    subtitle: "Universitat Oberta de Catalunya",
    date: "2024",
    description:
      "Formación centrada en diseño digital, experiencia de usuario y comunicación multimedia.",
  },
  {
    title: "Diseñador Gráfico Aprendiz - Bear & Cactus",
    subtitle: "Barcelona",
    date: "2018",
    description:
      "Apoyo en tareas de diseño gráfico y desarrollo visual en entorno profesional.",
  },
  {
    title: "Animación - EADT",
    subtitle: "Escola d'art i Disseny de Tarragona",
    date: "2018",
    description:
      "Formación en animación y fundamentos visuales aplicados al entorno digital.",
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experiencia"
      className="flex min-h-screen items-center justify-center py-24"
    >
      <Container>
        <div className="space-y-20">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-5xl font-bold leading-tight md:text-7xl">
              Experiencia
            </h2>

            <p className="text-lg leading-relaxed text-zinc-300 md:text-xl">
              Aunque mi experiencia en el sector digital es junior, he trabajado
              en entornos profesionales donde he desarrollado habilidades
              transferibles clave.
            </p>
          </div>

          <div className="relative">
            {/* Línea central */}
            <div className="absolute left-4 top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div
                  key={experience.title}
                  className="relative flex w-full"
                >
                  {/* Punto timeline */}
                  <div className="absolute left-4 top-8 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-white md:left-1/2" />

                  <ExperienceCard
                    title={experience.title}
                    subtitle={experience.subtitle}
                    date={experience.date}
                    description={experience.description}
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