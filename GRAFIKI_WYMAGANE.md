# 📸 LISTA WYMAGANYCH GRAFIK - Salonik u Agi

## 📁 STRUKTURA FOLDERÓW

```
public_html/
└── assets/
    ├── img/
    │   ├── hero/          (zdjęcia hero/banner)
    │   ├── gallery/       (zdjęcia lookbook)
    │   └── before-after/  (zdjęcia przed i po)
    └── video/
        └── hero-loop.mp4   (opcjonalne video)
```

---

## 🎯 SEKCJA HERO (Banner główny)

### Folder: `public_html/assets/img/hero/`

**Wymagane pliki:**

1. **hero-salon.jpg** (główny obraz - fallback)
   - Format: JPG
   - Rozmiar: min. 1920x1080px (16:9 lub 9:16 dla pionowego)
   - Opis: Wnętrze salonu lub Aga przy pracy
   - Używany w: Hero section (prawa strona, glass card)

2. **hero-desktop.avif** (optymalizowany dla desktop)
   - Format: AVIF (najlepsza jakość)
   - Rozmiar: 1920x1080px lub większy
   - To samo zdjęcie co hero-salon.jpg, tylko w formacie AVIF

3. **hero-desktop.webp** (fallback dla AVIF)
   - Format: WebP
   - Rozmiar: 1920x1080px
   - To samo zdjęcie

4. **hero-mobile.avif** (optymalizowany dla mobile)
   - Format: AVIF
   - Rozmiar: 768x1024px (portrait) lub 1024x768px (landscape)
   - Wersja zoptymalizowana dla telefonów

5. **hero-mobile.webp** (fallback dla mobile)
   - Format: WebP
   - Rozmiar: 768x1024px
   - Wersja mobilna

**Uwaga:** Jeśli nie masz AVIF/WebP, wystarczy **hero-salon.jpg** - strona będzie działać, ale wolniej się załaduje.

---

## 🖼️ SEKCJA LOOKBOOK (Galeria)

### Folder: `public_html/assets/img/gallery/`

**Wymagane pliki (minimum 6 zdjęć):**

1. **g1.jpg** - Fryzura 1
2. **g2.jpg** - Fryzura 2
3. **g3.jpg** - Fryzura 3
4. **g4.jpg** - Fryzura 4
5. **g5.jpg** - Fryzura 5
6. **g6.jpg** - Fryzura 6

**Wymagania:**
- Format: JPG
- Rozmiar: min. 1200x1200px (kwadrat) lub 1200x1600px (portrait)
- Opis: Najlepsze prace, różnorodne fryzury, dobre oświetlenie
- Styl: Profesjonalne zdjęcia, możliwie jednolite tło

**Możesz dodać więcej:** g7.jpg, g8.jpg, g9.jpg itd. (będzie trzeba dodać do HTML)

---

## 📸 SEKCJA PRZED I PO (Case Studies)

### Folder: `public_html/assets/img/before-after/`

### Case Study 1 (Pierwszy blok):

1. **ba-01-before.jpg** - Przed zabiegiem
   - Format: JPG
   - Rozmiar: min. 1200x1600px (portrait)
   - Opis: Zdjęcie przed transformacją

2. **ba-01-before.avif** (opcjonalne - optymalizacja)
   - Format: AVIF
   - To samo zdjęcie

3. **ba-01-before.webp** (opcjonalne - fallback)
   - Format: WebP
   - To samo zdjęcie

4. **ba-01-after.jpg** - Po zabiegu
   - Format: JPG
   - Rozmiar: min. 1200x1600px (portrait)
   - Opis: To samo ujęcie, po transformacji

5. **ba-01-after.avif** (opcjonalne)
6. **ba-01-after.webp** (opcjonalne)

### Case Study 2 (Drugi blok):

1. **before.jpg** - Przed zabiegiem (drugi case)
2. **before.avif** (opcjonalne)
3. **before.webp** (opcjonalne)
4. **after.jpg** - Po zabiegu (drugi case)
5. **after.avif** (opcjonalne)
6. **after.webp** (opcjonalne)

**Wymagania:**
- Format: JPG (wymagane), AVIF/WebP (opcjonalne)
- Rozmiar: min. 1200x1600px (portrait)
- Opis: Para zdjęć pokazująca transformację - najlepiej w tym samym ujęciu, oświetleniu

