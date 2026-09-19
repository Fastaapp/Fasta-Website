'use client'

import { useState } from 'react'

export default function WaitlistPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!phone && !email) return
    setLoading(true)
    try {
      await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone }),
      })
    } catch {
      // still show success to user even if network fails
    }
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(ellipse at 60% 30%, #2E1008 0%, #1E2123 55%, #16181A 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 24px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Orange F mark */}
      <div
        style={{
          width: 88,
          height: 88,
          borderRadius: 18,
          background: '#E05535',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 36,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-montserrat), sans-serif',
            fontSize: 46,
            fontWeight: 900,
            color: '#16181A',
            lineHeight: 1,
            userSelect: 'none',
          }}
        >
          F
        </span>
      </div>

      {/* Headline */}
      <h1
        style={{
          fontFamily: 'var(--font-montserrat), sans-serif',
          fontWeight: 900,
          letterSpacing: '-1.5px',
          color: '#FFFFFF',
          margin: '0 0 20px',
          maxWidth: 640,
          fontSize: 'clamp(28px, 5vw, 38px)',
          lineHeight: 1.08,
        }}
      >
        Nairobi&apos;s fundi problem has a shelf life.
      </h1>

      {/* Subhead */}
      <p
        style={{
          fontFamily: 'var(--font-poppins), sans-serif',
          fontSize: 17,
          color: 'rgba(255,255,255,0.65)',
          maxWidth: 480,
          lineHeight: 1.6,
          margin: '0 0 44px',
        }}
      >
        Something&apos;s coming. Leave your number and be first to know.
      </p>

      {/* Form */}
      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            width: '100%',
            maxWidth: 380,
          }}
        >
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={e => setName(e.target.value)}
            style={{
              width: '100%',
              boxSizing: 'border-box',
              padding: '16px 18px',
              borderRadius: 10,
              border: '1px solid rgba(255,255,255,0.15)',
              background: 'rgba(255,255,255,0.06)',
              color: '#FFFFFF',
              fontFamily: 'var(--font-poppins), sans-serif',
              fontSize: 15,
              outline: 'none',
            }}
          />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{
              width: '100%',
              boxSizing: 'border-box',
              padding: '16px 18px',
              borderRadius: 10,
              border: '1px solid rgba(255,255,255,0.15)',
              background: 'rgba(255,255,255,0.06)',
              color: '#FFFFFF',
              fontFamily: 'var(--font-poppins), sans-serif',
              fontSize: 15,
              outline: 'none',
            }}
          />
          <input
            type="tel"
            placeholder="WhatsApp / phone number"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            style={{
              width: '100%',
              boxSizing: 'border-box',
              padding: '16px 18px',
              borderRadius: 10,
              border: '1px solid rgba(255,255,255,0.15)',
              background: 'rgba(255,255,255,0.06)',
              color: '#FFFFFF',
              fontFamily: 'var(--font-poppins), sans-serif',
              fontSize: 15,
              outline: 'none',
            }}
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '16px 18px',
              borderRadius: 10,
              border: 'none',
              background: '#E05535',
              color: '#FFFFFF',
              fontFamily: 'var(--font-montserrat), sans-serif',
              fontWeight: 800,
              fontSize: 15,
              cursor: loading ? 'not-allowed' : 'pointer',
              marginTop: 6,
              letterSpacing: '0.5px',
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? 'Saving...' : 'Notify me'}
          </button>
        </form>
      ) : (
        <div
          style={{
            fontFamily: 'var(--font-poppins), sans-serif',
            fontSize: 16,
            color: '#F4A080',
            maxWidth: 380,
            lineHeight: 1.6,
          }}
        >
          You&apos;re on the list. Watch this space.
        </div>
      )}

      {/* Privacy note */}
      <div
        style={{
          position: 'absolute',
          bottom: 28,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-poppins), sans-serif',
            fontSize: 11,
            color: 'rgba(255,255,255,0.3)',
          }}
        >
          We&apos;ll only use this to tell you when we&apos;re live. No spam.
        </span>
      </div>
    </main>
  )
}
