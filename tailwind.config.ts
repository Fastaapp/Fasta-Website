import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ─── FASTA Exact Brand Palette (from brand guidelines) ──────────────────
      colors: {
        brand: {
          DEFAULT: '#E05535',   // PRIMARY — vermillion orange-red
          dark:    '#C04020',   // darkened for hover/pressed states
          light:   '#F4A080',   // lightened tint
          50:      '#FDF2EE',
          100:     '#FAD9CE',
          200:     '#F4A080',
          500:     '#E05535',
          600:     '#C04020',
          700:     '#9A3018',
        },
        dark: {
          DEFAULT: '#2C3033',   // PRIMARY CHARCOAL — exact from guidelines
          50:      '#F4F5F5',
          100:     '#E8EAEB',
          700:     '#23282B',
          800:     '#1E2123',
          900:     '#16181A',
        },
        // ─── Secondary Brand Colours (exact from guidelines) ────────────────
        fasta: {
          gray:    '#A9A5A2',   // Secondary warm grey
          slate:   '#4F6283',   // Secondary slate blue
          blue:    '#4A8CF5',   // Secondary vibrant blue
        },
      },
      // ─── Brand Typography ────────────────────────────────────────────────────
      fontFamily: {
        heading: ['var(--font-montserrat)', 'Montserrat', 'system-ui', 'sans-serif'],
        body:    ['var(--font-poppins)',     'Poppins',    'system-ui', 'sans-serif'],
      },
      // ─── Custom Animations ───────────────────────────────────────────────────
      animation: {
        'marquee':    'marquee 30s linear infinite',
        'float':      'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-14px)' },
        },
      },
      // ─── Semantic Backgrounds ────────────────────────────────────────────────
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #E05535 0%, #C04020 100%)',
        'hero-gradient':  'radial-gradient(ellipse at 65% 40%, #2E1008 0%, #1E2123 55%, #16181A 100%)',
        'dark-gradient':  'linear-gradient(160deg, #2C3033 0%, #1E2123 100%)',
        'card-gradient':  'linear-gradient(135deg, #FDF0F8 0%, #FFFFFF 100%)',
      },
    },
  },
  plugins: [],
}

export default config
