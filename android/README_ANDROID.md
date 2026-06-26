# 🤖 NaturaIQ → Natywna aplikacja Android

## Metoda 1: PWABuilder (ZALECANA — 5 minut, bez kodowania)

### Krok 1 — Wgraj na GitHub Pages
Twoja aplikacja musi być dostępna pod HTTPS.
URL: `https://TWOJA-NAZWA.github.io/naturaiq`

### Krok 2 — PWABuilder
1. Wejdź na **pwabuilder.com**
2. Wpisz URL swojej aplikacji
3. Kliknij **Package for Stores**
4. Wybierz **Android** → **Generate Package**
5. Pobierz plik `.apk` lub `.aab`

### Krok 3 — Instalacja APK bezpośrednio na telefonie
1. Na telefonie: Ustawienia → Bezpieczeństwo → Instalacja z nieznanych źródeł → Włącz
2. Prześlij plik `.apk` na telefon (email, Google Drive, kabel)
3. Otwórz plik na telefonie → Zainstaluj
4. Gotowe — ikona pojawi się w szufladzie aplikacji!

### Krok 4 (opcjonalnie) — Google Play Store
1. Pobierz `.aab` z PWABuilder
2. Utwórz konto Google Play Developer (jednorazowa opłata $25)
3. Prześlij `.aab` do Google Play Console
4. Wypełnij opis, screenshoty, ikony → Opublikuj

---

## Metoda 2: Bubblewrap (zaawansowana)

```bash
npm i -g @bubblewrap/cli
bubblewrap init --manifest https://TWOJA-NAZWA.github.io/naturaiq/manifest.json
bubblewrap build
```

Wymaga: Node.js, Android Studio, Java 11+

---

## Metoda 3: Capacitor (jeśli chcesz HealthKit/Health Connect natywnie)

```bash
npm install @capacitor/core @capacitor/android
npx cap add android
npx cap sync
npx cap open android
```

Wymaga: Android Studio

---

## Wymagania dla Google Play

- Ikona: 512×512 PNG (masz: `icons/icon-512.png`)
- Feature graphic: 1024×500 PNG
- Screenshoty: min. 2, zalecane 4–8
- Opis krótki (80 znaków) + długi (4000 znaków)
- Polityka prywatności (URL) — wymagana dla zdrowia
- Content rating — Health & Fitness

## Privacy Policy (wymagana)

Dodaj do repozytorium plik `privacy.html` lub hostuj na osobnej stronie.
NaturaIQ przechowuje dane WYŁĄCZNIE lokalnie — to duży atut w opisie!

