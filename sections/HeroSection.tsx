import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="flex min-h-screen items-center justify-center"
    >
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] opacity-70">
            Frontend Developer
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Construyo experiencias web modernas
          </h1>

          <p className="mt-6 text-lg leading-relaxed opacity-80">
            Portfolio desarrollado con Next.js,
            TypeScript y Tailwind CSS v4.
          </p>

          <div className="mt-10 flex gap-4 ">
            <Button href="#proyectos">
              Ver proyectos
            </Button>

            <Button
              href="#contacto"
              variant="secondary"
            >
              Contacto
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}