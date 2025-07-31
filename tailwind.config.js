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
        pastel: {
          pink: '#FFE5E5',
          blue: '#E5F3FF',
          yellow: '#FFF9E5',
          green: '#E5FFE5',
          purple: '#F3E5FF',
        }
      }
    },
  },
  plugins: [],
}