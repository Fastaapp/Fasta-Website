export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Fasta',
          legalName: 'Fasta Technologies Ltd',
          url: 'https://fastaapp.co',
          logo: 'https://fastaapp.co/logo.png',
          description: 'On-demand home services platform connecting Kenyans with verified plumbers, electricians, HVAC technicians and handymen.',
          foundingDate: '2024',
          foundingLocation: 'Nairobi, Kenya',
          areaServed: { '@type': 'Country', name: 'Kenya' },
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer support',
            email: 'support@fastaapp.co',
            availableLanguage: ['English', 'Swahili'],
          },
          sameAs: [
            'https://twitter.com/fastaapp',
            'https://www.instagram.com/fastaapp',
            'https://www.facebook.com/fastaapp',
          ],
        }),
      }}
    />
  )
}

export function MobileApplicationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'MobileApplication',
          name: 'Fasta – Home Services Kenya',
          operatingSystem: ['ANDROID', 'IOS'],
          applicationCategory: 'LifestyleApplication',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'KES',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            ratingCount: '1200',
            bestRating: '5',
          },
          description: 'Book verified home service professionals in Kenya in minutes. Plumbers, electricians, HVAC technicians and handymen on demand.',
          url: 'https://fastaapp.co',
          downloadUrl: 'https://fastaapp.co/#download',
          inLanguage: 'en-KE',
          availableOnDevice: 'Mobile',
          countriesSupported: 'KE',
        }),
      }}
    />
  )
}

export function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Fasta Home Services',
          image: 'https://fastaapp.co/logo.png',
          url: 'https://fastaapp.co',
          description: 'On-demand home services in Nairobi and across Kenya. Book verified electricians, plumbers, HVAC and handymen instantly.',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Nairobi',
            addressCountry: 'KE',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: -1.2921,
            longitude: 36.8219,
          },
          areaServed: [
            { '@type': 'City', name: 'Nairobi' },
            { '@type': 'City', name: 'Mombasa' },
            { '@type': 'City', name: 'Kisumu' },
            { '@type': 'Country', name: 'Kenya' },
          ],
          priceRange: 'KES',
          openingHours: 'Mo-Su 00:00-24:00',
          telephone: '+254700000000',
        }),
      }}
    />
  )
}

export function HomepageFaqSchema() {
  const faqs = [
    {
      question: 'How do I find a plumber in Nairobi?',
      answer: 'Download the Fasta app, select Plumbing, and get matched with a verified plumber near you in minutes. No calls needed.',
    },
    {
      question: 'How do I find a trusted electrician in Kenya?',
      answer: 'Use the Fasta app to book a background-checked, verified electrician in Nairobi. Pros arrive fast and payment is secure via M-Pesa.',
    },
    {
      question: 'Is Fasta available outside Nairobi?',
      answer: 'Fasta is currently available in Nairobi with rapid expansion across Kenya planned. Download the app to check availability in your area.',
    },
    {
      question: 'How does Fasta verify its professionals?',
      answer: 'Every Fasta professional goes through background checks, ID verification, and skills assessment before they can accept jobs on the platform.',
    },
    {
      question: 'How do I pay for services on Fasta?',
      answer: 'Pay securely via M-Pesa or card through the Fasta app. No cash handling — payments are fully encrypted and processed in-app.',
    },
    {
      question: 'How quickly can I get a professional?',
      answer: 'Most Fasta jobs are matched within 8 minutes. You can track your professional in real-time on the app.',
    },
  ]

  return (
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
  )
}

export function ServiceSchema({ name, description, url }: { name: string; description: string; url: string }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name,
          description,
          url,
          provider: {
            '@type': 'Organization',
            name: 'Fasta',
            url: 'https://fastaapp.co',
          },
          areaServed: { '@type': 'Country', name: 'Kenya' },
          availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl: 'https://fastaapp.co/#download',
            serviceType: 'Mobile App',
          },
        }),
      }}
    />
  )
}
