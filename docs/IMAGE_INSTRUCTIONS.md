# INSTRUKCJE DOTYCZĄCE OBRAZÓW - Salonik u Agi

## 📁 STRUKTURA FOLDERÓW

Utwórz następujące foldery w katalogu `/public_html/assets/img/`:

```
public_html/
  assets/
    img/
      hero/
      gallery/
      lookbook/
      before-after/
      video/
```

---

## 📸 WYMAGANE PLIKI I ROZDZIELCZOŚCI

### 1. HERO SECTION

**Plik:** `hero/hero-salon.jpg`  
**Rozdzielczość:** 1200x800px (3:2)  
**Użycie:** Sekcja "O nas" - zdjęcie salonu  
**Format:** JPG, zoptymalizowany (80-85% jakość)  
**Przykład użycia:**
```html
<img src="./assets/img/hero/hero-salon.jpg" alt="Salon fryzjerski" class="rounded-xl shadow-lg w-full object-cover">
```

---

### 2. LOOKBOOK (3 zdjęcia)

**Pliki:**
- `lookbook/look1.jpg`
- `lookbook/look2.jpg`
- `lookbook/look3.jpg`

**Rozdzielczość:** 600x800px (3:4) - portret  
**Użycie:** Hero section - prawa kolumna, 3 zdjęcia ułożone pionowo  
**Format:** JPG, zoptymalizowany (80-85% jakość)  
**Zawartość:** Profesjonalne zdjęcia fryzur w stylu lookbook  
**Przykład użycia:**
```html
<img src="./assets/img/lookbook/look1.jpg" alt="Fryzura lookbook 1" class="w-full h-48 object-cover">
```

---

### 3. GALERIA (9 zdjęć)

**Pliki:**
- `gallery/g1.jpg` - `gallery/g9.jpg`

**Rozdzielczość:** 800x800px (1:1) - kwadrat  
**Użycie:** Sekcja Galeria - siatka 3x3  
**Format:** JPG, zoptymalizowany (80-85% jakość)  
**Zawartość:** Różnorodne zdjęcia prac salonu, fryzur, stylizacji  
**Przykład użycia:**
```html
<img src="./assets/img/gallery/g1.jpg" alt="Galeria 1" class="w-full h-full object-cover">
```

---

### 4. BEFORE / AFTER

**Pliki:**
- `before-after/before.jpg`
- `before-after/after.jpg`

**Rozdzielczość:** 1000x800px (5:4)  
**Użycie:** Sekcja "Przed i Po" - dwa zdjęcia obok siebie  
**Format:** JPG, zoptymalizowany (80-85% jakość)  
**Zawartość:** Zdjęcia pokazujące transformację włosów  
**Przykład użycia:**
```html
<img src="./assets/img/before-after/before.jpg" alt="Przed" class="w-full h-96 object-cover">
```

---

### 5. VIDEO THUMBNAIL

**Plik:** `video/video-thumb.jpg`  
**Rozdzielczość:** 1920x1080px (16:9)  
**Użycie:** Hero section (środek) i sekcja Video  
**Format:** JPG, zoptymalizowany (80-85% jakość)  
**Zawartość:** Miniaturka wideo pokazująca salon lub proces pracy  
**Przykład użycia:**
```html
<img src="./assets/img/video/video-thumb.jpg" alt="Video salonu" class="w-full h-full object-cover">
```

---

## ✅ CHECKLIST - CO MUSISZ ZROBIĆ

### Krok 1: Utwórz foldery
```bash
mkdir -p public_html/assets/img/hero
mkdir -p public_html/assets/img/gallery
mkdir -p public_html/assets/img/lookbook
mkdir -p public_html/assets/img/before-after
mkdir -p public_html/assets/img/video
```

### Krok 2: Przygotuj obrazy

**Wymagane pliki (łącznie 16 obrazów):**

