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
        gold: "#D4AF37",
        warmgray: "#EDEAE7"
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: [],
}
