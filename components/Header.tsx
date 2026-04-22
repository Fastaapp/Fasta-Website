'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import type { ReactNode } from 'react'

const NAV_LINKS: { label: ReactNode; key: string; href: string }[] = [
  { key: 'how',     label: 'How It Works',                          href: '/#how-it-works'  },
  { key: 'pricing', label: 'Pricing',                               href: '/#pricing'        },
  { key: 'partner', label: <><em>Fasta</em> Partner</>,             href: '/#fasta-partner'  },
]

const SERVICE_LINKS = [
  { label: 'Electrician',  href: '/services/electrician-kenya'   },
  { label: 'Plumbing',     href: '/services/plumbing-kenya'      },
  { label: 'AC & HVAC',   href: '/services/hvac-kenya'          },
  { label: 'Handyman',     href: '/services/handyman-kenya'      },
  { label: 'All Services', href: '/services/home-services-kenya' },
]

export default function Header() {
  const [scrolled,      setScrolled]      = useState(false)
  const [mobileOpen,    setMobileOpen]    = useState(false)
  const [servicesOpen,  setServicesOpen]  = useState(false)
  const [mobileServices, setMobileServices] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#2C3033]/70 backdrop-blur-xl border-b border-white/10"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-12 md:h-14">

          {/* ── Logo ──────────────────────────────────────────────── */}
          <a href="/" className="flex items-center shrink-0" aria-label="Fasta home">
            <div className="relative w-28 h-8">
              <Image src="/logo-footer.png" alt="Fasta logo" fill className="object-contain object-left" priority />
            </div>
          </a>

          {/* ── Desktop Nav ────────────────────────────────────────── */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {/* Services dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 text-sm font-semibold text-white/80 hover:text-brand transition-colors duration-200"
              >
                Services <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-[#2C3033] border border-white/10 rounded-xl shadow-xl overflow-hidden"
                  >
                    {SERVICE_LINKS.map((s) => (
                      <a
                        key={s.href}
                        href={s.href}
                        onClick={() => setServicesOpen(false)}
                        className="block px-4 py-2.5 text-sm text-white/75 hover:text-brand hover:bg-white/5 transition-colors"
                      >
                        {s.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {NAV_LINKS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-sm font-semibold text-white/80 hover:text-brand transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* ── Desktop CTAs ───────────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="/#download"
              className="px-5 py-2.5 bg-brand text-white text-sm font-semibold rounded-full hover:bg-brand-dark transition-colors shadow-lg shadow-brand/25"
              whileHover={{ scale: 1.04, boxShadow: '0 8px 30px rgba(224,85,53,0.4)' }}
              whileTap={{ scale: 0.96 }}
            >
              Download App
            </motion.a>
          </div>

          {/* ── Mobile Menu Button ─────────────────────────────────── */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors text-white hover:text-brand"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileOpen ? 'close' : 'open'}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ──────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden bg-[#2C3033] border-t border-white/10 shadow-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="px-5 py-5 flex flex-col gap-1">
              {/* Services expandable */}
              <button
                onClick={() => setMobileServices(!mobileServices)}
                className="flex items-center justify-between py-3 px-2 text-white/80 font-medium hover:text-brand transition-colors rounded-lg"
              >
                Services <ChevronDown size={14} className={`transition-transform duration-200 ${mobileServices ? 'rotate-180' : ''}`} />
              </button>
              {mobileServices && (
                <div className="pl-4 flex flex-col gap-1 mb-1">
                  {SERVICE_LINKS.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      onClick={() => setMobileOpen(false)}
                      className="py-2 px-2 text-sm text-white/60 hover:text-brand transition-colors rounded-lg"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              )}
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.key}
                  href={link.href}
                  className="py-3 px-2 text-white/80 font-medium hover:text-brand transition-colors rounded-lg"
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href="/#fasta-partner"
                  className="w-full text-center py-3 border border-white/20 text-white font-semibold rounded-full hover:border-brand hover:text-brand transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <em>Fasta</em> Partner
                </a>
                <a
                  href="/#download"
                  className="w-full text-center py-3 bg-brand text-white font-semibold rounded-full shadow-lg shadow-brand/30"
                  onClick={() => setMobileOpen(false)}
                >
                  Download App
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
