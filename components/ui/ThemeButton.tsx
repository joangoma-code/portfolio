"use client";

import { ButtonHTMLAttributes } from "react";
import { Moon, Sun } from "lucide-react";
import { useThemeToggle } from "@/hooks/useThemeToggle";

type ThemeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md";
};

export default function ThemeButton({
  onClick,
  size = "md",
  ...props
}: ThemeButtonProps) {
  const { mounted, isDark, themeToggle } = useThemeToggle();
  const sizeStyles = size === "sm" ? "h-7 w-7" : "h-8 w-8";
  const iconSize = size === "sm" ? "size-4" : "size-4.5";

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    themeToggle();
    onClick?.(e);
  };

  // evita hydration mismatch
  if (!mounted) {
    return <div className={sizeStyles} />;
  }

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={handleClick}
      className={`
        flex ${sizeStyles} items-center justify-center
        border rounded-full 
        bg-(--color-card)
        border-(--color-border)
        text-(--color-foreground)
        transition-all duration-300
        hover:scale-105
      `}
      {...props}
    >
      {isDark ? (
        <Sun strokeWidth={2} className={iconSize} />
      ) : (
        <Moon strokeWidth={2} className={iconSize} />
      )}
    </button>
  );
}
