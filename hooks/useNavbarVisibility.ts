"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { useActiveSection } from "@/providers/ActiveSectionProvider";

/*
  🧠 ESTE HOOK SOLO CONTROLA:
  - mostrar / ocultar navbar
  - ignorar scroll cuando hay navegación por click
*/

export function useNavbarVisibility() {
  const {
    isNavigating,
  } = useActiveSection();

  const [isVisible, setIsVisible] =
    useState(true);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      // si estamos navegando por click, ignorar scroll
      if (isNavigating) return;

      // evitar micro cambios
      if (Math.abs(y - lastScrollY.current) < 10)
        return;

      // arriba del todo siempre visible
      if (y < 120) {
        setIsVisible(true);
        lastScrollY.current = y;
        return;
      }

      // scroll down esconder
      if (y > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = y;
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener(
        "scroll",
        onScroll
      );
  }, [isNavigating]);

  return isVisible;
}