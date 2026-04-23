'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

function AppleBtn() {
  return (
    <motion.a
      href="#"
      aria-label="Download on App Store"
      className="flex items-center gap-3 px-6 py-4 bg-white text-dark rounded-2xl hover:bg-gray-50 transition-all shadow-xl"
      whileHover={{ scale: 1.04, y: -3 }}
      whileTap={{ scale: 0.96 }}
    >
      <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
      <div className="text-left leading-tight">
        <div className="text-[10px] text-dark/50 font-body">Download on the</div>
        <div className="text-base font-heading font-bold">App Store</div>
      </div>
    </motion.a>
  )
}

function PlayBtn() {
  return (
    <motion.a
      href="#"
      aria-label="Get it on Google Play"
      className="flex items-center gap-3 px-6 py-4 bg-white/15 backdrop-blur-sm border border-white/25 text-white rounded-2xl hover:bg-white/20 transition-all"
      whileHover={{ scale: 1.04, y: -3 }}
      whileTap={{ scale: 0.96 }}
    >
      <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.18 23.76c.35.2.74.24 1.11.1l12.35-7.13-2.78-2.79-10.68 9.82zM.5 1.33C.18 1.65 0 2.17 0 2.85v18.3c0 .68.18 1.2.5 1.52l.08.08 10.24-10.24v-.24L.58 1.25.5 1.33zM20.13 10.9l-2.61-1.51-3.1 3.1 3.1 3.1 2.63-1.52c.75-.43.75-1.14-.02-1.57v-.6zM4.29.14L16.64 7.27l-2.78 2.78L3.18.23c.38-.15.78-.1 1.11.11v-.2z"/>
      </svg>
      <div className="text-left leading-tight">
        <div className="text-[10px] text-white/60 font-body">Get it on</div>
        <div className="text-base font-heading font-bold">Google Play</div>
      </div>
    </motion.a>
  )
}

export default function FinalCTA() {
  return (
    <section id="download" className="relative py-28 md:py-40 overflow-hidden">
      {/* Background: brand gradient */}
      <div className="absolute inset-0 bg-brand-gradient" />

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large soft circles */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-brand-dark/40 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl" />
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.03] noise" />
      </div>

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">

        {/* Eyebrow */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white/90 text-xs font-semibold font-body mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          AVAILABLE NOW IN NAIROBI
        </motion.div>

        {/* Main headline */}
        <motion.h2
          className="font-heading font-black text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.02] mb-6"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Your Home Deserves<br />
          the Best.
        </motion.h2>

        {/* Sub */}
        <motion.p
          className="text-white/75 text-lg md:text-xl font-body leading-relaxed mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Download <em>Fasta</em> and get trusted home service professionals at your doorstep in minutes.
          Fast, simple, reliable.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <AppleBtn />
          <PlayBtn />
        </motion.div>

        {/* Social proof */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-white/60 text-sm font-body"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <span className="flex items-center gap-1.5">
            <Star size={13} className="text-yellow-400 fill-yellow-400" />
            4.9/5 Rating
          </span>
          <span className="w-px h-4 bg-white/20" />
          <span>50,000+ Downloads</span>
          <span className="w-px h-4 bg-white/20" />
          <span>10,000+ Verified Pros</span>
        </motion.div>
      </div>
    </section>
  )
}
