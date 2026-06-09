import Container from "@/components/ui/Container";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="flex min-h-screen items-center justify-center py-4"
    >
      <Container>
        <div className="max-w-4xl space-y-12">
          <div className="space-y-6">
            <h2 className="section-title">About me</h2>

            <p className="section-text">
              I'm Joan, a designer and developer born in 1993 in Tarragona,
              focused on creating interactive and visually engaging digital
              experiences across web and game-inspired interfaces.
            </p>
            <p className="section-text">
              I enjoy bringing ideas to life through clean, functional
              interfaces and thoughtful interactions. I like working on products
              where details matter and where design and development come
              together naturally. Right now, I'm looking for a Frontend
              Developer role where I can contribute to real projects, keep
              learning, and grow within a team environment.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
