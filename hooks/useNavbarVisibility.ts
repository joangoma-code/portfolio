"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useActiveSection } from "@/providers/ActiveSectionProvider";

export function useNavbarVisibility() {
  const { isNavigating, setIsNavigating } = useActiveSection();

  // controla si la navbar se muestra u oculta
  const [isVisible, setIsVisible] = useState(true);

  // última posición conocida del scroll
  const lastScrollY = useRef(0);

  // referencia para cancelar RAF si hace falta
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      // si estamos en scroll programado, ignoramos visibilidad
      if (isNavigating) return;

      const y = window.scrollY;

      // zona superior: siempre visible
      if (y < 120) {
        setIsVisible(true);
        lastScrollY.current = y;
        return;
      }

      // si el scroll casi no cambia, no hacemos nada (evita jitter)
      if (Math.abs(y - lastScrollY.current) < 5) return;

      // si subes → mostrar navbar
      // si bajas → ocultar navbar
      setIsVisible(y <= lastScrollY.current);

      lastScrollY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [isNavigating]);

  useEffect(() => {
    // este efecto solo corre cuando hay navegación suave activa
    if (!isNavigating) return;

    let stableFrames = 0;
    let lastY = window.scrollY;

    const check = () => {
      const y = window.scrollY;

      // si el scroll ya no cambia → posible fin de animación
      if (Math.abs(y - lastY) < 1) stableFrames++;
      else stableFrames = 0;

      lastY = y;

      // si se mantiene estable varios frames, asumimos que terminó el scroll
      if (stableFrames > 8) {
        setIsNavigating(false); // liberamos estado de navegación
        return;
      }

      raf.current = requestAnimationFrame(check);
    };

    raf.current = requestAnimationFrame(check);

    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [isNavigating, setIsNavigating]);

  const navigateToSection = useCallback(
    (id: string) => {
      const target = document.getElementById(id);

      // si no existe la sección, no hacemos nada
      if (!target) return;

      // activamos modo navegación para evitar conflictos con scroll tracking
      setIsNavigating(true);

      // scroll suave nativo del navegador
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    },
    [setIsNavigating],
  );

  return {
    isVisible,
    navigateToSection,
  };
}