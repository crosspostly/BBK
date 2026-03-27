/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F5E0A3',
          dark: '#C5A059',
        },
        ruby: {
          DEFAULT: '#991B1B',
          dark: '#7F1D1D',
        },
        bg: '#09090b',
      },
      fontFamily: {
        display: ['Unbounded', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'noise': "url('https://grainy-gradients.vercel.app/noise.svg')",
      }
    },
  },
  plugins: [],
}
