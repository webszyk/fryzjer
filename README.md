# 💇 Salonik u Agi - Strona Fryzjerska

Nowoczesna, elegancka strona internetowa dla salonu fryzjerskiego we Wrocławiu. Zbudowana z użyciem **Tailwind CSS** i **Alpine.js** z premium designem w stylu lookbook.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4.18-38bdf8)
![Alpine.js](https://img.shields.io/badge/Alpine.js-3.x-8bc0d0)

---

## 🎨 O Projekcie

**Salonik u Agi** to strona internetowa dla profesjonalnego salonu fryzjerskiego, zaprojektowana z myślą o elegancji i nowoczesności. Strona prezentuje usługi, galerię prac, cennik oraz umożliwia łatwy kontakt z salonem.

### Główne cechy:
- ✨ **Premium design** - Elegancki, minimalistyczny styl lookbook
- 📱 **W pełni responsywna** - Działa na wszystkich urządzeniach
- 🎯 **Szybka** - Zoptymalizowana wydajność
- ♿ **Dostępna** - Semantic HTML, aria-labels
- 🎨 **Customizowalna** - Łatwa zmiana kolorów i stylów

---

## 🚀 Szybki Start

### Wymagania:
- Node.js (v14+)
- npm lub yarn

### Instalacja:

1. **Sklonuj repozytorium:**
   ```bash
   git clone <repository-url>
   cd fryzjer
   ```

2. **Zainstaluj zależności:**
   ```bash
   npm install
   ```

3. **Uruchom tryb deweloperski:**
   ```bash
   npm run dev
   ```
   To uruchomi watch mode - CSS będzie automatycznie przebudowywany przy zmianach.

4. **Otwórz stronę:**
   Otwórz plik `public_html/index.html` w przeglądarce.

---

## ⚠️ WAŻNE: Tailwind CSS

### Dlaczego nie widzę stylów?

**Tailwind CSS** to framework, który **generuje** klasy CSS na podstawie użytych klas w HTML. To oznacza, że:

- ✅ **Po każdej zmianie w `tailwind.config.js`** → musisz przebudować CSS
- ✅ **Po dodaniu nowych klas w HTML** → Tailwind automatycznie je doda (w watch mode)
- ✅ **Po zmianie kolorów/fontów w config** → **MUSISZ** przebudować CSS

### Rozwiązanie:

```bash
npm run build
```

Następnie wyczyść cache przeglądarki (`Ctrl + Shift + R`).

**📖 Szczegółowy przewodnik:** Zobacz [`docs/PROJECT_GUIDE.md`](docs/PROJECT_GUIDE.md)

---

## 📁 Struktura Projektu

```
fryzjer/
├── docs/                          # 📚 Dokumentacja projektu
│   ├── PROJECT_GUIDE.md          # Przewodnik obsługi
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
│       │   └── main.css         # 📦 Wygenerowany CSS (NIE EDYTUJ!)
│       ├── fonts/                 # Czcionki (Playfair Display, Inter)
│       ├── img/                   # Obrazy
│       │   ├── gallery/          # Galeria (g1.jpg - g9.jpg)
│       │   ├── lookbook/         # Lookbook (look1.jpg - look3.jpg)
│       │   ├── hero/             # Hero image (hero-salon.jpg)
│       │   ├── before-after/     # Przed/po (before.jpg, after.jpg)
│       │   └── video/            # Video (salon-lookbook.mp4)
│       └── js/                   # JavaScript (Alpine.js)
│
├── tailwind.config.js            # ⚙️ Konfiguracja Tailwind
├── package.json                  # 📦 Zależności i skrypty npm
└── README.md                     # 📖 Ten plik
```

---

## 🛠️ Dostępne Skrypty

| Skrypt | Opis |
|--------|------|
| `npm run build` | Przebuduj CSS (produkcyjny, zminifikowany) |
| `npm run dev` | Watch mode (automatyczna przebudowa przy zmianach) |
| `npm run build-css` | Watch mode (alternatywa) |
| `npm run build-css-prod` | Produkcyjny build (zminifikowany) |

### Rekomendacja:
- **Podczas pracy:** `npm run dev` (uruchom i zostaw w tle)
- **Przed commit:** `npm run build` (zminifikowany CSS)

---

## 🎨 Design System

### Paleta Kolorów:

| Kolor | Wartość | Użycie |
|-------|---------|--------|
| `ivory` | `#F7F5F2` | Tło strony |
| `espresso` | `#1A1A1A` | Główny tekst |
| `burgundy` | `#6A2E35` | CTA, przyciski |
| `gold` | `#D2B48C` | Akcenty, ikony, ceny |
| `warmgray` | `#EDEAE7` | Delikatne obramowania |

### Typografia:

- **Playfair Display** - Nagłówki (h1, h2, h3, h4)
- **Inter** - Treść (body, paragrafy)

### Komponenty:

- `.btn-primary` - Główny przycisk (burgundy)
- `.btn-outline-cream` - Przycisk outline (cream z gold border)
- `.fade-in` - Animacja fade-in
- `.logo-glow` - Efekt glow na logo

---

## 📝 Edycja Stylów

### ⚠️ WAŻNE: Które pliki edytować?

#### ✅ EDYTUJ:
- `public_html/index.html` - HTML i klasy Tailwind
- `public_html/assets/css/input.css` - Custom CSS, komponenty
- `tailwind.config.js` - Kolory, fonty, konfiguracja

#### ❌ NIE EDYTUJ:
- `public_html/assets/css/main.css` - **To jest wygenerowany plik!**
  - Zostanie nadpisany przy każdej przebudowie
  - Edytuj tylko `input.css`

---

## 🖼️ Wymagane Pliki

### Obrazy:
- `assets/img/logo-handwritten.svg` - Logo (SVG, odręczny styl)
- `assets/img/gallery/g1.jpg` - `g9.jpg` - Galeria (9 obrazów)
- `assets/img/lookbook/look1.jpg` - `look3.jpg` - Lookbook (3 obrazy)
- `assets/img/hero/hero-salon.jpg` - Hero image
- `assets/img/before-after/before.jpg` - Przed
- `assets/img/before-after/after.jpg` - Po

### Video:
- `assets/video/salon-lookbook.mp4` - Video hero (1920x1080px, max 5MB)

**📖 Szczegółowe instrukcje:** Zobacz [`docs/IMAGE_INSTRUCTIONS.md`](docs/IMAGE_INSTRUCTIONS.md)

---

## 🔧 Technologie

- **HTML5** - Semantic markup
- **Tailwind CSS 3.4.18** - Utility-first CSS framework
- **Alpine.js 3.x** - Minimalistyczny JavaScript framework
- **Custom Fonts** - Playfair Display, Inter (self-hosted)

---

## 📚 Dokumentacja

Wszystkie szczegółowe instrukcje znajdują się w folderze [`docs/`](docs/):

- **[PROJECT_GUIDE.md](docs/PROJECT_GUIDE.md)** - Kompletny przewodnik obsługi projektu
- **[BUILD_INSTRUCTIONS.md](docs/BUILD_INSTRUCTIONS.md)** - Instrukcje przebudowy CSS
- **[FULL_REFACTOR_INSTRUCTIONS.md](docs/FULL_REFACTOR_INSTRUCTIONS.md)** - Pełna refaktoryzacja
- **[HERO_REFACTOR_INSTRUCTIONS.md](docs/HERO_REFACTOR_INSTRUCTIONS.md)** - Refaktoryzacja hero
- **[IMAGE_INSTRUCTIONS.md](docs/IMAGE_INSTRUCTIONS.md)** - Instrukcje dotyczące obrazów

---

## 🐛 Rozwiązywanie Problemów

### Problem: "Nie widzę stylów"
1. Uruchom `npm run build`
2. Wyczyść cache przeglądarki (`Ctrl + Shift + R`)
3. Sprawdź w DevTools czy `main.css` się ładuje

### Problem: "Zmieniłem kolory w config, ale nie działają"
- **Zawsze** przebuduj CSS po zmianie `tailwind.config.js`:
  ```bash
  npm run build
  ```

**📖 Więcej rozwiązań:** Zobacz [`docs/PROJECT_GUIDE.md`](docs/PROJECT_GUIDE.md#-rozwiązywanie-problemów)

---

## 📄 Licencja

Projekt prywatny - Salonik u Agi

---

## 👤 Autor

Projekt stworzony dla Salonik u Agi

---

## 🙏 Podziękowania

- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Alpine.js](https://alpinejs.dev/) - JavaScript framework
- [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) - Font
- [Inter](https://fonts.google.com/specimen/Inter) - Font

---

## 📞 Kontakt

W razie pytań lub problemów, sprawdź dokumentację w folderze [`docs/`](docs/).

---

**Pamiętaj:** Zawsze przebuduj CSS po zmianie `tailwind.config.js`! 🎨

