import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AppMetaData } from '@config/app'
import '@rainbow-me/rainbowkit/styles.css'
import Nav from '@/components/Nav'
import Footer from '@/components/ui/footer'
const inter = Inter({ subsets: ['latin'] })
export const metadata = AppMetaData

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Decenter AI</title>
      </head>
      <body className={`${inter.className} flex flex-col justify-between min-h-screen`}>
        <Nav/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
