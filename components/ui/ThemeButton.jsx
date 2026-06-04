'use client'

import { Moon, Sun } from 'lucide-react'
import { useThemeToggle } from '@/hooks/useThemeToggle'

export default function ThemeButton() {
  const { mounted, isDark, themeToggle} = useThemeToggle();

  // evita hydration mismatch
  if (!mounted) {
    return <div className="h-10 w-10" />
  }


  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={themeToggle}
      className="
        flex h-8 w-8 items-center justify-center
        rounded-full
        border
        bg-(--color-card)
        border-(--color-border)
        text-(--color-foreground)
        transition-all duration-300
        hover:scale-105
      "
    >
      {isDark 
      ? <Sun strokeWidth={2} className="size-4.5" /> 
      : <Moon strokeWidth={2} className="size-4.5" />
      }
    </button>
  )
}
