/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public_html/**/*.html",
    "./public_html/assets/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        // Premium Black & White Palette - Berlin/Kopenhagen Style
        "deepBlack": "#0A0A0A",
        "graphite": "#1A1A1A",
        "snowWhite": "#FFFFFF",
        "goldMuted": "#C8A96A",
        "burgundPremium": "rgb(159, 32, 46)",
        // Utility colors for glass morphism (dark sections)
        "glassBg": "rgba(255,255,255,0.08)",
        "glassBgStrong": "rgba(255,255,255,0.12)",
        "glassBorder": "rgba(255,255,255,0.20)",
        // Text colors
        "textMain": "#1A1A1A",
        "textMuted": "rgba(26,26,26,0.7)"
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"]
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0,0,0,0.06)',
        'glass': '0 4px 20px rgba(0,0,0,0.06)'
      }
    }
  },
  plugins: [],
  safelist: [
    'glass-hero-subtle'
  ]
}
