'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, CheckCircle, Zap, Wrench, Droplets, Wind } from 'lucide-react'

const APP_SERVICES = [
  { Icon: Droplets, label: 'Plumbing',   hot: false },
  { Icon: Zap,      label: 'Electrical', hot: true  },
  { Icon: Wind,     label: 'AC & HVAC',  hot: false },
  { Icon: Wrench,   label: 'Handyman',   hot: false },
]

// ─── Screen content components ────────────────────────────────────────────────

function HomeScreen() {
  return (
    <div className="w-full h-full flex flex-col bg-[#F7F7F8]">
      <div className="bg-brand px-4 pt-4 pb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-white/60 text-[10px] font-body">Good afternoon</p>
            <p className="text-white font-heading font-bold text-sm">Sarah K.</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">SK</span>
          </div>
        </div>
        <div className="bg-white/20 rounded-xl px-3 py-2 flex items-center gap-2">
          <svg className="w-3 h-3 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M6.5 6.5a7.5 7.5 0 1010.65 10.65z" />
          </svg>
          <span className="text-white/60 text-[10px] font-body">Search for a service...</span>
        </div>
      </div>

      <div className="px-4 -mt-4 flex-1">
        <div className="grid grid-cols-2 gap-2 mb-3">
          {APP_SERVICES.map(({ Icon, label, hot }) => (
            <div key={label} className={`relative bg-white rounded-xl p-2.5 flex flex-col items-center gap-1 shadow-sm border ${hot ? 'border-brand/30' : 'border-transparent'}`}>
              {hot && <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand rounded-full" />}
              <Icon size={14} className="text-brand" />
              <span className="text-[8px] text-dark/60 font-body text-center">{label}</span>
            </div>
          ))}
        </div>

        <div className="bg-dark rounded-2xl p-3">
          <p className="text-white/50 text-[9px] font-body uppercase tracking-wider mb-2">Quick Rebook</p>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-brand flex items-center justify-center shrink-0">
              <span className="text-white text-[9px] font-bold">JM</span>
            </div>
            <div>
              <p className="text-white text-[10px] font-semibold">James · Plumber</p>
              <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} size={7} className="text-yellow-400 fill-yellow-400" />)}</div>
            </div>
            <button className="ml-auto px-2.5 py-1 bg-brand text-white text-[8px] font-bold rounded-lg font-body">
              Rebook
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function TrackingScreen() {
  return (
    <div className="w-full h-full flex flex-col bg-[#F7F7F8]">
      <div className="bg-dark px-4 pt-4 pb-3">
        <p className="text-white/50 text-[9px] font-body uppercase tracking-wider">Booking #FA-2847</p>
        <p className="text-white font-heading font-bold text-sm">Electrical Repair</p>
      </div>

      {/* Fake map */}
      <div className="flex-1 relative bg-gradient-to-br from-green-50 to-blue-50 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div key={`h${i}`} className="absolute w-full border-t border-gray-200/60" style={{ top: `${16.67 * (i + 1)}%` }} />
        ))}
        {[...Array(6)].map((_, i) => (
          <div key={`v${i}`} className="absolute h-full border-l border-gray-200/60" style={{ left: `${16.67 * (i + 1)}%` }} />
        ))}
        {/* Roads */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="none">
          <path d="M 0 100 L 200 100" stroke="#D1D5DB" strokeWidth="4" fill="none" />
          <path d="M 100 0 L 100 200" stroke="#D1D5DB" strokeWidth="4" fill="none" />
          <path d="M 50 80 Q 100 60 150 80" stroke="#E5E7EB" strokeWidth="3" fill="none" />
          <path d="M 40 130 Q 100 140 160 120" stroke="#E5E7EB" strokeWidth="3" fill="none" />
          {/* Route */}
          <path d="M 55 155 Q 80 110 130 65" stroke="#E05535" strokeWidth="3" fill="none" strokeDasharray="6 3" />
        </svg>
        {/* Home pin */}
        <div className="absolute right-8 top-10 flex flex-col items-center">
          <div className="w-8 h-8 bg-dark rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
          </div>
        </div>
        {/* Pro (animated) */}
        <motion.div
          className="absolute left-8 bottom-12 flex flex-col items-center"
          animate={{ x: [0, 24, 50], y: [0, -20, -45] }}
          transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
        >
          <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center shadow-lg ring-2 ring-white">
            <span className="text-white text-xs font-bold">K</span>
          </div>
          <div className="w-2 h-2 bg-brand rounded-full mt-0.5" />
        </motion.div>
      </div>

      {/* Bottom card */}
      <div className="bg-white p-4 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center shrink-0">
            <span className="text-white text-xs font-bold">KO</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-1.5">
              <p className="text-dark font-semibold text-xs">Kevin Omondi</p>
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            </div>
            <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} size={8} className="text-yellow-400 fill-yellow-400" />)}</div>
          </div>
          <div className="text-right">
            <p className="text-brand font-bold text-sm">~6 min</p>
            <p className="text-dark/40 text-[9px] font-body">arriving</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function CompleteScreen() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#F7F7F8] p-5">
      <motion.div
        className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-4"
        animate={{ scale: [0.95, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      >
        <CheckCircle size={40} className="text-green-500" />
      </motion.div>

      <p className="font-heading font-black text-dark text-xl mb-1">All done!</p>
      <p className="text-dark/50 text-xs font-body mb-5 text-center">Electrical repair completed successfully</p>

      <div className="w-full bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-4">
        {[
          ['Service',  'Electrical Repair'],
          ['Pro',      'Kevin Omondi'],
          ['Duration', '45 mins'],
          ['Total',    'KSh 1,200'],
        ].map(([label, value]) => (
          <div key={label} className="flex justify-between py-1.5 border-b border-gray-50 last:border-0">
            <span className="text-dark/40 text-[10px] font-body">{label}</span>
            <span className={`text-[10px] font-semibold font-body ${label === 'Total' ? 'text-brand' : 'text-dark'}`}>{value}</span>
          </div>
        ))}
      </div>

      {/* Rate */}
      <p className="text-dark/60 text-[10px] font-body mb-2">How was Kevin?</p>
      <div className="flex gap-2 mb-4">
        {[...Array(5)].map((_, i) => (
          <motion.div key={i} whileHover={{ scale: 1.3 }}>
            <Star size={22} className="text-yellow-400 fill-yellow-400 cursor-pointer" />
          </motion.div>
        ))}
      </div>

      <button className="w-full py-3 bg-brand text-white text-xs font-bold rounded-xl font-body shadow-lg shadow-brand/30">
        Pay via M-Pesa · KSh 1,200
      </button>
    </div>
  )
}

const SCREENS = [
  { title: 'Browse & Book', subtitle: 'Pick a service in seconds', component: HomeScreen },
  { title: 'Live Tracking', subtitle: 'Watch your pro arrive', component: TrackingScreen },
  { title: 'Job Complete', subtitle: 'Pay & rate instantly', component: CompleteScreen },
]

// ─── App Preview ─────────────────────────────────────────────────────────────
export default function AppPreview() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + SCREENS.length) % SCREENS.length)
  const next = () => setCurrent((c) => (c + 1) % SCREENS.length)

  const Screen = SCREENS[current].component

  return (
    <section id="app-preview" className="py-24 md:py-32 bg-dark-gradient relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(224,85,53,0.12),transparent_70%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">

        {/* ── Section Header ────────────────────────────────────── */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-brand text-sm font-semibold font-body uppercase tracking-widest mb-4">
            The App
          </span>
          <h2 className="font-heading font-black text-white text-4xl md:text-5xl tracking-tight leading-tight mb-4">
            Designed for <span className="gradient-text">Simplicity</span>
          </h2>
          <p className="text-white/50 text-lg font-body max-w-md mx-auto">
            Clean, fast, intuitive. Book a professional in less time than it takes to make a phone call.
          </p>
        </motion.div>

        {/* ── Phone + Controls ──────────────────────────────────── */}
        <div className="flex flex-col items-center gap-10">

          {/* Screen label */}
          <div className="flex items-center gap-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full glass-card text-white flex items-center justify-center hover:bg-white/15 transition-colors"
              aria-label="Previous screen"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="text-center w-32 sm:w-40">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                >
                  <p className="text-white font-heading font-bold text-base">{SCREENS[current].title}</p>
                  <p className="text-white/50 text-sm font-body">{SCREENS[current].subtitle}</p>
                </motion.div>
              </AnimatePresence>
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full glass-card text-white flex items-center justify-center hover:bg-white/15 transition-colors"
              aria-label="Next screen"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Phone mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-[220px] sm:w-[260px] md:w-[300px] phone-glow">
              {/* Phone frame */}
              <div className="relative w-full aspect-[9/19] bg-[#1A1C1E] rounded-[44px] p-[3px] shadow-2xl ring-1 ring-white/10">
                <div className="absolute -left-[3px] top-20 w-[3px] h-8 bg-[#2C2F32] rounded-l-sm" />
                <div className="absolute -left-[3px] top-32 w-[3px] h-12 bg-[#2C2F32] rounded-l-sm" />
                <div className="absolute -right-[3px] top-28 w-[3px] h-10 bg-[#2C2F32] rounded-r-sm" />

                <div className="w-full h-full bg-[#F7F7F8] rounded-[42px] overflow-hidden flex flex-col">
                  {/* Dynamic island */}
                  <div className="flex justify-center pt-3 shrink-0">
                    <div className="w-24 h-7 bg-[#1A1C1E] rounded-full" />
                  </div>
                  {/* Screen content */}
                  <div className="flex-1 overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={current}
                        className="h-full"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                      >
                        <Screen />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  {/* Bottom bar */}
                  <div className="shrink-0 h-6 flex items-center justify-center pb-1">
                    <div className="w-24 h-1 bg-dark/20 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {SCREENS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? 'w-8 h-2 bg-brand' : 'w-2 h-2 bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
