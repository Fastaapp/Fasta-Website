import type { Metadata, Viewport } from 'next'
import { Montserrat, Poppins } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#E05535',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://fastaapp.co'),
  title: {
    default: 'Fasta – On-Demand Home Services in Kenya',
    template: '%s | Fasta Kenya',
  },
  description:
    'Find trusted electricians, plumbers, HVAC technicians and handymen in Kenya. Book verified home service professionals in minutes with the Fasta app.',
  keywords: [
    'home services Kenya',
    'electrician Nairobi',
    'plumber Kenya',
    'fundi Kenya',
    'on demand services Kenya',
    'home repair Nairobi',
    'HVAC Kenya',
    'handyman Nairobi',
    'Fasta app',
  ],
  authors: [{ name: 'Fasta Technologies Ltd', url: 'https://fastaapp.co' }],
  creator: 'Fasta Technologies Ltd',
  publisher: 'Fasta Technologies Ltd',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: 'https://fastaapp.co',
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://fastaapp.co',
    siteName: 'Fasta Kenya',
    title: 'Fasta – On-Demand Home Services in Kenya',
    description:
      'Find trusted electricians, plumbers, HVAC technicians and handymen in Kenya. Book verified pros in minutes.',
    images: [{ url: '/api/og', width: 1200, height: 630, alt: 'Fasta – Home Services Kenya' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fastaapp',
    creator: '@fastaapp',
    title: 'Fasta – On-Demand Home Services in Kenya',
    description: 'Find trusted home service professionals in Kenya. Book in minutes.',
    images: ['/api/og'],
  },
  appLinks: {
    ios: { url: 'https://apps.apple.com/app/fasta', app_store_id: 'fasta' },
    android: { package: 'co.fastaapp', app_name: 'Fasta' },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-KE" className={`${montserrat.variable} ${poppins.variable}`}>
      <body className="antialiased font-body pb-16 md:pb-0">{children}</body>
    </html>
  )
}
