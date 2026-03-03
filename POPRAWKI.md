# POPRAWKI.md – Mapa Rozwoju FizjoRank.pl

> **Ostatnia aktualizacja:** Marzec 2026  
> Dokument zawiera kompletną listę wdrożonych zmian, zaplanowanych ulepszeń i opcji strategicznych dla FizjoRank.pl

---

## ✅ Zrealizowane (Sprint 1, Marzec 2026)

| # | Zmiana | Plik |
|---|---|---|
| 1 | Metadata SEO (title, description, keywords, OG, Twitter) | `app/layout.tsx` |
| 2 | `lang="pl"` w HTML + Inter font z latin-ext | `app/layout.tsx` |
| 3 | JSON-LD Structured Data (ItemList + MedicalBusiness) | `app/page.tsx` |
| 4 | Konwersja page.tsx z `"use client"` na Server Component | `app/page.tsx` |
| 5 | `sitemap.xml` + `robots.txt` przez Next.js App Router | `app/sitemap.ts`, `app/robots.ts` |
| 6 | Podstrony ośrodków `/osrodek/[id]` (31 stron, SSG) | `app/osrodek/[id]/page.tsx` |
| 7 | Baza Wiedzy – 3 artykuły z treścią i sekcją polecanych | `app/baza-wiedzy/*/page.tsx` |
| 8 | Wewnętrzne linki do `/osrodek/[id]` zamiast external `_blank` | `components/RankingSection.tsx` |
| 9 | Usunięcie `reviewCount` z JSON i interfejsu | `data/centers.json` |

**Sprint 2 – Marzec 2026**

| # | Zmiana | Plik |
|---|---|---|
| 10 | Slug per ośrodek zamiast ID w URL (`centers.json` + routing) | `data/centers.json`, `app/osrodek/[slug]/` |
| 11 | Przycisk „Strona placówki" + ikona ExternalLink, otwiera w nowej karcie | `components/RankingSection.tsx` |
| 12 | Nazwa ośrodka → link do zewnętrznej strony (nowa karta) | `components/RankingSection.tsx` |
| 13 | Spójny kontener `max-w-6xl mx-auto px-6` na wszystkich stronach | wszystkie `.tsx` |
| 14 | Hero wycentrowane (`text-center`) jako jedyny wyjątek od lewostronnego wyrównania | `app/page.tsx` |
| 15 | Artykuły baza-wiedzy: outer `max-w-6xl`, inner `max-w-3xl` dla czytelności | `app/baza-wiedzy/*/page.tsx` |

---

## 🔴 Priorytet 1 – Do realizacji jak najszybciej

### P1.1 – Rozbudowa danych w `centers.json`
**Problem:** JSON zawiera minimalne dane. Każda placówka to 6 pól. Brak opisów, miast, specjalizacji.  
**Wpływ na SEO:** Bardzo wysoki. Bogatsze treści = lepsze pozycje.

**Dodaj do każdego ośrodka:**
```json
{
  "slug": "olinek-warszawa",
  "description": "Opis 2-3 zdania...",
  "city": "Warszawa",
  "voivodeship": "mazowieckie",
  "specializations": ["mózgowe porażenie dziecięce", "autyzm", "SMA"],
  "nfz": false,
  "phone": "+48 22 XXX XX XX"
}
```

**Opcje realizacji:**
- A) Ręczne uzupełnianie JSON (darmowe, czasochłonne)
- B) Skrypt AI do masowego generowania opisów na bazie nazwy/tagów (szybkie)
- C) Zewnętrzna baza danych (gdy przekroczysz 100+ placówek)

---

### P1.2 – Strony lokalne (SEO lokalne)
**Problem:** Brak stron dla konkretnych miast.  
**Wartość:** Frazy `"rehabilitacja dziecięca Warszawa"` mają 2400+ wyszukiwań/mies.

**Do implementacji:**
- `app/warszawa/page.tsx` – ranking ośrodków w Warszawie
- `app/krakow/page.tsx` – Kraków
- `app/poznan/page.tsx` – Poznań
- `app/wroclaw/page.tsx` – Wrocław

Każda strona: `title` z miastem, H1 z miastem, filtrowana lista ośrodków, dedykowany JSON-LD.

**Implementacja:** Po dodaniu pola `city` do JSON → `generateStaticParams` z unikalnych miast.

---

### P1.3 – FAQ z Schema FAQ
**Problem:** Brak sekcji FAQ = brak FAQ rich snippets w SERP.  
**Wartość:** FAQ pojawia się pod wynikiem Google, zwiększa CTR o 20-30%.

