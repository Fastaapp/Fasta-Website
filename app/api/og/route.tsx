import { ImageResponse } from 'next/og'

export const runtime = 'edge'

async function loadFont(family: string, weight: number): Promise<ArrayBuffer> {
  // Use an old User-Agent so Google Fonts returns TTF (Satori doesn't support woff2)
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${family.replace(' ', '+')}:wght@${weight}&display=swap`,
    { headers: { 'User-Agent': 'curl/7.64.1' } }
  ).then((r) => r.text())
  const url = css.match(/src: url\((.+?)\)/)?.[1]
  if (!url) throw new Error(`Cannot find font URL for ${family} ${weight}`)
  return fetch(url).then((r) => r.arrayBuffer())
}

export async function GET() {
  const [montserrat900, montserrat700, poppins400, poppins600] = await Promise.all([
    loadFont('Montserrat', 900),
    loadFont('Montserrat', 700),
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
                alignSelf: 'flex-start',
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

            {/* Launch callout */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: B, flexShrink: 0 }} />
              <span style={{ fontFamily: 'Poppins', fontSize: 16, color: 'rgba(255,255,255,0.45)' }}>
                Launching soon in Nairobi — join the waitlist.
              </span>
            </div>
          </div>

          {/* Right: Phone mockup */}
          <div style={{ width: 290, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px 40px 24px 16px' }}>
            <div style={{ width: '100%', background: '#1A1C1E', borderRadius: 44, padding: 4, border: '1.5px solid rgba(255,255,255,0.12)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ background: '#F2F1ED', borderRadius: 38, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                {/* Dynamic island — inside screen so background is light */}
                <div style={{ display: 'flex', justifyContent: 'center', padding: '10px 0 4px' }}>
                  <div style={{ width: 64, height: 16, background: '#1A1C1E', borderRadius: 100 }} />
                </div>
                {/* App bar */}
                <div style={{ background: W, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px', borderBottom: '1px solid #f0f0f0' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://fastaapp.co/logo-full.png" alt="Fasta" style={{ height: 28 }} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <div style={{ background: D, borderRadius: 100, padding: '2px 7px', display: 'flex', alignItems: 'center', gap: 3 }}>
                      <div style={{ width: 4, height: 4, borderRadius: '50%', background: B }} />
                      <span style={{ fontFamily: 'Poppins', fontSize: 6.5, fontWeight: 600, color: W }}>PRO</span>
                    </div>
                    <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#C4A882', flexShrink: 0 }} />
                  </div>
                </div>
                {/* Content */}
                <div style={{ padding: '10px 12px 6px', display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 6.5, color: 'rgba(44,48,51,0.4)', letterSpacing: 1, marginBottom: 2 }}>GOOD EVENING</span>
                  <span style={{ fontFamily: 'Montserrat', fontSize: 14, fontWeight: 700, color: D, marginBottom: 2 }}>Hi, Sarah</span>
                  <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 7, color: 'rgba(44,48,51,0.5)', marginBottom: 8 }}>Still need something fixed today?</span>
                  {/* Hero card */}
                  <div style={{ background: W, borderRadius: 14, padding: '10px 11px', marginBottom: 6, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ width: 22, height: 2.5, background: B, borderRadius: 2, marginBottom: 6 }} />
                    <span style={{ fontFamily: 'Montserrat', fontSize: 10.5, fontWeight: 700, color: D, marginBottom: 3 }}>Your home, fixed fast.</span>
                    <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 7, color: 'rgba(44,48,51,0.45)', marginBottom: 7 }}>Trusted pros, when you need them.</span>
                    <div style={{ background: B, borderRadius: 10, padding: '6px 8px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5 }}>
                      <span style={{ fontFamily: 'Poppins', fontSize: 8, fontWeight: 600, color: W }}>Get it fixed</span>
                      <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 8, color: W }}>→</span>
                    </div>
                    <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 6, color: 'rgba(44,48,51,0.3)', marginTop: 4, textAlign: 'center' }}>Start a request in a few taps.</span>
                  </div>
                  {/* Urgent help card */}
                  <div style={{ border: '1px solid rgba(224,85,53,0.35)', borderRadius: 12, padding: '7px 8px', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div style={{ width: 3, height: 26, background: B, borderRadius: 2, flexShrink: 0 }} />
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontFamily: 'Poppins', fontSize: 7.5, fontWeight: 600, color: D, marginBottom: 1 }}>Need urgent help?</span>
                      <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 6.5, color: 'rgba(44,48,51,0.45)' }}>FASTA can prioritise dispatch when a fundi is available.</span>
                    </div>
                    <div style={{ border: '1px solid rgba(224,85,53,0.6)', borderRadius: 100, padding: '3px 6px', flexShrink: 0, display: 'flex' }}>
                      <span style={{ fontFamily: 'Poppins', fontSize: 6, fontWeight: 600, color: B }}>Get help fast</span>
                    </div>
                  </div>
                  {/* Why Fasta */}
                  <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 6, color: 'rgba(44,48,51,0.35)', letterSpacing: 1, marginBottom: 4 }}>WHY FASTA</span>
                  <div style={{ display: 'flex', gap: 5 }}>
                    <div style={{ flex: 1, background: W, borderRadius: 10, padding: '7px', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ width: 14, height: 14, borderRadius: 5, background: 'rgba(224,85,53,0.1)', marginBottom: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ width: 7, height: 7, borderRadius: 1, border: '1.5px solid ' + B }} />
                      </div>
                      <span style={{ fontFamily: 'Poppins', fontSize: 7, fontWeight: 600, color: D, marginBottom: 2 }}>Vetted fundis</span>
                      <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 6, color: 'rgba(44,48,51,0.45)' }}>Docs reviewed before any job.</span>
                    </div>
                    <div style={{ flex: 1, background: W, borderRadius: 10, padding: '7px', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ width: 14, height: 14, borderRadius: 5, background: 'rgba(224,85,53,0.1)', marginBottom: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ width: 7, height: 7, borderRadius: '50%', border: '1.5px solid ' + B }} />
                      </div>
                      <span style={{ fontFamily: 'Poppins', fontSize: 7, fontWeight: 600, color: D, marginBottom: 2 }}>You approve first</span>
                      <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 6, color: 'rgba(44,48,51,0.45)' }}>Job complete when you confirm.</span>
                    </div>
                  </div>
                </div>
                {/* Bottom nav */}
                <div style={{ background: W, display: 'flex', justifyContent: 'space-around', padding: '6px 4px 8px', marginTop: 4 }}>
                  {['Home', 'Services', 'My Jobs', 'Profile'].map((label, i) => (
                    <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                      <div style={{ width: 14, height: 14, borderRadius: 3, background: i === 0 ? 'rgba(224,85,53,0.15)' : 'rgba(44,48,51,0.07)' }} />
                      <span style={{ fontFamily: 'Poppins', fontSize: 6, color: i === 0 ? B : 'rgba(44,48,51,0.4)', fontWeight: i === 0 ? 600 : 400 }}>{label}</span>
                    </div>
                  ))}
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
        { name: 'Montserrat', data: montserrat700, weight: 700, style: 'normal' },
        { name: 'Poppins', data: poppins400, weight: 400, style: 'normal' },
        { name: 'Poppins', data: poppins600, weight: 600, style: 'normal' },
      ],
    }
  )
}
