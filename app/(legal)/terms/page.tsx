import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — Fasta',
  description: 'Read the terms and conditions that govern your use of the Fasta app and home services platform in Kenya, including bookings, payments, and cancellations.',
  alternates: { canonical: 'https://fastaapp.co/terms' },
}

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-20">
      <h1 className="font-heading font-black text-dark text-4xl md:text-5xl tracking-tight mb-3">
        Terms of Service
      </h1>
      <p className="text-dark/40 text-sm font-body mb-12">Last updated: 6 July 2026</p>

      <div className="prose prose-slate max-w-none font-body text-dark/70 leading-relaxed space-y-10">

        <section>
          <h2 className="font-heading font-bold text-dark text-xl mb-3">1. Acceptance of terms</h2>
          <p>
            By downloading, registering for, or using the Fasta application or website ("Service"),
            you agree to be bound by these Terms of Service ("Terms"). If you do not agree, do not
            use the Service. These Terms constitute a legally binding agreement between you and
            Fasta Technologies Ltd, a company registered in Kenya.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-xl mb-3">2. The Service</h2>
          <p>
            Fasta is a marketplace platform that connects customers ("Users") with independent home
            service professionals ("Pros"). Fasta is not itself a home services company and does not
            employ Pros. We provide the platform, matching technology, and payment infrastructure.
            The contract for services is between you and the Pro directly.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-xl mb-3">3. Eligibility</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>You must be at least 18 years of age to use Fasta.</li>
            <li>You must provide accurate registration information including your real name and a valid Kenyan phone number.</li>
            <li>One account per person. You may not create accounts on behalf of others without authorisation.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-xl mb-3">4. Bookings and cancellations</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>When you book a service, you are requesting a Pro to attend your specified location at the agreed time.</li>
            <li>Cancellations made less than 1 hour before a confirmed booking may incur a cancellation fee.</li>
            <li>Fasta reserves the right to cancel bookings if a suitable Pro cannot be found, if you are unreachable, or if the booking violates these Terms.</li>
            <li>Repeated no-shows or last-minute cancellations may result in account suspension.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-xl mb-3">5. Payments</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>All payments are processed via M-Pesa. Prices displayed include applicable taxes.</li>
            <li>Payment is due upon completion of the job unless otherwise agreed.</li>
            <li>Subscription plans (Fasta Plus, Fasta Elite) are billed monthly and renew automatically until cancelled.</li>
            <li>Refunds are handled on a case-by-case basis. Contact support within 48 hours of a completed job to raise a dispute.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-xl mb-3">6. Your conduct</h2>
          <p className="mb-3">You agree not to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Use the Service for any unlawful purpose.</li>
            <li>Harass, threaten, or abuse Pros or Fasta staff.</li>
            <li>Circumvent the platform by paying Pros directly to avoid platform fees after being matched through Fasta.</li>
            <li>Post false reviews or manipulate the rating system.</li>
            <li>Attempt to reverse-engineer, scrape, or disrupt the platform.</li>
          </ul>
          <p className="mt-3">Violation of these rules may result in immediate account termination.</p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-xl mb-3">7. Limitation of liability</h2>
          <p>
            Fasta acts as an intermediary platform. To the maximum extent permitted by Kenyan law,
            Fasta is not liable for: the quality of work performed by Pros; any loss, damage, or
            injury arising from a job; or any indirect, incidental, or consequential damages arising
            from your use of the Service.
          </p>
          <p className="mt-3">
            Our total liability to you in any calendar month shall not exceed the total fees paid
            by you to Fasta in that month.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-xl mb-3">8. Intellectual property</h2>
          <p>
            All content on the Fasta platform — including the name, logo, design, software, and
            copy — is owned by Fasta Technologies Ltd and protected by Kenyan and international
            intellectual property laws. You may not reproduce or use any of it without our written
            permission.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-xl mb-3">9. Termination</h2>
          <p>
            You may delete your account at any time via the app or by visiting{' '}
            <a href="/delete-account" className="text-brand underline">fastaapp.co/delete-account</a>.
            We may suspend or terminate your account if you breach these Terms. Active subscription
            payments will not be refunded upon termination for breach.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-xl mb-3">10. Governing law</h2>
          <p>
            These Terms are governed by the laws of Kenya. Any disputes shall be subject to the
            exclusive jurisdiction of the courts of Nairobi, Kenya.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-xl mb-3">11. Changes to these terms</h2>
          <p>
            We may update these Terms from time to time. We will notify you of material changes
            via the app or email at least 14 days before they take effect. Continued use of the
            Service after the effective date constitutes acceptance.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-xl mb-3">12. Contact</h2>
          <p>
            Fasta Technologies Ltd<br />
            Nairobi, Kenya<br />
            Email: <a href="mailto:support@fastaapp.co" className="text-brand underline">support@fastaapp.co</a>
          </p>
        </section>

      </div>
    </div>
  )
}
