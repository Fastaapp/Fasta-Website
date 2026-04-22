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
        { title: 'Electrical Faults & Repairs', description: 'From tripping breakers to new installations — certified electricians available on demand in Nairobi.' },
        { title: 'Plumbing Issues', description: 'Leaking pipes, blocked drains and water heater problems fixed fast by verified plumbers.' },
        { title: 'AC & HVAC Problems', description: 'AC not cooling, strange noises or new installations — certified HVAC technicians dispatched quickly.' },
        { title: 'General Home Repairs', description: 'Furniture assembly, mounting, door repairs and general handyman jobs taken care of same day.' },
        { title: 'Emergency Callouts', description: 'Urgent home issues that can\'t wait. Fasta matches you with the nearest available professional fast.' },
        { title: 'Routine Maintenance', description: 'Schedule regular servicing and maintenance to keep your home in top condition year-round.' },
      ]}
      reasons={[
        { title: 'All Services in One App', description: 'Electricians, plumbers, HVAC and handymen — book any home service professional from a single app.' },
        { title: 'Verified Professionals Only', description: 'Every pro is background-checked, ID-verified and skills-assessed before they join Fasta.' },
        { title: 'Fast Dispatch Across Nairobi', description: 'Average match time under 8 minutes. Same-day service for most home jobs.' },
        { title: 'Transparent Pricing & M-Pesa', description: 'See prices upfront and pay securely via M-Pesa or card through the app.' },
      ]}
      faqs={[
        { question: 'What home services are available on Fasta in Kenya?', answer: 'Fasta offers electrical, plumbing, HVAC and handyman services in Kenya, with more services being added regularly.' },
        { question: 'How do I book a home service professional in Nairobi?', answer: 'Download the Fasta app, choose your service, and get matched with a verified professional near you in minutes.' },
        { question: 'Is Fasta available outside Nairobi?', answer: 'Fasta is currently focused on Nairobi with expansion across Kenya underway. Download the app to check availability in your area.' },
        { question: 'How does Fasta verify its professionals?', answer: 'All Fasta professionals go through ID verification, background checks and skills assessments before being approved on the platform.' },
        { question: 'How do I find a fundi in Kenya?', answer: 'Fasta is the easiest way to find a trusted fundi in Kenya. Download the app and book a verified tradesperson in minutes.' },
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
