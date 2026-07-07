import type { Metadata } from 'next'
import { Droplets } from 'lucide-react'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Book a Plumber in Kenya in Minutes',
  description: 'Find a trusted plumber in Nairobi fast. Leaks, blocked drains, pipe repairs and installations — verified pros on the Fasta app.',
  alternates: { canonical: 'https://fastaapp.co/services/plumbing-kenya' },
  openGraph: {
    title: 'Book a Plumber in Kenya in Minutes | Fasta',
    description: 'Find a trusted plumber in Nairobi fast. Leaks, drains, installations — verified pros on demand.',
    url: 'https://fastaapp.co/services/plumbing-kenya',
  },
}

export default function PlumbingKenyaPage() {
  return (
    <ServicePage
      slug="plumbing-kenya"
      name="Plumber"
      headline="Book a Trusted Plumber in Kenya in Minutes"
      subheadline="Leaking pipes, blocked drains, or low water pressure? Get a verified plumber in Nairobi dispatched fast — no calls, just the app."
      description="Book a verified plumber in Kenya for leaks, drain issues, pipe repairs and installations via the Fasta app."
      icon={Droplets}
      problems={[
        { title: 'Leaking Pipes & Burst Pipes', description: 'Water damage escalates fast. Our plumbers locate and fix leaks quickly to minimise damage to your property.' },
        { title: 'Blocked & Slow Drains', description: 'Kitchen, bathroom or outdoor drains blocked? We clear blockages using professional tools and techniques.' },
        { title: 'Low Water Pressure', description: 'Diagnosing and fixing the cause of low pressure — from blocked pipes to faulty pressure valves.' },
        { title: 'Toilet Repairs & Installations', description: 'Constantly running toilets, broken cisterns or new toilet installations handled cleanly and efficiently.' },
        { title: 'Water Heater & Geyser Installation', description: 'New water heater or boiler installation, replacement, and fault finding by qualified plumbers.' },
        { title: 'Pipe Installations & Re-piping', description: 'Full pipe installations for new builds, renovations or replacement of old or corroded pipework.' },
      ]}
      reasons={[
        { title: 'Document Verified Plumbers', description: 'Every Fasta plumber is background-checked and ID-verified before joining the platform — national ID, police clearance, and trade registration reviewed by our team.' },
        { title: 'Fast Response in Nairobi', description: 'Get matched with the nearest available verified plumber — fast. Track everything live in the app.' },
        { title: 'Upfront Pricing', description: 'See an estimated cost before confirming the booking. No inflated bills after the work is done.' },
        { title: 'Cashless M-Pesa Payment', description: 'Cashless M-Pesa payment through the app. Your payment is only released to the fundi after you approve the finished job.' },
      ]}
      faqs={[
        { question: 'How do I find a plumber in Nairobi quickly?', answer: 'Download the Fasta app, select Plumbing, and get matched with a verified plumber near you.' },
        { question: 'Do Fasta plumbers handle emergency callouts?', answer: 'Fasta supports urgent job requests. Get matched with the nearest available verified plumber — fast.' },
        { question: 'How much does a plumber cost in Kenya?', answer: 'Fasta shows you a price estimate before your plumber arrives so you always know what to expect.' },
        { question: 'Can I book a plumber for same-day service in Nairobi?', answer: 'Many Nairobi jobs can be handled the same day, depending on fundi availability. The app shows you live matching status.' },
      ]}
      relatedLinks={[
        { label: 'Find an Electrician in Kenya', href: '/services/electrician-kenya' },
        { label: 'AC & HVAC Services Kenya', href: '/services/hvac-kenya' },
        { label: 'Handyman Services Kenya', href: '/services/handyman-kenya' },
        { label: 'All Home Services Kenya', href: '/services/home-services-kenya' },
      ]}
    />
  )
}
