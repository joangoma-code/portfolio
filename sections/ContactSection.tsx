import Container from "../components/ui/Container";

const contacts = [
  {
    label: "Email",
    href: "mailto:joangomara93@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/joangoma/",
  },
  {
    label: "GitHub",
    href: "https://github.com/joangoma-code",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="flex min-h-screen items-center justify-center py-20"
    >
      <Container>
        <div className="max-w-4xl space-y-12">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold leading-tight md:text-7xl">
              Contact me
            </h2>

            <p className="max-w-2xl text-lg leading-relaxed text-neutral-300 md:text-xl">
              Busco incorporarme como Diseñador UI/UX junior o Desarrollador
              Frontend junior en un equipo donde pueda crecer profesionalmente,
              aprender de perfiles senior y aportar una base sólida en diseño,
              desarrollo y experiencia de usuario.
            </p>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:gap-12">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-medium transition-opacity duration-300 hover:opacity-60"
              >
                {contact.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}