import Container from "@/components/ui/Container";

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
  {
    label: "Behance",
    href: "https://www.behance.net/joangoma",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="flex min-h-screen items-center justify-center py-4"
    >
      <Container>
        <div className="max-w-4xl space-y-12">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold leading-tight md:text-7xl">
              Contact
            </h2>

            <p className="max-w-2xl text-lg leading-relaxed opacity-80 md:text-xl">
              I'm currently open to Frontend Developer opportunities where I can
              contribute to a product-focused team, collaborate with experienced
              developers, and continue growing my skills in modern web
              development, UX/UI, and frontend architecture.
            </p>
          </div>
          {/*Open to Frontend Developer opportunities. */}

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