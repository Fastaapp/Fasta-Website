import type { Metadata } from 'next'
import { Zap } from 'lucide-react'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Find a Trusted Electrician in Kenya — Fast',
  description: 'Book a verified electrician in Nairobi or Kenya in minutes. Wiring, repairs, installations — certified pros available 24/7 on the Fasta app.',
  alternates: { canonical: 'https://fastaapp.co/services/electrician-kenya' },
  openGraph: {
    title: 'Find a Trusted Electrician in Kenya — Fast | Fasta',
    description: 'Book a verified electrician in Nairobi in minutes. Safe, certified, on-demand.',
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
        { title: 'Faulty Wiring & Sockets', description: 'Sparking sockets, loose wiring or dead outlets are serious hazards. Get a certified pro to fix them fast.' },
        { title: 'New Installations', description: 'Installing new lighting, ceiling fans, or additional power points in your home or office done correctly the first time.' },
        { title: 'Water Heater & Geyser Issues', description: 'Electric water heater not working? Our electricians handle geyser installations, fault finding and repairs.' },
        { title: 'Generator & Inverter Setup', description: 'Installation and connection of backup power systems to protect your home from Kenya Power outages.' },
        { title: 'Safety Inspections', description: 'Full electrical safety audit of your home or business to identify risks before they become expensive problems.' },
      ]}
      reasons={[
        { title: 'Background Verified Pros', description: 'Every Fasta electrician is ID-verified, skills-tested and background-checked before joining the platform.' },
        { title: 'Fast Response — Under 8 Minutes', description: 'Our matching system connects you with the nearest available electrician. No long waits, no phone tag.' },
        { title: 'Transparent Pricing', description: 'Know the estimated cost before the pro arrives. No surprise bills or hidden charges.' },
        { title: 'Secure M-Pesa Payment', description: 'Pay safely through the app via M-Pesa or card after the job is done. Zero cash handling.' },
      ]}
      faqs={[
        { question: 'How do I find a certified electrician in Nairobi?', answer: 'Download the Fasta app, select Electrical, and you\'ll be matched with a verified electrician near you in minutes.' },
        { question: 'How much does an electrician cost in Kenya?', answer: 'Costs vary by job type. Fasta shows you a price estimate before your pro arrives so there are no surprises.' },
        { question: 'Are Fasta electricians certified?', answer: 'Yes — all Fasta electricians go through skills assessment, ID verification and background checks before they can take jobs.' },
        { question: 'Can I get an electrician on the same day in Nairobi?', answer: 'Yes. Most Fasta bookings are matched within 8 minutes and the professional arrives the same day, often within the hour.' },
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
