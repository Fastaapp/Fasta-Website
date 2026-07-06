import { ImageResponse } from 'next/og'

export const runtime = 'edge'

async function loadFont(family: string, weight: number): Promise<ArrayBuffer> {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${family.replace(' ', '+')}:wght@${weight}&display=swap`,
    {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    }
  ).then((r) => r.text())
  const url = css.match(/src: url\((.+?\.woff2)\)/)?.[1]
  if (!url) throw new Error(`Cannot find woff2 for ${family} ${weight}`)
  return fetch(url).then((r) => r.arrayBuffer())
}

export async function GET() {
  const [montserrat900, poppins400, poppins600] = await Promise.all([
    loadFont('Montserrat', 900),
    loadFont('Poppins', 400),
    loadFont('Poppins', 600),
  ])

  const B = '#E05535'
  const D = '#2C3033'
  const W = '#FFFFFF'

  const Chip = ({ label }: { label: string }) => (
    <div
      style={{
        border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: 100,
        padding: '8px 22px',
        fontFamily: 'Poppins',
        fontSize: 16,
        color: 'rgba(255,255,255,0.72)',
        display: 'flex',
      }}
    >
      {label}
    </div>
  )

  const Svc = ({ name, price }: { name: string; price: string }) => (
    <div
      style={{
        background: W,
        borderRadius: 10,
        padding: '8px',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
      }}
    >
      <span style={{ fontFamily: 'Poppins', fontSize: 9, fontWeight: 600, color: D }}>{name}</span>
      <span style={{ fontFamily: 'Poppins', fontSize: 7, color: 'rgba(44,48,51,0.4)', marginTop: 2 }}>{price}</span>
    </div>
  )

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: D,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Glow circles */}
        <div style={{ position: 'absolute', top: -95, right: -64, width: 480, height: 480, borderRadius: '50%', background: B, opacity: 0.13 }} />
        <div style={{ position: 'absolute', bottom: -76, left: -76, width: 260, height: 260, borderRadius: '50%', background: B, opacity: 0.08 }} />

        {/* Body */}
        <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
          {/* Left orange bar */}
          <div style={{ width: 5, background: B, margin: '24px 0', borderRadius: '0 3px 3px 0', flexShrink: 0 }} />

          {/* Left content */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '40px 32px 0 48px' }}>
            {/* COMING SOON pill */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(224,85,53,0.15)',
                border: '1.5px solid rgba(224,85,53,0.45)',
                borderRadius: 100,
                padding: '6px 18px 6px 12px',
                marginBottom: 28,
                width: 'fit-content',
              }}
            >
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: B, flexShrink: 0 }} />
              <span style={{ fontFamily: 'Poppins', fontSize: 14, fontWeight: 600, color: B, letterSpacing: 3 }}>
                COMING SOON
              </span>
            </div>

            {/* Logo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://fastaapp.co/logo-footer.png" alt="Fasta" style={{ height: 72, marginBottom: 20 }} />

            {/* Tagline */}
            <div style={{ fontFamily: 'Poppins', fontSize: 26, color: 'rgba(255,255,255,0.48)', marginBottom: 24, display: 'flex' }}>
              Kenya's fastest on-demand home services
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: 'rgba(255,255,255,0.1)', marginBottom: 22, width: '88%' }} />

            {/* Service chips */}
            <div style={{ display: 'flex', gap: 12, marginBottom: 32 }}>
              <Chip label="Plumbing" />
              <Chip label="Electrical" />
              <Chip label="HVAC" />
              <Chip label="Handyman" />
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontFamily: 'Montserrat', fontSize: 38, fontWeight: 900, color: W, lineHeight: '1' }}>50k+</span>
                <span style={{ fontFamily: 'Poppins', fontSize: 13, color: 'rgba(255,255,255,0.36)', marginTop: 4 }}>Downloads</span>
              </div>
              <div style={{ width: 1, height: 44, background: 'rgba(255,255,255,0.12)' }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontFamily: 'Montserrat', fontSize: 38, fontWeight: 900, color: W, lineHeight: '1' }}>4.9</span>
                <span style={{ fontFamily: 'Poppins', fontSize: 13, color: 'rgba(255,255,255,0.36)', marginTop: 4 }}>App rating</span>
              </div>
              <div style={{ width: 1, height: 44, background: 'rgba(255,255,255,0.12)' }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontFamily: 'Montserrat', fontSize: 38, fontWeight: 900, color: B, lineHeight: '1' }}>8 min</span>
                <span style={{ fontFamily: 'Poppins', fontSize: 13, color: 'rgba(255,255,255,0.36)', marginTop: 4 }}>Avg match time</span>
              </div>
            </div>
          </div>

          {/* Right: Phone mockup */}
          <div style={{ width: 290, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px 40px 24px 16px' }}>
            <div style={{ width: '100%', background: '#1A1C1E', borderRadius: 44, padding: 4, border: '1.5px solid rgba(255,255,255,0.12)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'center', padding: '12px 0 4px' }}>
                <div style={{ width: 80, height: 20, background: '#0D0F11', borderRadius: 100 }} />
              </div>
              <div style={{ background: '#F2F1ED', borderRadius: 38, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                {/* App bar */}
                <div style={{ background: W, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderBottom: '1px solid #f0f0f0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div style={{ width: 16, height: 16, borderRadius: '50%', background: B, flexShrink: 0 }} />
                    <span style={{ fontFamily: 'Montserrat', fontSize: 10, fontWeight: 900, color: D }}>Fasta</span>
                  </div>
                  <div style={{ background: D, borderRadius: 100, padding: '2px 8px', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <div style={{ width: 5, height: 5, borderRadius: '50%', background: B }} />
                    <span style={{ fontFamily: 'Poppins', fontSize: 7, fontWeight: 600, color: W }}>PRO</span>
                  </div>
                </div>
                {/* Content */}
                <div style={{ padding: '12px 12px 8px', display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontFamily: 'Poppins', fontSize: 7, color: 'rgba(44,48,51,0.4)', marginBottom: 2, letterSpacing: 1 }}>GOOD EVENING</span>
                  <span style={{ fontFamily: 'Montserrat', fontSize: 13, fontWeight: 900, color: D, marginBottom: 10 }}>Hi, Sarah</span>
                  <div style={{ background: W, borderRadius: 14, padding: 12, marginBottom: 8, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ width: 28, height: 3, background: B, borderRadius: 2, marginBottom: 8 }} />
                    <span style={{ fontFamily: 'Montserrat', fontSize: 11, fontWeight: 900, color: D, marginBottom: 5 }}>Your home, fixed fast.</span>
                    <span style={{ fontFamily: 'Poppins', fontSize: 8, color: 'rgba(44,48,51,0.45)', marginBottom: 9 }}>Trusted pros, when you need them.</span>
                    <div style={{ background: B, borderRadius: 10, padding: '7px', display: 'flex', justifyContent: 'center' }}>
                      <span style={{ fontFamily: 'Poppins', fontSize: 9, fontWeight: 600, color: W }}>Get it fixed →</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 6 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
                      <Svc name="Plumbing" price="KES 1,500" />
                      <Svc name="HVAC" price="KES 2,000" />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
                      <Svc name="Electrical" price="KES 1,500" />
                      <Svc name="Handyman" price="KES 2,500" />
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', padding: '8px 0 10px' }}>
                  <div style={{ width: 48, height: 4, background: 'rgba(44,48,51,0.2)', borderRadius: 2 }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ height: 68, borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: B }} />
            <span style={{ fontFamily: 'Poppins', fontSize: 16, color: 'rgba(255,255,255,0.42)' }}>fastaapp.co</span>
          </div>
          <span style={{ fontFamily: 'Poppins', fontSize: 14, color: 'rgba(255,255,255,0.24)' }}>
            Vetted pros · Book in minutes · Pay via M-Pesa
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Montserrat', data: montserrat900, weight: 900, style: 'normal' },
        { name: 'Poppins', data: poppins400, weight: 400, style: 'normal' },
        { name: 'Poppins', data: poppins600, weight: 600, style: 'normal' },
      ],
    }
  )
}
