# Migration SEO complète — corseamoto.com

Brief source de vérité (copié depuis le `/goal` initial). Ne pas modifier sauf instructions explicites.

## Démarrage
Le repo source `corse-moto-explore` (Lovable Vite/React SPA) est dans le parent de ce dossier. Il sert de **source de vérité uniquement** : aucune modification n'y est apportée. Tout le nouveau code est sous `v2/`. Au final, `v2/` est poussé vers un nouveau repo `Tistou314/corseamoto-v2`.

## Objectif unique
Livrer un site `corseamoto.com` :
1. SEO irréprochable (SSG + métadonnées dynamiques + Schema.org dans le HTML + sitemap)
2. BO fonctionnel réel (auth + persistance + upload images)
3. Zéro perte d'information du projet actuel
4. Cartes fiables (remplacement Mapbox payant par MapLibre GL gratuit)

## Stack cible (non négociable)
- Framework : **Astro 5+** (SSG par défaut)
- UI interactive : React 18 (islands Astro)
- Styling : Tailwind CSS + shadcn/ui
- Backend : Supabase (Postgres + Auth + Storage)
- Hébergement : Vercel
- Cartes : MapLibre GL + MapTiler tiles
- Recherche images : SerpAPI (existant) + upload manuel

## Schéma Supabase à créer
Tables : `itineraries`, `points_of_interest`, `accommodations`, `blog_posts`, `authors`, `gas_stations`.
Buckets Storage publics : `accommodations-images`, `itineraries-images`, `blog-images`, `authors-avatars`.

(voir le brief complet pour les colonnes exactes — recopié intégralement dans MIGRATION_LOG.md au fur et à mesure)

## Plan d'exécution
- **Phase 0** Setup Astro 5 dans `v2/`, intégrations React/Tailwind/sitemap/Vercel/Supabase/MapLibre/marked, copie shadcn ui depuis l'ancien repo.
- **Phase 1** Création projet Supabase + schéma SQL + script `scripts/migrate-data.ts` qui lit `src/data/**/*.ts` de l'ancien repo, slug, insère, télécharge les images Unsplash dans Storage, log de comptage.
- **Phase 2** Frontend public SSG : design system d'abord (tokens, Fraunces + Inter, composants atomiques), Layout SEO complet, pages itinéraires/hébergements/blog/guide/FAQ/contact/stations-service/carte. Mobile-first, tests responsive obligatoires.
- **Phase 3** Backoffice : `/admin/*` SSR, auth Supabase, CRUD complet, upload Storage, enrichissement SerpAPI, éditeur markdown, déclenche rebuild Vercel sur sauvegarde.
- **Phase 4** SEO technique : sitemap, robots.txt, vérification curl HTML servi, JSON-LD, breadcrumbs, OG dynamiques, Lighthouse, Core Web Vitals, tests responsive, Rich Results Test, Mobile-Friendly.
- **Phase 5** Cartes : suppression mapbox-gl, install maplibre-gl, réécriture `Map.tsx`, tiles MapTiler, conservation clustering.
- **Phase 6** Affiliation : champ `affiliate_link` câblé côté front avec `rel="sponsored nofollow"`.
- **Phase 7** Déploiement Vercel + DNS InternetBS + GSC.

