# INSTRUKCJE PRZEBUDOWY CSS

## ✅ Problem rozwiązany!

CSS został przebudowany. Teraz możesz używać:

### Szybka przebudowa (produkcyjna):
```bash
npm run build
```

### Tryb deweloperski (watch mode):
```bash
npm run dev
```

lub

```bash
npm run build-css
```

---

## 🔧 Co zostało naprawione:

1. ✅ Dodano skrypt `build` do `package.json`
2. ✅ CSS został przebudowany z nowymi kolorami
3. ✅ Wszystkie klasy komponentów (`.btn-primary`, `.fade-in`, `.logo-glow`) są w `main.css`
4. ✅ Nowe kolory (ivory, espresso, burgundy, gold, warmgray) są dostępne

---

## 📋 Dostępne skrypty:

| Skrypt | Opis |
|--------|------|
| `npm run build` | Przebuduj CSS (produkcyjny, zminifikowany) |
| `npm run dev` | Watch mode (automatyczna przebudowa przy zmianach) |
| `npm run build-css` | Watch mode (alternatywa) |
| `npm run build-css-prod` | Produkcyjny build (zminifikowany) |

---

## 🚨 Jeśli nadal nie widzisz stylów:

1. **Wyczyść cache przeglądarki:**
   - Chrome/Edge: `Ctrl + Shift + R` (hard refresh)
   - Firefox: `Ctrl + F5`

2. **Sprawdź czy plik istnieje:**
   ```bash
   ls -la public_html/assets/css/main.css
   ```

3. **Sprawdź w DevTools:**
   - Otwórz DevTools (F12)
   - Sprawdź zakładkę Network → czy `main.css` się ładuje
   - Sprawdź zakładkę Console → czy są błędy

4. **Sprawdź ścieżkę w HTML:**
   ```html
   <link rel="stylesheet" href="./assets/css/main.css">
   ```
   Upewnij się, że ścieżka jest poprawna względem lokalizacji pliku HTML.

---

## ✅ Gotowe!

Po przebudowie CSS wszystkie style powinny działać poprawnie!

