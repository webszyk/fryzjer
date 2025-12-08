# INSTRUKCJE PEŁNEJ PRZEBUDOWY - Salonik u Agi

## ✅ ZREALIZOWANE ZMIANY

### 1. **Logo - Centralne, Odręczne**
- ✅ Logo umieszczone centralnie na górze strony
- ✅ Wysokość: `h-14`, opacity: `opacity-90`
- ✅ Subtelny glow effect w CSS (`.logo-glow`)
- ✅ Fallback: tekst "Salonik u Agi" jeśli SVG nie załaduje się

**Plik logo:** `./assets/img/logo-handwritten.svg`

---

### 2. **Menu - Pod Logo, Centralne**
- ✅ Menu umieszczone bezpośrednio pod logo
- ✅ Centralne wyrównanie
- ✅ Sticky dopiero po scrollu > 400px (nie od razu)
- ✅ Kompaktowy navbar po scrollu z backdrop-blur
- ✅ Hamburger menu na mobile z sliding dropdown

**Struktura:**
- Logo na górze (fixed/relative)
- Menu pod logo (sticky po scrollu)
- Smooth transitions

---

### 3. **Hero Section - Lookbook Style**
- ✅ Centered layout (nie 3-kolumnowy)
- ✅ Duży nagłówek wycentrowany
- ✅ Subheadline wycentrowany
- ✅ Dwa CTA buttons (burgundy primary, cream secondary)
- ✅ Video container 16:9 poniżej hero
- ✅ Animacje fade-in na elementach hero
- ✅ Video hover zoom effect (scale-105)

**Struktura:**
```
[ LOGO ]
[ MENU ]
-------------------------------------
[   Twoje Włosy, Nasza Pasja.     ]
[   Profesjonalna koloryzacja     ]
[     & strzyżenie we Wrocławiu   ]
[ CTA — burgund + złoto glow      ]
-------------------------------------
[      HERO VIDEO (16:9)          ]
-------------------------------------
```

---

### 4. **Nowa Paleta Kolorów**

**Zaktualizowane w `tailwind.config.js`:**
```javascript
colors: {
  ivory: "#F7F5F2",      // Background
  espresso: "#1A1A1A",    // Text
  burgundy: "#6A2E35",    // CTA Primary
  gold: "#D2B48C",        // Accents
  warmgray: "#EDEAE7"     // Borders
}
```

**Zastosowane w całym projekcie:**
- `bg-ivory` zamiast `bg-cream`
- `text-espresso` zamiast `text-dark`
- `text-espresso/70` zamiast `text-[#4D4D4D]`
- `border-gold/50` zamiast `border-gold/20`
- `bg-espresso` w footerze zamiast `bg-dark`
- `text-ivory` w footerze zamiast `text-cream`

---

### 5. **Animacje**

**Fade-in na hero:**
- ✅ Nagłówek: `fade-in` (0s delay)
- ✅ Subheadline: `fade-in` (0.2s delay)
- ✅ CTA buttons: `fade-in` (0.4s delay)
- ✅ Video container: `fade-in` (0.6s delay)

**Video hover:**
- ✅ Subtle zoom: `group-hover:scale-105`
- ✅ Smooth transition: `duration-500`

**Menu sticky:**
- ✅ Pojawia się po scrollu > 400px
- ✅ Backdrop-blur + shadow
- ✅ Smooth transitions

---

### 6. **Galeria iPhone-like**

**Już zaimplementowane:**
- ✅ `rounded-3xl` (24px zaokrąglenie)
- ✅ Spacing: `gap-3 md:gap-5` (12-20px)
- ✅ Hover zoom + shadow
- ✅ Subtelne podpisy (alt text)
- ✅ iOS-style "•••" icon na hover

---

## 📁 LOKALIZACJA PLIKÓW

### Logo (Wymagane)

