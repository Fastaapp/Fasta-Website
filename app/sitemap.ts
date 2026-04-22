import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://fastaapp.co'
  const now = new Date()

  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/services/electrician-kenya`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/plumbing-kenya`,    lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/hvac-kenya`,        lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/handyman-kenya`,    lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/home-services-kenya`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
  ]
}
