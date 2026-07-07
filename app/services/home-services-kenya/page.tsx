import type { Metadata } from 'next'
import { Wrench } from 'lucide-react'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'On-Demand Home Services in Kenya — Book Instantly',
  description: 'Find verified home service professionals in Kenya. Electricians, plumbers, HVAC technicians and handymen available on demand via the Fasta app.',
  alternates: { canonical: 'https://fastaapp.co/services/home-services-kenya' },
  openGraph: {
    title: 'On-Demand Home Services in Kenya | Fasta',
    description: 'Book verified electricians, plumbers, HVAC technicians and handymen in Kenya in minutes.',
    url: 'https://fastaapp.co/services/home-services-kenya',
  },
}

export default function HomeServicesKenyaPage() {
  return (
    <ServicePage
      slug="home-services-kenya"
      name="Home Services Professional"
      headline="On-Demand Home Services in Kenya"
      subheadline="Kenya's fastest way to book a verified home service professional. Electricians, plumbers, HVAC technicians and handymen — all on one app."
      description="Find verified home service professionals in Kenya including electricians, plumbers, HVAC and handymen via the Fasta app."
      icon={Wrench}
      problems={[
        { title: 'Electrical Faults & Repairs', description: 'From tripping breakers to new installations — verified electricians available on demand in Nairobi.' },
        { title: 'Plumbing Issues', description: 'Leaking pipes, blocked drains and water heater problems fixed fast by verified plumbers.' },
        { title: 'AC & HVAC Problems', description: 'AC not cooling, strange noises or new installations — verified HVAC technicians matched quickly.' },
        { title: 'General Home Repairs', description: 'Furniture assembly, mounting, door repairs and general handyman jobs — book for today or tomorrow.' },
        { title: 'Emergency Callouts', description: 'Urgent home issues that can\'t wait. Fasta matches you with the nearest available professional fast.' },
        { title: 'Routine Maintenance', description: 'Book maintenance visits for today or tomorrow — easy to rebook whenever you need it.' },
      ]}
      reasons={[
        { title: 'All Services in One App', description: 'Electricians, plumbers, HVAC and handymen — book any home service professional from a single app.' },
        { title: 'Document Verified Professionals', description: 'Every pro is background-checked and ID-verified before they join Fasta — national ID, police clearance, and trade registration reviewed by our team.' },
        { title: 'Fast Matching Across Nairobi', description: 'Get matched with the nearest available verified fundi — fast. Track everything live in the app.' },
        { title: 'Transparent Pricing & M-Pesa', description: 'See prices upfront and pay cashlessly via M-Pesa through the app. Payment released only after you approve the finished job.' },
      ]}
      faqs={[
        { question: 'What home services are available on Fasta in Kenya?', answer: 'Fasta offers electrical, plumbing, HVAC and handyman services in Kenya.' },
        { question: 'How do I book a home service professional in Nairobi?', answer: 'Download the Fasta app, choose your service, and get matched with a verified professional near you.' },
        { question: 'Is Fasta available outside Nairobi?', answer: 'Fasta is launching first in Nairobi with expansion across Kenya underway. Download the app to check availability in your area.' },
        { question: 'How does Fasta verify its professionals?', answer: 'All Fasta professionals go through ID verification, police clearance check, and trade registration review before being approved on the platform.' },
        { question: 'How do I find a fundi in Kenya?', answer: 'Fasta is the easiest way to find a trusted fundi in Kenya. Download the app and book a verified tradesperson.' },
      ]}
      relatedLinks={[
        { label: 'Find an Electrician in Kenya', href: '/services/electrician-kenya' },
        { label: 'Book a Plumber in Kenya', href: '/services/plumbing-kenya' },
        { label: 'AC & HVAC Services Kenya', href: '/services/hvac-kenya' },
        { label: 'Find a Handyman in Kenya', href: '/services/handyman-kenya' },
      ]}
    />
  )
}
