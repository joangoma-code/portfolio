'use client'
'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
// useEffect -> ejecutar código cuando el componente se monta

export default function ThemeToggle() {
  // resolvedTheme -> tema real aplicado (light o dark, nunca "system")
  const { resolvedTheme, setTheme } = useTheme()

  // Estado para evitar problemas de hidratación (SSR vs cliente)
  const [mounted, setMounted] = useState(false)

  // Se ejecuta solo una vez en el cliente después de montar el componente
  useEffect(() => {
    setMounted(true) // indica que ya estamos en el cliente
  }, [])
    // Evita renderizar el botón hasta que el componente esté montado
  // Esto evita errores visuales entre servidor y cliente (hydration mismatch)
  if (!mounted) {
    return <div className="h-10 w-10" />
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      type="button"
      aria-label="Toggle theme"       // Accesibilidad: describe la función del botón para lectores de pantalla
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="
        flex h-10 w-10 items-center justify-center
        rounded-full
        border
        bg-(--color-card)
        border-(--color-border)
        text-(--color-foreground)
        transition-all duration-300
        hover:scale-105
      "
    >
      {isDark ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  )
}
