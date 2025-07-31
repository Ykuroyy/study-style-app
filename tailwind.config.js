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
          pink: '#FFB6C1',
          blue: '#ADD8E6',
          yellow: '#FFFFE0',
          green: '#98FB98',
          purple: '#DDA0DD',
          coral: '#FF7F7F',
          lavender: '#E6E6FA',
          mint: '#F0FFF0',
        },
        cute: {
          primary: '#FF69B4',
          secondary: '#FFB6C1',
          accent: '#FFA07A',
          soft: '#F8BBD9',
        }
      },
      fontFamily: {
        cute: ['Noto Sans JP', 'Hiragino Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-cute': 'linear-gradient(135deg, #FFB6C1 0%, #FFA07A 50%, #FF69B4 100%)',
        'gradient-soft': 'linear-gradient(135deg, #F8BBD9 0%, #E6E6FA 100%)',
      },
      boxShadow: {
        'cute': '0 10px 30px rgba(255, 105, 180, 0.3)',
        'soft': '0 8px 25px rgba(248, 187, 217, 0.4)',
      }
    },
  },
  plugins: [],
}