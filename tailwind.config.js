/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#000814',
        'dark-secondary': '#0a0e27',
        'dark-tertiary': '#0d1b2a',
        'primary': '#0066ff',
        'primary-light': '#4d94ff',
        'accent': '#00d4ff',
        'accent-green': '#00ff88',
      },
      fontFamily: {
        'display': ['Space Grotesk', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
