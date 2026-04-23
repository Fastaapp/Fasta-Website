'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

export default function SmartBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const dismissed = sessionStorage.getItem('smart-banner-dismissed')
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    if (isMobile && !dismissed) setVisible(true)
  }, [])

  const dismiss = () => {
    sessionStorage.setItem('smart-banner-dismissed', '1')
    setVisible(false)
  }

  if (!visible) return null

  const isIOS = /iPhone|iPad|iPod/i.test(typeof navigator !== 'undefined' ? navigator.userAgent : '')
  const storeUrl = isIOS
    ? 'https://apps.apple.com/app/fasta'
    : 'https://play.google.com/store/apps/details?id=co.fastaapp'

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#2C3033] border-t border-white/10 px-4 py-3 flex items-center gap-3 md:hidden">
      <button onClick={dismiss} className="shrink-0 text-white/50 hover:text-white" aria-label="Dismiss">
        <X size={16} />
      </button>
      <div className="relative w-10 h-10 shrink-0">
        <Image src="/logo-icon.svg" alt="Fasta" fill className="object-contain" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-white text-xs font-semibold font-body leading-tight">
          <em>Fasta</em> – Home Services Kenya
        </p>
        <p className="text-white/50 text-[10px] font-body">Book a pro in minutes</p>
      </div>
      <a
        href={storeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 bg-brand text-white text-xs font-bold font-body px-4 py-2.5 rounded-full"
      >
        Download
      </a>
    </div>
  )
}
