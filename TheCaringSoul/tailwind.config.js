/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        proxima: ['Proxima Nova', 'sans-serif'],
    },
      colors: {
        amour: '#f8e8f5',
        cloudbyblue: '#bdcfe7',
        opal: '#a7c9d3',
        gumleaf: '#b4d1b3',
        slateblue: '#567a9b',
        steel: '#69858c',
        buttoncolor: '#393f4f'
      },
    },
  },
  plugins: [require('daisyui')],
}