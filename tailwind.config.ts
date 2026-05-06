import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0a0a',
          card: '#111111',
          text: '#ffffff',
          muted: '#a3a3a3',
        },
        accent: {
          red: '#FF3D00',
          orange: '#FF6B35',
          lime: '#AAFF00',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        bold: ['var(--font-oswald)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #0a0a0a 0%, #1a0a0a 100%)',
        'gradient-accent': 'linear-gradient(135deg, #FF3D00 0%, #FF6B35 100%)',
      },
    },
  },
  plugins: [],
}

export default config
