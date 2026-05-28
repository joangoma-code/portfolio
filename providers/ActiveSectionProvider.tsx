"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { links } from "@/data/links";

/*
  CONTEXTO GLOBAL DE SCROLL

  Aquí centralizamos todo el estado relacionado con el scroll:
  - sección activa
  - visibilidad de cada sección
  - posición real del scroll
  - estado de navegación (click en links)
*/
type ActiveSectionContextType = {
  activeSection: string;
  visibleSections: Record<string, number>;  // Objeto dinámico:{ sectionId: visibilityRatio }
  scrollY: number;
  isNavigating: boolean;
  setIsNavigating: (value: boolean) => void;
};

/*
  Creamos el contexto con valores por defecto
  (se usan solo si el Provider no está disponible)
*/
const ActiveSectionContext =
  createContext<ActiveSectionContextType>({
    activeSection: "",
    visibleSections: {},
    scrollY: 0,
    isNavigating: false,
    setIsNavigating: () => {},
  });

export function ActiveSectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  // Sección actualmente más visible en pantalla
  const [activeSection, setActiveSection] =
    useState("");

  
  //  Guarda el nivel de visibilidad de cada sección (0 a 1)
  const [visibleSections, setVisibleSections] =
    useState<Record<string, number>>({});

  
  //  Posición real del scroll vertical
  const [scrollY, setScrollY] =
    useState(0);

  
  //  Indica si el usuario está navegando por click (no scroll manual)
  const [isNavigating, setIsNavigating] =
    useState(false);

  /*
    OBSERVER PRINCIPAL
    Detecta qué sección está visible en pantalla
  */
  useEffect(() => {
    const sections = links
      .map((link) =>
        document.getElementById(link.id)
      ).filter((section) => section)
      //  Elimina null/undefined si alguna sección no existe
      

    // si aún no existen las secciones, no hacemos nada
    if (!sections.length) return;

    /*
      IntersectionObserver:
      se ejecuta cuando las secciones entran/salen del viewport
    */
    const observer =
      new IntersectionObserver(
        (entries) => {
          setVisibleSections((prev) => {
            const updated = { ...prev };

            // Actualiza cuánto se ve cada sección
            entries.forEach((entry) => {
              updated[entry.target.id] =
                entry.intersectionRatio;
            });

            // Busca la sección mas visible en pantalla  
            let currentSection = "";
            let maxVisibility = 0;
            // Si la seccion tiene suficiente visibilidad, la marcamos como activa
            for ( const id in updated) {
              if (updated[id] > maxVisibility) {
                maxVisibility = updated[id];
                currentSection = id;
              }
            }
            if (maxVisibility > 0.2) setActiveSection(currentSection)
            return updated;
          });
        },
        {
          /*
            Ajusta cuando empieza a considerar una sección “activa”
            (antes de llegar al centro de pantalla)
          */
          rootMargin:
            "-20% 0px -35% 0px",
          //Puntos de activación del observer
          threshold: [
            0,
            0.1,
            0.25,
            0.5,
            0.75,
            1,
          ],
        }
      );

    // empezar a observar todas las secciones
    sections.forEach((section) =>
      observer.observe(section!)
    );

    // limpiar observer al desmontar el componente
    return () => observer.disconnect();
  }, []);

  /*
    TRACKING DE SCROLL REAL

    Esto NO depende del observer.
    Sirve para:
    - navbar hide/show
    - side navigation
    - efectos basados en scroll real
  */
  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", onScroll, {
      // Mejora el rendimiento del scroll indicando que no bloquearemos el evento
      passive: true,
    });

    return () =>
      window.removeEventListener(
        "scroll",
        onScroll
      );
  }, []);

  /*
    Memoriza el objeto para evitar re-renders innecesarios
    en los componentes que consumen este contexto
  */
  const value = useMemo(
    () => ({
      activeSection,
      visibleSections,
      scrollY,
      isNavigating,
      setIsNavigating,
    }),
    [
      activeSection,
      visibleSections,
      scrollY,
      isNavigating,
    ]
  );

  /*
    Proveedor global:
    permite que toda la app acceda al estado del scroll
  */
  return (
    <ActiveSectionContext.Provider
      value={value}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

/*
  Hook para consumir el contexto de forma simple
*/
export function useActiveSection() {
  return useContext(
    ActiveSectionContext
  );
}