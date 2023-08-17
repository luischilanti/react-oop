import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ProductProvider } from "@/hooks/useProductContext"

import "../styles/index.scss"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "React OOP & NextJS",
  applicationName: "React OOP & NextJS",
  description: "Proof of concept for React Object-Oriented Programming",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ProductProvider>{children}</ProductProvider>
      </body>
    </html>
  )
}
