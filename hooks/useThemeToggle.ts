"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// Maneja la lógica del theme y evita problemas de hidratación
export function useThemeToggle() {
  // resolvedTheme -> tema real aplicado (light o dark, nunca "system")
  const { resolvedTheme, setTheme } = useTheme()

  // Evita mismatch entre SSR y cliente
  const [mounted, setMounted] = useState(false);

  // Se ejecuta solo una vez en el cliente después de montar el componente
  useEffect(() => {
    setMounted(true);
  }, []);

  // Indica si el tema activo es oscuro
  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return {
    mounted,
    isDark,
    toggleTheme,
  };
}