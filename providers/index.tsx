'use client'

import { ThemeProvider } from 'next-themes'
import { ActiveSectionProvider } from './ActiveSectionProvider'

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
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