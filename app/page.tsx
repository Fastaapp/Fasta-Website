import Header       from '@/components/Header'
import Hero         from '@/components/Hero'
import HowItWorks   from '@/components/HowItWorks'
import Services     from '@/components/Services'
import TrustSafety  from '@/components/TrustSafety'
import Pricing      from '@/components/Pricing'
import FastaPartner from '@/components/ForPros'
import AppPreview   from '@/components/AppPreview'
import FinalCTA     from '@/components/FinalCTA'
import Footer       from '@/components/Footer'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <HowItWorks />
      <Services />
      <TrustSafety />
      <Pricing />
      <FastaPartner />
      <AppPreview />
      <FinalCTA />
      <Footer />
    </main>
  )
}
