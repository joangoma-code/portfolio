import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center"
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
            Frontend Developer focused on building fast, accessible,
            and user-centered web applications. I work mainly with React, Next.js,
            and TypeScript to create clean interfaces and scalable frontend architectures.
          </p>
          <p className="mt-4 text-sm opacity-60">
            Open to Frontend Developer opportunities
          </p>

          <div className="mt-10 flex gap-4 ">
            <Button href="#projects">
              View Projects
            </Button>

            <Button
              href="#contact"
              variant="secondary"
            >
              Get in touch
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}