# INSTRUKCJE REFAKTORYZACJI HERO SECTION

## ✅ ZREALIZOWANE ZMIANY

### 1. **Hero Section - SaaS Style (Centered)**
- ✅ Usunięto layout 3-kolumnowy (left/center/right)
- ✅ Dodano centered layout z dużym nagłówkiem
- ✅ Subheadline wycentrowany
- ✅ Dwa CTA buttons (burgundy primary, cream secondary)
- ✅ Wszystko wycentrowane i responsywne

### 2. **Media Container Below Hero**
- ✅ Dodano kontener 16:9 aspect ratio
- ✅ Rounded-xl, shadow-md, border gold/20
- ✅ Placeholder dla video/lookbook image
- ✅ Hover effect z play icon

### 3. **Navigation - Sticky After Scroll**
- ✅ Zmieniono z `sticky` na `fixed`
- ✅ Dodano Alpine.js scroll observer
- ✅ Backdrop-blur + shadow pojawia się po scroll > 100px
- ✅ Smooth transitions

### 4. **Color Palette Updated**
- ✅ Gold: `#C8A878` (zaktualizowane w tailwind.config.js)
- ✅ Burgundy: `#6A2E2E` (zaktualizowane w tailwind.config.js)
- ✅ Cream: `#F7F5F2` (bez zmian)
- ✅ Dark: `#1A1A1A` (bez zmian)

### 5. **Mobile Optimization**
- ✅ Wszystko wycentrowane na mobile
- ✅ Media panel full width
- ✅ Hamburger menu z sliding dropdown
- ✅ Centered mobile menu items

---

## 📁 LOKALIZACJA OBRAZÓW

### Hero Media Container Image

**Plik:** `lookbook/look1.jpg`  
**Lokalizacja:** `/public_html/assets/img/lookbook/look1.jpg`  
**Rozdzielczość:** 1920x1080px (16:9)  
**Format:** JPG, zoptymalizowany (80-85% jakość)  
**Użycie:** Hero media container - główny obraz preview

**Przykład użycia w HTML:**
```html
<img src="./assets/img/lookbook/look1.jpg" alt="Salon preview" class="w-full h-full object-cover">
```

**Alternatywnie możesz użyć:**
- Video thumbnail: `video/video-thumb.jpg` (jeśli preferujesz video)
- Inny lookbook image: `lookbook/look2.jpg` lub `lookbook/look3.jpg`

---

## 🔧 WYMAGANE DZIAŁANIA

### Krok 1: Rebuild Tailwind CSS

**WAŻNE:** Po zmianie kolorów w `tailwind.config.js` musisz przebudować CSS:

```bash
# Jeśli używasz npm
npm run build

# Lub jeśli używasz Tailwind CLI bezpośrednio
npx tailwindcss -i ./public_html/assets/css/input.css -o ./public_html/assets/css/main.css --watch
```

**Lub w trybie produkcyjnym:**
```bash
npx tailwindcss -i ./public_html/assets/css/input.css -o ./public_html/assets/css/main.css --minify
```

### Krok 2: Sprawdź obrazy

Upewnij się, że plik `lookbook/look1.jpg` istnieje w:
```
public_html/assets/img/lookbook/look1.jpg
```

Jeśli nie, możesz:
- Użyć istniejącego `video/video-thumb.jpg`
- Albo przygotować nowy obraz 16:9 dla hero preview

### Krok 3: Testowanie

1. Otwórz stronę w przeglądarce
2. Sprawdź, czy hero jest wycentrowany
3. Przewiń w dół - nawigacja powinna stać się sticky z backdrop-blur
4. Sprawdź responsywność na mobile
5. Sprawdź hover effect na media container

---

## 📝 STRUKTURA HTML

### Hero Section Structure:
```html
<section id="hero">
  <!-- Centered headline -->
  <!-- Centered subheadline -->
  <!-- Centered CTA buttons -->
</section>

<section>
  <!-- 16:9 Media Container -->
  <!-- Rounded-xl, shadow-md -->
  <!-- Hover play icon -->
</section>
```

### Navigation Structure:
```html
<header class="fixed" x-data="{ scrolled: false }">
  <!-- Logo left -->
  <!-- Menu items right -->
  <!-- Hamburger mobile -->
  <!-- Sticky after scroll > 100px -->
</header>
```

---

## 🎨 KOLORY W UŻYCIU

| Element | Kolor | Wartość |
|---------|-------|---------|
| Background | Cream | `#F7F5F2` |
| Text | Dark | `#1A1A1A` |
| Accents | Gold | `#C8A878` |
| CTA Primary | Burgundy | `#6A2E2E` |
| CTA Secondary | Gold outline | `#C8A878` |

---

## ✅ CHECKLIST

- [x] Hero section refactored to centered SaaS style
- [x] Navigation updated with scroll-based sticky
- [x] Media container added below hero (16:9)
- [x] Colors updated in tailwind.config.js
- [x] Mobile menu centered
- [x] All overlays removed
- [x] Background images removed
- [ ] **Tailwind CSS rebuild required** ⚠️
- [ ] Verify `lookbook/look1.jpg` exists or use alternative

---

## 🚨 WAŻNE UWAGI

1. **Tailwind Rebuild:** Musisz przebudować CSS po zmianie kolorów w config!
2. **Image Path:** Upewnij się, że `lookbook/look1.jpg` istnieje lub zmień ścieżkę w HTML
3. **Scroll Behavior:** Nawigacja jest teraz `fixed` (nie `sticky`) i pojawia się z backdrop-blur po scroll > 100px
4. **Mobile:** Wszystkie elementy są wycentrowane na mobile

---

## 📸 ZALECANE OBRAZY

### Hero Media Container:
- **Rozdzielczość:** 1920x1080px (16:9)
- **Zawartość:** Najlepsze zdjęcie salonu, lookbook, lub video thumbnail
- **Styl:** Premium, eleganckie, wysokiej jakości
- **Format:** JPG zoptymalizowany (max 300KB)

---

## ✨ GOTOWE!

Po przebudowaniu Tailwind CSS i weryfikacji obrazów, strona będzie gotowa z nowym SaaS-style hero section!

