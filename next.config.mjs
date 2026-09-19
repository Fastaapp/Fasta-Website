/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/waitlist',
        permanent: false, // temporary redirect — easy to remove when we go live
      },
    ]
  },
}

export default nextConfig
