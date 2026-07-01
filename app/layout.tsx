import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { Providers } from "@/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joan Goma | Frontend Developer",
  description: "Frontend developer focused on building fast, accessible and modern web experiences with Next.js and React.",
  metadataBase: new URL("https://joangoma.com"),

  openGraph: {
    title: "Joan Goma | Frontend Developer",
    description: "Modern frontend developer portfolio",
    url: "https://joangoma.com",
    siteName: "Joan Goma Portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      {/*h-full antialiased md:scroll-auto*/}
      <body className={`${geistSans.variable} ${geistMono.variable}` }>
        {/* className="min-h-full flex flex-col*/}
          <Providers>
            {children}
          </Providers>
      </body>
    </html>
  );
}
