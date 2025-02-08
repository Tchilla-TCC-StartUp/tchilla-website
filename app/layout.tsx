import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tchilla - Transforme Sonhos em Eventos Inesquecíveis",
  description:
    "Planeje, organize e execute eventos extraordinários com Tchilla. Conecte-se a fornecedores, locais e serviços de forma mágica e democrática.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://tchilla.com",
    site_name: "Tchilla",
    images: [
      {
        url: "https://tchilla.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tchilla - Transforme Sonhos em Eventos Inesquecíveis",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4kkYkastOdLpSPvzoDGfRSpdpc6q8u.png"
          type="image/png"
          sizes="32x32"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} font-poppins`}>{children}</body>
    </html>
  )
}

