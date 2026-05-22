import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { ColorSchemeProvider } from "../components/providers/ColorSchemeProvider";
import { ActiveSectionProvider } from "@/components/providers/ActiveSectionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Porfolio JoanGoma",
  description: "Portfolio desarrollado con Next.js, Typescript y Tailwind",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning scroll-smooth="true">
      {/*h-full antialiased md:scroll-auto*/}
      <body className={`${geistSans.variable} ${geistMono.variable}` }>
        {/* className="min-h-full flex flex-col*/}
        <ColorSchemeProvider>
          <ActiveSectionProvider>
            {children}
          </ActiveSectionProvider>
        </ColorSchemeProvider>
      </body>
    </html>
  );
}
