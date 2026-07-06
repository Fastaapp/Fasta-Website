'use client'

import { useState } from 'react'
import { motion, AnimatePresence, type PanInfo } from 'framer-motion'
import { ChevronLeft, ChevronRight, Droplets, Zap, Wind, Wrench, ShieldCheck, CheckCircle, ArrowRight } from 'lucide-react'

const BG = '#F2F1ED'

// ─── Screen 1: Home ───────────────────────────────────────────────────────────
function HomeScreen() {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden" style={{ background: BG }}>
      {/* Header */}
      <div className="flex items-center justify-between px-3 pt-2 pb-2 bg-white border-b border-gray-100">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 bg-brand rounded flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-[8px]">F</span>
          </div>
          <span className="font-heading font-black text-dark text-[11px]">Fasta</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-1 bg-dark rounded-full px-2 py-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
            <span className="text-white text-[8px] font-bold">PRO</span>
          </div>
          <div className="w-6 h-6 rounded-full bg-gray-300 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500" />
          </div>
        </div>
      </div>

      {/* Greeting */}
      <div className="px-3 pt-3 pb-2">
        <p className="text-[8px] font-body text-dark/40 uppercase tracking-widest">Good evening</p>
        <p className="font-heading font-black text-dark text-[15px] leading-tight">Hi, Sarah</p>
        <p className="text-[9px] text-dark/50 font-body">Still need something fixed today?</p>
      </div>

      {/* Hero card */}
      <div className="mx-3 bg-white rounded-2xl p-3 mb-2 shadow-sm">
        <div className="w-6 h-0.5 bg-brand rounded mb-2" />
        <p className="font-heading font-black text-dark text-[13px] leading-tight mb-0.5">Your home, fixed fast.</p>
        <p className="text-[9px] text-dark/50 font-body mb-3">Trusted pros, when you need them.</p>
        <button className="w-full bg-brand text-white rounded-xl py-2.5 flex items-center justify-center gap-1.5">
          <span className="text-[10px] font-bold font-body">Get it fixed</span>
          <ArrowRight size={10} />
        </button>
        <p className="text-center text-[8px] text-dark/35 font-body mt-1.5">Start a request in a few taps.</p>
      </div>

      {/* Urgent help card */}
      <div className="mx-3 border border-brand/40 bg-white rounded-2xl p-3 mb-3 flex items-center gap-2">
        <div className="w-0.5 h-8 bg-brand rounded shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="text-[9px] font-bold text-dark font-body leading-tight">Need urgent help?</p>
          <p className="text-[8px] text-dark/45 font-body leading-tight">FASTA can prioritise dispatch when a fundi is available.</p>
        </div>
        <button className="shrink-0 border border-brand text-brand rounded-full px-2 py-1 text-[7px] font-bold font-body">
          Get help fast
        </button>
      </div>

      {/* Why Fasta */}
      <div className="px-3">
        <p className="text-[7px] font-body font-semibold text-dark/35 uppercase tracking-widest mb-2">Why Fasta</p>
        <div className="grid grid-cols-2 gap-2">
          {[
            { icon: ShieldCheck, title: 'Vetted fundis', sub: 'Documents reviewed before any job.' },
            { icon: CheckCircle, title: 'You approve first', sub: 'Job only complete when you confirm it.' },
          ].map(({ icon: Icon, title, sub }) => (
            <div key={title} className="bg-white rounded-xl p-2.5 shadow-sm">
              <div className="w-6 h-6 rounded-lg bg-brand/10 flex items-center justify-center mb-1.5">
                <Icon size={12} className="text-brand" />
              </div>
              <p className="text-[9px] font-bold text-dark font-body leading-tight">{title}</p>
              <p className="text-[7px] text-dark/45 font-body leading-tight mt-0.5">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Screen 2: Job Tracking ───────────────────────────────────────────────────
const STEPS = ['Requested', 'Assigned', 'In progress', 'Review', 'Done']
const ACTIVE = 2

function TrackingScreen() {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden" style={{ background: BG }}>
      {/* Header */}
      <div className="flex items-center gap-2 px-3 pt-2 pb-2 bg-white border-b border-gray-100">
        <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
          <ChevronLeft size={10} className="text-dark" />
        </div>
        <p className="font-heading font-bold text-dark text-[11px] mx-auto">FST-000138</p>
      </div>

      <div className="flex-1 overflow-hidden px-3 pt-3 space-y-2">
        {/* Status card */}
        <div className="bg-white rounded-2xl p-3 shadow-sm">
          <div className="flex items-center justify-between mb-1.5">
            <p className="text-[7px] font-bold text-dark/40 uppercase tracking-widest">Work in progress</p>
            <div className="flex items-center gap-1 bg-red-50 border border-red-100 rounded-full px-1.5 py-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[7px] font-bold text-red-500">LIVE</span>
            </div>
          </div>
          <p className="font-heading font-bold text-dark text-[11px] leading-tight mb-0.5">Your fundi is working on the repair</p>
          <p className="text-[8px] text-dark/45 font-body mb-3">Completion photos will appear when the work is done.</p>

          {/* Progress bar */}
          <div className="flex items-center gap-0">
            {STEPS.map((step, i) => (
              <div key={step} className="flex items-center flex-1">
                <div className={`w-2.5 h-2.5 rounded-full border-2 shrink-0 ${
                  i < ACTIVE ? 'bg-brand border-brand' :
                  i === ACTIVE ? 'bg-white border-brand' : 'bg-white border-gray-200'
                }`} />
                {i < STEPS.length - 1 && (
                  <div className={`h-0.5 flex-1 ${i < ACTIVE ? 'bg-brand' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-1">
            {STEPS.map((step, i) => (
              <span key={step} className={`text-[6px] font-body ${i === ACTIVE ? 'text-brand font-bold' : 'text-dark/35'}`}>
                {step}
              </span>
            ))}
          </div>
        </div>

        {/* Details card */}
        <div className="bg-white rounded-2xl p-3 shadow-sm">
          <div className="flex justify-between py-1.5 border-b border-gray-50">
            <span className="text-[8px] text-dark/40 font-body">Service address</span>
            <span className="text-[8px] font-semibold text-dark font-body">Westlands, Nairobi</span>
          </div>
          <div className="flex justify-between py-1.5">
            <span className="text-[8px] text-dark/40 font-body">Created</span>
            <span className="text-[8px] font-semibold text-dark font-body">Today at 09:15</span>
          </div>
        </div>

        {/* Alert */}
        <div className="bg-red-50 border border-red-100 rounded-2xl p-2.5">
          <p className="text-[8px] font-bold text-brand mb-0.5">Taking longer than expected</p>
          <p className="text-[7px] text-dark/55 font-body">We've flagged this for review and will keep you posted. You don't need to do anything.</p>
        </div>

        {/* Fundi card */}
        <div className="bg-white rounded-2xl p-3 shadow-sm">
          <p className="text-[7px] font-bold text-dark/35 uppercase tracking-widest mb-2">Your fundi</p>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-brand/15 flex items-center justify-center shrink-0">
              <span className="text-brand text-[9px] font-bold">JM</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-bold text-dark font-body">James M.</p>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="text-[7px] text-brand font-body font-semibold">✓ Verified fundi</span>
                <span className="text-[7px] text-dark/35 font-body">· 4 jobs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Screen 3: Services ───────────────────────────────────────────────────────
const SERVICES = [
  { Icon: Droplets, name: 'Plumbing',   desc: 'Leaks, taps, drains & geysers',     price: '1,500' },
  { Icon: Zap,      name: 'Electrical', desc: 'Sockets, wiring & power faults',     price: '1,500' },
  { Icon: Wind,     name: 'HVAC',       desc: 'Air-con, fans & ventilation',        price: '2,000' },
  { Icon: Wrench,   name: 'Handyman',   desc: 'Mounting, fixtures & small repairs', price: '2,500' },
]

function ServicesScreen() {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden" style={{ background: BG }}>
      {/* Header */}
      <div className="flex items-center gap-2 px-3 pt-2 pb-2 bg-white border-b border-gray-100">
        <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
          <ChevronLeft size={10} className="text-dark" />
        </div>
      </div>

      <div className="flex-1 overflow-hidden px-3 pt-3">
        <p className="text-[7px] font-body text-dark/40 uppercase tracking-widest mb-0.5">Step 1 of 4</p>
        <p className="font-heading font-black text-dark text-[15px] leading-tight mb-0.5">What needs fixing?</p>
        <p className="text-[8px] text-dark/50 font-body mb-3">Choose the service you need. We'll guide you from there.</p>

        {/* Service list */}
        <div className="space-y-1.5 mb-3">
          {SERVICES.map(({ Icon, name, desc, price }) => (
            <div key={name} className="bg-white rounded-xl p-2.5 flex items-center gap-2.5 shadow-sm">
              <div className="w-7 h-7 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">
                <Icon size={13} className="text-brand" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[9px] font-bold text-dark font-body leading-tight">{name}</p>
                <p className="text-[7px] text-dark/45 font-body leading-tight">{desc}</p>
                <p className="text-[7px] text-brand font-semibold font-body mt-0.5">from KES {price}</p>
              </div>
              <ChevronLeft size={10} className="text-dark/25 rotate-180 shrink-0" />
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex gap-2 mb-3">
          {['Every fundi is vetted', 'You approve before completion'].map((t) => (
            <span key={t} className="text-[6.5px] text-brand font-body font-semibold border border-brand/20 bg-brand/5 rounded-full px-2 py-0.5">
              {t}
            </span>
          ))}
        </div>

        {/* Steps */}
        <div className="bg-white rounded-xl p-2.5 space-y-1.5 shadow-sm">
          {['Choose a service and add photos', 'We match you with a vetted fundi', 'Approve the finished work'].map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-brand/10 text-brand text-[7px] font-bold flex items-center justify-center shrink-0">{i + 1}</span>
              <span className="text-[8px] text-dark/60 font-body">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const SCREENS = [
  { title: 'Home',          subtitle: 'Your dashboard at a glance',   component: HomeScreen     },
  { title: 'Live Tracking', subtitle: 'Follow your job in real time', component: TrackingScreen },
  { title: 'Book a Service',subtitle: 'Pick what needs fixing',       component: ServicesScreen },
]

// ─── App Preview section ──────────────────────────────────────────────────────
export default function AppPreview() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + SCREENS.length) % SCREENS.length)
  const next = () => setCurrent((c) => (c + 1) % SCREENS.length)

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -50) next()
    else if (info.offset.x > 50) prev()
  }

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
            <motion.div
              className="relative w-[220px] sm:w-[260px] md:w-[300px] phone-glow cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={handleDragEnd}
            >
              {/* Phone frame */}
              <div className="relative w-full aspect-[9/19] bg-[#1A1C1E] rounded-[44px] p-[3px] shadow-2xl ring-1 ring-white/10">
                <div className="absolute -left-[3px] top-20 w-[3px] h-8 bg-[#2C2F32] rounded-l-sm" />
                <div className="absolute -left-[3px] top-32 w-[3px] h-12 bg-[#2C2F32] rounded-l-sm" />
                <div className="absolute -right-[3px] top-28 w-[3px] h-10 bg-[#2C2F32] rounded-r-sm" />

                <div className="w-full h-full bg-[#F2F1ED] rounded-[42px] overflow-hidden flex flex-col">
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
            </motion.div>
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
