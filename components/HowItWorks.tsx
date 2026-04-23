'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Zap, MapPin, CheckCircle, Wrench, Wind, Star, BadgeCheck, Droplets } from 'lucide-react'

const STEP1_SERVICES = [
  { Icon: Droplets, label: 'Plumbing'   },
  { Icon: Zap,      label: 'Electrical' },
  { Icon: Wind,     label: 'HVAC'       },
  { Icon: Wrench,   label: 'Handyman'   },
]

const STEPS = [
  {
    number: '01',
    icon: Search,
    title: 'Choose a Service',
    description:
      'Browse our list of services — from electrical work to deep cleaning. Select exactly what you need with just a tap.',
    detail: 'Plumbing · Electrical · HVAC · Handyman',
    visual: (
      <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-8">
        <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
          {STEP1_SERVICES.map(({ Icon, label }, i) => (
            <motion.div
              key={label}
              className={`aspect-square rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer transition-all ${
                i === 0 ? 'bg-brand shadow-lg shadow-brand/30 scale-105' : 'bg-gray-100 hover:bg-brand/10'
              }`}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={22} className={i === 0 ? 'text-white' : 'text-dark/60'} />
              <span className={`text-[9px] font-semibold font-body ${i === 0 ? 'text-white/80' : 'text-dark/50'}`}>{label}</span>
            </motion.div>
          ))}
        </div>
        <p className="text-sm text-dark/40 font-body">Tap to select a service</p>
      </div>
    ),
  },
  {
    number: '02',
    icon: Zap,
    title: 'Get Matched Instantly',
    description:
      'Our smart system matches you with the nearest verified professional in seconds — no waiting, no phone calls.',
    detail: 'Average match time: under 3 minutes',
    visual: (
      <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-8">
        <div className="relative">
          <motion.div
            className="w-24 h-24 rounded-full bg-brand flex items-center justify-center shadow-xl shadow-brand/30"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <span className="text-white font-heading font-black text-xl">KO</span>
          </motion.div>
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-full border-2 border-brand/30"
              animate={{ scale: [1, 1.8 + i * 0.4], opacity: [0.6, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: i * 0.5, ease: 'easeOut' }}
            />
          ))}
        </div>
        <div className="text-center">
          <p className="font-heading font-bold text-dark text-sm">Kevin Omondi</p>
          <div className="flex items-center justify-center gap-0.5 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={11} className="text-yellow-400 fill-yellow-400" />
            ))}
            <span className="text-xs text-dark/50 ml-1.5 font-body">4.9 (128 jobs)</span>
          </div>
          <span className="inline-flex items-center gap-1 mt-2 px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-semibold font-body">
            <BadgeCheck size={12} />
            Verified Electrician
          </span>
        </div>
      </div>
    ),
  },
  {
    number: '03',
    icon: MapPin,
    title: 'Track Your Pro',
    description:
      'Watch your professional approach in real-time on the map. Know exactly when they\'ll arrive — no guessing.',
    detail: 'Live GPS tracking · ETA updates · In-app chat',
    visual: (
      <div className="w-full h-full flex flex-col items-center justify-center p-6 gap-3">
        {/* Fake map */}
        <div className="w-full max-w-xs h-40 bg-gradient-to-br from-green-100 to-blue-50 rounded-2xl relative overflow-hidden border border-gray-200">
          {/* Map grid lines */}
          {[...Array(5)].map((_, i) => (
            <div key={`h${i}`} className="absolute w-full border-t border-gray-200/50" style={{ top: `${20 * (i + 1)}%` }} />
          ))}
          {[...Array(5)].map((_, i) => (
            <div key={`v${i}`} className="absolute h-full border-l border-gray-200/50" style={{ left: `${20 * (i + 1)}%` }} />
          ))}
          {/* Route line */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 160">
            <path d="M 40 130 Q 80 80 140 50" stroke="#E05535" strokeWidth="3" fill="none" strokeDasharray="6 3" />
          </svg>
          {/* Home pin */}
          <div className="absolute right-12 top-8 flex flex-col items-center">
            <div className="w-7 h-7 bg-dark rounded-full flex items-center justify-center shadow-md">
              <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
            </div>
          </div>
          {/* Pro pin (animated) */}
          <motion.div
            className="absolute left-6 bottom-10 flex flex-col items-center"
            animate={{ x: [0, 20, 40], y: [0, -15, -35] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          >
            <div className="w-7 h-7 bg-brand rounded-full flex items-center justify-center shadow-md ring-2 ring-white">
              <span className="text-white text-[10px] font-bold">K</span>
            </div>
          </motion.div>
        </div>
        <div className="flex items-center gap-3 bg-dark rounded-xl px-4 py-2.5 w-full max-w-xs">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-white text-xs font-body">Kevin is on his way</span>
          <span className="ml-auto text-brand text-xs font-bold font-body">~8 min</span>
        </div>
      </div>
    ),
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Job Done',
    description:
      'Sit back while your pro handles everything. Pay cashlessly through the app and rate your experience.',
    detail: 'Cashless payments · Rate & review · Instant receipt',
    visual: (
      <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-8">
        <motion.div
          className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center"
          animate={{ scale: [0.9, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        >
          <CheckCircle size={40} className="text-green-500" />
        </motion.div>
        <div className="text-center">
          <p className="font-heading font-bold text-dark text-lg">All done!</p>
          <p className="text-dark/50 text-sm font-body mt-1">Your electrical work is complete</p>
        </div>
        <div className="w-full max-w-xs bg-gray-50 rounded-2xl p-4 border border-gray-100">
          <div className="flex justify-between text-sm font-body mb-2">
            <span className="text-dark/60">Service</span>
            <span className="font-semibold text-dark">Electrical Repair</span>
          </div>
          <div className="flex justify-between text-sm font-body mb-3">
            <span className="text-dark/60">Total</span>
            <span className="font-bold text-dark">KSh 1,200</span>
          </div>
          <button className="w-full py-2.5 bg-brand text-white text-sm font-semibold rounded-xl font-body flex items-center justify-center gap-2">
            Pay & Rate Professional
          </button>
        </div>
      </div>
    ),
  },
]

export default function HowItWorks() {
  const [active, setActive] = useState(0)

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* ── Section Header ────────────────────────────────────── */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block text-brand text-sm font-semibold font-body uppercase tracking-widest mb-4">
            Simple Process
          </span>
          <h2 className="font-heading font-black text-dark text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-4">
            How <em>Fasta</em> Works
          </h2>
          <p className="text-dark/50 text-lg font-body max-w-lg mx-auto">
            From need to done in four easy steps.
          </p>
        </motion.div>

        {/* ── Step Selector + Visual ────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 lg:gap-16 items-start">

          {/* Left: Steps list */}
          <div className="flex flex-col gap-2">
            {STEPS.map((step, i) => {
              const Icon = step.icon
              const isActive = i === active
              return (
                <motion.button
                  key={step.number}
                  onClick={() => setActive(i)}
                  className={`group text-left p-5 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? 'bg-brand text-white shadow-xl shadow-brand/25'
                      : 'bg-gray-50 hover:bg-brand/5 text-dark'
                  }`}
                  whileHover={{ x: isActive ? 0 : 4 }}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isActive ? 'bg-white/20' : 'bg-brand/10'
                    }`}>
                      <Icon size={18} className={isActive ? 'text-white' : 'text-brand'} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <span className={`text-xs font-mono font-bold ${isActive ? 'text-white/60' : 'text-brand/60'}`}>
                          {step.number}
                        </span>
                        <p className={`font-heading font-bold text-base ${isActive ? 'text-white' : 'text-dark'}`}>
                          {step.title}
                        </p>
                      </div>
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <p className="text-white/80 text-sm font-body leading-relaxed mb-2">{step.description}</p>
                            <span className="text-white/60 text-xs font-body">{step.detail}</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.button>
              )
            })}
          </div>

          {/* Right: Visual */}
          <div className="sticky top-20 md:top-28">
            <motion.div
              className="relative w-full aspect-square max-w-md mx-auto bg-brand/5 rounded-3xl border border-brand/10 overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  className="absolute inset-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                >
                  {STEPS[active].visual}
                </motion.div>
              </AnimatePresence>

              {/* Step indicator dots */}
              <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
                {STEPS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === active ? 'w-6 h-2 bg-brand' : 'w-2 h-2 bg-brand/30'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
