/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public_html/**/*.html",
    "./public_html/assets/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        // Fashion Dark - Wersja C
        "softBlack": "#0E0E0E",
        "charcoal": "#151515",
        "glassWhite": "rgba(255,255,255,0.08)",
        "glassBorder": "rgba(255,255,255,0.20)",
        "burgundy": "#7A2E36",
        "deepBurgundy": "#5A1E25",
        "gold": "#C9A86A",
        "softGold": "#D7C08A",
        "ivory": "#F5F5F0",
        "textMain": "#F5F5F5",
        "textMuted": "#B3B3B3",
        // Legacy support
        "white": "#ffffff",
        "black": "#0d0d0d",
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
        'soft': '0 4px 20px rgba(0,0,0,0.05)',
        'gold-glow': '0 0 20px rgba(201, 168, 106, 0.3), 0 0 40px rgba(201, 168, 106, 0.15)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      }
    }
  },
  plugins: [],
}
