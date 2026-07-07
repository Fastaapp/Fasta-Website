import Image from 'next/image'
import Link from 'next/link'

const LINKS = {
  Services: [
    { label: 'Electrician',   href: '/services/electrician-kenya'   },
    { label: 'Plumbing',      href: '/services/plumbing-kenya'      },
    { label: 'AC & HVAC',     href: '/services/hvac-kenya'          },
    { label: 'Handyman',      href: '/services/handyman-kenya'      },
    { label: 'All Services',  href: '/services/home-services-kenya' },
  ],
  Product: [
    { label: 'How It Works',  href: '#how-it-works'  },
    { label: 'Pricing',       href: '#pricing'        },
    { label: 'Fasta Partner', href: '#fasta-partner'  },
  ],
  Support: [
    { label: 'Help Center',         href: 'mailto:support@fastaapp.co' },
    { label: 'Trust & Safety',      href: '#trust' },
    { label: 'Contact Us',          href: 'mailto:support@fastaapp.co' },
    { label: 'Privacy Policy',      href: '/privacy' },
    { label: 'Partner Terms',       href: '/partner-terms' },
  ],
}


export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      {/* Top divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-8">

        {/* ── Main Grid ─────────────────────────────────────────── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="relative w-40 h-10 sm:w-52 sm:h-14 mb-4">
              <Image src="/logo-footer.png" alt="Fasta logo" fill className="object-contain object-left" />
            </div>
            <p className="text-white/50 text-sm font-body leading-relaxed mb-6 max-w-xs">
              Kenya's fastest on-demand home services app. Proudly built for Kenya.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([category, links]) => (
            <div key={category}>
              <p className="text-white/90 font-heading font-bold text-sm mb-4">{category}</p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('/') ? (
                      <Link
                        href={link.href}
                        className="text-white/45 text-sm font-body hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-white/45 text-sm font-body hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Download Strip ─────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-t border-white/8 border-b border-white/8 mb-8">
          <p className="text-white/60 text-sm font-body">Coming soon to iOS & Android</p>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/8 rounded-xl text-white/40 text-xs font-semibold font-body cursor-default">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store — Coming soon
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/8 rounded-xl text-white/40 text-xs font-semibold font-body cursor-default">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.35.2.74.24 1.11.1l12.35-7.13-2.78-2.79-10.68 9.82zM.5 1.33C.18 1.65 0 2.17 0 2.85v18.3c0 .68.18 1.2.5 1.52l.08.08 10.24-10.24v-.24L.58 1.25.5 1.33zM20.13 10.9l-2.61-1.51-3.1 3.1 3.1 3.1 2.63-1.52c.75-.43.75-1.14-.02-1.57v-.6zM4.29.14L16.64 7.27l-2.78 2.78L3.18.23c.38-.15.78-.1 1.11.11v-.2z"/>
              </svg>
              Google Play — Coming soon
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ─────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-white/30 text-xs font-body">
          <p>© {new Date().getFullYear()} FASTA APP GLOBAL LIMITED. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/60 transition-colors">Terms of Service</Link>
            <Link href="/delete-account" className="hover:text-white/60 transition-colors">Delete Account</Link>
          </div>
        </div>

        <p className="text-center text-white/20 text-xs font-body mt-6">
          Made for Kenya
        </p>
      </div>
    </footer>
  )
}