**Pytania do dodania na stronie głównej:**
1. Jak wybrać ośrodek rehabilitacji dla dziecka?
2. Jaka jest różnica między NDT-Bobath a Vojta?
3. Czy NFZ refunduje rehabilitację dziecięcą?
4. Ile kosztuje prywatna rehabilitacja dziecięca?
5. Jak długo trwa terapia NDT-Bobath?

**Implementacja:** Komponent `FAQSection.tsx` + JSON-LD `FAQPage` w `page.tsx`.

---

## 🟠 Priorytet 2 – W ciągu 1-2 miesięcy

### P2.1 – Formularz "Zgłoś placówkę" (aktywny)
**Problem:** Przycisk "Zgłoś placówkę" w nawigacji linkuje donikąd.  
**Opcje:**
- A) Tally.so / Typeform – darmowe, szybkie (30 min pracy)
- B) Własna strona `app/zglos-placowke/page.tsx` z formularzem i Resend/Nodemailer
- C) Notion database + formularz (jeśli używasz Notion do zarządzania)

**Rekomendacja:** Zacznij od Tally.so. Zajmuje 30 minut i daje profesjonalny wygląd.

---

### P2.2 – Google Search Console + Analytics
**Kroki:**
1. Zaloguj się do [Google Search Console](https://search.google.com/search-console)
2. Dodaj właściwość `fizjorank.pl`
3. Weryfikuj przez plik HTML lub tag DNS
4. Prześlij `https://fizjorank.pl/sitemap.xml`
5. Monitoruj impressions i pozycje dla kluczowych fraz

**Analytics:** Zainstaluj [Plausible](https://plausible.io) (płatny, privacy-first) lub Google Analytics 4 (darmowy). Plausible rekomendowany dla małych serwisów – łatwiejszy w RODO.

```bash
# Dodaj do layout.tsx:
# - GA4: Skrypt z gtag.js lub next/third-parties/google
# - Plausible: <Script defer data-domain="fizjorank.pl" src="https://plausible.io/js/script.js" />
```

---

### P2.3 – Canonical URLs per artykuł i Open Graph Images
**Problem:** Artykuły nie mają OG image – po udostępnieniu w social media brak miniaturki.  
**Implementacja:**
- Stwórz statyczne OG images (1200×630px) per artykuł w `public/og/`
- Lub użyj Next.js [Dynamic OG Images](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image) z `opengraph-image.tsx`

---

### P2.4 – Breadcrumbs z JSON-LD BreadcrumbList
Na każdej podstronie dodaj breadcrumb schema:
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Strona główna", "item": "https://fizjorank.pl" },
    { "@type": "ListItem", "position": 2, "name": "Baza Wiedzy", "item": "https://fizjorank.pl/baza-wiedzy" },
    { "@type": "ListItem", "position": 3, "name": "NDT-Bobath a Vojta" }
  ]
}
```

---

## 🟡 Priorytet 3 – Strategiczny (3-6 miesięcy)

### P3.1 – Zarządzanie treścią (CMS)
**Problem:** Artykuły bazy wiedzy są zakodowane. Trudno dodawać nowe.  
**Kiedy warto:** Gdy planujesz 10+ artykułów.

**Opcje (od prostych do zaawansowanych):**

| Opcja | Trudność | Koszt | Opis |
|---|---|---|---|
| **MDX** | ⭐⭐ | Darmowe | Pliki `.mdx` w repo, zarządzasz przez Git |
| **Contentlayer** | ⭐⭐⭐ | Darmowe | Type-safe MDX z walidacją schematów |
| **Sanity.io** | ⭐⭐⭐ | Darmowe/płatne | Headless CMS z edytorem wizualnym |
| **Notion + API** | ⭐⭐ | Darmowe | Piszesz w Notion, API pobiera treści |
| **Supabase** | ⭐⭐⭐⭐ | Darmowe/płatne | Full DB + auth + storage (overkill na tym etapie) |

**Rekomendacja dla fizjorank.pl (etap walidacji):** Zostań z plikami `.tsx` lub przejdź na MDX. Sanity/Supabase w momencie, gdy będziesz miał więcej treści i chcesz umożliwić innym osobom edycję.

---

### P3.2 – Pełne podstrony placówek z treścią
**Problem:** `/osrodek/[id]` pokazuje tylko dane z JSON. Brak opisów, zdjęć, historii.  
**Opcje:**

- **A) MDX per placówka** – plik `data/centers/olinek.mdx` z pełną treścią + frontmatter (dane z JSON). Brak backoffice, wszystko w repo.
- **B) Supabase** – baza danych z panel admin do edycji. Potrzebne gdy masz >50 placówek i chcesz delegować zarządzanie.
- **C) Notion jako baza** – aktualizujesz w Notion, strona czyta przez API. Dobry kompromis.

**Rekomendacja:** MDX jeśli chcesz działać sam. Notion/Supabase jeśli będziesz zlecać zarządzanie bazą.

---

### P3.3 – System opinii użytkowników
**Problem:** Masz oceny, ale nie masz własnych opinii. UGC (User Generated Content) to cenny sygnał SEO.  
**Implementacja:**
- Formularz opinii → moderacja → zapis w Supabase → wyświetlanie z schema `Review`
- Google może wyświetlać gwiazdki z własnych opinii w SERP

**Złożoność:** Wysoka (wymaga auth, moderacji). Priorytet na późniejszy etap.

---

### P3.4 – Filtrowanie metodą terapii jako osobne URL
Każda metoda jako osobna strona:
- `fizjorank.pl/metoda/ndt-bobath` 
- `fizjorank.pl/metoda/vojta`
- `fizjorank.pl/metoda/integracja-sensoryczna`

Generowane przez `generateStaticParams` z tagów w JSON.

---

## 🟢 Priorytet 4 – Długoterminowy (6+ miesięcy)

### P4.1 – Link Building (off-site SEO)
**Grupy docelowe i miejsca:**
- Grupy FB dla rodziców dzieci z różnymi schorzeniami (mózgowe porażenie, SMA, autyzm)
- fora.pl, niepelnosprawni.pl, cerebralpalsy.pl
- Współpraca z blogerami piszącymi o rodzicielstwie i niepełnosprawności
- Wywiady eksperckie w serwisach medycznych

### P4.2 – Model monetyzacji
FizjoRank może generować przychód na kilka sposobów:

| Model | Potencjał | Trudność |
|---|---|---|
| **Promowanie placówek** (już istniejące `isPromoted`) | ★★★★ | Niska – sprzedaż bezpośrednia |
| **Subskrypcja dla placówek** (panel zarządzania profilem) | ★★★★★ | Wysoka – wymaga backoffice |
| **CPC / Afiliacja** (linki do rejestracji w placówkach) | ★★★ | Średnia |
| **Lead generation** (formularz "umów wizytę" → fee) | ★★★★ | Średnia – wymaga integracji |
| **Reklamy display** (Google AdSense) | ★★ | Niska – spada UX |

**Rekomendacja na etap walidacji:** Zacznij od sprzedaży bezpośredniej wyróżnień (`isPromoted`). Kontaktuj się bezpośrednio z placówkami oferując "wyróżnienie na głównej" za abonament miesięczny.

### P4.3 – Wersja mobilna PWA
Zainstaluj aplikację jako PWA (Progressive Web App) z manifest.json i service worker.

### P4.4 – Ekspansja geograficzna
Po ugruntowaniu pozycji w Polsce:
- Wersja dla Czech, Słowacji (podobna specyfika rynku)
- Internacjonalizacja (i18n) w Next.js przez plik `next.config.ts`

---

## 📊 Monitoring i KPIs

Metryki do śledzenia co tydzień:

| Metryka | Narzędzie | Cel 6M |
|---|---|---|
| Organic impressions | Google Search Console | 10,000/mies. |
| Organic clicks | Google Search Console | 500/mies. |
| Średnia pozycja | Google Search Console | Top 10 dla 5 fraz |
| Core Web Vitals | PageSpeed Insights | LCP < 2.5s, CLS < 0.1 |
| Liczba zaindeksowanych stron | Google Search Console | 40+ |

---

## 🛠 Użyteczne narzędzia

| Narzędzie | Zastosowanie | Koszt |
|---|---|---|
| [Google Search Console](https://search.google.com/search-console) | Monitoring indeksowania i pozycji | Darmowe |
| [Google Rich Results Test](https://search.google.com/test/rich-results) | Weryfikacja JSON-LD | Darmowe |
| [PageSpeed Insights](https://pagespeed.web.dev/) | Core Web Vitals | Darmowe |
| [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools) | Backlinki, audyt SEO | Darmowe (ograniczone) |
| [Screaming Frog](https://www.screamingfrog.co.uk/seo-spider/) | Crawl techniczny | Darmowe do 500 URL |
| [Tally.so](https://tally.so) | Formularz "Zgłoś placówkę" | Darmowe |
| [Plausible](https://plausible.io) | Analytics (RODO-friendly) | ~9€/mies. |

---

*Ten dokument jest aktywnym dokumentem roboczym – aktualizuj po każdym sprincie.*
