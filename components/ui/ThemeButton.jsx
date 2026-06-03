'use client'

import { Moon, Sun } from 'lucide-react'
import { useThemeToggle } from '@/hooks/useThemeToggle'

export default function ThemeButton() {
  const { mounted, isDark, toggleTheme} = useThemeToggle();

  // evita hydration mismatch
  if (!mounted) {
    return <div className="h-10 w-10" />
  }


  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={toggleTheme}
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
        <Sun strokeWidth={2} className="size-5" />
      ) : (
        <Moon strokeWidth={2} className="size-5" />
      )}
    </button>
  )
}
