'use client'

import { motion } from 'framer-motion'
import { Check, X, Zap, CalendarDays, Shield, Clock, Star, Flame } from 'lucide-react'

// ─── Plans ────────────────────────────────────────────────────────────────────
const PLANS = [
  {
    key:         'free',
    name:        'Fasta Free',
    price:       '0',
    priceNote:   'Free forever',
    tagline:     'Get started. See how it works.',
    nudge:       'Limited requests. Slower matching.',
    cta:         'Download Free',
    highlight:   false,
    dark:        false,
    badge:       null,
    features: [
      { text: '3 job requests per month',       included: true  },
      { text: 'Standard matching speed',         included: true  },
      { text: 'Next available slot only',        included: true  },
      { text: 'In-app job tracking',             included: true  },
      { text: 'Choose your date & time',         included: false },
      { text: 'Easy rescheduling',               included: false },
      { text: 'Priority matching',               included: false },
      { text: 'Emergency same-day bookings',     included: false },
      { text: 'Priority support',                included: false },
      { text: 'Service quality guarantee',       included: false },
    ],
  },
  {
    key:         'plus',
    name:        'Fasta Plus',
    price:       '499',
    priceNote:   'KSh / month',
    tagline:     'Faster service. Full control.',
    nudge:       'Most Fasta customers choose this.',
    cta:         'Get Fasta Plus',
    highlight:   true,
    dark:        false,
    badge:       'Most Popular',
    features: [
      { text: 'Unlimited job requests',          included: true  },
      { text: 'Faster matching (avg. <8 min)',   included: true  },
      { text: 'Choose your date & time',         included: true  },
      { text: 'In-app job tracking',             included: true  },
      { text: 'Easy rescheduling',               included: true  },
      { text: 'Priority matching',               included: false },
      { text: 'Emergency same-day bookings',     included: false },
      { text: 'Priority support',                included: false },
      { text: 'Service quality guarantee',       included: false },
    ],
  },
  {
    key:         'elite',
    name:        'Fasta Elite',
    price:       '999',
    priceNote:   'KSh / month',
    tagline:     'Priority everything. Zero stress.',
    nudge:       'The fastest, most reliable experience on Fasta.',
    cta:         'Go Elite',
    highlight:   false,
    dark:        true,
    badge:       'Premium',
    features: [
      { text: 'Unlimited job requests',          included: true  },
      { text: 'Highest priority matching',       included: true  },
      { text: 'Best time slots, guaranteed',     included: true  },
      { text: 'In-app job tracking',             included: true  },
      { text: 'Emergency same-day bookings',     included: true  },
      { text: 'Guaranteed time windows',         included: true  },
      { text: '24/7 priority support',           included: true  },
      { text: 'Service quality guarantee',       included: true  },
    ],
  },
]

// ─── Highlight stats shown above cards ───────────────────────────────────────
const PLAN_STATS = [
  { icon: Zap,          label: 'Avg. match time',  value: '<8 min',   note: 'on Plus & Elite' },
  { icon: CalendarDays, label: 'Scheduling',       value: 'Your call', note: 'Pick your date & time' },
  { icon: Shield,       label: 'Quality guarantee',value: 'Elite',    note: 'Every job, every time' },
]

