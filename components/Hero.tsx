'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle, Zap, Wrench, Droplets, Wind, ShieldCheck } from 'lucide-react'

const PHONE_SERVICES = [
  { Icon: Droplets, label: 'Plumbing'   },
  { Icon: Zap,      label: 'Electrical' },
  { Icon: Wind,     label: 'AC & HVAC'  },
  { Icon: Wrench,   label: 'Handyman'   },
]

// ─── App store badge SVGs ─────────────────────────────────────────────────────
function AppleBadge() {
  return (
    <motion.a
      href="#download"
      aria-label="Download on the App Store"
      className="flex items-center gap-3 px-5 py-3.5 bg-dark text-white rounded-2xl hover:bg-dark-800 transition-all group"
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
    >
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
      <div className="text-left leading-tight">
        <div className="text-[10px] text-white/70 font-body">Download on the</div>
        <div className="text-sm font-heading font-bold">App Store</div>
      </div>
    </motion.a>
  )
}

function PlayBadge() {
  return (
    <motion.a
      href="#download"
      aria-label="Get it on Google Play"
      className="flex items-center gap-3 px-5 py-3.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl hover:bg-white/15 transition-all group"
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
    >
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.18 23.76c.35.2.74.24 1.11.1l12.35-7.13-2.78-2.79-10.68 9.82zM.5 1.33C.18 1.65 0 2.17 0 2.85v18.3c0 .68.18 1.2.5 1.52l.08.08 10.24-10.24v-.24L.58 1.25.5 1.33zM20.13 10.9l-2.61-1.51-3.1 3.1 3.1 3.1 2.63-1.52c.75-.43.75-1.14-.02-1.57v-.6zM4.29.14L16.64 7.27l-2.78 2.78L3.18.23c.38-.15.78-.1 1.11.11v-.2z"/>
      </svg>
      <div className="text-left leading-tight">
        <div className="text-[10px] text-white/70 font-body">Get it on</div>
        <div className="text-sm font-heading font-bold">Google Play</div>
      </div>
    </motion.a>
  )
}

// ─── Floating Badge ───────────────────────────────────────────────────────────
function FloatingBadge({
  children, delay = 0, className = ''
}: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={`absolute glass-card rounded-2xl px-3.5 py-2.5 text-white text-xs font-semibold font-body shadow-xl ${className}`}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: delay + 1.2, duration: 0.5, ease: 'easeOut' }}
      style={{ animation: `float ${6 + delay}s ease-in-out ${delay}s infinite` }}
    >
      {children}
    </motion.div>
  )
}

