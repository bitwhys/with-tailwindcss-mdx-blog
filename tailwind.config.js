const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
      },
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
        heading: ['Space GroteskVariable',...defaultTheme.fontFamily.sans]
      },
      backgroundImage: {
        synth: 'linear-gradient(109.8deg, #20D9F7 13.24%, #F70776 85.86%);'
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
