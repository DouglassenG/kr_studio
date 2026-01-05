import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import { WhatsAppButton } from "@/components/whatsapp-button"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://krstudio.vercel.app"),
  title: {
    default: "KR Studio | Design de Interiores",
    template: "%s | KR Studio",
  },
  description:
    "Transformamos espaços em experiências únicas. Especialistas em design de interiores, projetos residenciais, comerciais e renderizações 3D fotorrealistas.",
  keywords: [
    "Design de Interiores",
    "Arquitetura",
    "Decoração",
    "Projetos Residenciais",
    "Renderização 3D",
    "Consultoria de Design",
    "Reforma",
    "Lajeado RS",
  ],
  authors: [{ name: "KR Studio" }],
  creator: "KR Studio",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://krstudio.vercel.app",
    title: "KR Studio | Design de Interiores",
    description:
      "Transformamos espaços em experiências únicas através do design de interiores. Conheça nossos projetos e solicite um orçamento.",
    siteName: "KR Studio",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "KR Studio - Design de Interiores",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KR Studio | Design de Interiores",
    description:
      "Transformamos espaços em experiências únicas. Especialistas em design de interiores e projetos residenciais.",
    images: ["/hero.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${geist.variable} ${geistMono.variable} ${playfair.variable} scroll-smooth overflow-x-hidden`}>
      <body className="font-sans antialiased bg-background text-foreground overflow-x-hidden">
        {children}
        <WhatsAppButton />
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}