## Contraintes strictes
- Aucune perte de contenu (script diff final).
- Pas de SPA pour le contenu public.
- Pas de `<title>`/meta injectés par JS.
- Pas de Mapbox dans la version finale.
- Pas de localStorage métier.
- `lang="fr"` partout.
- Pas d'em-dash dans le contenu éditorial.
- `/admin` noindex.
- Slugs propres kebab-case sans accents.
- Aucun overflow horizontal.
- Mobile-first.
- Design éditorial sobre (pas de badges, pas de pastilles, pas d'icônes décoratives).
- LCP < 2.5s, CLS < 0.1, INP < 200ms.
- Lighthouse a11y = 100 publique.

## Design — refonte éditoriale (non négociable)
- Une seule couleur d'accent (bleu profond corse ~`#1a3a5c`).
- Tokens minimaux : `bg`, `text-primary`, `text-secondary`, `text-muted`, `border`, `accent`.
- Typo : Inter (sans) + **Fraunces** (serif éditoriale titres). Deux poids max. Sentence case.
- Pas de badges colorés, pas d'icônes dans les listes méta.
- Stats en ligne avec séparateurs verticaux fins.
- Whitespace généreux (64-96px desktop, 32-48px mobile).
- Photos plein cadre, hero 16:9 ou 21:9.
- Pas d'ombres ni gradients déco.
- Cards : photo + titre + 1-2 lignes, "Booking version éditoriale".
- 1 bouton principal + 1 secondaire underline.
- FAQ sobre, ligne fine, pas de fond gris alterné.

Composants atomiques requis : `StatLine.astro`, `MetaList.astro`, `EditorialCard.astro`, `ArticleProse.astro`, `Hero.astro`, `Button.astro`, `Breadcrumbs.astro`.

## Responsive — exigences
- Mobile-first, breakpoints Tailwind par défaut.
- Aucun overflow horizontal.
- Cibles tactiles ≥ 44px.
- `clamp()` pour les titres.
- `<Image>` Astro avec srcset, AVIF > WebP > JPG, `loading="lazy"` sauf hero, dimensions toujours.
- Hero `100svh`.
- Burger drawer plein écran avec focus trap.
- Pas de tableaux denses mobile.
- MapLibre `cooperativeGestures`.
- `inputmode` + `autocomplete`.
- `env(safe-area-inset-bottom)`.
- Tests sur iPhone SE / 14 Pro / iPad / Galaxy S8 / 1280 / 1920.

## SEO — vérifications HTML servi (curl)
1. `<html lang="fr">`
2. `<title>` unique 50-60 chars
3. `<meta name="description">` 140-160
4. `<link rel="canonical">` absolu
5. `<meta name="robots">` (noindex /admin)
6. OG complet (title, description, image absolue, url, type, locale=fr_FR, site_name)
7. Twitter card summary_large_image
8. JSON-LD : WebSite + Organization partout ; TouristTrip + BreadcrumbList ; LodgingBusiness + BreadcrumbList ; BlogPosting + Author + BreadcrumbList ; FAQPage ; contactPoint.
9. Un seul `<h1>`.
10. Hiérarchie h1>h2>h3 sans saut.
11. `alt` partout.
12. Ancres descriptives.
13. Pas de `hreflang` mono-langue.
14. `og:image` 1200x630, JPG/PNG.

## Cibles Lighthouse mobile 4G
- Perf ≥ 90
- A11y / BP / SEO = 100
- LCP < 2.5s, CLS < 0.1, INP < 200ms, FCP < 1.8s

## Inventaire ancien repo (à préserver intégralement)
- `src/data/itineraries/` : 8 itinéraires (nord/nord-est/nord-ouest/ouest/centre/sud-est/sud)
- `src/data/accommodations/` : 26 hébergements (15 hôtels, 8 campings, 3 gîtes)
- `src/data/blog/` : 14 articles, 6 catégories
- `src/data/gas-stations/` : cap-corse + strategic + regions/
- `src/data/points-of-interest/`
- `src/data/authors.ts`
- `src/components/seo/SchemaOrg.tsx` + `src/utils/schema/` (logique JSON-LD)
- `src/services/serpApiService.ts`
- `src/components/admin/` (UI BO shadcn)

## Livrables attendus
1. Repo Astro `corseamoto-v2/` fonctionnel
2. Schéma Supabase + données migrées
3. Build sans erreur
4. Vercel actif sur corseamoto.com
5. Rapport `MIGRATION_REPORT.md` final : comptages, URLs échantillon, Lighthouse + CWV, Rich Results, screenshots responsive, vérif curl, checklists SEO/responsive/a11y.

## Communication
- Doute archi : demander avant.
- Credentials (Supabase / Vercel / MapTiler / SerpAPI) : demander.
- Logger dans `MIGRATION_LOG.md` au fur et à mesure.
- Commit clair à chaque phase (`feat(phase-N): ...`).
