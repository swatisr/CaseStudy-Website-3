import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import DesignSystemButton from "@/components/DesignSystemButton"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Portfolio Showcase",
  description: "Modern portfolio website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="font-sans antialiased">
        {children}
        <DesignSystemButton />
      </body>
    </html>
  )
}
