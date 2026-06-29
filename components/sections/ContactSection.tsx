import Container from "@/components/ui/Container";
import { contacts } from "@/data/contacts";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="flex min-h-screen items-center justify-center py-4"
    >
      <Container>
        <div className="max-w-4xl space-y-12">
          <div className="space-y-6">
            <h2 className="section-title">Contact</h2>

            <p className="section-content">
              I'm currently open to new Frontend Developer opportunities where I
              can contribute to meaningful products and keep learning with a
              great team.
            </p>
          </div>
          {/*Open to Frontend Developer opportunities. */}

          <div className="section-content flex flex-col gap-6 md:flex-row md:gap-12">
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
