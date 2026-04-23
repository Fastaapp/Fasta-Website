'use client'

import { motion } from 'framer-motion'
import { Check, X, Flame, Star } from 'lucide-react'

// ─── Plans ────────────────────────────────────────────────────────────────────
const PLANS = [
  {
    key:       'free',
    name:      'Fasta Free',
    price:     '0',
    priceNote: 'Free forever',
    tagline:   'Get started',
    nudge:     'Basic access when you need it',
    subtext:   'Slower during busy periods',
    cta:       'Get Started',
    highlight: false,
    dark:      false,
    badge:     null,
    microcopy: null,
    features: [
      'Limited job requests',
      'Standard speed of service',
      'Basic job tracking',
      'Standard queue position',
    ],
    excluded: [
      'Priority queue placement',
      'Easy rescheduling',
      'Emergency requests',
      'Priority support',
      'Service assurance',
    ],
  },
  {
    key:       'plus',
    name:      'Fasta Plus',
    price:     '499',
    priceNote: 'KSh / month',
    tagline:   'Get it done faster',
    nudge:     'More speed. More control.',
    subtext:   null,
    cta:       'Upgrade to Plus',
    highlight: true,
    dark:      false,
    badge:     'Most Popular',
    microcopy: ['Get matched quicker', 'Stay updated in real time'],
    features: [
      'Unlimited job requests',
      'Faster service',
      'Priority queue placement',
      'Live job tracking',
      'Easy rescheduling',
    ],
    excluded: [
      'Emergency requests',
      'Priority support',
      'Service assurance',
    ],
  },
  {
    key:       'elite',
    name:      'Fasta Elite',
    price:     '999',
    priceNote: 'KSh / month',
    tagline:   'Priority service. Zero hassle.',
    nudge:     'Fastest service with full priority',
    subtext:   null,
    cta:       'Go Elite',
    highlight: false,
    dark:      true,
    badge:     'Premium',
    microcopy: ['Skip the queue completely', 'Get priority support when it matters'],
    features: [
      'Unlimited job requests',
      'Fastest service',
      'Skip the queue',
      'Live + priority updates',
      'Emergency requests',
      'Priority support',
      'Service assurance',
    ],
    excluded: [],
  },
]

// ─── Comparison rows ─────────────────────────────────────────────────────────
const COMPARE_ROWS = [
  { feature: 'Job Requests',     free: 'Limited',   plus: 'Unlimited',  elite: 'Unlimited'    },
  { feature: 'Speed of Service', free: 'Standard',  plus: 'Faster',     elite: 'Fastest'      },
  { feature: 'Queue Position',   free: 'Back',       plus: 'Priority',   elite: 'Skip'         },
  { feature: 'Job Tracking',     free: 'Basic',      plus: 'Live updates', elite: 'Priority updates' },
  { feature: 'Rescheduling',     free: false,        plus: true,         elite: true            },
  { feature: 'Emergency Requests', free: false,      plus: false,        elite: true            },
  { feature: 'Priority Support', free: false,        plus: false,        elite: true            },
  { feature: 'Service Assurance',free: false,        plus: false,        elite: true            },
]

function Cell({ value }: { value: string | boolean }) {
  if (value === true)  return <Check size={16} className="text-brand mx-auto" strokeWidth={2.5} />
  if (value === false) return <X size={14} className="text-dark/20 mx-auto" strokeWidth={2} />
  return <span className="text-dark/70 text-sm font-body">{value}</span>
}

