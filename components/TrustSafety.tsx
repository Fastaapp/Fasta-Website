'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Star, Clock, CreditCard } from 'lucide-react'

const TRUST_ITEMS = [
  {
    icon: ShieldCheck,
    title: 'Document Verified',
    description: 'Every fundi is verified before their first job — national ID, police clearance certificate, and trade registration where applicable, all reviewed by our team.',
  },
  {
    icon: Star,
    title: 'Ratings & Reviews',
    description: 'Transparent, honest ratings from customers after every job. Your feedback shapes our professional network.',
  },
  {
    icon: Clock,
    title: 'Fast Matching',
    description: 'Get matched with the nearest available verified fundi — fast. Track everything live in the app.',
  },
  {
    icon: CreditCard,
    title: 'Secure Payments',
    description: 'Cashless M-Pesa payment through the app. Your payment is only released to the fundi after you approve the finished job.',
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
            We don't just connect you with anyone. Every <em>Fasta</em> professional is document-verified before their first job.
          </p>
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
              <span className="text-brand font-semibold">Workmanship cover on eligible plans</span>
              {' '}— if the job isn't done right, we'll help put it right. <a href="/terms" className="underline text-white/60">See Terms.</a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
