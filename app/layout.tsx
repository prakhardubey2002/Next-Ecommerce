import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Header from '@/components/header/header'
import Providers from '@/components/Provider'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Next Ecommerce',
  description: 'Ecommerce Next app ',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            {children}
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
              <p>Copyright 2023 &copy; -ALL Right Reserved</p>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  )
}
