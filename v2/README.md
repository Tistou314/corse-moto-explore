# corseamoto.com — v2 (Astro 5 + Supabase + Vercel)

Refonte SEO complète du site `corse-moto-explore` (Lovable Vite/React SPA) vers une architecture statique hybride.

## Stack

- **Astro 5** (SSG par défaut, SSR sur `/admin/*` via `prerender = false`)
- **Tailwind 3** + shadcn/ui (composants UI legacy conservés)
- **Supabase** : Postgres + Auth + Storage
- **Vercel** : hosting + ISR + CDN
- **MapLibre GL** + **MapTiler** (remplace Mapbox)
- **Fraunces** (serif éditoriale) + **Inter** (sans-serif)

## Structure

```
v2/
├── astro.config.mjs            # adapter Vercel + plugin Vite alias hybride v2/legacy
├── tailwind.config.ts          # tokens minimaux (bg, text-primary/secondary/muted, border, accent)
├── public/
│   ├── og/default.svg          # OG par défaut 1200x630
│   ├── manifest.webmanifest
│   ├── robots.txt
│   └── lovable-uploads/        # 24 avatars auteurs (copie legacy)
├── src/
│   ├── components/             # atomes Astro (Hero, StatLine, MetaList, EditorialCard, …)
│   │   ├── Map.tsx             # island MapLibre GL
│   │   ├── admin/              # EntityList, EntityForm
│   │   └── ui/                 # shadcn (copie legacy)
│   ├── layouts/
│   │   ├── Layout.astro        # public, lang=fr, OG/Twitter/JSON-LD
│   │   └── AdminLayout.astro   # noindex, client-side auth gate
│   ├── lib/
│   │   ├── data.ts             # adapter lecture legacy → SSG (sera remplacé par Supabase)
│   │   ├── supabase.ts
│   │   ├── seo.ts              # buildSeo, websiteJsonLd, breadcrumbJsonLd, …
│   │   ├── serpapi.ts          # enrichissement hébergements
│   │   └── utils.ts            # cn, slugify, absoluteUrl
│   ├── pages/                  # public SSG + /admin SSR
│   └── styles/global.css       # tokens HSL + base typo
├── supabase/
│   ├── schema.sql              # tables + RLS
│   └── storage.sql             # buckets publics
├── scripts/
│   ├── migrate-data.ts         # legacy → Supabase
│   └── lighthouse-audit.mjs    # CI audit local
└── reports/lighthouse/         # rapports Lighthouse JSON
```

## Dev

```bash
cp .env.example .env            # remplir Supabase / MapTiler / SerpAPI
npm install
npm run dev                     # http://localhost:4321
```

## Build

```bash
npm run build                   # → dist/ + .vercel/output/
```

## Migration des données legacy

```bash
# Variables d'env requises
export PUBLIC_SUPABASE_URL=https://<ref>.supabase.co
export SUPABASE_SERVICE_ROLE_KEY=eyJ...

# Sécurité : symlink pour résoudre les peers depuis les fichiers legacy
ln -sf "$(pwd)/node_modules" ../node_modules

# Dry-run (rapide, pas d'écriture, pas d'image)
npx tsx --tsconfig scripts/tsconfig.json scripts/migrate-data.ts --dry-run --skip-images

# Exécution complète
npx tsx --tsconfig scripts/tsconfig.json scripts/migrate-data.ts

# Skip-images (faster, conserve les URLs Unsplash)
npx tsx --tsconfig scripts/tsconfig.json scripts/migrate-data.ts --skip-images
```

Comptes attendus : 6 authors, 10 itineraries (+ 76 POIs), 26 accommodations, 14 blog posts, 130 gas stations.

## SEO — vérifications HTML

```bash
npm run build
node scripts/lighthouse-audit.mjs   # 4 URLs canoniques, mobile 4G
```

Cibles : Perf ≥ 90, A11y/BP/SEO = 100, LCP < 2.5 s, CLS < 0.1, INP < 200 ms.

## Déploiement Vercel

```bash
vercel link                     # premier login
vercel env add PUBLIC_SUPABASE_URL
vercel env add PUBLIC_SUPABASE_PUBLISHABLE_KEY
vercel env add SUPABASE_SERVICE_ROLE_KEY
vercel env add PUBLIC_MAPTILER_KEY
vercel env add SERPAPI_KEY
vercel env add VERCEL_DEPLOY_HOOK_URL          # optionnel, déclenche rebuild sur save BO
vercel --prod
```

Domaine : pointer `corseamoto.com` (A record ou CNAME) vers Vercel.

## Charte design (rappel)

- Pas de badges colorés, pas de pastilles, pas d'icônes décoratives dans les listes
- Une seule couleur d'accent : `--accent: 210 56% 23%` (bleu profond corse)
- Titres en serif Fraunces, corps en Inter
- Sentence case partout (ni Title Case ni ALL CAPS)
- Stats en ligne avec séparateurs fins (pas de grilles 6-en-1)
- Pas d'em-dash dans le contenu éditorial
