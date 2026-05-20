
import Link from "next/link";

import Container from "../ui/Container";
import ThemeToogle from "@/components/ThemeToogle";
import { links } from "@/data/links";


export default function Navbar() {
  return (
    <header className=
    "fixed top-0 z-50 w-full border-b border-(--color-border) bg-(--color-card) backdrop-blur-xl">
      <Container className=
      "flex items-center justify-between py-4">
        <a
          href="#inicio"
          className=
          "text-xl font-semibold tracking-tight transition-opacity hover:opacity-80"
        >
          Joan Goma
        </a>

        <nav aria-label="Navegación principal">
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className=
                  "text-sm text-(--color-foreground) transition-colors duration-300 hover:text-(--color-foreground2)"
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