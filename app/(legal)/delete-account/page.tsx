import type { Metadata } from 'next'
import { Trash2, Mail, Clock, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Delete Your Account — Fasta',
  description: 'Request deletion of your Fasta account and personal data.',
  alternates: { canonical: 'https://fastaapp.co/delete-account' },
}

const STEPS = [
  {
    icon: Mail,
    title: 'Submit your request',
    body: 'Email us at support@fastaapp.co from the email address linked to your Fasta account. Include your registered phone number in the email.',
  },
  {
    icon: ShieldCheck,
    title: 'We verify your identity',
    body: 'We will send a confirmation code to your registered phone number to verify the request is from you.',
  },
  {
    icon: Clock,
    title: 'Deletion within 30 days',
    body: 'Once verified, your account and personal data will be permanently deleted within 30 days. You will receive a confirmation email when complete.',
  },
]

export default function DeleteAccountPage() {
  return (
    <div className="max-w-2xl mx-auto px-5 sm:px-8 py-20">

      {/* Header */}
      <div className="mb-12">
        <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-6">
          <Trash2 size={24} className="text-red-500" />
        </div>
        <h1 className="font-heading font-black text-dark text-4xl md:text-5xl tracking-tight mb-4">
          Delete Your Account
        </h1>
        <p className="text-dark/55 text-lg font-body leading-relaxed">
          You can request the permanent deletion of your Fasta account and all associated personal
          data at any time. This action cannot be undone.
        </p>
      </div>

      {/* What gets deleted */}
      <div className="bg-gray-50 rounded-2xl p-6 mb-10">
        <h2 className="font-heading font-bold text-dark text-lg mb-4">What gets deleted</h2>
        <ul className="space-y-2.5">
          {[
            'Your name, phone number, and email address',
            'Your profile photo and account preferences',
            'Your saved addresses',
            'Your booking history and job notes',
            'Any reviews or ratings you have submitted',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm font-body text-dark/65">
              <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* What is retained */}
      <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 mb-10">
        <h2 className="font-heading font-bold text-dark text-lg mb-3">What we retain</h2>
        <p className="text-sm font-body text-dark/60 leading-relaxed">
          We are required by Kenyan law to retain certain financial transaction records (M-Pesa
          references and job amounts) for up to 3 years for tax and legal compliance purposes.
          This data is anonymised and not linked to your identity after deletion.
        </p>
      </div>

      {/* Steps */}
      <h2 className="font-heading font-bold text-dark text-xl mb-6">How to delete your account</h2>
      <div className="space-y-5 mb-12">
        {STEPS.map((step, i) => (
          <div key={step.title} className="flex gap-4">
            <div className="shrink-0 flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-dark flex items-center justify-center">
                <step.icon size={16} className="text-white" />
              </div>
              {i < STEPS.length - 1 && (
                <div className="w-px flex-1 bg-gray-200 mt-2" />
              )}
            </div>
            <div className="pb-6">
              <p className="font-heading font-bold text-dark text-base mb-1">{step.title}</p>
              <p className="text-sm font-body text-dark/55 leading-relaxed">{step.body}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <a
        href="mailto:support@fastaapp.co?subject=Account%20Deletion%20Request&body=Hi%20Fasta%20team%2C%0A%0AI%20would%20like%20to%20request%20the%20deletion%20of%20my%20account.%0A%0ARegistered%20phone%20number%3A%20%5Byour%20number%5D%0ARegistered%20email%3A%20%5Byour%20email%5D%0A%0AThank%20you."
        className="inline-flex items-center gap-2.5 bg-dark text-white font-body font-bold text-sm px-6 py-4 rounded-2xl hover:bg-dark/90 transition-colors"
      >
        <Mail size={16} />
        Email us to delete your account
      </a>

      <p className="text-xs text-dark/35 font-body mt-4">
        Opens your email app with a pre-filled request. Send from your registered email address.
      </p>

    </div>
  )
}
