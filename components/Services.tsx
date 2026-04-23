'use client'

import { motion } from 'framer-motion'
import {
  Droplets, Zap, Wind, Wrench,
} from 'lucide-react'

const SERVICES = [
  {
    icon: Droplets,
    name: 'Plumbing',
    href: '/services/plumbing-kenya',
    description: 'Leaks, installations, drain issues and pipe repairs handled fast.',
    color: '#BAE6FD',
    iconColor: '#0284C7',
    bg: '#F0F9FF',
  },
  {
    icon: Zap,
    name: 'Electrical',
    href: '/services/electrician-kenya',
    description: 'Wiring, repairs, installations and more. Safe, certified pros.',
    color: '#FEF08A',
    iconColor: '#CA8A04',
    bg: '#FEFCE8',
  },
  {
    icon: Wind,
    name: 'HVAC',
    href: '/services/hvac-kenya',
    description: 'Air conditioner servicing, installation, repair and maintenance.',
    color: '#BAE6FD',
    iconColor: '#0369A1',
    bg: '#EFF6FF',
  },
  {
    icon: Wrench,
    name: 'Handyman',
    href: '/services/handyman-kenya',
    description: 'General repairs, furniture assembly, mounting and odd jobs done right.',
    color: '#FED7AA',
    iconColor: '#C2410C',
    bg: '#FFF7ED',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-dark-50 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-brand/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-16 w-48 h-48 rounded-full bg-brand/5 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* ── Section Header ─────────────────────────────────────── */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block text-brand text-sm font-semibold font-body uppercase tracking-widest mb-4">
            Services
          </span>
          <h2 className="font-heading font-black text-dark text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-4">
            Everything Your<br />
            <span className="gradient-text">Home Needs</span>
          </h2>
          <p className="text-dark/50 text-lg font-body max-w-md mx-auto">
            Four essential home services. One app. Verified professionals on demand.
          </p>
        </motion.div>

        {/* ── Service Cards Grid ─────────────────────────────────── */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <motion.a
                key={service.name}
                href={service.href}
                variants={cardVariant}
                whileHover={{
                  y: -6,
                  boxShadow: '0 20px 40px rgba(224,85,53,0.12)',
                  transition: { duration: 0.25 },
                }}
                className="group relative bg-white rounded-2xl p-5 border border-gray-100 transition-all duration-300 overflow-hidden block"
              >
                {/* Top accent line (appears on hover) */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(90deg, #E05535, #C04020)' }}
                />

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300"
                  style={{ backgroundColor: service.bg }}
                >
                  <Icon size={20} style={{ color: service.iconColor }} />
                </div>

                {/* Text */}
                <h3 className="font-heading font-bold text-dark text-sm md:text-base mb-1.5">
                  {service.name}
                </h3>
                <p className="text-dark/50 text-xs md:text-sm font-body leading-relaxed">
                  {service.description}
                </p>

                {/* CTA hint */}
                <div className="mt-3 flex items-center gap-1 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200">
                  <span className="text-brand text-xs font-semibold font-body">Book now</span>
                  <svg className="w-3 h-3 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.a>
            )
          })}
        </motion.div>

        {/* ── Bottom CTA ─────────────────────────────────────────── */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-dark/50 font-body mb-4">More services coming soon. Get it on your phone today.</p>
          <motion.a
            href="#download"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand text-white font-semibold font-body rounded-full shadow-lg shadow-brand/30 hover:bg-brand-dark transition-colors"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <span>Download <em>Fasta</em></span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
