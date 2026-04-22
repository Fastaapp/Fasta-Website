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
import SmartBanner  from '@/components/SmartBanner'
import {
  OrganizationSchema,
  MobileApplicationSchema,
  LocalBusinessSchema,
  HomepageFaqSchema,
} from '@/components/JsonLd'

export default function Home() {
  return (
    <>
      <OrganizationSchema />
      <MobileApplicationSchema />
      <LocalBusinessSchema />
      <HomepageFaqSchema />

      <SmartBanner />

      <main className="overflow-hidden">
        <Header />

        {/* Hero — primary H1 lives inside Hero component */}
        <Hero />

        {/* How It Works */}
        <section aria-labelledby="how-it-works-heading">
          <HowItWorks />
        </section>

        {/* Services */}
        <section aria-labelledby="services-heading">
          <Services />
        </section>

        {/* Trust & Safety */}
        <section aria-labelledby="trust-heading">
          <TrustSafety />
        </section>

        {/* Pricing */}
        <section aria-labelledby="pricing-heading">
          <Pricing />
        </section>

        {/* Fasta Partner */}
        <section aria-labelledby="partner-heading">
          <FastaPartner />
        </section>

        {/* App Preview */}
        <section aria-labelledby="app-preview-heading">
          <AppPreview />
        </section>

        {/* Final CTA */}
        <FinalCTA />

        <Footer />
      </main>
    </>
  )
}
