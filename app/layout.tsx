import type { Metadata } from "next"
import { Geist_Mono, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: {
    default: "Syngenta Warehouse Management",
    template: "%s - Syngenta Warehouse Management",
  },
  description: "Modern warehouse management system for Syngenta - Track inventory, manage orders, and monitor warehouse operations in real-time.",
  keywords: ["warehouse management", "inventory", "Syngenta", "logistics", "supply chain"],
  authors: [{ name: "Syngenta" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Syngenta Warehouse Management",
    title: "Syngenta Warehouse Management",
    description: "Modern warehouse management system for Syngenta - Track inventory, manage orders, and monitor warehouse operations in real-time.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syngenta Warehouse Management",
    description: "Modern warehouse management system for Syngenta",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
