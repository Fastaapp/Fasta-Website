import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Fasta',
  description: 'Learn how FASTA APP GLOBAL LIMITED collects, uses, shares, and protects your personal data when you use our home services app in Kenya.',
  alternates: { canonical: 'https://fastaapp.co/privacy' },
}

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-20">
      <h1 className="font-heading font-black text-dark text-4xl md:text-5xl tracking-tight mb-3">
        Privacy Policy
      </h1>
      <p className="text-dark/40 text-sm font-body mb-12">Last updated: 6 July 2026</p>

      <div className="prose prose-slate max-w-none font-body text-dark/70 leading-relaxed space-y-10">

        <section>
          <h2 className="font-heading font-bold text-dark text-xl mb-3">1. Who we are</h2>
          <p>
            FASTA APP GLOBAL LIMITED ("Fasta", "we", "us", "our") operates the Fasta mobile application
            and website at fastaapp.co. We connect households in Kenya with verified home service
            professionals. This Privacy Policy explains how we collect, use, share, and protect your
            personal information when you use our services.
          </p>
          <p className="mt-3">
            For questions, contact us at: <a href="mailto:support@fastaapp.co" className="text-brand underline">support@fastaapp.co</a>
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-xl mb-3">2. Information we collect</h2>
          <p className="mb-3">We collect information you provide directly and information generated through your use of the app:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Account information:</strong> name, phone number, email address, and profile photo.</li>
            <li><strong>Location data:</strong> your device location to match you with nearby professionals and track job progress.</li>
            <li><strong>Payment information:</strong> M-Pesa transaction references. We do not store full payment credentials.</li>
            <li><strong>Job details:</strong> service type, address, notes, photos, and booking history.</li>
            <li><strong>Device information:</strong> device type, operating system, app version, and unique device identifiers.</li>
            <li><strong>Usage data:</strong> how you interact with the app, features used, and session duration.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-xl mb-3">3. How we use your information</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>To match you with available, verified professionals near you.</li>
            <li>To process bookings and facilitate M-Pesa payments.</li>
            <li>To send booking confirmations, job status updates, and receipts via SMS or in-app notifications.</li>
            <li>To improve our matching algorithms and service quality.</li>
            <li>To resolve disputes and provide customer support.</li>
            <li>To comply with legal obligations under Kenyan law.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-xl mb-3">4. Sharing your information</h2>
          <p className="mb-3">We do not sell your personal data. We share information only as follows:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>With professionals:</strong> your first name, general area, and job details are shared with the professional assigned to your booking.</li>
            <li><strong>With payment providers:</strong> M-Pesa transaction data is processed by Safaricom under their own privacy terms.</li>
            <li><strong>With service providers:</strong> analytics, hosting, and communications tools that support our operations, under data processing agreements.</li>
            <li><strong>Legal requirements:</strong> if required by Kenyan law, court order, or regulatory authority.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-xl mb-3">5. Data retention</h2>
          <p>
            We retain your account data for as long as your account is active. Booking history is
            retained for 3 years for legal and dispute resolution purposes. If you delete your account,
            we remove your personal data within 30 days, except where retention is required by law.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-xl mb-3">6. Your rights</h2>
          <p className="mb-3">You have the right to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Access the personal data we hold about you.</li>
            <li>Correct inaccurate data.</li>
            <li>Request deletion of your account and associated data.</li>
            <li>Withdraw consent for marketing communications at any time.</li>
            <li>Lodge a complaint with the Office of the Data Protection Commissioner (ODPC) of Kenya.</li>
          </ul>
          <p className="mt-3">
            To exercise your rights, visit <a href="/delete-account" className="text-brand underline">fastaapp.co/delete-account</a> or
            email <a href="mailto:support@fastaapp.co" className="text-brand underline">support@fastaapp.co</a>.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-xl mb-3">7. Security</h2>
          <p>
            We use industry-standard security measures including HTTPS encryption, secure cloud
            infrastructure, and restricted access controls. No method of transmission over the
            internet is 100% secure, but we take all reasonable steps to protect your information.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-xl mb-3">8. Children</h2>
          <p>
            Fasta is not intended for use by persons under 18 years of age. We do not knowingly
            collect data from children. If you believe a child has provided us with personal
            information, please contact us and we will delete it.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-xl mb-3">9. Professionals (Fundis)</h2>
          <p>
            For professionals we additionally collect and process verification documents (national ID, police
            clearance certificate, trade/business registration), payout details (M-Pesa number), and location
            while you are online to match nearby jobs. Verification documents are stored securely, used only
            for vetting and compliance, and retained as required by law.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-xl mb-3">10. Cookies</h2>
          <p>
            This website may use essential cookies required for site functionality. We do not currently use
            marketing or analytics cookies. If this changes, we will update this policy and provide appropriate
            notice.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-xl mb-3">11. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of significant
            changes via the app or email. Continued use of Fasta after changes constitutes
            acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-xl mb-3">12. Contact &amp; Data Protection</h2>
          <p>
            FASTA APP GLOBAL LIMITED<br />
            Nairobi, Kenya<br />
            Email: <a href="mailto:support@fastaapp.co" className="text-brand underline">support@fastaapp.co</a>
          </p>
          <p className="mt-3">
            For data protection enquiries or to exercise your rights under the Kenya Data Protection Act,
            contact us at the email above. You may also lodge a complaint with the Office of the Data
            Protection Commissioner (ODPC) of Kenya.
          </p>
        </section>

      </div>
    </div>
  )
}
