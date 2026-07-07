import type { Metadata } from 'next'
import { Zap } from 'lucide-react'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Find a Trusted Electrician in Kenya — Fast',
  description: 'Book a verified electrician in Nairobi in minutes. Wiring, repairs, installations — qualified pros on the Fasta app.',
  alternates: { canonical: 'https://fastaapp.co/services/electrician-kenya' },
  openGraph: {
    title: 'Find a Trusted Electrician in Kenya — Fast | Fasta',
    description: 'Book a verified electrician in Nairobi in minutes. Document-checked, on-demand.',
    url: 'https://fastaapp.co/services/electrician-kenya',
  },
}

export default function ElectricianKenyaPage() {
  return (
    <ServicePage
      slug="electrician-kenya"
      name="Electrician"
      headline="Find a Trusted Electrician in Kenya — Fast"
      subheadline="Book a verified, background-checked electrician in Nairobi in minutes. No cold calls, no waiting — just tap and get it fixed."
      description="Book a verified electrician in Kenya for wiring, repairs, and installations via the Fasta app."
      icon={Zap}
      problems={[
        { title: 'Power Outages & Tripping Breakers', description: 'Circuit breakers tripping repeatedly or rooms losing power. Our electricians diagnose and fix the root cause safely.' },
        { title: 'Faulty Wiring & Sockets', description: 'Sparking sockets, loose wiring or dead outlets are serious hazards. Get a verified pro to fix them fast.' },
        { title: 'New Installations', description: 'Installing new lighting, ceiling fans, or additional power points in your home or office done correctly the first time.' },
        { title: 'Water Heater & Geyser Issues', description: 'Electric water heater not working? Our electricians handle geyser installations, fault finding and repairs.' },
        { title: 'Generator & Inverter Setup', description: 'Installation and connection of backup power systems to protect your home from Kenya Power outages.' },
        { title: 'Safety Inspections', description: 'Full electrical safety audit of your home or business to identify risks before they become expensive problems.' },
      ]}
      reasons={[
        { title: 'Document Verified Pros', description: 'Every Fasta electrician is ID-verified and background-checked before joining the platform — national ID, police clearance, and trade registration reviewed by our team.' },
        { title: 'Fast Matching', description: 'Get matched with the nearest available verified electrician — fast. Track everything live in the app.' },
        { title: 'Transparent Pricing', description: 'Know the estimated cost before the pro arrives. No surprise bills or hidden charges.' },
        { title: 'Cashless M-Pesa Payment', description: 'Cashless M-Pesa payment through the app. Your payment is only released to the fundi after you approve the finished job.' },
      ]}
      faqs={[
        { question: 'How do I find a qualified electrician in Nairobi?', answer: 'Download the Fasta app, select Electrical, and you\'ll be matched with a verified electrician near you.' },
        { question: 'How much does an electrician cost in Kenya?', answer: 'Costs vary by job type. Fasta shows you a price estimate before your pro arrives so there are no surprises.' },
        { question: 'How does Fasta verify its electricians?', answer: 'All Fasta electricians go through ID verification, police clearance check, and trade registration review before they can take jobs.' },
        { question: 'Can I get an electrician in Nairobi on the same day?', answer: 'Many Nairobi jobs can be handled the same day, depending on fundi availability. The app shows you live matching status.' },
      ]}
      relatedLinks={[
        { label: 'Find a Plumber in Kenya', href: '/services/plumbing-kenya' },
        { label: 'AC & HVAC Services Kenya', href: '/services/hvac-kenya' },
        { label: 'Handyman Services Kenya', href: '/services/handyman-kenya' },
        { label: 'All Home Services Kenya', href: '/services/home-services-kenya' },
      ]}
    />
  )
}
