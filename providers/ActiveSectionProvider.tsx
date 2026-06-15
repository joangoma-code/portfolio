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

// Guardamos referencias reales del DOM sin forzar re-renders
type Sections = Record<string, HTMLElement>;

export function ActiveSectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // aquí almacenamos las secciones registradas (cache en memoria)
  const sections = useRef<Sections>({});

  // flag para saber si ya hemos sincronizado con el DOM al menos una vez
  const hasHydratedSections = useRef(false);

  const [activeSection, setActiveSection] = useState("");
  const [scrollY, setScrollY] = useState(0);

  // evita que el scroll automático (click en navbar) interfiera con el cálculo
  const [isNavigating, setIsNavigating] = useState(false);

  // registro manual de secciones (ideal si los componentes lo usan bien)
  const registerSection = useCallback((id: string, el: HTMLElement | null) => {
    if (!el) {
      // si el elemento desaparece, lo eliminamos del cache
      delete sections.current[id];
      return;
    }

    sections.current[id] = el;

    // marcamos que ya tenemos datos válidos en memoria
    hasHydratedSections.current = true;
  }, []);

  // fallback: si no se registran secciones, las sacamos directamente del DOM
  const syncFromDOM = useCallback(() => {
    const els = document.querySelectorAll<HTMLElement>("section[id]");

    els.forEach((el) => {
      sections.current[el.id] = el;
    });
  }, []);

  useEffect(() => {
    // aseguramos que siempre tengamos algo aunque no haya registerSection
    syncFromDOM();
  }, [syncFromDOM]);

  useEffect(() => {
    let ticking = false;

    // calcula qué sección está más centrada en pantalla
    const calculate = () => {
      // si estamos navegando con scroll suave, no actualizamos activeSection
      if (isNavigating) return;

      const viewportCenter = window.innerHeight / 2;

      let bestId = "";
      let bestScore = Infinity;

      // recorremos las secciones cacheadas (mucho más barato que querySelectorAll)
      const entries = sections.current;

      for (const id in entries) {
        const el = entries[id];
        if (!el) continue;

        const rect = el.getBoundingClientRect();

        // centro visual del elemento en pantalla
        const center = rect.top + rect.height / 2;

        // distancia al centro de la pantalla
        const distance = Math.abs(viewportCenter - center);

        // normalizamos para evitar sesgo por tamaño
        const score = distance / rect.height;

        // nos quedamos con la sección más alineada al centro
        if (score < bestScore) {
          bestScore = score;
          bestId = id;
        }
      }

      if (bestId) setActiveSection(bestId);
    };

    const onScroll = () => {
      // guardamos posición del scroll (navbar, etc.)
      setScrollY(window.scrollY);

      // evitamos ejecutar demasiadas veces por frame
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        calculate(); // calculo optimizado en frame sync
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // ejecutamos una vez al montar para estado inicial correcto
    calculate();

    return () => window.removeEventListener("scroll", onScroll);
  }, [isNavigating]);

  // memorizamos el contexto para evitar renders innecesarios en consumidores
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

  // error claro si se usa fuera del provider
  if (!ctx) throw new Error("useActiveSection must be used within provider");

  return ctx;
}