"use client";

import Link from "next/link";
import { Diamond, Hexagon } from "lucide-react";

import { links } from "@/data/links";
import { useActiveSection } from "@/providers/ActiveSectionProvider";


export default function SideNav() {
  const {
    activeSection,
    scrollY,
  } = useActiveSection();

  const passedHero = scrollY > 400;

  return (
    <aside
      className={`
        fixed right-6 top-1/2 z-50 hidden
        -translate-y-1/2 lg:flex
        transition-all duration-700
        ${
          passedHero
            ? "translate-x-0 opacity-100"
            : "-translate-x-10 opacity-0"
        }
      `}
    >
      <nav>
        <ul className="space-y-5">
          {links.map((link) => {
            const isActive =
              activeSection === link.id && activeSection !== "inicio" ;

            return (
              <li key={link.id}>
                <Link
                  href={`#${link.id}`}
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
                      <Hexagon className="size-5 stroke-2" />
                    ) : (
                      <Diamond className="size-5 stroke-1" />
                    )}
                  </span>
                  {/* 
                  <span
                    className={`
                      text-sm transition-all

                      ${
                        isActive
                          ? "opacity-100"
                          : "opacity-0 -translate-x-2"
                      }
                    `}
                  >
                    {link.label}
                  </span>
                  */}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}