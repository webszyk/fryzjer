/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public_html/**/*.html",
    "./public_html/assets/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        "rich-gold": "#D8B46A",
        burgundy: "#7C1F27",
        "bright-white": "#FFFFFF",
        "warm-cream": "#F8F5EF"
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        'parallax-hero': "url('/assets/img/hero/bg-salon-full.jpg')"
      }
    }
  },
  plugins: [],
}
