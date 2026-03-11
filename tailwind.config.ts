import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a12',
        surface: '#0f0f1c',
        border: '#1a1a2a',
        'border-hover': '#2a2a4a',
        accent: '#e94560',
        'accent-blue': '#0f3460',
        'accent-purple': '#9575cd',
        'accent-green': '#6b8f71',
        'text-primary': '#e8e8e8',
        'text-secondary': '#888888',
        'text-muted': '#555555',
      },
      fontFamily: {
        sans: ['var(--font-sora)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
