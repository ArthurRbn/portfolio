/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
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
    },
  },
  plugins: [],
}

