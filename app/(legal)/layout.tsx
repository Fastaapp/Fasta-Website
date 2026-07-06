import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SmartBanner from '@/components/SmartBanner'

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SmartBanner />
      <Header />
      <main className="overflow-hidden pt-14 bg-white min-h-screen">{children}</main>
      <Footer />
    </>
  )
}
