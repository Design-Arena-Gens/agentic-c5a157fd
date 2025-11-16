/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        jarvis: {
          blue: '#00d4ff',
          dark: '#0a0e27',
          darker: '#050812',
          light: '#1a1f3a',
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { opacity: '1', filter: 'drop-shadow(0 0 8px rgba(0, 212, 255, 0.5))' },
          '50%': { opacity: '0.8', filter: 'drop-shadow(0 0 20px rgba(0, 212, 255, 0.8))' },
        }
      }
    },
  },
  plugins: [],
}
