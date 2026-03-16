import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0f',
}

export const metadata: Metadata = {
  title: 'Vinayak Chiluka | Staff Engineer & Cloud Architect',
  description: 'Building resilient systems at scale. Staff Engineer specializing in distributed systems, cloud architecture, and high-performance backends.',
  keywords: ['Staff Engineer', 'Cloud Architect', 'Distributed Systems', 'AWS', 'Kubernetes', 'Java', 'Python'],
  authors: [{ name: 'Vinayak Chiluka' }],
  creator: 'Vinayak Chiluka',
  metadataBase: new URL('https://vinayak-chiluka.me'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vinayak-chiluka.me',
    siteName: 'Vinayak Chiluka',
    title: 'Vinayak Chiluka | Staff Engineer & Cloud Architect',
    description: 'Building resilient systems at scale. Staff Engineer specializing in distributed systems, cloud architecture, and high-performance backends.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vinayak Chiluka - Staff Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vinayak Chiluka | Staff Engineer & Cloud Architect',
    description: 'Building resilient systems at scale. Staff Engineer specializing in distributed systems, cloud architecture, and high-performance backends.',
    images: ['/images/og-image.png'],
    creator: '@vinayakchiluka',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body className="bg-cyber-dark text-foreground font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
