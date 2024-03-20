import './globals.css'
import { Inter } from 'next/font/google'
import { AppMetaData } from '@config/app'
import '@rainbow-me/rainbowkit/styles.css'
const inter = Inter({ subsets: ['latin'] })
export const metadata = AppMetaData

import type { Viewport } from 'next'

//* This view port settings is based on next js 14
export const viewport: Viewport = {
  themeColor: '#fff',
}

import { Toaster, toast } from 'sonner'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Decenter AI</title>
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>

        {children}

      </body>
    </html>
  )
}
