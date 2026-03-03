# FizjoRank.pl – Ranking Ośrodków Rehabilitacji Dziecięcej

> Pomóc rodzicom znaleźć sprawdzoną rehabilitację dla dziecka – szybko i bez stresu.

Obiektywny katalog i ranking najlepszych ośrodków rehabilitacji dziecięcej w Polsce. Zbudowany w Next.js, zoptymalizowany pod SEO organiczne Google.

---

## Stack

| Warstwa | Technologia |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | shadcn/ui + Tailwind CSS v4 |
| Dane | `data/centers.json` – 31 placówek |
| Język | TypeScript |
| Package manager | pnpm |

## Struktura

```
app/
  layout.tsx          # Root layout, SEO metadata, lang="pl", Inter font
  page.tsx            # Strona główna – Server Component, JSON-LD
  sitemap.ts          # → /sitemap.xml (auto-generowany)
  robots.ts           # → /robots.txt
  osrodek/[slug]/     # 31 podstron SSG per placówka
  baza-wiedzy/        # Listing artykułów + 3 artykuły z treścią
components/
  RankingSection.tsx  # "use client" – wyszukiwarka + karty ośrodków
  ui/                 # shadcn/ui components
data/
  centers.json        # Dane 31 ośrodków (id, name, slug, rating, ...)
```

## Model danych

```json
{
  "id": 1,
  "name": "Ośrodek Intensywnej Rehabilitacji Dzieci OLINEK",
  "slug": "osrodek-intensywnej-rehabilitacji-dzieci-olinek",
  "rating": 4.9,
  "address": "ul. Bobrowiecka 9, 00-728 Warszawa",
  "tags": ["NDT-Bobath", "Kombinezony TheraSuit", "Integracja Sensoryczna"],
  "pros": ["Najnowocześniejszy sprzęt", "Intensywne turnusy rehabilitacyjne"],
  "isPromoted": true,
  "url": "https://olinek.com.pl"
}
```

## Uruchomienie

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # build produkcyjny (46 stron)
pnpm lint
```

> **Turbopack cache issue**: W razie błędów panics/SST usuń `rm -rf .next` i uruchom ponownie.

## Architektura SEO

| Element | Implementacja |
|---|---|
| Metadata | `layout.tsx` – title, desc, OG, Twitter, canonical |
| `lang="pl"` | `layout.tsx` HTML attribute |
| Structured Data | JSON-LD `ItemList` + `MedicalBusiness` per strona |
| Server Rendering | `page.tsx` jest Server Component (treść w HTML) |
| Sitemap | `app/sitemap.ts` → `/sitemap.xml` (46 URL-i) |
| robots.txt | `app/robots.ts` |
| Slug-based URLs | `/osrodek/fizjo4life`, `/osrodek/carolina-medical-center` |

## Design System

Jeden kontener używany wszędzie: `max-w-6xl mx-auto px-6`  
Wyjątek: hero sekcja – `text-center` (jedyny element wycentrowany)

## Deployment

Vercel → branch `main` → auto-deploy.  
Po deploy: prześlij `sitemap.xml` do Google Search Console.
