import Link from 'next/link'
import { Download, CheckCircle, ArrowRight, type LucideIcon } from 'lucide-react'
import { ServiceSchema } from './JsonLd'

interface Problem { title: string; description: string }
interface Reason  { title: string; description: string }
interface FaqItem { question: string; answer: string }

interface ServicePageProps {
  slug:        string
  name:        string
  headline:    string
  subheadline: string
  description: string
  icon:        LucideIcon
  problems:    Problem[]
  reasons:     Reason[]
  faqs:        FaqItem[]
  relatedLinks: { label: string; href: string }[]
}

export default function ServicePage({
  slug, name, headline, subheadline, description, icon: Icon,
  problems, reasons, faqs, relatedLinks,
}: ServicePageProps) {
  const url = `https://fastaapp.co/services/${slug}`

  return (
    <>
      <ServiceSchema name={name} description={description} url={url} />

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        className="relative bg-[#1E2123] overflow-hidden py-20 md:py-28"
        style={{ background: 'radial-gradient(ellipse at 60% 0%, #2E1008 0%, #1E2123 60%, #16181A 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#E05535 1px, transparent 1px), linear-gradient(90deg, #E05535 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand/15 mb-6">
            <Icon size={32} className="text-brand" />
          </div>
          <h1 className="font-heading font-black text-white text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-5">
            {headline}
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-body max-w-2xl mx-auto mb-8">
            {subheadline}
          </p>
          <a
            href="/#download"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-white font-semibold font-body rounded-full hover:bg-brand-dark transition-colors shadow-lg shadow-brand/30 text-base"
          >
            <Download size={18} />
            Download <em>Fasta</em> — It&apos;s Free
          </a>
          <p className="text-white/30 text-xs font-body mt-3">Available on iOS & Android</p>
        </div>
      </section>

      {/* ── Common Problems ───────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white" aria-labelledby="problems-heading">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-brand text-sm font-semibold font-body uppercase tracking-widest mb-3">
              Common Issues
            </span>
            <h2 id="problems-heading" className="font-heading font-black text-dark text-3xl md:text-4xl tracking-tight">
              Problems We Solve
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {problems.map((p) => (
              <div key={p.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center mb-4">
                  <CheckCircle size={16} className="text-brand" />
                </div>
                <h3 className="font-heading font-bold text-dark text-base mb-2">{p.title}</h3>
                <p className="text-dark/55 text-sm font-body leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Fasta ─────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-[#F8F8F9]" aria-labelledby="why-fasta-heading">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-brand text-sm font-semibold font-body uppercase tracking-widest mb-3">
              Why Fasta
            </span>
            <h2 id="why-fasta-heading" className="font-heading font-black text-dark text-3xl md:text-4xl tracking-tight">
              Better Than Calling Around
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center mt-0.5">
                  <CheckCircle size={18} className="text-brand" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-dark text-base mb-1">{r.title}</h3>
                  <p className="text-dark/55 text-sm font-body leading-relaxed">{r.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white" aria-labelledby="how-it-works-heading">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <span className="inline-block text-brand text-sm font-semibold font-body uppercase tracking-widest mb-3">
            Simple Process
          </span>
          <h2 id="how-it-works-heading" className="font-heading font-black text-dark text-3xl md:text-4xl tracking-tight mb-12">
            Book in 3 Easy Steps
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Download Fasta', desc: 'Get the free app on iOS or Android.' },
              { step: '02', title: `Select ${name}`, desc: 'Choose your service and describe the job.' },
              { step: '03', title: 'Pro Arrives Fast', desc: 'A verified professional is matched and on their way.' },
            ].map((s) => (
              <div key={s.step} className="flex flex-col items-center">
                <span className="font-heading font-black text-brand text-4xl mb-3">{s.step}</span>
                <h3 className="font-heading font-bold text-dark text-base mb-2">{s.title}</h3>
                <p className="text-dark/55 text-sm font-body">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-[#F8F8F9]" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-10">
            <h2 id="faq-heading" className="font-heading font-black text-dark text-3xl md:text-4xl tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-heading font-bold text-dark text-base mb-2">{faq.question}</h3>
                <p className="text-dark/60 text-sm font-body leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: faqs.map((faq) => ({
                  '@type': 'Question',
                  name: faq.question,
                  acceptedAnswer: { '@type': 'Answer', text: faq.answer },
                })),
              }),
            }}
          />
        </div>
      </section>

      {/* ── Internal Links ────────────────────────────────────────────── */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <p className="text-dark/40 text-xs font-body uppercase tracking-widest mb-4">Other Services</p>
          <div className="flex flex-wrap gap-3">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-dark/60 hover:text-brand transition-colors"
              >
                {link.label}
                <ArrowRight size={13} />
              </Link>
            ))}
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-dark/60 hover:text-brand transition-colors"
            >
              Back to Home
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#1E2123]" aria-labelledby="cta-heading">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <h2 id="cta-heading" className="font-heading font-black text-white text-3xl md:text-4xl tracking-tight mb-4">
            Ready to book a {name.toLowerCase()} in Kenya?
          </h2>
          <p className="text-white/50 font-body mb-8">
            Download <em>Fasta</em> free and get a verified professional at your door in minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://apps.apple.com/app/fasta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-white text-dark font-semibold font-body rounded-2xl hover:bg-gray-100 transition-colors"
            >
              Download on App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=co.fastaapp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-brand text-white font-semibold font-body rounded-2xl hover:bg-brand-dark transition-colors"
            >
              Get it on Google Play
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
