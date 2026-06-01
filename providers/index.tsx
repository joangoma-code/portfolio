'use client'

import { ThemeProvider } from 'next-themes'
import { ActiveSectionProvider } from './ActiveSectionProvider'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ActiveSectionProvider>
        {children}
      </ActiveSectionProvider>
    </ThemeProvider>
  )
}