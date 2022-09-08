/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/atoms/**/*.{js,ts,jsx,tsx}",
    "./src/templates/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/containers/**/*.{js,ts,jsx,tsx}"//aca se añaden las rutas de donde provienen los archivos que queremos estilizar con tailwindcss
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        "p1": "#54BAB9",
        "p2": "#18978F",
        "p3": "#E9DAC1",
        "p4": "#F7ECDE",
        "p5": "rgba(0, 0, 0, .6)",
        "p6": "#0B4E4A",
        "darkest": "rgba(0, 0, 0, .7)",
        "input": "rgb(52 52 52)",
        "adminside": "#111827"
      },
      fontSize: {
        "medium": "1.50rem",
      },
      translate: {
        "3/5": "60%",
        
      },
      inset: {
        "45": "45%",
        "0.9": "0.9rem",
        "even-circle": "-7px",
        "odd-circle": "-9px",
        "timeline": "49.5%",
      },
      padding: {
        "1.4": "1.4rem",
      },
      width: {
        "0.2":"0.2rem",
        
      },
      zIndex: {
        "1": "1",
      },
      maxHeight:{
        "100": "100px",
      },
      maxWidth: {
        "150": "150px",
        "220":"220px",
      },
      minWidth:{
        "100": "100px"
      },
      boxShadow: {
        "shadow1": "0px 0px 15px -3px rgba(0,0,0,0.05),19px 10px 15px -3px rgba(0,0,0,0.05),-8px 10px 15px -3px rgba(0,0,0,0.05),0px -4px 50px -3px rgba(0,0,0,0.05)",
        "evenshadow":"1px -1px 1px rgba(0,0,0,0.05)",
        "oddshadow":"-1px 1px 1px rgba(0,0,0,0.05)"
      },
      backgroundImage: {
        "login-texture": "linear-gradient(to right, #11998e, #38ef7d)",
        "login-hero": "url('./images/prueba.jpg')",
      }

    },
  },
  plugins: [],
  "tailwindCSS.includeLanguages": {
    "javascript": "javascript",
    "html": "HTML"
  },
};