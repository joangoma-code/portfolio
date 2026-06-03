import { useEffect } from "react";

// Bloquea el scroll del body cuando el modal está abierto
// y evita el salto visual por la desaparición de la scrollbar
export const useLockBodyScroll = (active: boolean) => {
  useEffect(() => {
    // Si no está activo, no hacemos nada
    if (!active) return;

    // Guardamos el estado actual del body para restaurarlo luego
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    // Calcula el ancho de la scrollbar para evitar "saltos" en el layout
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    // Bloquea el scroll del fondo
    document.body.style.overflow = "hidden";

    // Compensa el espacio de la scrollbar si existe
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    // Al cerrar el modal, restauramos todo como estaba
    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [active]);
};