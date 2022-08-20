/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/atoms/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/containers/**/*.{js,ts,jsx,tsx}"//aca se añaden las rutas de donde provienen los archivos que queremos estilizar con tailwindcss
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        "hgreen": "#ACD9B2",
        "dark": "#232830",
        "lpink": "#C7C7C7",
        "white": "#FFFFFF",
        "black": "#000000",
        "input": "#F7F7F7",
        "p1": "#54BAB9",
        "p2": "#18978F",
        "p3": "#E9DAC1",
        "p4": "#F7ECDE",
      },
      fontSize: {
        "medium": "1.50rem",
      }
    },
  },
  plugins: [],
  "tailwindCSS.includeLanguages": {
    "javascript": "javascript",
    "html": "HTML"
  },
};