1. ✅ `hero/hero-salon.jpg` - 1200x800px
2. ✅ `lookbook/look1.jpg` - 600x800px
3. ✅ `lookbook/look2.jpg` - 600x800px
4. ✅ `lookbook/look3.jpg` - 600x800px
5. ✅ `gallery/g1.jpg` - 800x800px
6. ✅ `gallery/g2.jpg` - 800x800px
7. ✅ `gallery/g3.jpg` - 800x800px
8. ✅ `gallery/g4.jpg` - 800x800px
9. ✅ `gallery/g5.jpg` - 800x800px
10. ✅ `gallery/g6.jpg` - 800x800px
11. ✅ `gallery/g7.jpg` - 800x800px
12. ✅ `gallery/g8.jpg` - 800x800px
13. ✅ `gallery/g9.jpg` - 800x800px
14. ✅ `before-after/before.jpg` - 1000x800px
15. ✅ `before-after/after.jpg` - 1000x800px
16. ✅ `video/video-thumb.jpg` - 1920x1080px

### Krok 3: Zoptymalizuj obrazy

**Narzędzia do optymalizacji:**
- Online: TinyPNG, Squoosh
- Desktop: ImageOptim, JPEGmini
- Cel: Zmniejsz rozmiar plików przy zachowaniu jakości

**Zalecane rozmiary plików:**
- Hero: max 200KB
- Lookbook: max 150KB każdy
- Gallery: max 100KB każdy
- Before/After: max 180KB każdy
- Video thumb: max 250KB

### Krok 4: Wgraj pliki

Wgraj wszystkie pliki do odpowiednich folderów zgodnie z powyższą strukturą.

---

## 🎨 WSKAZÓWKI DOTYCZĄCE ZDJĘĆ

### Hero Salon
- Profesjonalne zdjęcie wnętrza salonu
- Dobre oświetlenie, elegancka atmosfera
- Może pokazywać stanowiska, lustra, przestrzeń

### Lookbook
- 3 różne fryzury/stylizacje
- Spójny styl fotografii
- Profesjonalne oświetlenie
- Modelki lub manekiny

### Galeria
- Różnorodność: różne fryzury, kolory, długości
- Wysoka jakość
- Spójny styl edycji
- Można pokazać proces pracy

### Before/After
- Te same osoby/modelki
- Podobne ujęcie i oświetlenie
- Wyraźna różnica pokazująca efekt

### Video Thumbnail
- Najlepsze ujęcie z wideo
- Może zawierać tekst/logo
- Atrakcyjne wizualnie
- 16:9 format

---

## 📝 DODATKOWE UWAGI

1. **Alt text:** Wszystkie obrazy mają już odpowiednie atrybuty `alt` w HTML
2. **Lazy loading:** Możesz dodać `loading="lazy"` do obrazów w galerii dla lepszej wydajności
3. **WebP format:** Rozważ konwersję do WebP dla lepszej kompresji (wymaga aktualizacji HTML)
4. **Responsywność:** Wszystkie obrazy używają `object-cover` dla responsywnego skalowania

---

## 🔗 PRZYKŁADY ŚCIEŻEK W HTML

Wszystkie ścieżki są względne i zaczynają się od `./assets/img/`:

```html
<!-- Hero -->
<img src="./assets/img/hero/hero-salon.jpg" alt="Salon fryzjerski">

<!-- Lookbook -->
<img src="./assets/img/lookbook/look1.jpg" alt="Fryzura lookbook 1">

<!-- Gallery -->
<img src="./assets/img/gallery/g1.jpg" alt="Galeria 1">

<!-- Before/After -->
<img src="./assets/img/before-after/before.jpg" alt="Przed">

<!-- Video -->
<img src="./assets/img/video/video-thumb.jpg" alt="Video salonu">
```

---

## ✅ GOTOWE!

Po wgraniu wszystkich obrazów strona będzie w pełni funkcjonalna. Upewnij się, że:
- ✅ Wszystkie foldery zostały utworzone
- ✅ Wszystkie 16 obrazów zostało wgranych
- ✅ Obrazy mają odpowiednie rozdzielczości
- ✅ Obrazy są zoptymalizowane (mały rozmiar plików)
- ✅ Nazwy plików są dokładnie takie jak w instrukcji

