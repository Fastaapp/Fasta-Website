'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

// ─── Plan definitions ─────────────────────────────────────────────────────────
const PLANS = [
  {
    name:        'Standard',
    price:       'Free',
    priceNote:   'Always free',
    description: 'Everything you need to get started.',
    features: [
      'Book any available service',
      'Live professional tracking',
      'Secure in-app payments',
      'Post-job ratings and reviews',
    ],
    cta:       'Download Free',
    highlight: false,
    dark:      false,
  },
  {
    name:        'Fasta Pro',
    price:       'KES 499',
    priceNote:   'per month',
    badge:       'Most Popular',
    description: 'For homes that need faster, more reliable service.',
    features: [
      'Priority professional dispatch',
      'Schedule bookings in advance',
      'Preferred member pricing',
      'Priority customer support',
    ],
    cta:       'Get Pro',
    highlight: true,
    dark:      false,
  },
  {
    name:        'Fasta Plus',
    price:       'KES 799',
    priceNote:   'per month',
    description: 'The complete home management experience.',
    features: [
      'Instant VIP matching',
      'Quarterly home health review',
      'Exclusive member discounts',
      'Dedicated account manager',
    ],
    cta:       'Get Plus',
    highlight: false,
    dark:      true,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-white relative">
      {/* Top/bottom ruled lines — clean, editorial */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* ── Section Header ────────────────────────────────────────── */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block text-brand text-sm font-semibold font-body uppercase tracking-widest mb-4">
            Plans
          </span>
          <h2 className="font-heading font-black text-dark text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-4">
            Simple. Transparent.<br />No Surprises.
          </h2>
          <p className="text-dark/50 text-lg font-body max-w-md mx-auto">
            Choose the plan that fits your home. Upgrade or cancel anytime.
          </p>
        </motion.div>

        {/* ── Plan Cards ────────────────────────────────────────────── */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-3xl flex flex-col overflow-hidden ${
                plan.dark
                  ? 'bg-dark text-white'
                  : 'bg-white text-dark'
              } ${
                plan.highlight
                  ? 'ring-2 ring-brand shadow-2xl shadow-brand/12'
                  : 'border border-gray-150 shadow-sm'
              }`}
              style={{ borderColor: !plan.highlight && !plan.dark ? '#EBEBEB' : undefined }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Most Popular badge */}
              {plan.badge && (
                <div className="absolute -top-px left-0 right-0 flex justify-center">
                  <span className="px-4 py-1.5 bg-brand text-white text-[10px] font-bold font-body rounded-b-xl shadow-lg shadow-brand/25 tracking-wide">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Card content */}
              <div className={`flex flex-col flex-1 p-8 ${plan.badge ? 'pt-10' : ''}`}>

                {/* Plan name */}
                <p className={`font-body font-semibold text-xs uppercase tracking-widest mb-5 ${
                  plan.dark ? 'text-white/40' : 'text-[#A9A5A2]'
                }`}>
                  {plan.name}
                </p>

                {/* Price */}
                <div className="mb-1">
                  <span className={`font-heading font-black text-5xl tracking-tight ${
                    plan.highlight ? 'text-brand' : plan.dark ? 'text-white' : 'text-dark'
                  }`}>
                    {plan.price}
                  </span>
                </div>
                <p className={`text-sm font-body mb-5 ${
                  plan.dark ? 'text-white/35' : 'text-[#A9A5A2]'
                }`}>
                  {plan.priceNote}
                </p>

                {/* Description */}
                <p className={`text-sm font-body leading-relaxed mb-7 ${
                  plan.dark ? 'text-white/55' : 'text-dark/55'
                }`}>
                  {plan.description}
                </p>

                {/* Divider */}
                <div className={`h-px mb-6 ${plan.dark ? 'bg-white/10' : 'bg-gray-100'}`} />

                {/* Features */}
                <ul className="flex flex-col gap-3.5 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`shrink-0 w-[18px] h-[18px] rounded-full flex items-center justify-center mt-0.5 ${
                        plan.highlight
                          ? 'bg-brand/12'
                          : plan.dark
                          ? 'bg-white/12'
                          : 'bg-dark/6'
                      }`}>
                        <Check
                          size={10}
                          strokeWidth={2.5}
                          className={
                            plan.highlight ? 'text-brand' : plan.dark ? 'text-white' : 'text-dark/60'
                          }
                        />
                      </div>
                      <span className={`text-sm font-body leading-snug ${
                        plan.dark ? 'text-white/70' : 'text-dark/65'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.a
                  href="#download"
                  className={`w-full py-3.5 rounded-2xl text-sm font-semibold font-body text-center flex items-center justify-center gap-2 transition-all ${
                    plan.highlight
                      ? 'bg-brand text-white hover:bg-brand-dark shadow-lg shadow-brand/20'
                      : plan.dark
                      ? 'bg-white text-dark hover:bg-gray-100'
                      : 'bg-dark/7 text-dark hover:bg-dark/12'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.cta}
                  <ArrowRight size={14} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Fine print ─────────────────────────────────────────────── */}
        <motion.p
          className="text-center text-[#A9A5A2] text-sm font-body mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          All plans include access to 10,000+ verified professionals across Nairobi.
          Upgrade or cancel anytime.
        </motion.p>
      </div>
    </section>
  )
}
