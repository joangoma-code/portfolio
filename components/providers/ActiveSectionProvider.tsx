"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type ContextType = {
  activeSection: string;
  setActiveSection: (value: string) => void;
  passedHero: boolean;
};

const ActiveSectionContext =
  createContext<ContextType | null>(null);

export function ActiveSectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] =
    useState("inicio");

  const [passedHero, setPassedHero] =
    useState(false);

  /*
    Scrollspy avanzado:
    detecta qué sección está más visible
    en vez de solo saber si está en pantalla
  */
  useEffect(() => {
    const sections =
      document.querySelectorAll("section");

    /*
      Observer más preciso:
      - no usa solo "entra o no entra"
      - calcula cuánto se ve cada sección
    */
    const observer = new IntersectionObserver(
      (entries) => {
        let currentSection = "";
        let maxRatio = 0;

        /*
          Nos quedamos con la sección
          que tenga más visibilidad
        */
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            entry.intersectionRatio > maxRatio
          ) {
            maxRatio = entry.intersectionRatio;
            currentSection = entry.target.id;
          }
        });

        /*
          Solo actualizamos si hay una sección clara
        */
        if (currentSection) {
          setActiveSection(currentSection);
        }
      },
      {
        /*
          Varias thresholds = transiciones más suaves
        */
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6],

        /*
          Ajusta el “punto visual” de cambio
          (más centrado en pantalla)
        */
        rootMargin: "-35% 0px -35% 0px",
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  /*
    Detecta cuando ya pasaste el hero
    usando altura de pantalla (responsive)
  */
  useEffect(() => {
    const handleScroll = () => {
      const heroThreshold =
        window.innerHeight * 0.7;

      setPassedHero(window.scrollY > heroThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        passedHero,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  const context = useContext(ActiveSectionContext);

  if (!context) {
    throw new Error(
      "useActiveSection must be used inside provider"
    );
  }

  return context;
}