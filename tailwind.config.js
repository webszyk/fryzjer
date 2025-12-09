/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public_html/**/*.html",
    "./public_html/assets/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        // Premium Luxury Palette
        black: "#000000",
        gold: "#D4A75C",
        burgundy: "#7A1F2A"
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        'gold-burgundy-gradient': 'linear-gradient(135deg, #D4A75C 0%, #7A1F2A 100%)',
      },
      animation: {
        'spotlight': 'spotlight 8s ease-in-out infinite',
        'scroll-up': 'scroll-up 20s linear infinite',
      },
      keyframes: {
        spotlight: {
          '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '0.3' },
          '50%': { transform: 'translate(-50%, -50%) scale(1.2)', opacity: '0.5' },
        },
        'scroll-up': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        }
      }
    }
  },
  plugins: [],
}
