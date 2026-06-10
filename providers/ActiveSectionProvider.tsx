"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";

type Ctx = {
  activeSection: string;
  scrollY: number;
  isNavigating: boolean;
  setIsNavigating: (v: boolean) => void;
  registerSection: (id: string, el: HTMLElement | null) => void;
};

const ActiveSectionContext = createContext<Ctx | null>(null);

type Sections = Record<string, HTMLElement>;

export function ActiveSectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // aquí guardamos las secciones sin forzar renders
  // es solo memoria interna del provider
  const sections = useRef<Sections>({});

  const [activeSection, setActiveSection] = useState("");
  const [scrollY, setScrollY] = useState(0);

  // cuando es true, no actualizamos el activeSection
  // lo usamos para evitar que el scroll "automático" pise la navbar
  const [isNavigating, setIsNavigating] = useState(false);

  // guardamos cada sección cuando se monta
  // no queremos re-renders aquí, solo referencia
  const registerSection = useCallback((id: string, el: HTMLElement | null) => {
    if (!el) return;
    sections.current[id] = el;
  }, []);

  useEffect(() => {
    let ticking = false;

    const calculate = () => {
      // si estamos en scroll automático (click en navbar), no actualizamos nada
      if (isNavigating) return;

      // cogemos todas las secciones reales del DOM
      const sections = document.querySelectorAll<HTMLElement>("section[id]");

      const viewportCenter = window.innerHeight / 2;

      let bestId = "";
      let bestScore = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        // centro de la sección en pantalla
        const elementCenter = rect.top + rect.height / 2;

        // distancia entre el centro de la pantalla y el de la sección
        const distance = Math.abs(viewportCenter - elementCenter);

        // normalizamos por altura para que las secciones pequeñas no pierdan siempre
        const normalized = distance / rect.height;

        // nos quedamos con la sección más “alineada” al centro
        if (normalized < bestScore) {
          bestScore = normalized;
          bestId = section.id;
        }
      });

      // si encontramos una sección válida, la marcamos como activa
      if (bestId) {
        setActiveSection(bestId);
      }
    };

    // manejamos el scroll sin saturar el browser
    const onScroll = () => {
      setScrollY(window.scrollY);

      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        calculate();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, {
      passive: true, // no bloquea el scroll (mejor rendimiento)
    });

    // calculamos una vez al entrar para tener estado inicial correcto
    calculate();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [isNavigating]);

  // evitamos renders innecesarios en los componentes que consumen esto
  const value = useMemo(
    () => ({
      activeSection,
      scrollY,
      isNavigating,
      setIsNavigating,
      registerSection,
    }),
    [activeSection, scrollY, isNavigating, registerSection],
  );

  return (
    <ActiveSectionContext.Provider value={value}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  const ctx = useContext(ActiveSectionContext);

  if (!ctx) {
    throw new Error("useActiveSection must be used within provider");
  }

  return ctx;
}
