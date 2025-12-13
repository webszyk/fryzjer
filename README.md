# Salonik u Agi - Strona Fryzjerska

Nowoczesna strona internetowa salonu fryzjerskiego zbudowana z TailwindCSS i Alpine.js.

## 🚀 Szybki Start

### Po pobraniu projektu z Git (git clone / git pull):

```bash
# 1. Zainstaluj zależności
npm install

# 2. Zbuduj style CSS (automatycznie uruchomi się po npm install)
npm run build
```

**Lub użyj jednego polecenia:**
```bash
npm run setup
```

## 📋 Dostępne Komendy

- `npm install` - Instaluje zależności i automatycznie buduje CSS (dzięki `postinstall`)
- `npm run build` - Buduje zminifikowany CSS do produkcji
- `npm run dev` - Uruchamia Tailwind w trybie watch (automatycznie przebudowuje CSS przy zmianach)
- `npm run setup` - Pełny setup: instalacja + build

## ⚠️ Ważne - Po git pull / git clone

**Zawsze po pobraniu zmian z gita uruchom:**
```bash
npm install
```

To automatycznie:
1. Zainstaluje/aktualizuje zależności
2. Zbuduje plik `main.css` z najnowszymi stylami

## 🛠️ Struktura Projektu

```
fryzjer/
├── public_html/
│   ├── index.html          # Główny plik HTML
│   └── assets/
│       ├── css/
│       │   ├── input.css   # Źródłowy plik CSS (edytuj ten!)
│       │   └── main.css    # Wygenerowany plik (NIE EDYTOWAĆ!)
│       ├── js/             # Pliki JavaScript
│       ├── img/            # Obrazy
│       └── video/          # Video
├── tailwind.config.js      # Konfiguracja Tailwind
└── package.json            # Zależności i skrypty
```

## 🎨 Edycja Stylów

**WAŻNE:** Edytuj tylko plik `public_html/assets/css/input.css`!

Plik `main.css` jest automatycznie generowany przez Tailwind i **nie powinien być edytowany ręcznie**.

### Podczas pracy nad stylami:

```bash
# Uruchom w osobnym terminalu
npm run dev
```

To uruchomi Tailwind w trybie watch - każda zmiana w `input.css` automatycznie przebuduje `main.css`.

## 🔧 Rozwiązywanie Problemów

### Problem: Nie widzę stylów po git pull

**Rozwiązanie:**
```bash
npm install
# lub
npm run build
```

### Problem: Style nie aktualizują się podczas pracy

**Rozwiązanie:**
1. Upewnij się, że edytujesz `input.css` (nie `main.css`)
2. Uruchom `npm run dev` w osobnym terminalu
3. Odśwież przeglądarkę (Ctrl+F5)

### Problem: Błąd "tailwindcss not found"

**Rozwiązanie:**
```bash
npm install
```

## 📝 Notatki Techniczne

- **TailwindCSS:** v3.4.18
- **Alpine.js:** v3.x (CDN)
- **Build tool:** Tailwind CLI
- **Minifikacja:** Włączona w trybie produkcyjnym (`npm run build`)

## 🎯 Kolory w Projekcie

Kolory są zdefiniowane w `tailwind.config.js`:
- `deepBlack`, `graphite` - ciemne tła
- `snowWhite` - białe tła
- `goldMuted`, `gold` - złote akcenty
- `burgundPremium` - burgundowe akcenty
- `textMain`, `textMuted` - kolory tekstu

## 📞 Wsparcie

Jeśli masz problemy:
1. Sprawdź czy wszystkie zależności są zainstalowane: `npm install`
2. Sprawdź czy CSS jest zbudowany: `npm run build`
3. Sprawdź konfigurację Tailwind: `tailwind.config.js`

