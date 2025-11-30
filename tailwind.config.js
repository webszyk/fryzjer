/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public_html/**/*.html",
    "./public_html/assets/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        gold: "#d4af37",
        burgundy: "#b91c1c"
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        body: ['Inter', "system-ui", "sans-serif"],
      }
    }
  },
  plugins: [],
}
