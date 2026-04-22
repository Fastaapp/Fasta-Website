import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SmartBanner from '@/components/SmartBanner'

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SmartBanner />
      <Header />
      <main className="overflow-hidden pt-14">{children}</main>
      <Footer />
    </>
  )
}
