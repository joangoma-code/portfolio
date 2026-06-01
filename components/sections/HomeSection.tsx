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
            Frontend Developer
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Joan Goma
          </h1>

          <p className="mt-6 text-lg leading-relaxed opacity-80">
            Construyo experiencias web modernas
          </p>

          <div className="mt-10 flex gap-4 ">
            <Button href="#projects">
              Ver proyectos
            </Button>

            <Button
              href="#contact"
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