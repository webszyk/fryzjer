/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public_html/**/*.html",
    "./public_html/assets/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        // Ultra-Premium Luxury Palette
        deepblack: "#0A0A0A",
        deepburgundy: "#5D001E",
        gold: "#D4AF37",
        goldlight: "#F4D03F",
        golddark: "#B8860B"
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Manrope", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(to right, #D97706, #F59E0B, #EAB308, #F59E0B, #D97706)',
      }
    }
  },
  plugins: [],
}
