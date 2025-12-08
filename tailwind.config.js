/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public_html/**/*.html",
    "./public_html/assets/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F7F5F2",
        espresso: "#1A1A1A",
        burgundy: "#6A2E35",
        gold: "#D2B48C",
        warmgray: "#EDEAE7"
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: [],
}
