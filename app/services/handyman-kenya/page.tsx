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
        { title: 'Document Verified Handymen', description: 'Every Fasta handyman is background-checked and ID-verified before joining the platform — national ID, police clearance reviewed by our team.' },
        { title: 'No Job Too Small', description: 'Unlike contractors who ignore small jobs, Fasta handymen are ready for quick fixes and odd jobs.' },
        { title: 'Fast Matching', description: 'Get matched with the nearest available verified handyman — fast. Track everything live in the app.' },
        { title: 'Cashless M-Pesa Payment', description: 'Cashless M-Pesa payment through the app. Your payment is only released to the fundi after you approve the finished job.' },
      ]}
      faqs={[
        { question: 'How do I find a reliable handyman in Nairobi?', answer: 'Download the Fasta app, select Handyman, describe the job, and get matched with a verified handyman near you.' },
        { question: 'What jobs does a Fasta handyman do?', answer: 'Furniture assembly, TV mounting, door repairs, general fixing, curtain fitting, wall patching, touch-up painting and much more.' },
        { question: 'How much does a handyman cost in Kenya?', answer: 'Fasta shows you an estimated price before confirming your booking so there are no surprises.' },
        { question: 'Can I book a handyman for the same day in Nairobi?', answer: 'Many Nairobi jobs can be handled the same day, depending on fundi availability. The app shows you live matching status.' },
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
