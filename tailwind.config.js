/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public_html/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Premium Black & White Palette - Berlin/Kopenhagen Style
        "deepBlack": "#0A0A0A",
        "graphite": "#1A1A1A",
        "snowWhite": "#FFFFFF",
        "goldMuted": "#C8A96A",
        "burgundPremium": "rgb(183, 33, 42)",
        // Text colors
        "textMain": "#1A1A1A",
        "textMuted": "rgba(26,26,26,0.7)",
        // Aliases for compatibility
        "softblack": "#0A0A0A",
        "gold": "#C8A96A"
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"]
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0,0,0,0.06)'
      }
    }
  },
  plugins: [],
  safelist: [
    // Backgrounds with opacity (dynamic Alpine.js :class)
    { pattern: /^bg-(white|black|textMain|goldMuted|snowWhite|deepBlack|burgundPremium|gold|softblack)\/\d+$/ },
    { pattern: /^bg-(white|black|textMain|goldMuted|snowWhite|deepBlack|burgundPremium|gold|softblack)$/ },
    
    // Text colors with opacity (dynamic Alpine.js :class)
    { pattern: /^text-(white|textMain|burgundPremium|goldMuted|gold|softblack|snowWhite|deepBlack)\/\d+$/ },
    { pattern: /^text-(white|textMain|burgundPremium|goldMuted|gold|softblack|snowWhite|deepBlack)$/ },
    
    // Borders with opacity (dynamic Alpine.js :class)
    { pattern: /^border(-[btlrxy])?-(white|textMain|goldMuted|gold|snowWhite|deepBlack|burgundPremium)\/\d+$/ },
    { pattern: /^border(-[btlrxy])?-(white|textMain|goldMuted|gold|snowWhite|deepBlack|burgundPremium)$/ },
    
    // Shadows (custom + standard)
    { pattern: /^shadow-(soft|lg|xl|2xl|inner|none)$/ },
    
    // Backdrop blur
    { pattern: /^backdrop-blur-(sm|md|lg|xl|2xl|none)$/ },
    
    // Opacity utilities
    { pattern: /^opacity-\d+$/ },
    
    // Transforms
    { pattern: /^-?translate-[xy]?-(full|1\/2|0)$/ },
    { pattern: /^-?scale-\d+$/ },
    { pattern: /^-?rotate-\d+$/ },
    
    // Transitions
    { pattern: /^transition(-all|-colors|-transform|-opacity|-shadow)?$/ },
    { pattern: /^duration-\d+$/ },
    { pattern: /^ease-(linear|in|out|in-out)$/ },
    
    // Z-index (including arbitrary values)
    { pattern: /^z-(\d+|\[60\])$/ },
    
    // Scroll margin
    { pattern: /^(md:)?scroll-mt-\d+$/ },
    
    // JS dynamic class
    'fade-in-visible'
  ]
}
