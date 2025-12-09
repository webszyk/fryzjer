# 📹 SEKCJA MĘSKA I DAMSKA - Wymagane Pliki

## 📍 Lokalizacja w kodzie

**Plik:** `public_html/index.html`  
**Linie:** 980-1029  
**ID sekcji:** `meska-sekcja`

---

## 🎥 WYMAGANE PLIKI VIDEO

### Folder: `public_html/assets/video/`

#### 1. **damskie.mp4** ⭐ WYMAGANE
- **Lokalizacja w kodzie:** Linia 1000
- **Format:** MP4
- **Rozmiar:** max. 15-20MB (dla szybkiego ładowania)
- **Długość:** 30-60 sekund (optymalnie)
- **Opis:** Video pokazujące usługi damskie - koloryzacje, strzyżenia, stylizacje dla kobiet
- **Używany w:** Lewa strona sekcji "Dla Niej i Dla Niego"
- **Poster (miniaturka):** `./assets/img/hero/hero-salon.jpg` (tymczasowo)

#### 2. **meskie.mp4** ⭐ WYMAGANE
- **Lokalizacja w kodzie:** Linia 1018
- **Format:** MP4
- **Rozmiar:** max. 15-20MB (dla szybkiego ładowania)
- **Długość:** 30-60 sekund (optymalnie)
- **Opis:** Video pokazujące usługi męskie - strzyżenia i stylizacje dla mężczyzn
- **Używany w:** Prawa strona sekcji "Dla Niej i Dla Niego"
- **Poster (miniaturka):** `./assets/img/hero/hero-salon.jpg` (tymczasowo)

---

## 🖼️ POSTER (Miniaturka Video) - OPCJONALNE

### Obecnie używany:
- **Plik:** `./assets/img/hero/hero-salon.jpg` (używany dla obu video)
- **Lokalizacja w kodzie:** Linie 999 i 1017

### Możesz dodać dedykowane postery:

#### 1. **damskie-poster.jpg** (opcjonalne)
- **Folder:** `public_html/assets/img/video/` (utwórz jeśli nie istnieje)
- **Rozmiar:** 1920x1080px (16:9) lub 1200x1600px (portrait)
- **Opis:** Miniaturka dla video damskiego - najlepiej kadr z video lub zdjęcie usług damskich

#### 2. **meskie-poster.jpg** (opcjonalne)
- **Folder:** `public_html/assets/img/video/` (utwórz jeśli nie istnieje)
- **Rozmiar:** 1920x1080px (16:9) lub 1200x1600px (portrait)
- **Opis:** Miniaturka dla video męskiego - najlepiej kadr z video lub zdjęcie usług męskich

**Aby użyć dedykowanych posterów, zmień w kodzie:**
- Linia 999: `poster="./assets/img/video/damskie-poster.jpg"`
- Linia 1017: `poster="./assets/img/video/meskie-poster.jpg"`

---

## 📋 STRUKTURA KODU

```html
<!-- SEKCJA MĘSKA - Video Damskie i Męskie -->
<section id="meska-sekcja" class="py-20 md:py-32 bg-softBlack fade-in-section">
    <!-- Video Damskie (lewa strona) -->
    <video id="video-damskie" poster="./assets/img/hero/hero-salon.jpg">
        <source src="./assets/video/damskie.mp4" type="video/mp4">
    </video>
    
    <!-- Video Męskie (prawa strona) -->
    <video id="video-meskie" poster="./assets/img/hero/hero-salon.jpg">
        <source src="./assets/video/meskie.mp4" type="video/mp4">
    </video>
</section>
```

---

## ✅ MINIMUM WYMAGANE

```
public_html/assets/video/
├── damskie.mp4          ✅ WYMAGANE
└── meskie.mp4           ✅ WYMAGANE
```

**Razem: 2 pliki MP4**

---

## 🎬 ZALECENIA DLA VIDEO

### Jakość:
- ✅ Rozdzielczość: min. 1080p (1920x1080)
- ✅ Format: MP4 (H.264 codec)
- ✅ Dobre oświetlenie
- ✅ Stabilne ujęcia (lub gimbal/stabilizacja)

### Zawartość:
- **Video Damskie:** Koloryzacje, strzyżenia, stylizacje, efekty końcowe
- **Video Męskie:** Strzyżenia, golenie, stylizacje, efekty końcowe

### Optymalizacja:
- Kompresja: balans między jakością a rozmiarem
- Długość: 30-60 sekund (krótsze = szybsze ładowanie)
- Rozmiar: max 15-20MB na video

---

## 📝 NOTATKI

- Video są wyświetlane w odtwarzaczach HTML5 z kontrolkami
- Odtwarzacze są responsywne (dostosowują się do szerokości)
- Jeśli video nie załaduje się, użytkownik zobaczy komunikat błędu
- Poster (miniaturka) jest wyświetlany przed odtworzeniem video