// ─── Pricing section ─────────────────────────────────────────────────────────
export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark/8 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* ── Header ───────────────────────────────────────────────── */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block text-brand text-sm font-semibold font-body uppercase tracking-widest mb-4">
            Pricing
          </span>
          <h2 className="font-heading font-black text-dark text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-4">
            The faster you go,<br />
            <span className="gradient-text">the less you wait.</span>
          </h2>
          <p className="text-dark/50 text-lg font-body max-w-md mx-auto">
            Start free. Upgrade for faster service, priority access, and more control.
          </p>
        </motion.div>

        {/* ── Cards ────────────────────────────────────────────────── */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6 items-stretch mb-16">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.key}
              className={`relative rounded-3xl flex flex-col overflow-hidden ${
                plan.dark
                  ? 'bg-[#1A1C1E] text-white'
                  : plan.highlight
                  ? 'bg-white ring-2 ring-brand shadow-2xl shadow-brand/15'
                  : 'bg-white border border-gray-200 shadow-sm'
              }`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute top-0 left-0 right-0 flex justify-center">
                  <span className={`px-4 py-1.5 text-[10px] font-bold font-body rounded-b-xl tracking-widest uppercase ${
                    plan.highlight
                      ? 'bg-brand text-white shadow-lg shadow-brand/30'
                      : 'bg-white/15 text-white/80'
                  }`}>
                    {plan.dark ? (
                      <span className="flex items-center gap-1"><Star size={10} className="fill-current" /> {plan.badge}</span>
                    ) : plan.badge}
                  </span>
                </div>
              )}

              <div className={`flex flex-col flex-1 p-7 ${plan.badge ? 'pt-10' : ''}`}>

                {/* Plan name */}
                <p className={`font-body font-semibold text-xs uppercase tracking-widest mb-4 ${
                  plan.dark ? 'text-white/35' : 'text-dark/35'
                }`}>
                  {plan.name}
                </p>

                {/* Price */}
                <div className="flex items-end gap-1.5 mb-1">
                  {plan.price === '0' ? (
                    <span className="font-heading font-black text-5xl tracking-tight text-dark">
                      Free
                    </span>
                  ) : (
                    <>
                      <span className={`font-heading font-black text-5xl tracking-tight leading-none ${
                        plan.highlight ? 'text-brand' : 'text-white'
                      }`}>
                        {plan.price}
                      </span>
                      <span className={`text-sm font-body mb-1.5 ${plan.dark ? 'text-white/40' : 'text-dark/40'}`}>
                        KSh/mo
                      </span>
                    </>
                  )}
                </div>
                <p className={`text-xs font-body mb-5 ${plan.dark ? 'text-white/30' : 'text-dark/35'}`}>
                  {plan.priceNote}
                </p>

                {/* Tagline + description */}
                <p className={`text-sm font-body font-semibold mb-1 ${
                  plan.highlight ? 'text-brand' : plan.dark ? 'text-white/80' : 'text-dark/70'
                }`}>
                  {plan.tagline}
                </p>
                <p className={`text-xs font-body mb-6 ${plan.dark ? 'text-white/35' : 'text-dark/40'}`}>
                  {plan.nudge}
                </p>

                {/* Divider */}
                <div className={`h-px mb-5 ${plan.dark ? 'bg-white/8' : 'bg-gray-100'}`} />

                {/* Features */}
                <ul className="flex flex-col gap-3 mb-4">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <div className={`shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${
                        plan.highlight ? 'bg-brand/15' : plan.dark ? 'bg-white/12' : 'bg-dark/8'
                      }`}>
                        <Check size={9} strokeWidth={3} className={
                          plan.highlight ? 'text-brand' : plan.dark ? 'text-white' : 'text-dark/60'
                        } />
                      </div>
                      <span className={`text-[13px] font-body leading-snug ${
                        plan.dark ? 'text-white/65' : 'text-dark/65'
                      }`}>
                        {f}
                      </span>
                    </li>
                  ))}
                  {plan.excluded.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 opacity-30">
                      <div className="shrink-0 w-4 h-4 rounded-full flex items-center justify-center bg-transparent">
                        <X size={9} strokeWidth={2.5} className={plan.dark ? 'text-white/60' : 'text-dark/40'} />
                      </div>
                      <span className={`text-[13px] font-body leading-snug ${
                        plan.dark ? 'text-white/65' : 'text-dark/65'
                      }`}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Microcopy */}
                {plan.microcopy && (
                  <div className="flex flex-col gap-1 mb-5">
                    {plan.microcopy.map((m) => (
                      <p key={m} className={`text-[11px] font-body ${
                        plan.dark ? 'text-white/40' : 'text-brand/70'
                      }`}>
                        {m}
                      </p>
                    ))}
                  </div>
                )}

                {/* Subtext for Free */}
                {plan.subtext && (
                  <p className="text-[11px] font-body text-dark/35 mb-5">{plan.subtext}</p>
                )}

                {/* CTA */}
                <motion.a
                  href="/#download"
                  className={`mt-auto w-full py-4 rounded-2xl text-sm font-bold font-body text-center flex items-center justify-center gap-2 transition-all ${
                    plan.highlight
                      ? 'bg-brand text-white hover:bg-brand-dark shadow-lg shadow-brand/25'
                      : plan.dark
                      ? 'bg-white text-dark hover:bg-gray-100'
                      : 'bg-dark text-white hover:bg-dark-700 shadow-md'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.key === 'elite' && <Flame size={14} className="text-brand" />}
                  {plan.cta}
                </motion.a>

                {/* Below CTA — always rendered for alignment */}
                <p className={`text-center text-[11px] font-body mt-3 ${
                  plan.highlight ? 'text-dark/35' : plan.dark ? 'text-white/25' : 'text-dark/35'
                }`}>
                  {plan.highlight
                    ? 'Cancel anytime. No commitment.'
                    : plan.dark
                    ? 'Includes everything in Plus.'
                    : 'No credit card required.'}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Trust line ───────────────────────────────────────────── */}
        <motion.p
          className="text-center text-dark/45 text-sm font-body mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          All jobs are handled by vetted, verified professionals — every time.
        </motion.p>

        {/* ── Comparison Table — desktop only ──────────────────────── */}
        <motion.div
          className="hidden md:block bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Table header */}
          <div className="grid grid-cols-4 gap-0 border-b border-gray-100">
            <div className="p-5">
              <p className="text-xs text-dark/35 font-body font-semibold uppercase tracking-widest">Feature</p>
            </div>
            {PLANS.map((plan) => (
              <div
                key={plan.key}
                className={`p-5 text-center border-l border-gray-100 ${
                  plan.highlight ? 'bg-brand/4' : ''
                }`}
              >
                <p className={`text-xs font-bold font-body uppercase tracking-widest ${
                  plan.highlight ? 'text-brand' : 'text-dark/50'
                }`}>
                  {plan.name.replace('Fasta ', '')}
                </p>
                <p className={`text-lg font-heading font-black mt-0.5 ${plan.highlight ? 'text-brand' : 'text-dark'}`}>
                  {plan.price === '0' ? 'Free' : plan.price}
                  {plan.price !== '0' && <span className="text-xs font-body font-normal text-dark/40 ml-0.5">KSh</span>}
                </p>
              </div>
            ))}
          </div>

          {/* Rows */}
          {COMPARE_ROWS.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-4 gap-0 border-b border-gray-50 last:border-0 ${
                i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
              }`}
            >
              <div className="px-5 py-3.5 flex items-center">
                <span className="text-sm text-dark/60 font-body">{row.feature}</span>
              </div>
              {[row.free, row.plus, row.elite].map((val, j) => (
                <div
                  key={j}
                  className={`px-5 py-3.5 flex items-center justify-center border-l border-gray-100 ${
                    j === 1 ? 'bg-brand/3' : ''
                  }`}
                >
                  <Cell value={val} />
                </div>
              ))}
            </div>
          ))}
        </motion.div>

        {/* ── Bottom nudge ─────────────────────────────────────────── */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-dark/40 text-sm font-body">
            All plans include secure M-Pesa payments and in-app tracking. Upgrade or cancel anytime.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