// ─── Phone Mockup (App UI preview) ───────────────────────────────────────────
function PhoneMockup() {
  return (
    <div className="relative w-[220px] sm:w-[260px] md:w-[290px]">
      {/* Phone frame */}
      <div className="relative w-full aspect-[9/19] bg-[#1A1C1E] rounded-[42px] p-[3px] shadow-2xl ring-1 ring-white/10 phone-glow">
        {/* Side buttons */}
        <div className="absolute -left-[3px] top-20 w-[3px] h-8 bg-[#2C2F32] rounded-l-sm" />
        <div className="absolute -left-[3px] top-32 w-[3px] h-12 bg-[#2C2F32] rounded-l-sm" />
        <div className="absolute -right-[3px] top-28 w-[3px] h-10 bg-[#2C2F32] rounded-r-sm" />

        {/* Screen */}
        <div className="w-full h-full bg-[#F2F1ED] rounded-[40px] overflow-hidden flex flex-col">
          {/* Dynamic island */}
          <div className="flex justify-center pt-3 pb-1 shrink-0">
            <div className="w-24 h-7 bg-[#1A1C1E] rounded-full" />
          </div>

          {/* App Header */}
          <div className="flex items-center justify-between px-3 py-2 bg-white border-b border-gray-100 shrink-0">
            <div className="flex items-center gap-1.5">
              <div className="relative w-5 h-5 shrink-0">
                <Image src="/logo-icon.svg" alt="Fasta" fill className="object-contain" />
              </div>
              <span className="font-heading font-black text-dark text-[11px]">Fasta</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-1 bg-dark rounded-full px-2 py-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                <span className="text-white text-[7px] font-bold">PRO</span>
              </div>
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-gray-300 to-gray-400" />
            </div>
          </div>

          {/* Greeting */}
          <div className="px-3 pt-2.5 pb-1.5 shrink-0">
            <p className="text-[7px] font-body text-dark/40 uppercase tracking-widest">Good evening</p>
            <p className="font-heading font-black text-dark text-[13px] leading-tight">Hi, Sarah</p>
            <p className="text-[8px] text-dark/50 font-body">Still need something fixed today?</p>
          </div>

          {/* Hero card */}
          <div className="mx-3 bg-white rounded-2xl p-3 mb-2 shadow-sm shrink-0">
            <div className="w-5 h-0.5 bg-brand rounded mb-1.5" />
            <p className="font-heading font-black text-dark text-[11px] leading-tight mb-0.5">Your home, fixed fast.</p>
            <p className="text-[8px] text-dark/50 font-body mb-2">Trusted pros, when you need them.</p>
            <div className="w-full bg-brand text-white rounded-xl py-2 flex items-center justify-center gap-1">
              <span className="text-[9px] font-bold font-body">Get it fixed</span>
              <span className="text-[9px]">→</span>
            </div>
            <p className="text-center text-[7px] text-dark/35 font-body mt-1">Start a request in a few taps.</p>
          </div>

          {/* Urgent help */}
          <div className="mx-3 border border-brand/40 bg-white rounded-2xl px-2.5 py-2 mb-2 flex items-center gap-2 shrink-0">
            <div className="w-0.5 h-6 bg-brand rounded shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-[8px] font-bold text-dark font-body">Need urgent help?</p>
              <p className="text-[7px] text-dark/45 font-body leading-tight">FASTA can prioritise dispatch when a fundi is available.</p>
            </div>
            <div className="shrink-0 border border-brand text-brand rounded-full px-1.5 py-0.5 text-[6px] font-bold font-body">
              Get help fast
            </div>
          </div>

          {/* Why Fasta */}
          <div className="px-3 shrink-0">
            <p className="text-[6px] font-body font-semibold text-dark/35 uppercase tracking-widest mb-1.5">Why Fasta</p>
            <div className="grid grid-cols-2 gap-1.5">
              {[
                { Icon: ShieldCheck, title: 'Vetted fundis',    sub: 'Documents reviewed before any job.' },
                { Icon: CheckCircle, title: 'You approve first', sub: 'Job only complete when you confirm it.' },
              ].map(({ Icon, title, sub }) => (
                <div key={title} className="bg-white rounded-xl p-2 shadow-sm">
                  <div className="w-5 h-5 rounded-lg bg-brand/10 flex items-center justify-center mb-1">
                    <Icon size={10} className="text-brand" />
                  </div>
                  <p className="text-[8px] font-bold text-dark font-body leading-tight">{title}</p>
                  <p className="text-[6px] text-dark/45 font-body leading-tight mt-0.5">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating badges around phone */}
      <FloatingBadge delay={0} className="hidden sm:flex -left-14 top-16 md:-left-20 !bg-[#1E2123] !border-white/10 border">
        <div className="flex items-center gap-1.5">
          <CheckCircle size={12} className="text-green-400" />
          <span>Verified Pro</span>
        </div>
      </FloatingBadge>

    </div>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}
const item = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-hero-gradient noise flex flex-col"
    >
      {/* Background decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand/10 blur-3xl" />
        <div className="absolute top-1/2 -left-48 w-80 h-80 rounded-full bg-brand/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-brand/8 blur-2xl" />
      </div>

      {/* Main content */}
      <div className="relative flex-1 max-w-7xl mx-auto w-full px-5 sm:px-8 pt-28 md:pt-36 pb-8 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">

        {/* ── Left: Copy ──────────────────────────────────────────── */}
        <motion.div
          className="flex-1 max-w-xl text-center md:text-left"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Eyebrow */}
          <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-400 text-xs font-semibold font-body mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            COMING SOON
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={item} className="font-heading font-black text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight mb-6">
            Get Things<br />
            <span className="gradient-text">Fixed. Fast.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p variants={item} className="text-white/60 text-lg md:text-xl font-body leading-relaxed mb-8 max-w-md mx-auto md:mx-0">
            Connect with verified home service professionals in minutes.
            No calls, no hassle — just tap and done.
          </motion.p>

          {/* App Store CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 mb-8">
            <AppleBadge />
            <PlayBadge />
          </motion.div>

          {/* Launch info */}
          <motion.p variants={item} className="text-white/45 text-sm font-body text-center md:text-left">
            Launching soon in Nairobi — join the waitlist.
          </motion.p>
        </motion.div>

        {/* ── Right: Phone Mockup ─────────────────────────────────── */}
        <motion.div
          className="relative shrink-0 flex items-center justify-center"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <PhoneMockup />
        </motion.div>
      </div>

    </section>
  )
}
