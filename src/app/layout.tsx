import type React from 'react'
import { type Metadata, type Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster } from '@/components/ui/sonner'
import { Toaster as ToasterProvider } from '@/components/ui/toaster'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { cn } from '@/lib/utils'
import './styles/globals.css'

export const metadata: Metadata = {
  title: 'Portfolio | Ryan Milne',
  description: 'My personal portfolio: showcasing my work and skills.',
  authors: [{ name: 'Ryan Milne' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Portfolio | Ryan Milne',
    description: 'My personal portfolio: showcasing my work and skills.',
    url: 'https://ryanmilne.com',
    images: [
      {
        url: 'https://ryanmilne.com/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Ryan Milne',
        type: 'image/png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@ryanmilne',
    title: 'Portfolio | Ryan Milne',
    description: 'My personal portfolio: showcasing my work and skills.',
    images: ['https://ryanmilne.com/opengraph-image.png']
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' }
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }]
  },
  manifest: '/site.webmanifest'
}

export const viewport: Viewport = {
  themeColor: '#000000'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

  return (
    <html
      lang="en"
      className={cn(
        'min-h-screen bg-background font-sans antialiased overflow-x-clip overflow-y-scroll',
        GeistSans.variable,
        GeistMono.variable
      )}
      suppressHydrationWarning
    >
      <body className='w-full overflow-x-clip'>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <main className='flex flex-col items-center justify-center min-h-screen pt-24 pb-8'>
              <Header />
              {children}
              <Footer />
            </main>
          </TooltipProvider>
          <Toaster />
          <ToasterProvider />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
