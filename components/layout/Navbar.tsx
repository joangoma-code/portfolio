"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";

import Container from "@/components/ui/Container";
import ThemeButton from "@/components/ui/ThemeButton";

import { links } from "@/data/links";

import { useActiveSection } from "@/providers/ActiveSectionProvider";
import { useNavbarVisibility } from "@/hooks/useNavbarVisibility";

import { useState } from "react";

export default function Navbar() {
  const { activeSection } = useActiveSection();

  const {isVisible, navigateToSection } = useNavbarVisibility();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header
        className={`
          fixed top-0 z-50 w-full
          border-b border-(--color-border)/30
          bg-(--color-card)/70
          backdrop-blur-xl
          transition-all duration-700
          ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }
        `}
      >
        <Container className="flex items-center justify-between py-4">
          <Link href="#home" className="text-xl font-semibold">
            Joan Goma
          </Link>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-6">
              {links.map((link) => {
                const isActive = activeSection === link.id;

                return (
                  <li key={link.id}>
                    <Link
                      href={`#${link.id}`}
                      // bloquea scroll logic mientras navegamos
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToSection(link.id);
                      }}
                      className={`
                        text-sm transition-all
                        ${
                          isActive
                            ? "text-(--color-foreground)"
                            : "text-(--color-foreground2) opacity-80"
                        }
                        hover:opacity-60
                      `}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}

              <li>
                <ThemeButton />
              </li>
            </ul>
          </nav>

          {/* MOBILE button */}
          <button onClick={() => {console.log("click"); setIsOpen(!isOpen); }} className="md:hidden">
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </Container>
      </header>

      {/* MOBILE */}
      {isOpen && (
        <div
        className={`
          fixed inset-0 z-40 md:hidden
          bg-(--color-background)/90
          backdrop-blur-2xl
          transition-all duration-500
          ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}
          `}
          >
        <nav className="flex h-full items-center justify-center">
          <ul className=" flex flex-col items-center gap-4">
            {links.map((link) => {
              const isActive = activeSection === link.id;
              
              return (
                <li key={link.id}>
                  <Link
                    href={`#${link.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`
                      flex text-3xl
                      ${isActive ? "text-(--color-primary)" : ""}
                      `}
                      >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="mt-4">
              <ThemeButton />
            </li>
          </ul>
        </nav>
      </div>
          )}
    </>
  );
}
