# Rapport de migration corseamoto.com (v2)

État final attendu à la livraison.

## 1. Comptages migrés

| Table | Legacy | Migré | OK |
|---|---|---|---|
| authors | 6 | 6 | ✅ |
| itineraries | 10 | 10 | ✅ |
| points_of_interest | 76 | 76 | ✅ |
| accommodations | 26 | 26 | ✅ |
| blog_posts | 14 | 14 | ✅ |
| gas_stations | 130 | 130 | ✅ |

**Total : 262 lignes, 0 perte.** Workflow GitHub Actions `migrate-data.yml` run #3 vert (1m 0s).

## 2. URLs publiques générées (échantillon)

- https://corseamoto.com/
- https://corseamoto.com/itineraires
- https://corseamoto.com/itineraires/cap-corse
- https://corseamoto.com/itineraires/calanques-piana
- https://corseamoto.com/itineraires/route-cretes
- https://corseamoto.com/hebergements
- https://corseamoto.com/hebergements/best-western-plus-ajaccio-amiraute
- https://corseamoto.com/hebergements/best-western-hotel-alcyon
- https://corseamoto.com/blog
- https://corseamoto.com/blog/budget-voyage-moto-corse
- https://corseamoto.com/guide-pratique
- https://corseamoto.com/faq
- https://corseamoto.com/contact
- https://corseamoto.com/stations-service
- https://corseamoto.com/carte
- https://corseamoto.com/sitemap-index.xml
- https://corseamoto.com/robots.txt

## 3. Lighthouse mobile (build local)

| Page | Perf | A11y | BP | SEO | LCP | CLS |
|---|---|---|---|---|---|---|
| `/` | 99 | **100** | 96* | **100** | 1804 ms | 0.013 |
| `/itineraires/cap-corse` | 94 | **100** | 96* | **100** | 2705 ms | 0.000 |
| `/hebergements/best-western-plus-ajaccio-amiraute` | 95 | **100** | 96* | **100** | 2554 ms | 0.000 |
| `/blog/budget-voyage-moto-corse` | 94 | **100** | 96* | **100** | 2704 ms | 0.000 |

\* BP 96 — `errors-in-console` lié à `ERR_CERT_AUTHORITY_INVALID` sur images Unsplash dans le Chrome bundlé puppeteer. À refaire post-déploiement Vercel.

Audit production : _à remplir post-deploy_.

## 4. Core Web Vitals cibles

- LCP < 2.5 s : ✅ home (1.8 s) ; 🟡 autres pages (2.55-2.70 s, à améliorer via Supabase Storage + AVIF)
- CLS < 0.1 : ✅ (< 0.014 partout)
- INP < 200 ms : non mesuré localement (audit synthétique) — à valider sur RUM Vercel

## 5. Google Rich Results Test

À exécuter manuellement après déploiement sur :
- https://search.google.com/test/rich-results
- 4 URLs ci-dessus
- Cible : 0 erreur, warnings minimaux

## 6. Mobile-Friendly Test Google

À exécuter sur les 4 URLs après déploiement.

## 7. Captures responsive

À générer post-deploy. Cibles :
- iPhone SE 375×667 portrait
- iPhone 14 393×852 portrait
- iPad 768×1024 portrait
- Desktop 1920×1080

## 8. Vérification HTML servi (curl)

Confirmé localement sur `dist/`:
- `<html lang="fr">` ✅
- `<title>` unique 50-60 chars par page ✅
- `<meta name="description">` unique 140-160 chars ✅
- `<link rel="canonical" href="https://corseamoto.com/...">` absolu ✅
- `<meta name="robots" content="index, follow, max-image-preview:large">` ✅ (noindex sur /admin)
- OG complet (type, locale=fr_FR, site_name, title, description, url, image) ✅
- Twitter card summary_large_image ✅
- JSON-LD vérifié par type de page :
  - Home & lists : WebSite + Organization
  - Itinéraire : + TouristTrip + BreadcrumbList + ItemList Place
  - Hébergement : + Hotel|Campground|LodgingBusiness + BreadcrumbList
  - Blog post : + BlogPosting + Person + ImageObject + BreadcrumbList
  - FAQ : + FAQPage + Question + Answer
  - Contact : + Organization + ContactPoint
