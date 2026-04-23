import Image from 'next/image'

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
    { label: 'Help Center',   href: '#' },
    { label: 'Trust & Safety',href: '#trust' },
    { label: 'Contact Us',    href: '#' },
    { label: 'Privacy Policy',href: '#' },
  ],
}

const SOCIAL = [
  {
    label: 'Twitter / X',
    href: '#',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
]

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
              Kenya's fastest on-demand home services app. Connecting households with trusted professionals since 2024.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center text-white/50 hover:bg-brand hover:text-white transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([category, links]) => (
            <div key={category}>
              <p className="text-white/90 font-heading font-bold text-sm mb-4">{category}</p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/45 text-sm font-body hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Download Strip ─────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-t border-white/8 border-b border-white/8 mb-8">
          <p className="text-white/60 text-sm font-body">Get the app today</p>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-xl text-white text-xs font-semibold font-body hover:bg-white/15 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 bg-brand rounded-xl text-white text-xs font-semibold font-body hover:bg-brand-dark transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.35.2.74.24 1.11.1l12.35-7.13-2.78-2.79-10.68 9.82zM.5 1.33C.18 1.65 0 2.17 0 2.85v18.3c0 .68.18 1.2.5 1.52l.08.08 10.24-10.24v-.24L.58 1.25.5 1.33zM20.13 10.9l-2.61-1.51-3.1 3.1 3.1 3.1 2.63-1.52c.75-.43.75-1.14-.02-1.57v-.6zM4.29.14L16.64 7.27l-2.78 2.78L3.18.23c.38-.15.78-.1 1.11.11v-.2z"/>
              </svg>
              Google Play
            </a>
          </div>
        </div>

        {/* ── Bottom Bar ─────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-white/30 text-xs font-body">
          <p>© {new Date().getFullYear()} <em>Fasta</em> Technologies Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white/60 transition-colors">Cookie Policy</a>
          </div>
        </div>

        <p className="text-center text-white/20 text-xs font-body mt-6">
          Made for Kenya
        </p>
      </div>
    </footer>
  )
}
