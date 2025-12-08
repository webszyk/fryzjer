# 📖 Przewodnik Obsługi Projektu - Salonik u Agi

## 🚀 Szybki Start

### 1. Instalacja zależności (jeśli jeszcze nie zainstalowane)
```bash
npm install
```

### 2. Uruchomienie projektu

**Opcja A: Tryb deweloperski (watch mode - automatyczna przebudowa)**
```bash
npm run dev
```
Ten tryb automatycznie przebudowuje CSS przy każdej zmianie w plikach.

**Opcja B: Produkcyjny build (jednorazowy)**
```bash
npm run build
```

### 3. Otwórz stronę
Otwórz plik `public_html/index.html` w przeglądarce.

---

## ⚠️ WAŻNE: Dlaczego nie widzę stylów?

### Problem: Tailwind CSS wymaga przebudowy

**Tailwind CSS** to framework, który **generuje** klasy CSS na podstawie użytych klas w HTML. To oznacza, że:

1. **Po każdej zmianie w `tailwind.config.js`** → musisz przebudować CSS
2. **Po dodaniu nowych klas w HTML** → Tailwind automatycznie je doda (w watch mode)
3. **Po zmianie kolorów/fontów w config** → **MUSISZ** przebudować CSS

### Rozwiązanie:

#### 🔴 Jeśli nie widzisz stylów:

1. **Przebuduj CSS:**
   ```bash
   npm run build
   ```

2. **Wyczyść cache przeglądarki:**
   - Chrome/Edge: `Ctrl + Shift + R` (hard refresh)
   - Firefox: `Ctrl + F5`

3. **Sprawdź w DevTools (F12):**
   - Network → czy `main.css` się ładuje (status 200)
   - Console → czy są błędy
   - Elements → czy elementy mają klasy Tailwind

4. **Sprawdź ścieżkę w HTML:**
   ```html
   <link rel="stylesheet" href="./assets/css/main.css">
   ```
   Upewnij się, że ścieżka jest poprawna względem lokalizacji pliku HTML.

---

## 📁 Struktura Projektu

```
fryzjer/
├── docs/                          # 📚 Dokumentacja projektu
│   ├── PROJECT_GUIDE.md          # Ten plik - przewodnik obsługi
│   ├── BUILD_INSTRUCTIONS.md     # Instrukcje przebudowy CSS
│   ├── FULL_REFACTOR_INSTRUCTIONS.md  # Pełna refaktoryzacja
│   ├── HERO_REFACTOR_INSTRUCTIONS.md  # Refaktoryzacja hero
│   └── IMAGE_INSTRUCTIONS.md     # Instrukcje dotyczące obrazów
│
├── public_html/                   # 🌐 Główny folder strony
│   ├── index.html                # Strona główna
│   └── assets/
│       ├── css/
│       │   ├── input.css         # ⚙️ Plik źródłowy Tailwind (EDYTUJ TUTAJ)
│       │   └── main.css          # 📦 Wygenerowany CSS (NIE EDYTUJ!)
│       ├── fonts/                 # Czcionki (Playfair Display, Inter)
│       ├── img/                   # Obrazy
│       │   ├── gallery/          # Galeria (g1.jpg - g9.jpg)
│       │   ├── lookbook/         # Lookbook (look1.jpg - look3.jpg)
│       │   ├── hero/             # Hero image (hero-salon.jpg)
│       │   ├── before-after/     # Przed/po (before.jpg, after.jpg)
│       │   └── video/            # Video (salon-lookbook.mp4)
│       └── js/                   # JavaScript (Alpine.js)
│
├── tailwind.config.js            # ⚙️ Konfiguracja Tailwind (kolory, fonty)
├── package.json                  # 📦 Zależności i skrypty npm
└── README.md                     # 📖 Główna dokumentacja projektu
```

---

## 🎨 Edycja Stylów

### ⚠️ WAŻNE: Które pliki edytować?

#### ✅ EDYTUJ:
- `public_html/index.html` - HTML i klasy Tailwind
- `public_html/assets/css/input.css` - Custom CSS, komponenty
- `tailwind.config.js` - Kolory, fonty, konfiguracja

#### ❌ NIE EDYTUJ:
- `public_html/assets/css/main.css` - **To jest wygenerowany plik!**
  - Zostanie nadpisany przy każdej przebudowie
  - Edytuj tylko `input.css`

### Jak dodać nowy styl:

1. **Dodaj klasę Tailwind w HTML:**
   ```html
   <div class="bg-ivory text-espresso">...</div>
   ```

2. **Lub dodaj custom komponent w `input.css`:**
   ```css
   @layer components {
     .my-custom-class {
       @apply bg-burgundy text-white;
     }
   }
   ```

3. **Przebuduj CSS:**
   ```bash
   npm run build
   ```

---

## 🛠️ Dostępne Skrypty npm

| Skrypt | Opis | Kiedy używać |
|--------|------|--------------|
| `npm run build` | Przebuduj CSS (produkcyjny, zminifikowany) | Przed wdrożeniem na produkcję |
| `npm run dev` | Watch mode (automatyczna przebudowa) | Podczas pracy nad projektem |
| `npm run build-css` | Watch mode (alternatywa) | To samo co `dev` |
| `npm run build-css-prod` | Produkcyjny build | To samo co `build` |

