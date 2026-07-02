/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0F0D0E',        // near-black base — tech, premium
        charcoal: '#1B1517',   // secondary dark surface
        cream: '#F3EEE9',      // light section bg
        sand: '#E1D3CA',       // muted / borders / secondary text
        rose: '#C4737C',       // primary accent — dev
        lilac: '#DFA0F3',      // secondary accent — data
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-glow':
          'radial-gradient(circle at 20% 20%, rgba(196,115,124,0.15), transparent 40%), radial-gradient(circle at 80% 60%, rgba(223,160,243,0.12), transparent 45%)',
      },
    },
  },
  plugins: [],
}
