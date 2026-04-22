import type { Metadata } from 'next'
import { Droplets } from 'lucide-react'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Book a Plumber in Kenya in Minutes',
  description: 'Find a trusted plumber in Nairobi fast. Leaks, blocked drains, pipe repairs and installations — verified pros on the Fasta app. Same-day service.',
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
        { title: 'Verified & Skilled Plumbers', description: 'Every Fasta plumber is background-checked and skills-assessed. You get someone who actually knows the job.' },
        { title: 'Same-Day Response in Nairobi', description: 'Plumbing emergencies can\'t wait. Fasta dispatches the nearest available plumber to you fast.' },
        { title: 'Upfront Pricing', description: 'See an estimated cost before confirming the booking. No inflated bills after the work is done.' },
        { title: 'Pay Securely via M-Pesa', description: 'All payments go through the app — M-Pesa or card. No cash required.' },
      ]}
      faqs={[
        { question: 'How do I find a plumber in Nairobi quickly?', answer: 'Download the Fasta app, select Plumbing, and get matched with a verified plumber near you in minutes.' },
        { question: 'Do Fasta plumbers handle emergency callouts?', answer: 'Yes. The Fasta app is available 24/7 and we aim to match you with a plumber within 8 minutes of booking.' },
        { question: 'How much does a plumber cost in Kenya?', answer: 'Fasta shows you a price estimate before your plumber arrives so you always know what to expect.' },
        { question: 'Can I book a plumber for same-day service in Nairobi?', answer: 'Yes — most Fasta bookings are fulfilled same day. In many cases your plumber will arrive within the hour.' },
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
