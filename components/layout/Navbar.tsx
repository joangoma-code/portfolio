"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import {
  Menu,
  X,
} from "lucide-react";

import Container from "../ui/Container";

import ThemeToogle from "@/components/ui/ThemeToogle";

import { links } from "@/data/links";

import { useActiveSection } from "../../providers/ActiveSectionProvider";

export default function Navbar() {
  const { activeSection } =
    useActiveSection();

  const [isOpen, setIsOpen] =
    useState(false);

  const [isVisible, setIsVisible] =
    useState(true);

  const [lastScrollY, setLastScrollY] =
    useState(0);

  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {

      if(isNavigating) return

      const currentScrollY = window.scrollY;

      // evita micro-scroll flickering
      if (
        Math.abs(
          currentScrollY - lastScrollY
        ) < 10
      )
        return;

      // siempre visible arriba del todo
      if (currentScrollY < 120) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      /*
        bajar = esconder
        subir = mostrar
      */

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, [lastScrollY]);

  return (
    <>
      {/* NAVBAR */}

      <header
        className={`
          fixed top-0 z-50 w-full
          border-b border-(--color-border)/30
          bg-(--color-card)/70
          backdrop-blur-xl

          transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]

          ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }
        `}
      >
        <Container className="flex items-center justify-between py-4">
          {/* LOGO */}

          <Link
            href="#inicio"
            className="
              text-xl font-semibold tracking-tight
              transition-opacity duration-300
              hover:opacity-60
            "
          >
            Joan Goma
          </Link>

          {/* DESKTOP NAV */}

          <nav
            aria-label="Navegación principal"
            className="hidden md:block"
          >
            <ul className="flex items-center gap-6">
              {links.map((link) => {
                const isActive =
                  activeSection ===
                  link.id;

                return (
                  <li key={link.id}>
                    <Link
                      href={`#${link.id}`}
                      className={`
                        text-sm transition-all duration-300

                        ${
                          isActive
                            ? "text-(--color-foreground) opacity-100"
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
                <ThemeToogle />
              </li>
            </ul>
          </nav>

          {/* MOBILE BUTTON */}

          <button
            onClick={() =>
              setIsOpen(!isOpen)
            }
            className="
              flex md:hidden
              text-(--color-foreground)

              transition-transform duration-300
              hover:scale-110
            "
          >
            {isOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </button>
        </Container>
      </header>

      {/* MOBILE MENU */}

      <div
        className={`
          fixed inset-0 z-40
          bg-(--color-background)/90
          backdrop-blur-2xl

          transition-all duration-500
          ease-[cubic-bezier(0.16,1,0.3,1)]

          md:hidden

          ${
            isOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      >
        <nav className="flex h-full items-center justify-center">
          <ul className="space-y-10 text-center">
            {links.map((link) => {
              const isActive =
                activeSection ===
                link.id;

              return (
                <li key={link.id}>
                  <Link
                    href={`#${link.id}`}
                    onClick={() =>
                      setIsOpen(false)
                    }
                    className={`
                      text-3xl font-medium
                      transition-all duration-300

                      ${
                        isActive
                          ? "text-(--color-primary)"
                          : "text-(--color-foreground)"
                      }

                      hover:opacity-60
                    `}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}

            <li className="flex justify-center pt-6">
              <ThemeToogle />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}