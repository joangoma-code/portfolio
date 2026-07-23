"use client";

import { ButtonHTMLAttributes } from "react";
import { Moon, Sun } from "lucide-react";
import { useThemeToggle } from "@/hooks/useThemeToggle";

interface ThemeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function ThemeButton({ onClick, ...props }: ThemeButtonProps) {
  const { mounted, isDark, themeToggle } = useThemeToggle();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    themeToggle();
    onClick?.(e);
  };

  // evita hydration mismatch
  if (!mounted) {
    return <div className="h-8 w-8" />;
  }

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={handleClick}
      className="
        flex h-8 w-8 items-center justify-center
        border rounded-full 
        bg-(--color-card)
        border-(--color-border)
        text-(--color-foreground)
        transition-all duration-300
        hover:scale-105
      "
    >
      {isDark ? (
        <Sun strokeWidth={2} className="size-4.5" />
      ) : (
        <Moon strokeWidth={2} className="size-4.5" />
      )}
    </button>
  );
}
