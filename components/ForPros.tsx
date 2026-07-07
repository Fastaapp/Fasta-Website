'use client'

import { motion } from 'framer-motion'
import { Briefcase, Clock, Banknote, ShieldCheck, ArrowRight, Download } from 'lucide-react'

const BENEFITS = [
  {
    icon: Briefcase,
    title: 'More Job Opportunities',
    description: 'Receive a steady stream of verified job requests from customers in your area. No cold calls, no marketing — just work.',
  },
  {
    icon: Clock,
    title: 'Work on Your Schedule',
    description: 'Accept or decline any job, anytime. Full flexibility to build a workload that fits your life.',
  },
  {
    icon: Banknote,
    title: 'Fast M-Pesa Payouts',
    description: 'Get paid to M-Pesa within 24 hours of the customer approving your completed job. No chasing invoices.',
  },
  {
    icon: ShieldCheck,
    title: 'Build Your Reputation',
    description: 'A verified profile and customer ratings help you stand out and win more jobs as your career grows.',
  },
]

// ─── Fasta Partner app dashboard mockup ──────────────────────────────────────
function PartnerDashboard() {
  return (
    <div className="relative w-full max-w-[90vw] sm:max-w-sm mx-auto">
      {/* Main card — dark, professional feel distinct from consumer app */}
      <div className="bg-dark rounded-3xl shadow-2xl overflow-hidden border border-white/8">

        {/* Header bar */}
        <div className="px-5 pt-5 pb-4 border-b border-white/8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/40 text-[10px] font-body uppercase tracking-widest">Fasta Partner</p>
              <p className="text-white font-heading font-bold text-sm mt-0.5">Kevin Omondi</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-[10px] font-body">Available</span>
            </div>
          </div>
        </div>

        {/* Earnings panel */}
        <div className="px-5 py-4 border-b border-white/8">
          <p className="text-white/40 text-[10px] font-body mb-1.5">This Month</p>
          <p className="font-heading font-black text-white text-3xl tracking-tight">KSh 42,800</p>
          <p className="text-green-400 text-xs font-body mt-1">+18% from last month</p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 divide-x divide-white/8 border-b border-white/8">
          {[
            { label: 'Jobs',    value: '32'  },
            { label: 'Rating',  value: '4.9' },
            { label: 'On-Time', value: '98%' },
          ].map((stat) => (
            <div key={stat.label} className="py-3 flex flex-col items-center">
              <p className="font-heading font-bold text-white text-sm">{stat.value}</p>
              <p className="text-white/35 text-[9px] font-body mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Incoming job request */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-white/40 text-[9px] font-body uppercase tracking-widest">New Request</p>
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
          </div>
          <div className="bg-white/6 rounded-2xl p-3.5">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <p className="text-white font-heading font-bold text-sm">Electrical Repair</p>
                <p className="text-white/40 text-[10px] font-body mt-0.5">Westlands · 2.1 km away</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-brand font-heading font-bold text-sm">KSh 1,500</p>
                <p className="text-white/30 text-[9px] font-body mt-0.5">Est. 2 hrs</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 py-2 bg-brand text-white text-[10px] font-bold rounded-xl font-body">
                Accept
              </button>
              <button className="flex-1 py-2 bg-white/10 text-white/60 text-[10px] rounded-xl font-body">
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge — no emoji, clean text */}
      <motion.div
        className="absolute -top-3 -right-3 bg-green-500 text-white text-[10px] font-semibold font-body px-3 py-1.5 rounded-full shadow-lg hidden sm:flex items-center gap-1.5"
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      >
        <Banknote size={11} />
        Paid within 24h
      </motion.div>

      <motion.div
        className="absolute -bottom-3 -left-3 bg-brand text-white text-[10px] font-semibold font-body px-3 py-1.5 rounded-full shadow-lg hidden sm:flex items-center gap-1.5"
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
      >
        <Briefcase size={11} />
        3 jobs nearby
      </motion.div>

      <p className="text-center text-white/20 text-[10px] font-body mt-6 tracking-wide">
        Illustration only — figures are not real data
      </p>
    </div>
  )
}

// ─── Fasta Partner Section ────────────────────────────────────────────────────
export default function FastaPartner() {
  return (
    <section id="fasta-partner" className="py-24 md:py-32 bg-[#1E2123] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* ── Section label — clearly identifies this as a separate product ── */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Distinct treatment — Fasta Partner is its own product */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white/8 border border-white/10 mb-6">
            <div className="w-5 h-5 rounded-md bg-white/15 flex items-center justify-center shrink-0">
              <Briefcase size={11} className="text-white" />
            </div>
            <span className="text-white/50 text-xs font-semibold font-body uppercase tracking-widest">
              <em>Fasta</em> Partner — Separate App
            </span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Partner Dashboard Visual ─────────────────────── */}
          <motion.div
            className="relative flex items-center justify-center order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Subtle bg glow in charcoal, not brand magenta — reinforces separate identity */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent rounded-3xl blur-2xl scale-90 pointer-events-none" />
            <PartnerDashboard />
          </motion.div>

          {/* ── Right: Copy + Benefits ───────────────────────────────── */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-heading font-black text-white text-3xl sm:text-4xl md:text-5xl lg:text-[52px] tracking-tight leading-[1.05] mb-5">
              Built for Kenya's<br />
              <span className="gradient-text">Skilled Workforce.</span>
            </h2>
            <p className="text-white/55 text-lg font-body leading-relaxed mb-3">
              <em>Fasta</em> Partner is a dedicated app for Fundis and home service experts.
              If you're a plumber, electrician, HVAC technician or handyman —
              this app is your business in your pocket.
            </p>
            {/* Clear separation message */}
            <div className="flex items-center gap-2 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
              <p className="text-white/35 text-sm font-body">
                Download separately from the App Store or Google Play
              </p>
            </div>

            {/* Benefits list */}
            <div className="flex flex-col gap-5 mb-10">
              {BENEFITS.map((benefit, i) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={benefit.title}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.09, duration: 0.5 }}
                  >
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center mt-0.5">
                      <Icon size={18} className="text-white/50" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-white text-sm mb-0.5">{benefit.title}</p>
                      <p className="text-white/45 text-sm font-body leading-relaxed">{benefit.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/15 text-white/50 font-semibold font-body rounded-full cursor-default border border-white/10">
                <Download size={15} />
                <em>Fasta</em> Partner — Coming soon
              </div>
              <a
                href="/partner-terms"
                className="inline-flex items-center gap-1.5 text-white/40 text-sm font-semibold font-body hover:text-brand transition-colors"
              >
                Partner terms
                <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
