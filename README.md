# 🌿 NaturaIQ — Naturalny Asystent Zdrowia

> Twój personalny asystent zdrowia oparty na medycynie naturalnej i danych biometrycznych z zegarka.

![NaturaIQ](https://img.shields.io/badge/NaturaIQ-v4.0-1A3D2B?style=for-the-badge&logo=leaf)
![PWA](https://img.shields.io/badge/PWA-Ready-C4873A?style=for-the-badge)
![Offline](https://img.shields.io/badge/Offline-Support-27AE60?style=for-the-badge)

---

## 🚀 Live Demo

**► [naturaiq.github.io](https://TWOJ-USERNAME.github.io/naturaiq)**

Otwórz na telefonie → Chrome → menu (⋮) → **"Dodaj do ekranu głównego"**

---

## 📱 Funkcje

| Ekran | Co robi |
|-------|---------|
| 🏠 **Dziś** | BioScore, nawodnienie z kubkami, nawyki dnia |
| ⌚ **Sygnały** | Wpisz HR/HRV/Sen/SpO2 → protocol naturalny |
| 🌿 **Apteczka** | 50+ środków naturalnych z dowodami naukowymi |
| 📊 **Tracker** | 8 nawyków, streak, statystyki tygodnia |
| 📓 **Dziennik** | Moods, notatki, historia zdrowotna |
| 📈 **Trendy** | Wykresy SVG, kalkulator dawek, eksport |
| ⚠️ **Alerty** | Analiza biometryczna, protokół ratunkowy |
| 🌿 **Sezon** | Protokoły zima/wiosna/lato/jesień |
| 🔔 **Push** | Inteligentne przypomnienia (woda, zioła, sen) |

---

## ⚡ Instalacja na Android (PWA)

### Metoda 1 — Chrome (najlepsza)
1. Otwórz `https://TWOJ-USERNAME.github.io/naturaiq` w Chrome
2. Poczekaj ~3 sekundy — pojawi się baner "Zainstaluj NaturaIQ"
3. Kliknij **Instaluj** → gotowe! Ikona pojawi się na ekranie głównym

### Metoda 2 — Menu przeglądarki
1. Otwórz link w Chrome / Edge / Samsung Internet
2. Menu (⋮) → **"Dodaj do ekranu głównego"** lub **"Zainstaluj aplikację"**
3. Potwierdź → działa jak natywna aplikacja

### Metoda 3 — iOS Safari
1. Otwórz link w Safari
2. Przycisk udostępniania (□↑) → **"Dodaj do ekranu głównego"**
3. Nazwa: NaturaIQ → **Dodaj**

---

## 🛠️ Uruchomienie lokalne

```bash
# Klonuj repozytorium
git clone https://github.com/TWOJ-USERNAME/naturaiq.git
cd naturaiq

# Uruchom lokalny serwer (wymagany dla SW)
npx serve .
# lub
python3 -m http.server 8080

# Otwórz http://localhost:8080
```

---

## 📂 Struktura projektu

```
naturaiq/
├── index.html        ← Cała aplikacja (single-file PWA)
├── manifest.json     ← PWA manifest (ikony, kolory, skróty)
├── sw.js             ← Service Worker (offline + push)
├── icons/
│   ├── icon-72.png
│   ├── icon-96.png
│   ├── icon-128.png
│   ├── icon-144.png
│   ├── icon-192.png  ← Główna ikona (wymagana)
│   └── icon-512.png  ← Splash screen (wymagana)
└── README.md
```

---

## 🔔 Powiadomienia Push

Aplikacja używa **Web Push API** — działa bez serwera:
- Przypomnienia działają przez `setTimeout` (gdy aplikacja otwarta)
- Alerty biometryczne sprawdzane co 5 minut
- Po zamknięciu aplikacji — powiadomienia przez Service Worker

> **Uwaga:** Pełne push notifications w tle (gdy aplikacja zamknięta) wymagają serwera VAPID. Dodajemy w następnej wersji.

---

## 🔬 Baza naukowa

Wszystkie rekomendacje oparte na:
- **PubMed / NIH** — randomizowane badania kliniczne (RCT)
- **WHO Monographs** — oficjalne monografie ziół
- **EMA** — European Medicines Agency
- **Cochrane Reviews** — systematyczne przeglądy dowodów

---

## ⚕️ Disclaimer

NaturaIQ to aplikacja **wellness** — nie jest urządzeniem medycznym i nie zastępuje porady lekarskiej. Przy poważnych objawach zawsze konsultuj się z lekarzem.

---

## 🗺️ Roadmap

- [x] v1.0 — Baza naturalna (87 środków)
- [x] v2.0 — Dashboard + BioScore
- [x] v3.0 — Trendy + Alerty + Sezon
- [x] v4.0 — Push notifications + PWA
- [ ] v5.0 — Natywna aplikacja Android (Kotlin/PWABuilder)
- [ ] v6.0 — Integracja Apple HealthKit / Health Connect
- [ ] v7.0 — AI asystent (Anthropic Claude API)

---

## 📄 Licencja

MIT License — możesz używać, modyfikować i dystrybuować.

---

*Zbudowane z ❤️ i 🌿 — medycyna naturalna musi przetrwać*
