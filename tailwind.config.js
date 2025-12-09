/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public_html/**/*.html",
    "./public_html/assets/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "white": "#ffffff",
        "black": "#0d0d0d",
        "gold": "#c8a45d",
        "burgundy": "#7a1f29",
        "graphite": "#2a2a2a",
        "soft-gray": "#f5f5f5"
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"]
      },
      borderWidth: {
        'hairline': '1px'
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0,0,0,0.05)'
      }
    }
  },
  plugins: [],
}
