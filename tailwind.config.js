/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        'primaryTitle': '#F67280',
        'primaryContent': '#F67280',
        'primarySybcontent': '#F4CCE9',
        'primaryBase': '#6C5B7B',
        'primaryAccent': '#C06C84',
        'primaryBg': '#ECDCBF',
        primary: {
          100: '#F67280',
          200: '#F4CCE9',
          300: '#6C5B7B',
          400: '#C06C84',
          500: '#355C7D',
        },
      }
    },
  },
  plugins: [],
}