**Plik:** `logo-handwritten.svg`  
**Lokalizacja:** `/public_html/assets/img/logo-handwritten.svg`  
**Format:** SVG  
**Styl:** Odręczne, eleganckie, minimalistyczne  
**Kolor:** Espresso (#1A1A1A) lub Burgundy (#6A2E35)  
**Rozmiar:** Wysokość 56px (h-14)

**Przykład użycia:**
```html
<img src="./assets/img/logo-handwritten.svg" class="mx-auto h-14 opacity-90 logo-glow" alt="Salonik u Agi">
```

**Fallback:** Jeśli SVG nie załaduje się, wyświetli się tekst "Salonik u Agi"

---

### Video Hero (Wymagane)

**Plik:** `salon-lookbook.mp4`  
**Lokalizacja:** `/public_html/assets/video/salon-lookbook.mp4`  
**Format:** MP4 (H.264)  
**Rozdzielczość:** 1920x1080px (16:9)  
**Czas trwania:** 10-30 sekund (loop)  
**Rozmiar:** Max 5MB (zoptymalizowany)

**Fallback:** Jeśli video nie załaduje się, wyświetli się `lookbook/look1.jpg`

**Przykład użycia:**
```html
<video autoplay muted loop playsinline class="w-full h-auto group-hover:scale-105 transition-transform duration-500">
    <source src="./assets/video/salon-lookbook.mp4" type="video/mp4">
    <img src="./assets/img/lookbook/look1.jpg" alt="Salon lookbook" class="w-full h-full object-cover">
</video>
```

---

## 🔧 WYMAGANE DZIAŁANIA

### Krok 1: Rebuild Tailwind CSS ⚠️ **WYMAGANE**

Po zmianie kolorów w `tailwind.config.js` musisz przebudować CSS:

```bash
npx tailwindcss -i ./public_html/assets/css/input.css -o ./public_html/assets/css/main.css --minify
```

Lub jeśli używasz npm scripts:
```bash
npm run build
```

### Krok 2: Przygotuj Logo SVG

**Opcje:**
1. **Utwórz SVG logo:**
   - Odręczny styl, elegancki
   - Kolor: espresso lub burgundy
   - Zapisz jako `logo-handwritten.svg`
   - Umieść w `/public_html/assets/img/`

2. **Lub użyj tekstu:**
   - Jeśli nie masz SVG, logo wyświetli się jako tekst
   - Styl: Playfair Display, bold, tracking-wide

### Krok 3: Przygotuj Video

**Wymagania:**
- Format: MP4 (H.264)
- Rozdzielczość: 1920x1080px (16:9)
- Czas: 10-30 sekund (będzie loop)
- Rozmiar: Max 5MB (zoptymalizuj!)
- Zawartość: Salon lookbook, fryzury, proces pracy

**Narzędzia do optymalizacji:**
- HandBrake (desktop)
- FFmpeg: `ffmpeg -i input.mp4 -vcodec h264 -crf 28 -preset slow output.mp4`
- Online: CloudConvert, FreeConvert

**Lokalizacja:**
```
public_html/assets/video/salon-lookbook.mp4
```

**Utwórz folder jeśli nie istnieje:**
```bash
mkdir -p public_html/assets/video
```

### Krok 4: Sprawdź obrazy

Upewnij się, że istnieją:
- ✅ `lookbook/look1.jpg` (fallback dla video)
- ✅ `gallery/g1.jpg` - `g9.jpg`
- ✅ `before-after/before.jpg` i `after.jpg`
- ✅ `hero/hero-salon.jpg`

---

## 📝 STRUKTURA HTML

### Header Structure:
```html
<!-- Logo Section -->
<div class="w-full text-center py-6">
  <img src="./assets/img/logo-handwritten.svg" class="mx-auto h-14 opacity-90 logo-glow">
</div>

<!-- Navigation -->
<header class="w-full" x-data="{ scrolled: false }">
  <nav class="w-full text-center mb-6">
    <!-- Menu items centered -->
  </nav>
</header>
```

### Hero Structure:
```html
<section id="hero" class="text-center mx-auto max-w-3xl px-6 py-16 space-y-8">
  <!-- Headline -->
  <!-- Subheadline -->
  <!-- CTA Buttons -->
  <!-- Video Container -->
</section>
```

---

## 🎨 KOLORY W UŻYCIU

| Element | Kolor | Wartość | Użycie |
|---------|-------|---------|--------|
| Background | Ivory | `#F7F5F2` | Tło strony |
| Text | Espresso | `#1A1A1A` | Główny tekst |
| CTA Primary | Burgundy | `#6A2E35` | Przyciski główne |
| Accents | Gold | `#D2B48C` | Ikony, ceny, separatory |
| Borders | Warm Gray | `#EDEAE7` | Delikatne obramowania |

---

## ✨ ANIMACJE I EFEKTY

### Fade-in Hero:
- Nagłówek: `fade-in` (0s)
- Subheadline: `fade-in` (0.2s delay)
- CTA: `fade-in` (0.4s delay)
- Video: `fade-in` (0.6s delay)

### Video Hover:
- Zoom: `scale-105`
- Transition: `duration-500`

### Logo Glow:
- CSS: `filter: drop-shadow(0 2px 8px rgba(26, 26, 26, 0.15))`

### Menu Sticky:
- Pojawia się po scrollu > 400px
- Backdrop-blur + shadow
- Smooth transitions

---

## ✅ CHECKLIST

- [x] Logo centralne, odręczne
- [x] Menu pod logo, centralne
- [x] Menu sticky po scrollu (nie od razu)
- [x] Hero centered layout
- [x] Video container 16:9
- [x] Nowa paleta kolorów (ivory, espresso, burgundy, gold, warmgray)
- [x] Animacje fade-in
- [x] Video hover zoom
- [x] Galeria iPhone-like (już zrobione)
- [x] Footer zaktualizowany
- [ ] **Tailwind CSS rebuild required** ⚠️
- [ ] Przygotuj `logo-handwritten.svg`
- [ ] Przygotuj `salon-lookbook.mp4`
- [ ] Utwórz folder `/assets/video/` jeśli nie istnieje

---

## 🚨 WAŻNE UWAGI

1. **Tailwind Rebuild:** ⚠️ **MUSISZ** przebudować CSS po zmianie kolorów!
2. **Logo SVG:** Jeśli nie masz SVG, logo wyświetli się jako tekst (fallback)
3. **Video:** Jeśli video nie załaduje się, wyświetli się fallback image
4. **Menu Sticky:** Pojawia się dopiero po scrollu > 400px (nie od razu)
5. **Spacing:** Galeria ma teraz `gap-3 md:gap-5` (12-20px jak w iPhone)

---

## 📸 WYMAGANE PLIKI

### Logo:
- `assets/img/logo-handwritten.svg` (SVG, odręczny styl)

### Video:
- `assets/video/salon-lookbook.mp4` (MP4, 1920x1080px, max 5MB)

### Fallback:
- `assets/img/lookbook/look1.jpg` (jeśli video nie załaduje się)

---

## 🎯 GOTOWE!

Po:
1. ✅ Rebuild Tailwind CSS
2. ✅ Przygotowaniu logo SVG
3. ✅ Przygotowaniu video MP4

Strona będzie w pełni funkcjonalna z nowym designem!

