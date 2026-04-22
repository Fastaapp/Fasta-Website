import type { Metadata, Viewport } from 'next'
import { Montserrat, Poppins } from 'next/font/google'
import './globals.css'

// ─── Fasta Brand Typography ───────────────────────────────────────────────────
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
  title: 'Fasta – Home Services, Fast.',
  description:
    'Connect with verified home service professionals in minutes. Electricians, plumbers, handymen and more — all on the Fasta app.',
  keywords: 'home services Kenya, plumber Nairobi, electrician on demand, Fasta app, home repair',
  openGraph: {
    title: 'Fasta – Home Services, Fast.',
    description: "Kenya's #1 on-demand home services app. Trusted pros. Instant booking.",
    type: 'website',
    locale: 'en_KE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fasta – Home Services, Fast.',
    description: "Kenya's #1 on-demand home services app.",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <body className="antialiased font-body">{children}</body>
    </html>
  )
}
