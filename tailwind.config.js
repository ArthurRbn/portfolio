/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#010E43',
          text: '#E5E4E5',
          accent: '#5E76A3',
        },
        secondary: {
          DEFAULT: '#333A63',
          text: '#65BDC4',
        },
      },
      fontFamily: {
        sans: ['Futura', 'sans-serif'],
        title: ['Magno Sans Variable', 'sans-serif'],
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: 0,
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        'fade-out-up': {
          '0%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
          '100%': {
            opacity: 0,
            transform: 'translateY(-10px)',
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.3s ease-out forwards',
        'fade-out-up': 'fade-out-up 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
}

