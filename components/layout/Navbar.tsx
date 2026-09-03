"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import ThemeButton from "@/components/ui/ThemeButton";

import { links } from "@/data/links";

import { useActiveSection } from "@/providers/ActiveSectionProvider";
import { useNavbarVisibility } from "@/hooks/useNavbarVisibility";
import { useThemeToggle } from "@/hooks/useThemeToggle";
import useCloseOnEscapeOrBack from "@/hooks/useCloseOnEscapeOrBack";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { useMediaQuery } from "@/hooks/useMediaQuery";

import { useState } from "react";

export default function Navbar() {
  const { activeSection } = useActiveSection();
  const isMd = useMediaQuery("(min-width: 768px)");
  const isShortViewport = useMediaQuery("(max-height: 500px)");
  const isMediumViewport = useMediaQuery(
    "(min-height: 501px) and (max-height: 750px)",
  );
  const navbarPadding = isMd
    ? isShortViewport
      ? "py-1.5"
      : isMediumViewport
        ? "py-2"
        : "py-3"
    : "py-2";
  const themeButtonSize = isShortViewport ? "sm" : "md";
  const { isVisible, navigateToSection } = useNavbarVisibility();
  const { mounted, isDark } = useThemeToggle();
  const logoSrc = mounted
    ? isDark
      ? "/logo/icon_white.svg"
      : "/logo/icon_black.svg"
    : "/logo/icon_black.svg";

  const [isOpen, setIsOpen] = useState(false);

  useCloseOnEscapeOrBack(isOpen, () => setIsOpen(false));
  useLockBodyScroll(isOpen);

  return (
    <>
      <header
        className={`
          fixed top-0 z-100 w-full
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
        <div
          className={`flex items-center justify-between ${navbarPadding} container-style`}
        >
          <Link
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              navigateToSection("home");
              setIsOpen(false);
            }}
            aria-label="Go to homepage"
            className="flex items-center gap-3 text-xl font-semibold"
          >
            <Image
              src={logoSrc}
              alt="Logo"
              width={32}
              height={32}
              className={`${!isMd || isShortViewport ? "h-7 w-7" : "h-8 w-8"}`}
              priority
            />
            <span>Joan Goma</span>
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
                      aria-current={isActive ? "page" : undefined}
                      className={`
                        text-sm transition-all
                        ${
                          isActive
                            ? "text-(--color-foreground)"
                            : "text-(--color-foreground2) opacity-85"
                        }
                        hover:text-(--color-primary) opacity-100
                      `}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}

              <li>
                <ThemeButton size={themeButtonSize} />
              </li>
            </ul>
          </nav>

          {/* MOBILE button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="md:hidden"
          >
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </header>

      {/* MOBILE */}
      {isOpen && (
        <div
          id="mobile-menu"
          aria-hidden={!isOpen}
          hidden={!isOpen}
          className={`
          fixed inset-0 z-90 md:hidden
          bg-(--color-background)/90
          backdrop-blur-2xl
          transition-all duration-500
          ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}
          `}
        >
          <nav className="flex h-full items-center justify-center md:hidden">
            <ul className=" flex flex-col items-center gap-4">
              {links.map((link) => {
                const isActive = activeSection === link.id;

                return (
                  <li key={link.id}>
                    <Link
                      href={`#${link.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsOpen(false);
                        navigateToSection(link.id);
                      }}
                      aria-current={isActive ? "page" : undefined}
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
                <ThemeButton
                  size={themeButtonSize}
                  onClick={() => setIsOpen(false)}
                />
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
