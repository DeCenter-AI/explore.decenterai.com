import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: '#8f8f8f',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: '#050505',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#c1c1c1',
          foreground: '#f5f5f5',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        primary_1: '#FFFFFF',
        primary_2: '#fdfdfd',
        primary_3: '#f5f5f5',
        primary_4: '#f0f0f0',
        primary_5: '#dadada',
        primary_6: '#c1c1c1',
        primary_7: '#8f8f8f',
        primary_8: '#5d5d5d',
        primary_9: '#494949',
        primary_10: '#2b2b2b',
        primary_11: '#232323',
        primary_12: '#191919',
        primary_13: '#050505',
      },
      fontFamily: {
        logirentBold: 'Logirent_bold',
        logirentRegular: 'Logirent_regular',
        archivo: ['Archivo'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
