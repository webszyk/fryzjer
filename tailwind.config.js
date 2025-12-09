/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public_html/**/*.html",
    "./public_html/assets/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "warm-white": "#faf9f7",
        "wood": "#8b7355",
        "wood-light": "#a68b6f",
        "accent-gold": "#c8a46d",
        "accent-burgundy": "#7A1E21",
        "text-dark": "#2c2c2c"
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
