import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Chattada Sangam - ID-Verified Matchmaking for Srivaishnava Community',
  description: 'The only ID-verified platform for the Chattada Srivaishnava community. Find your match with 100% verified profiles, lineage tree viewing, and secure connections.',
  keywords: ['Chattada Sangam', 'Srivaishnava', 'matchmaking', 'matrimony', 'ID verified', 'Gothram', 'community', 'Telugu matrimony'],
  authors: [{ name: 'Chattada Sangam' }],
  creator: 'Chattada Sangam',
  publisher: 'Chattada Sangam',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://chattadasangam.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
      'te': '/te',
    },
  },
  openGraph: {
    title: 'Chattada Sangam - ID-Verified Matchmaking for Srivaishnava Community',
    description: 'The only ID-verified platform for the Chattada Srivaishnava community. Find your match with 100% verified profiles, lineage tree viewing, and secure connections.',
    url: 'https://chattadasangam.com',
    siteName: 'Chattada Sangam',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Chattada Sangam - Lineage Meets Love',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chattada Sangam - ID-Verified Matchmaking',
    description: 'The only ID-verified platform for the Chattada Srivaishnava community.',
    images: ['/og-image.jpg'],
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
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  category: 'Matrimony',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

