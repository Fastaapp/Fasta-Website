import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Partner Terms — Fasta',
  description: 'Terms and conditions for service professionals (Fundis) joining the Fasta platform in Kenya, including commission, payouts, verification, and conduct.',
  alternates: { canonical: 'https://fastaapp.co/partner-terms' },
}

export default function PartnerTermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-20">
      <h1 className="font-heading font-black text-dark text-4xl md:text-5xl tracking-tight mb-3">
        Partner Terms
      </h1>
      <p className="text-dark/40 text-sm font-body mb-4">For service professionals (Fundis) joining the Fasta platform</p>
      <p className="text-dark/40 text-sm font-body mb-12">Last updated: 7 July 2026</p>

      <div className="prose prose-slate max-w-none font-body text-dark/70 leading-relaxed space-y-10">

        <section>
          <h2 className="font-heading font-bold text-dark text-xl mb-3">1. About these terms</h2>
          <p>
            These Partner Terms govern your participation as an independent service professional ("Fundi",
            "Partner", "you") on the Fasta platform operated by FASTA APP GLOBAL LIMITED ("Fasta", "we",
            "us"). By applying to join or using the Fasta Partner app, you agree to these terms.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-xl mb-3">2. Eligibility and verification</h2>
          <p className="mb-3">To join Fasta as a partner you must:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Be at least 18 years of age and legally authorised to work in Kenya.</li>
            <li>Submit a valid national ID (front and back), a current police clearance certificate, and trade or business registration documentation where applicable.</li>
            <li>Have your documents reviewed and approved by Fasta before you can accept your first job.</li>
            <li>Maintain valid documentation at all times. Fasta reserves the right to re-verify your documents periodically.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-xl mb-3">3. Independent contractor status</h2>
          <p>
            You are an independent contractor, not an employee, agent, or partner of Fasta. You are
            responsible for your own tax obligations, insurance, tools, and conduct. Fasta provides the
            platform and matching technology only.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-xl mb-3">4. Commission and fees</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Fasta charges a commission of <strong>7.5% + VAT (16%)</strong> on each job completed through the platform.</li>
            <li>Commission is automatically deducted before payout. The rate shown in the app at the time of job acceptance is the binding rate.</li>
            <li>Fasta reserves the right to adjust commission rates with 14 days&apos; notice.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-xl mb-3">5. Payouts</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Payment for completed jobs is released to your registered M-Pesa number within <strong>24 hours of the customer approving</strong> the finished job.</li>
            <li>Payouts are not made until the customer confirms job completion in the app.</li>
            <li>You are responsible for keeping your M-Pesa number up to date in the app.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-xl mb-3">6. Job obligations</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Arrive at the agreed time and location. Notify the customer promptly if you are delayed.</li>
            <li>Complete the work to a professional standard and upload completion photos in the app before marking the job done.</li>
            <li>Treat every customer with respect. Harassment, discrimination or misconduct will result in immediate deactivation.</li>
            <li>Do not solicit payment from customers outside the Fasta app or arrange repeat work off-platform for jobs originated through Fasta.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-xl mb-3">7. Disputes and deactivation</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Disputes can be raised by customers at the approval step. Fasta will review and may withhold or adjust payment pending investigation.</li>
            <li>Fasta may deactivate your account for: document fraud, repeated cancellations, customer complaints, conduct violations, or breach of these terms.</li>
            <li>You may appeal a deactivation decision by contacting <a href="mailto:support@fastaapp.co" className="text-brand underline">support@fastaapp.co</a>.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-xl mb-3">8. Changes to these terms</h2>
          <p>
            We may update these Partner Terms from time to time. We will notify you via the Fasta Partner app
            or email at least 14 days before material changes take effect. Continued use of the platform after
            the effective date constitutes acceptance.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-xl mb-3">9. Contact</h2>
          <p>
            FASTA APP GLOBAL LIMITED<br />
            Nairobi, Kenya<br />
            Email: <a href="mailto:support@fastaapp.co" className="text-brand underline">support@fastaapp.co</a>
          </p>
        </section>

      </div>
    </div>
  )
}
