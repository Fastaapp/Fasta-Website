import type { Metadata } from 'next'
import { Wrench } from 'lucide-react'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Find a Trusted Handyman in Kenya — Book Instantly',
  description: 'Book a reliable handyman in Nairobi for repairs, furniture assembly, mounting and odd jobs. Verified pros, fast response on the Fasta app.',
  alternates: { canonical: 'https://fastaapp.co/services/handyman-kenya' },
  openGraph: {
    title: 'Find a Trusted Handyman in Kenya | Fasta',
    description: 'Book a reliable handyman in Nairobi. Repairs, assembly, mounting — verified pros on demand.',
    url: 'https://fastaapp.co/services/handyman-kenya',
  },
}

export default function HandymanKenyaPage() {
  return (
    <ServicePage
      slug="handyman-kenya"
      name="Handyman"
      headline="Find a Trusted Handyman in Kenya — Fast"
      subheadline="From furniture assembly to wall mounting and general repairs — get a reliable, verified handyman in Nairobi dispatched in minutes."
      description="Book a verified handyman in Kenya for repairs, furniture assembly, mounting and general home jobs via the Fasta app."
      icon={Wrench}
      problems={[
        { title: 'Furniture Assembly', description: 'Flatpack furniture from IKEA, Jumia or local stores assembled correctly and efficiently at your home.' },
        { title: 'TV & Shelf Mounting', description: 'Safe, secure wall mounting for TVs, shelves, mirrors and artwork with the right fixings for any wall type.' },
        { title: 'Door & Window Repairs', description: 'Sticking doors, broken hinges, faulty locks or window frame repairs handled by experienced handymen.' },
        { title: 'General Home Repairs', description: 'Patching holes, fixing loose fittings, replacing broken tiles — the small jobs that pile up handled in one visit.' },
        { title: 'Curtain & Blind Fitting', description: 'Professional fitting of curtain rails, rods, blinds and shutters for any window type or wall material.' },
        { title: 'Painting & Touch-Ups', description: 'Small painting jobs, wall touch-ups and minor decorating work done neatly by skilled handymen.' },
      ]}
      reasons={[
        { title: 'Vetted & Reliable Handymen', description: 'Every Fasta handyman is background-checked, ID-verified and rated by previous customers so you know who\'s coming.' },
        { title: 'No Job Too Small', description: 'Unlike contractors who ignore small jobs, Fasta handymen are ready for quick fixes and odd jobs.' },
        { title: 'Same-Day Availability', description: 'Most Fasta handyman bookings are matched within 8 minutes with same-day arrival in Nairobi.' },
        { title: 'Pay via M-Pesa', description: 'Secure in-app payment via M-Pesa or card after the job. No cash, no awkward negotiations.' },
      ]}
      faqs={[
        { question: 'How do I find a reliable handyman in Nairobi?', answer: 'Download the Fasta app, select Handyman, describe the job, and get matched with a verified handyman near you in minutes.' },
        { question: 'What jobs does a Fasta handyman do?', answer: 'Furniture assembly, TV mounting, door repairs, general fixing, curtain fitting, wall patching, touch-up painting and much more.' },
        { question: 'How much does a handyman cost in Kenya?', answer: 'Fasta shows you an estimated price before confirming your booking so there are no surprises.' },
        { question: 'Can I book a handyman for the same day in Nairobi?', answer: 'Yes — most Fasta handyman bookings are fulfilled same day, often within the hour in Nairobi.' },
      ]}
      relatedLinks={[
        { label: 'Find an Electrician in Kenya', href: '/services/electrician-kenya' },
        { label: 'Book a Plumber in Kenya', href: '/services/plumbing-kenya' },
        { label: 'AC & HVAC Services Kenya', href: '/services/hvac-kenya' },
        { label: 'All Home Services Kenya', href: '/services/home-services-kenya' },
      ]}
    />
  )
}
