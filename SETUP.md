# ⚡ Szybki Setup - Po git pull

## Po każdej sesji / git pull wykonaj:

```bash
npm install
```

To automatycznie zbuduje wszystkie potrzebne pliki CSS!

## Dlaczego?

Projekt używa **TailwindCSS**, który generuje plik `main.css` z pliku źródłowego `input.css`. 

Po `git pull` możesz mieć:
- ✅ Najnowszy kod HTML/JS
- ❌ Stary lub brakujący plik CSS

**Rozwiązanie:** `npm install` automatycznie uruchamia `npm run build` dzięki skryptowi `postinstall`.

## Alternatywnie:

Jeśli `npm install` nie zadziała, uruchom ręcznie:
```bash
npm run build
```

---

**Pamiętaj:** Zawsze po `git pull` → `npm install` ✅