---

## 🎥 VIDEO (Opcjonalne)

### Folder: `public_html/assets/video/`

1. **hero-loop.mp4**
   - Format: MP4
   - Rozmiar: max. 10MB (dla szybkiego ładowania)
   - Długość: 6-10 sekund (loop)
   - Opis: Slow-motion video pokazujące pracę w salonie, stylizację włosów
   - Używany w: Modal video w sekcji hero

2. **damskie.mp4** ⭐ NOWE
   - Format: MP4
   - Rozmiar: max. 15MB (dla szybkiego ładowania)
   - Długość: 30-60 sekund
   - Opis: Video pokazujące usługi damskie - koloryzacje, strzyżenia, stylizacje dla kobiet
   - Używany w: Sekcja "Dla Niej i Dla Niego" (lewa strona)

3. **meskie.mp4** ⭐ NOWE
   - Format: MP4
   - Rozmiar: max. 15MB (dla szybkiego ładowania)
   - Długość: 30-60 sekund
   - Opis: Video pokazujące usługi męskie - strzyżenia i stylizacje dla mężczyzn
   - Używany w: Sekcja "Dla Niej i Dla Niego" (prawa strona)

**Uwaga:** Jeśli nie masz video, odtwarzacze będą puste, ale strona będzie działać normalnie.

---

## 📋 PODSUMOWANIE - MINIMUM WYMAGANE

### ✅ Wymagane (strona będzie działać):

```
public_html/assets/img/
├── hero/
│   └── hero-salon.jpg          ✅ WYMAGANE
├── gallery/
│   ├── g1.jpg                  ✅ WYMAGANE
│   ├── g2.jpg                   ✅ WYMAGANE
│   ├── g3.jpg                   ✅ WYMAGANE
│   ├── g4.jpg                   ✅ WYMAGANE
│   ├── g5.jpg                   ✅ WYMAGANE
│   └── g6.jpg                   ✅ WYMAGANE
└── before-after/
    ├── ba-01-before.jpg         ✅ WYMAGANE
    ├── ba-01-after.jpg          ✅ WYMAGANE
    ├── before.jpg               ✅ WYMAGANE
    └── after.jpg                ✅ WYMAGANE
```

**Razem: 12 plików JPG (minimum)**

---

## 🎨 ZALECENIA TECHNICZNE

### Jakość zdjęć:
- ✅ Wysoka rozdzielczość (min. 1200px szerokości)
- ✅ Dobre oświetlenie
- ✅ Profesjonalne ujęcia
- ✅ Spójny styl (jednolite tło lub podobne)

### Optymalizacja (opcjonalne, ale zalecane):
- Użyj narzędzi do konwersji:
  - **AVIF:** https://squoosh.app/ lub ImageMagick
  - **WebP:** https://squoosh.app/ lub cwebp
- Kompresja JPG: jakość 80-85% (balans między jakością a rozmiarem)

### Nazewnictwo:
- ✅ Używaj małych liter
- ✅ Bez polskich znaków
- ✅ Bez spacji (używaj myślników)
- ✅ Format: `nazwa-zdjecia.jpg`

---

## 🚀 JAK DODAĆ GRAFIKI

1. Utwórz foldery (jeśli nie istnieją):
   ```
   public_html/assets/img/hero/
   public_html/assets/img/gallery/
   public_html/assets/img/before-after/
   public_html/assets/video/
   ```

2. Skopiuj pliki do odpowiednich folderów z dokładnymi nazwami

3. Sprawdź, czy pliki mają poprawne rozszerzenia (.jpg, .avif, .webp)

4. Odśwież stronę w przeglądarce

---

## ❓ CO ZROBIĆ, JEŚLI BRAKUJE GRAFIK?

- **Tymczasowo:** Możesz użyć placeholderów (np. z https://placeholder.com)
- **Długoterminowo:** Dodaj prawdziwe zdjęcia salonu i prac

---

## 📝 NOTATKI

- Wszystkie grafiki powinny być zoptymalizowane pod kątem web (kompresja)
- Hero image powinien być szczególnie wysokiej jakości (główne zdjęcie)
- Lookbook - różnorodność stylów i kolorów
- Przed i Po - najlepiej w tym samym ujęciu, oświetleniu, pozycji