### Rekomendacja:
- **Podczas pracy:** `npm run dev` (uruchom i zostaw w tle)
- **Przed commit:** `npm run build` (zminifikowany CSS)

---

## 🎨 Paleta Kolorów

Kolory zdefiniowane w `tailwind.config.js`:

| Kolor | Wartość | Użycie |
|-------|---------|--------|
| `ivory` | `#F7F5F2` | Tło strony |
| `espresso` | `#1A1A1A` | Główny tekst |
| `burgundy` | `#6A2E35` | CTA, przyciski |
| `gold` | `#D2B48C` | Akcenty, ikony, ceny |
| `warmgray` | `#EDEAE7` | Delikatne obramowania |

### Użycie w HTML:
```html
<div class="bg-ivory text-espresso">Tło ivory, tekst espresso</div>
<button class="bg-burgundy text-white">Przycisk burgundy</button>
<span class="text-gold">Złoty tekst</span>
```

---

## 📝 Typografia

### Fonty:
- **Playfair Display** - Nagłówki (h1, h2, h3, h4)
- **Inter** - Treść (body, paragrafy)

### Użycie:
```html
<h1 class="font-display">Nagłówek (Playfair Display)</h1>
<p class="font-body">Treść (Inter)</p>
```

---

## 🖼️ Obrazy i Media

### Wymagane pliki:

1. **Logo:**
   - `public_html/assets/img/logo-handwritten.svg`
   - SVG, odręczny styl
   - Jeśli brak, wyświetli się tekst fallback

2. **Video Hero:**
   - `public_html/assets/video/salon-lookbook.mp4`
   - MP4, 1920x1080px (16:9), max 5MB
   - Jeśli brak, wyświetli się `lookbook/look1.jpg`

3. **Galeria:**
   - `public_html/assets/img/gallery/g1.jpg` - `g9.jpg`
   - Format: JPG, zoptymalizowany

4. **Lookbook:**
   - `public_html/assets/img/lookbook/look1.jpg` - `look3.jpg`

5. **Before/After:**
   - `public_html/assets/img/before-after/before.jpg`
   - `public_html/assets/img/before-after/after.jpg`

**Szczegółowe instrukcje:** Zobacz `docs/IMAGE_INSTRUCTIONS.md`

---

## 🔧 Rozwiązywanie Problemów

### Problem: "Nie widzę stylów"

**Rozwiązanie:**
1. Uruchom `npm run build`
2. Wyczyść cache przeglądarki (`Ctrl + Shift + R`)
3. Sprawdź w DevTools czy `main.css` się ładuje

### Problem: "Zmieniłem kolory w config, ale nie działają"

**Rozwiązanie:**
- **Zawsze** przebuduj CSS po zmianie `tailwind.config.js`:
  ```bash
  npm run build
  ```

### Problem: "Dodałem nową klasę, ale nie działa"

**Rozwiązanie:**
- Upewnij się, że klasa jest użyta w HTML
- Uruchom `npm run build` lub `npm run dev` (watch mode)

### Problem: "Video nie wyświetla się"

**Rozwiązanie:**
- Sprawdź czy plik `salon-lookbook.mp4` istnieje w `assets/video/`
- Jeśli nie, wyświetli się fallback image (`lookbook/look1.jpg`)

---

## 📚 Dodatkowa Dokumentacja

- **`docs/BUILD_INSTRUCTIONS.md`** - Instrukcje przebudowy CSS
- **`docs/FULL_REFACTOR_INSTRUCTIONS.md`** - Pełna refaktoryzacja projektu
- **`docs/HERO_REFACTOR_INSTRUCTIONS.md`** - Refaktoryzacja hero section
- **`docs/IMAGE_INSTRUCTIONS.md`** - Instrukcje dotyczące obrazów

---

## 🚀 Workflow Pracy

### 1. Rozpoczęcie pracy:
```bash
npm run dev
```
Uruchom watch mode i zostaw w tle.

### 2. Edycja:
- Edytuj `index.html` (HTML + klasy Tailwind)
- Edytuj `input.css` (custom komponenty)
- Edytuj `tailwind.config.js` (kolory, fonty)

### 3. Po zmianach w config:
```bash
npm run build
```
Zatrzymaj watch mode i przebuduj.

### 4. Przed commit:
```bash
npm run build
```
Upewnij się, że CSS jest zaktualizowany.

---

## ✅ Checklist przed wdrożeniem

- [ ] Wszystkie obrazy są na miejscu
- [ ] Logo SVG jest przygotowane
- [ ] Video MP4 jest przygotowane (lub fallback działa)
- [ ] CSS został przebudowany (`npm run build`)
- [ ] Strona działa lokalnie
- [ ] Wszystkie linki działają
- [ ] Responsywność działa (mobile, tablet, desktop)
- [ ] Animacje działają
- [ ] Menu sticky działa

---

## 🎯 Podsumowanie

**Pamiętaj:**
1. ✅ **Zawsze** przebuduj CSS po zmianie `tailwind.config.js`
2. ✅ Używaj `npm run dev` podczas pracy (watch mode)
3. ✅ Edytuj tylko `input.css`, nie `main.css`
4. ✅ Wyczyść cache przeglądarki jeśli style nie działają
5. ✅ Sprawdź DevTools jeśli coś nie działa

**Gotowe!** 🎉