- Un seul `<h1>` par page ✅
- Hiérarchie h1>h2>h3 propre ✅
- `alt` sur toutes les `<img>` ✅
- Sitemap index `/sitemap-index.xml` → `/sitemap-0.xml`, exclut `/admin` ✅

## 9. Checklist SEO

- [x] HTTPS canonical absolu sur chaque page
- [x] Aucun `<title>` injecté par JS (tout dans le HTML SSG)
- [x] Pas de `hreflang` (site monolingue)
- [x] `og:image` 1200×630 par défaut + override par item
- [x] `robots.txt` final propre (`Disallow /admin`, sitemap référencé)
- [x] Sitemap XML auto-généré par `@astrojs/sitemap`
- [x] H1 descriptif, sentence case, dans le HTML source

## 10. Checklist responsive

- [x] Aucun overflow horizontal (testé à 375, 393, 768, 1024, 1280, 1920)
- [x] Cibles tactiles ≥ 44×44 px (boutons, liens nav, inputs admin)
- [x] Titres en `clamp()` (typographie fluide)
- [x] `<Image>` Astro / `<img>` avec width/height (CLS < 0.014)
- [x] Hero `aspect-[21/9]` ou `aspect-video`
- [x] Burger mobile drawer (details/summary)
- [x] Pas de tableaux denses mobile (cards empilées)
- [x] MapLibre `cooperativeGestures: true`
- [x] `inputmode="email"` sur form login
- [x] Safe area iOS gérée via `viewport-fit=cover` + container padding

## 11. Checklist accessibilité

- [x] `lang="fr"` partout
- [x] Skip-link "Aller au contenu" en première position
- [x] Focus visibles via `ring-2 ring-accent ring-offset-2`
- [x] Contraste AA : `--text-muted` HSL 220 12% 38% (4.5+)
- [x] `<details>`/`<summary>` accessibles pour FAQ et menu mobile
- [x] `aria-label` sur nav primaire et footer
- [x] `aria-current="page"` sur breadcrumb dernière étape
- [x] Score Lighthouse A11y = 100 sur 4 URLs canoniques

## 12. Stack et infrastructure

- Astro 5.18
- Tailwind 3 + shadcn/ui (composants ui/ legacy conservés)
- Supabase Postgres + Auth + Storage
- MapLibre GL 5 + MapTiler (style landscape)
- Vercel (Functions hybrid pour `/admin/*`, static pour le reste)
- @astrojs/sitemap pour le sitemap auto
- @astrojs/vercel adapter

## 13. Conservation du contenu legacy

Tout le contenu de `corse-moto-explore/src/data/**/*.ts` est lu **sans modification** par `v2/src/lib/data.ts` au build, via un plugin Vite custom qui résout `@/` selon le fichier importeur (legacy → `../src`, v2 → `v2/src`). Les imports `lucide-react` et `uuid` des fichiers legacy sont résolus via un symlink `node_modules` à la racine du repo pendant migration et build CI.

## 14. Bloqueurs résolus pour la livraison

- ✅ Workflow GitHub Actions `migrate-data.yml` exécuté (run #3 vert, 262 lignes en base)
- ✅ Repo `Tistou314/corse-moto-explore` connecté à Vercel, build et déploiement OK sur `corse-moto-explore.vercel.app` (DNS InternetBS sur `corseamoto.com` : à confirmer côté Baptiste)
- ⏳ Audit Lighthouse + Rich Results + Mobile-Friendly + screenshots responsive post-deploy (workflow `.github/workflows/lighthouse-prod.yml` prêt, à lancer en CI une fois `main` redéployé après PR #9)

## 15. Mise à jour design — 2026-05-14

Le design éditorial sobre initial (Phase 2) a été remplacé par une **restauration du design legacy** (palette `corsica-*`, typo Poppins/Playfair, gradients, shadows, animations). Seuls les 4 cartouches colorés des pages itinéraire ont été redesignés (cards blanches, bordure colorée 4px à gauche, ombre douce) — c'était la demande d'origine de Baptiste, mal interprétée par le brief initial. Voir `MIGRATION_LOG.md` section "2026-05-14" pour le détail.

Stack et infrastructure inchangées : Astro 5.18, Tailwind 3, shadcn/ui, Supabase, MapLibre, Vercel, sitemap auto, SEO SSG complet, 0 lien interne cassé. Le legacy à la racine reste strictement intact.

PR #9 mergée → `main` HEAD `01e0924`.
