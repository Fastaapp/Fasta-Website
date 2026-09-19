/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/((?!waitlist|api|_next|favicon.ico).*)',
        destination: '/waitlist',
        permanent: false, // temporary — remove when we go live
      },
    ]
  },
}

export default nextConfig
