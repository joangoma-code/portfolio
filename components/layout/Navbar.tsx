'use client'

import Link from "next/link";

import Container from "../ui/Container";
import ThemeToogle from "@/components/ThemeToogle";
import { links } from "@/data/links";

import { useActiveSection } from "../providers/ActiveSectionProvider";


export default function Navbar() {
  const { activeSection, passedHero } = useActiveSection();
  
  return (
    <header className=
      "fixed top-0 z-50 w-full border-b border-(--color-border) bg-(--color-card) backdrop-blur-xl"
    >
      {/* 
        ${
          passedHero ? "translate-x-10 opacity-0" : "translate-x-0 opacity-100"
        }
      */}
      <Container className=
      "flex items-center justify-between py-4">
        <Link
          href="#inicio"
          className=
          "text-xl font-semibold tracking-tight transition-opacity hover:opacity-60"
        >
          Joan Goma
        </Link>

        <nav aria-label="Navegación principal">
          <ul className="flex items-center gap-6">
            {links.map((link) => {
              const isActive = activeSection === link.id;
              return(
              <li key={link.id}>
                {/* DELETE ??? */}
                <Link
                  href={`#${link.id}`}
                  className={`
                    text-sm transition-all duration-300 
                    ${isActive ? "text-(--color-foreground) opacity-100" : "text-(--color-foreground2) opacity-90"}
                    hover:opacity-60
                    `}
                >
                  {link.label}
                </Link>
              </li>
              )
            })}
            <li>
              <ThemeToogle />
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}