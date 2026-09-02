"use client";

import Link from "next/link";
import { Diamond, Hexagon } from "lucide-react";

import { links } from "@/data/links";
import { useActiveSection } from "@/providers/ActiveSectionProvider";
import { useNavbarVisibility } from "@/hooks/useNavbarVisibility";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function SideNav() {
  const { activeSection, scrollY } = useActiveSection();

  const { navigateToSection } = useNavbarVisibility();

  const passedHero = scrollY > 400;
  const isShortViewport = useMediaQuery("(max-height: 500px)");

  return (
    <aside
      inert={!passedHero}
      className={`
        fixed right-6 top-[50lvh] z-50 hidden
        -translate-y-1/2 md:flex
        transition-all duration-700
        ${
          passedHero ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
        }
      `}
    >
      <nav>
        <ul className={isShortViewport ? "space-y-4" : "space-y-5"}>
          {links.map((link, index) => {
            const isActive = activeSection === link.id && index !== 0;

            return (
              <li key={link.id}>
                <Link
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToSection(link.id);
                  }}
                  aria-label={link.label}
                  aria-current={isActive ? "page" : undefined}
                  className="flex items-center gap-3"
                >
                  <span
                    className={`
                      transition-all
                      ${
                        isActive
                          ? "text-(--color-primary)"
                          : "text-(--color-foreground2)"
                      }
                    `}
                  >
                    {isActive ? (
                      <Hexagon
                        strokeWidth={2}
                        className={isShortViewport ? "size-4" : "size-5"}
                      />
                    ) : (
                      <Diamond
                        strokeWidth={1}
                        className={isShortViewport ? "size-4" : "size-5"}
                      />
                    )}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
