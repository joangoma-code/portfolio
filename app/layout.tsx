import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { Providers } from "@/providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://joangoma.com"),

  title: {
    default: "Joan Goma | Frontend Developer",
    template: "%s | Joan Goma",
  },

  description:
    "Frontend Developer specialized in React and Next.js, focused on building fast, accessible and modern web experiences.",

  applicationName: "Joan Goma Portfolio",

  authors: [
    {
      name: "Joan Goma",
      url: "https://joangoma.com",
    },
  ],

  creator: "Joan Goma",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Joan Goma Portfolio",
    title: "Joan Goma | Frontend Developer",
    description:
      "Frontend Developer specialized in React and Next.js, focused on building fast, accessible and modern web experiences.",
  },

  robots: {
    index: true,
    follow: true,
  },
};
/*
  openGraph:
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Joan Goma | Frontend Developer",
      },
    ],

  twitter: {
    card: "summary_large_image",
    title: "Joan Goma | Frontend Developer",
    description:
      "Frontend Developer specialized in React and Next.js, focused on building fast, accessible and modern web experiences.",
    images: ["/og-image.png"],
  },
*/
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      {/*h-full antialiased md:scroll-auto*/}
      <body className={inter.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
