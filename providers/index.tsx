'use client'

import { ThemeProvider } from 'next-themes'
import { MotionConfig } from 'motion/react'
import { ActiveSectionProvider } from './ActiveSectionProvider'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
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
    </MotionConfig>
  )
}