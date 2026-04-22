import type { Metadata } from 'next'
import { Wind } from 'lucide-react'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'AC Repair & HVAC Services in Kenya — Book Fast',
  description: 'Book a verified AC technician in Nairobi for installation, servicing and repair. Fast response, transparent pricing on the Fasta app.',
  alternates: { canonical: 'https://fastaapp.co/services/hvac-kenya' },
  openGraph: {
    title: 'AC Repair & HVAC Services in Kenya | Fasta',
    description: 'Book a verified AC technician in Nairobi. Installation, servicing and repair — fast response.',
    url: 'https://fastaapp.co/services/hvac-kenya',
  },
}

export default function HvacKenyaPage() {
  return (
    <ServicePage
      slug="hvac-kenya"
      name="HVAC Technician"
      headline="AC Repair & HVAC Services in Kenya — Book Fast"
      subheadline="AC not cooling? Strange noises or leaks? Get a verified HVAC technician in Nairobi dispatched in minutes via the Fasta app."
      description="Book verified HVAC and AC technicians in Kenya for installation, servicing and repairs via the Fasta app."
      icon={Wind}
      problems={[
        { title: 'AC Not Cooling Properly', description: 'Refrigerant issues, dirty filters or compressor faults — our technicians diagnose and fix the root cause.' },
        { title: 'AC Making Strange Noises', description: 'Rattling, buzzing or grinding sounds from your unit indicate internal faults that need urgent attention.' },
        { title: 'Water Leaking from AC Unit', description: 'Blocked drainage lines or frozen evaporator coils cause water leaks. We fix them before they cause water damage.' },
        { title: 'New AC Installation', description: 'Professional installation of split units, cassette units and ducted systems in homes and offices across Kenya.' },
        { title: 'AC Servicing & Maintenance', description: 'Regular cleaning, gas top-up and servicing to keep your AC running efficiently and extend its lifespan.' },
        { title: 'AC Not Turning On', description: 'Electrical faults, remote issues or control board failures. Our technicians pinpoint the issue and fix it fast.' },
      ]}
      reasons={[
        { title: 'Certified HVAC Technicians', description: 'Fasta HVAC pros are trained, certified and experienced with all major AC brands sold in Kenya.' },
        { title: 'Fast Response in Nairobi', description: 'Get matched with the nearest available AC technician in minutes. Same-day service available.' },
        { title: 'All Major Brands Covered', description: 'LG, Samsung, Midea, Daikin, Panasonic, Haier and more — our technicians work on them all.' },
        { title: 'Transparent Pricing', description: 'See an estimated cost before confirming. No hidden labour charges or parts markups.' },
      ]}
      faqs={[
        { question: 'How do I book an AC technician in Nairobi?', answer: 'Download the Fasta app, select HVAC, and get matched with a verified AC technician near you in minutes.' },
        { question: 'How often should I service my AC in Kenya?', answer: 'In Kenya\'s dusty environment, AC units should be serviced every 3-6 months. Fasta makes it easy to schedule regular maintenance.' },
        { question: 'Can Fasta install a new AC unit?', answer: 'Yes. Fasta technicians handle full AC installations including mounting, piping, electrical connections and commissioning.' },
        { question: 'Which AC brands do Fasta technicians work on?', answer: 'Our technicians are experienced with all major brands including LG, Samsung, Midea, Daikin, Panasonic, Haier and more.' },
      ]}
      relatedLinks={[
        { label: 'Find an Electrician in Kenya', href: '/services/electrician-kenya' },
        { label: 'Book a Plumber in Kenya', href: '/services/plumbing-kenya' },
        { label: 'Handyman Services Kenya', href: '/services/handyman-kenya' },
        { label: 'All Home Services Kenya', href: '/services/home-services-kenya' },
      ]}
    />
  )
}
