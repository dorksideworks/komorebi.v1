/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      "komorebi": {
        "light" : "#F3F2EE",
        "dark" : "#0E0E0E",
        "dark-2" : "#1B1B1B",
        "dgreen" : "#132A36",
        "lgreen" : "#3CDAA7",
        "dark-3" : "#131313"
        
      },
      "slate" : colors.slate,
      "white" : colors.white,
      "gray" : colors.gray,
      "red" : colors.red
    },
    extend: {},
  },
  plugins: [],
}

