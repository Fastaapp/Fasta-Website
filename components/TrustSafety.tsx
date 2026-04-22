'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShieldCheck, Star, Clock, CreditCard } from 'lucide-react'

// ─── Animated counter ─────────────────────────────────────────────────────────
function CountUp({ to, prefix = '', suffix = '', duration = 2000 }: {
  to: number; prefix?: string; suffix?: string; duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const steps = 60
    const step = to / steps
    let current = 0
    const timer = setInterval(() => {
      current += step
      if (current >= to) { setCount(to); clearInterval(timer) }
      else setCount(Math.floor(current))
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, to, duration])

  return (
    <span ref={ref}>
      {prefix}{count >= 1000 ? (count / 1000).toFixed(count % 1000 === 0 ? 0 : 1) + 'k' : count}{suffix}
    </span>
  )
}

const STATS = [
  { value: 10000, suffix: '+',   label: 'Verified Professionals', prefix: '',  starRating: false },
  { value: 50000, suffix: '+',   label: 'Jobs Completed',         prefix: '',  starRating: false },
  { value: 4.9,   suffix: '',    label: 'Average Rating',         prefix: '',  starRating: true  },
  { value: 8,     suffix: ' min',label: 'Average Response',       prefix: '<', starRating: false },
]

const TRUST_ITEMS = [
  {
    icon: ShieldCheck,
    title: 'Background Verified',
    description: 'Every professional is vetted with background checks, ID verification, and skills assessment before they can accept a job.',
  },
  {
    icon: Star,
    title: 'Ratings & Reviews',
    description: 'Transparent, honest ratings from real customers after every job. Your feedback shapes our professional network.',
  },
  {
    icon: Clock,
    title: 'Fast Response Time',
    description: 'Our matching system ensures a professional is dispatched within minutes. We\'re committed to being there when you need us.',
  },
  {
    icon: CreditCard,
    title: 'Secure Payments',
    description: 'Pay safely through the app with M-Pesa or card. No cash, no awkwardness — fully encrypted and secure.',
  },
]

export default function TrustSafety() {
  return (
    <section id="trust" className="py-24 md:py-32 bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#E05535 1px, transparent 1px), linear-gradient(90deg, #E05535 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-brand/8 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 rounded-full bg-brand/5 blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">

        {/* ── Section Header ────────────────────────────────────── */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block text-brand text-sm font-semibold font-body uppercase tracking-widest mb-4">
            Trust & Safety
          </span>
          <h2 className="font-heading font-black text-white text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-4">
            Built on Trust.<br />
            <span className="gradient-text">Every Single Time.</span>
          </h2>
          <p className="text-white/50 text-lg font-body max-w-md mx-auto">
            We don't just connect you with anyone. Every <em>Fasta</em> professional is verified, trained, and rated.
          </p>
        </motion.div>

        {/* ── Stats Row ─────────────────────────────────────────── */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-dark flex flex-col items-center justify-center py-8 px-4 text-center">
              <p className="font-heading font-black text-3xl md:text-4xl text-white mb-1 tracking-tight flex items-center gap-1.5">
                {stat.prefix}
                <CountUp to={stat.value} suffix={stat.suffix} />
                {stat.starRating && (
                  <Star size={22} className="text-yellow-400 fill-yellow-400 mb-0.5" />
                )}
              </p>
              <p className="text-white/40 text-sm font-body">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* ── Trust Features Grid ────────────────────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TRUST_ITEMS.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                className="group glass-card rounded-2xl p-6 hover:border-brand/30 transition-all duration-300"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                whileHover={{ y: -4 }}
              >
                <div className="w-11 h-11 rounded-xl bg-brand/15 flex items-center justify-center mb-5 group-hover:bg-brand/25 transition-colors duration-300">
                  <Icon size={20} className="text-brand" />
                </div>
                <h3 className="font-heading font-bold text-white text-base mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm font-body leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* ── Bottom guarantee strip ──────────────────────────────── */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-brand/30 bg-brand/10">
            <ShieldCheck size={16} className="text-brand" />
            <p className="text-white/80 text-sm font-body">
              <span className="text-brand font-semibold">100% satisfaction guarantee</span>
              {' '}— If you're not happy, we'll make it right.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
