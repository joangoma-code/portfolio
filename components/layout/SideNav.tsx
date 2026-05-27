"use client";

import Link from "next/link";
import { links } from "@/data/links";

import { Diamond, Hexagon } from "lucide-react";

import { useActiveSection } from "../../providers/ActiveSectionProvider";


export default function SideNav() {
  const { activeSection, passedHero } = useActiveSection();

  return (
    <aside
      className={`
        fixed left-6 top-1/2 z-50 hidden
        -translate-y-1/2
        lg:flex
        transition-all duration-500
        ${
          passedHero ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
        }
      `}
    >
      <nav>
        <ul className="space-y-4">
          {links.map((link) => {
            const isActive = activeSection === link.id && activeSection !== "inicio";

            return (
              <li key={link.id}>
                <Link
                  href={`#${link.id}`}
                  className="
                    group flex items-center gap-3
                  "
                >
                  <span
                    className={`
                      transition-all duration-500
                      ${isActive ? "text-(--color-border)" : "text-(--color-foreground2) opacity-80"}
                    `}
                  >
                    {isActive ? (
                      <Hexagon className="size-5 absoluteStrokeWidth={true} stroke-2" />
                    ) : (
                      <Diamond className="size-5 absoluteStrokeWidth={true} stroke-1" />
                    )}
                  </span>

                    {/* Erase ? */}
                  <span
                    className={`
                      text-sm transition-all
                      ${isActive ? "text-(--color-foreground2) opacity-0" : "opacity-0"}
                    `}
                  >
                    {link.label}
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