// ─── Comparison rows ─────────────────────────────────────────────────────────
const COMPARE_ROWS = [
  { feature: 'Job requests',             free: '3 / month',    plus: 'Unlimited',    elite: 'Unlimited'    },
  { feature: 'Matching speed',           free: 'Standard',     plus: 'Fast',         elite: 'Priority'     },
  { feature: 'Scheduling',               free: 'Next available', plus: 'Your choice', elite: 'Best slots'  },
  { feature: 'Rescheduling',             free: false,          plus: true,           elite: true           },
  { feature: 'Emergency bookings',       free: false,          plus: false,          elite: true           },
  { feature: 'Guaranteed time window',   free: false,          plus: false,          elite: true           },
  { feature: 'Priority support',         free: false,          plus: false,          elite: true           },
  { feature: 'Quality guarantee',        free: false,          plus: false,          elite: true           },
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
            Start free. Upgrade when you want faster matching, full scheduling control, and priority service.
          </p>
        </motion.div>

        {/* ── Stat strip ───────────────────────────────────────────── */}
        <motion.div
          className="grid grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {PLAN_STATS.map(({ icon: Icon, label, value, note }) => (
            <div key={label} className="text-center">
              <div className="w-9 h-9 rounded-xl bg-brand/10 flex items-center justify-center mx-auto mb-2">
                <Icon size={16} className="text-brand" />
              </div>
              <p className="font-heading font-black text-dark text-lg leading-tight">{value}</p>
              <p className="text-dark/40 text-[11px] font-body leading-tight mt-0.5">{note}</p>
            </div>
          ))}
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
                <div className={`absolute top-0 left-0 right-0 flex justify-center`}>
                  <span className={`px-4 py-1.5 text-[10px] font-bold font-body rounded-b-xl tracking-widest uppercase ${
                    plan.highlight
                      ? 'bg-brand text-white shadow-lg shadow-brand/30'
                      : 'bg-white/15 text-white/80'
                  }`}>
                    {plan.badge === 'Premium' ? (
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
                    <span className={`font-heading font-black text-5xl tracking-tight ${plan.dark ? 'text-white' : 'text-dark'}`}>
                      Free
                    </span>
                  ) : (
                    <>
                      <span className={`font-heading font-black text-5xl tracking-tight leading-none ${
                        plan.highlight ? 'text-brand' : plan.dark ? 'text-white' : 'text-dark'
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

                {/* Tagline */}
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
                <ul className="flex flex-col gap-3 mb-7 flex-1">
                  {plan.features.map((f) => (
                    <li key={f.text} className={`flex items-center gap-2.5 ${!f.included ? 'opacity-35' : ''}`}>
                      <div className={`shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${
                        f.included
                          ? plan.highlight
                            ? 'bg-brand/15'
                            : plan.dark
                            ? 'bg-white/12'
                            : 'bg-dark/8'
                          : 'bg-transparent'
                      }`}>
                        {f.included
                          ? <Check size={9} strokeWidth={3} className={plan.highlight ? 'text-brand' : plan.dark ? 'text-white' : 'text-dark/60'} />
                          : <X size={9} strokeWidth={2.5} className="text-dark/40" />
                        }
                      </div>
                      <span className={`text-[13px] font-body leading-snug ${
                        plan.dark ? 'text-white/65' : 'text-dark/65'
                      }`}>
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.a
                  href="/#download"
                  className={`w-full py-3.5 rounded-2xl text-sm font-bold font-body text-center flex items-center justify-center gap-2 transition-all ${
                    plan.highlight
                      ? 'bg-brand text-white hover:bg-brand-dark shadow-lg shadow-brand/25'
                      : plan.dark
                      ? 'bg-white text-dark hover:bg-gray-100'
                      : 'bg-dark/7 text-dark hover:bg-dark/12'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.key === 'elite' && <Flame size={14} className="text-brand" />}
                  {plan.cta}
                </motion.a>

                {/* Below CTA nudge for Plus */}
                {plan.highlight && (
                  <p className="text-center text-[11px] text-dark/35 font-body mt-3">
                    Cancel anytime. No commitment.
                  </p>
                )}
                {plan.dark && (
                  <p className="text-center text-[11px] text-white/25 font-body mt-3">
                    Includes everything in Plus.
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Comparison Table ─────────────────────────────────────── */}
        <motion.div
          className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Table header */}
          <div className="grid grid-cols-4 gap-0 border-b border-gray-100">
            <div className="p-5">
              <p className="text-xs text-dark/35 font-body font-semibold uppercase tracking-widest">Features</p>
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
                  {plan.price === '0' ? 'Free' : `${plan.price}`}
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
            All plans include verified professionals, secure M-Pesa payments and in-app tracking.
            Upgrade or cancel anytime.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
