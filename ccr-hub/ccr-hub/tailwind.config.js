/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ccr: {
          blue: '#1B3A6B',
          'blue-dark': '#142B50',
          'blue-light': '#E8EEF7',
          'blue-50': '#F4F7FB',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
