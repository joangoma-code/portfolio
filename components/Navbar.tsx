import Container from "./ui/Container";
import ThemeToogle from "@/components/ThemeToogle";

const links = [
  {
    label: "Inicio",
    href: "#inicio",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Proyectos",
    href: "#proyectos",
  },
  {
    label: "Experiencias",
    href: "#experiencia",
  },
  {
    label: "Contacto",
    href: "#contacto",
  },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <Container className="flex items-center justify-between py-4">
        <a
          href="#inicio"
          className="text-xl font-semibold tracking-tight transition-opacity hover:opacity-80"
        >
          MiPortfolio
        </a>

        <nav aria-label="Navegación principal">
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-zinc-400 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <ThemeToogle />
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}