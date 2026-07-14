"use client";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SvgComponent from "../layout/mountains/MountainBack";

export default function HomeSection() {
  return (
    <section
      id="home"
      className=" relative flex min-h-dvh items-center justify-center bg-linear-to-t from-(--color-background4) to-(--color-background5)"
    >
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] opacity-70">
            Frontend Developer · React · Next.js · TypeScript
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Joan Goma
          </h1>

          <p className="mt-6 max-w-prose text-lg leading-relaxed opacity-80">
            Focused on building simple, fast, and thoughtful web experiences. I
            enjoy turning ideas into real products through code.
          </p>
          <p className="mt-4 text-sm opacity-60">
            Open to Frontend Developer opportunities.
          </p>

          <div className="section-content mt-10 flex gap-4">
            <Button href="#projects">View Projects</Button>

            <Button href="#contact" variant="secondary">
              Get in touch
            </Button>
          </div>
        </div>
      </Container>
      <div className="absolute inset-x-0 bottom-0 w-full pointer-events-none">
        <SvgComponent className="absolute bottom-0 left-0 w-full z-10" />
      </div>
    </section>
  );
}
