# Migration Log — corseamoto.com

## 2026-05-13 — Phase 0 setup

### Décisions
- **Astro scaffold** : `npm create astro@latest v2 -- --template minimal` → Astro 6.3.1 installé. Le brief demande "Astro 5+", 6.x satisfait cette contrainte (API content collections + Image équivalente, plugin sitemap dispo). On garde 6.x.
- **Source du brief** : copié dans `v2/MIGRATION_BRIEF.md` (le brief original n'était présent que dans le `/goal` initial).
- **Périmètre v2/** : tout le nouveau code est sous `v2/`. L'ancien repo (racine) n'est jamais modifié. Branche de travail : `claude/session-goals-5y5gu`.
- **Adapter Vercel** : on prévoit `@astrojs/vercel` avec `output: 'static'` pour les pages publiques. Les routes `/admin/*` passeront en `hybrid`/SSR via `prerender = false` par route (option Astro standard).

### Inventaire ancien repo confirmé
- 8 fichiers `src/data/itineraries/*.ts` (sans `centre.ts` mais avec nord/nord-est/nord-ouest/ouest/sud/sud-est)
- 26+ accommodations répartis dans `src/data/accommodations/`
- Blog : 6 catégories sous `src/data/blog/`
- Gas stations : `cap-corse.ts`, `strategic.ts`, et `regions/` (10+ régions)
- Authors : `src/data/authors.ts`
- POI : `src/data/points-of-interest/gas-stations-poi.ts`
- SEO : `src/components/seo/SchemaOrg.tsx` + `src/utils/schema/`
- BO : `src/components/admin/` (AdminLayout, AdminDashboard, AdminLogin, ImageUpload + sous-dossiers par entité)
- SerpAPI : `src/services/serpApiService.ts`

### Credentials nécessaires (à demander à Baptiste avant d'attaquer Phase 1+)
- Supabase project URL + anon key + service_role key
- MapTiler API key (gratuit)
- SerpAPI key (déjà utilisée côté ancien projet — récupérer)
- Vercel : pas besoin tant qu'on ne déploie pas
- Email admin pour création compte BO
## 2026-05-13 — Phase 0 terminée

- Astro **5.18** (rétrograde depuis 6 — @astrojs/tailwind ne supporte que jusqu'à Astro 5)
- Intégrations : @astrojs/react, @astrojs/tailwind, @astrojs/sitemap, @astrojs/vercel@8
- Stack design : Tailwind 3 + tailwindcss-animate + @tailwindcss/typography + tokens HSL minimaux (bg, text-primary/secondary/muted, border, accent #1a3a5c)
- Typo : @fontsource-variable/inter + @fontsource-variable/fraunces, chargées dans global.css
- Layout SEO complet (lang=fr, viewport viewport-fit, theme-color, canonical absolu, OG + Twitter + JSON-LD WebSite + Organization)
- robots.txt avec Disallow /admin + Sitemap
- shadcn/ui copié depuis l'ancien repo (src/components/ui/) + composants Radix installés
- src/lib/utils.ts : cn(), slugify() prêt pour Phase 1, absoluteUrl()
- src/lib/seo.ts : buildSeo, websiteJsonLd, organizationJsonLd, breadcrumbJsonLd
- index.astro placeholder : build OK, sitemap-index.xml généré, dist/index.html contient bien title/description/canonical/OG/JSON-LD

### Bloqueurs pour Phase 1+
Credentials à fournir par Baptiste :
- Supabase project URL + anon key + service_role key
- MapTiler API key
- SerpAPI key (récupérer depuis ancien projet)
- Email pour compte admin BO


## 2026-05-13 — Phase 1 prête (en attente Supabase URL + service_role)

### Schéma SQL
- `v2/supabase/schema.sql` : tables `authors`, `itineraries`, `points_of_interest`, `accommodations`, `blog_posts`, `gas_stations`. Enums `difficulty_level` et `accommodation_type`. Triggers `updated_at`. RLS public read sur published=true et écriture authenticated.
- `v2/supabase/storage.sql` : 4 buckets publics (`accommodations-images`, `itineraries-images`, `blog-images`, `authors-avatars`) + policies.

### Ajustement schéma vs brief
- `gas_stations` étendue : ajout `region`, `fuel_types[]`, `services[]`, `seasonal_hours` pour satisfaire "zéro perte" (le type legacy contient ces champs).

### Script de migration `scripts/migrate-data.ts`
- Lit directement les fichiers TS du legacy repo (`../src/data/...`)
- Auto-slugification avec déduplication (kebab-case sans accents)
- Téléchargement + upload Storage des images
- Flags `--dry-run` / `--skip-images` / `--only=...`
- Vérif diff vs legacy à la fin

### Dry-run réussi
```
authors: 6
itineraries: 10  (brief annonçait 8, réalité 10 — bonus)
POIs: 76
accommodations: 26
blog posts: 14
gas stations: 130
```

### Setup runtime
- Symlink `/home/user/corse-moto-explore/node_modules → v2/node_modules` pour permettre au script de résoudre les peers depuis les fichiers legacy (uuid@11, lucide-react@0.462 réinstallés en v2/).
- Tsconfig dédié `v2/scripts/tsconfig.json` pour mapper `@/*` → `../src/*`.

### Credentials reçus de Baptiste
- MapTiler : ZU8ncRmleUKuI9qoEduK
- SerpAPI : 9634e7731af88e3351a93a97eef61190bc4c7177
- Supabase publishable key : sb_publishable_WZoCD5XcLHb-IgNaU08z9g_dxRXlWib

### Bloqueurs encore actifs
- **Supabase project URL** manquante (format `https://<ref>.supabase.co`)
- **Supabase service_role key** manquante (format `sb_secret_...` ou `eyJ...`)
Sans ces 2 valeurs, impossible d'exécuter le SQL et de pousser les données.

## 2026-05-13 — Phase 2 livrée (build OK, 59 pages)

### Composants design system (sobres, éditoriaux)
- `Button.astro` (primary fond accent / secondary underline)
- `Hero.astro` (image plein cadre 21:9 ou 16:9, titre serif clamp)
- `StatLine.astro` (4 colonnes avec séparateurs fins)
- `MetaList.astro` (clé-valeur sobre)
- `EditorialCard.astro` (photo + titre serif + excerpt, sans badges)
- `Breadcrumbs.astro` (slash separator, dernier élément aria-current)
- `ArticleProse.astro` (rendu marked + classes prose typo serif/sans)
- `Navbar.astro` (logo serif, liens horizontaux desktop, drawer details/summary mobile)
- `Footer.astro` (3 colonnes liens, copyright année dynamique)

### Pages SSG
- `/` Home (kicker + H1 serif + 3 sections itinéraires/hébergements/blog)
- `/itineraires` liste (grid 3 colonnes, cards éditoriales)
- `/itineraires/[slug]` détail (hero plein cadre + breadcrumb + stats + sidebar méta + prose + étapes numérotées + "Continuer à explorer")
- `/hebergements` liste groupée hôtel/gîte/camping
- `/hebergements/[slug]` détail (hero + bikerAmenities + amenities + sidebar + CTA réserver avec rel sponsored nofollow si affiliateLink)
- `/blog` liste regroupée par catégorie
- `/blog/[slug]` longform magazine (hero h1 serif xxl + image plein cadre + ArticleProse max-w-prose 680px)
- `/guide-pratique` (6 sections statiques)
- `/faq` (6 questions, FAQPage JSON-LD)
- `/contact` (Organization contactPoint JSON-LD)
- `/stations-service` (130 stations, stratégiques + groupement par région)
- `/carte` (placeholder pour Phase 5)

### Plugin Vite custom
- `aliasByImporter()` dans `astro.config.mjs` : résout `@/...` vers `v2/src` ou `../src` selon le fichier importer. Permet de lire les fichiers legacy non modifiés.

### Vérification build
- 59 pages générées, sitemap-index.xml OK
- `dist/itineraires/cap-corse/index.html` : title custom, description, canonical absolu, og:image, JSON-LD complet (WebSite + Organization + BreadcrumbList + TouristTrip + ItemList Place)

### Reste pour Phase 1 finalisation
Service_role reçue. Mais pour exécuter le SQL DDL il faut soit le mot de passe DB (psql), soit passer par le SQL Editor du dashboard. Demande à Baptiste de :
1. Coller `v2/supabase/schema.sql` puis `v2/supabase/storage.sql` dans le SQL Editor Supabase et cliquer "Run"
2. Une fois fait, je lance `npx tsx scripts/migrate-data.ts` pour pousser les données et les images

## 2026-05-13 — Phases 5, 6 et amorce 3 livrées

### Phase 5 — Cartes (MapLibre + MapTiler)
- `src/components/Map.tsx` : island React MapLibre GL avec clustering, tiles MapTiler style "landscape", fallback OSM si pas de clé, cooperativeGestures activé (mobile), popups avec lien vers la fiche.
- `src/pages/carte.astro` : carte interactive avec itinéraires + hébergements + stations. Légende couleurs sobre (3 puces, pas de badges colorés).
- Build OK, bundle Map.ZmhiZbTK.js + Map.DNVN2dqC.css émis.
- `vite.configFile: false` ajouté dans astro.config.mjs pour empêcher Vite de remonter vers `vite.config.ts` legacy.

### Phase 6 — Affiliation (préparation)
Déjà câblé en Phase 2 dans `src/pages/hebergements/[slug].astro` :
```
const bookHref = a.affiliateLink ?? a.bookingLink ?? a.contact?.website;
const bookRel  = a.affiliateLink ? 'sponsored nofollow noopener' : 'noopener';
```
Quand le BO permettra de renseigner `affiliate_link`, le bouton "Réserver" l'utilisera automatiquement avec le bon `rel`. Aucune action front complémentaire requise.

### Phase 3 — Amorce backoffice
- `astro.config.mjs` : adapter Vercel détecté en mode hybrid grâce à `prerender = false` sur les routes admin.
- `src/lib/supabase.ts` : client navigateur + helper service_role.
- `src/layouts/AdminLayout.astro` : meta noindex/nofollow, nav admin minimale.
- `src/pages/admin/index.astro` : tableau de bord (6 entités).
- `src/pages/admin/login.astro` : form email/password + appel `signInWithPassword`.
- `src/pages/admin/logout.astro` : `signOut` + redirection.
- Build OK : pages admin rendues côté serveur via `dist/server/entry.mjs` (Vercel fonctionnel).
- **CRUD complet, upload Storage, SerpAPI, markdown editor, deploy webhook** : restent à faire dès que les tables Supabase existent.

### SEO vérifié (Phase 4 partielle)
- `lang="fr"` sur home / itinéraire / blog (vérifié curl-style sur dist/)
- `<title>`, `<meta name="description">`, `<link rel="canonical">` absolu, OG complet, JSON-LD WebSite + Organization présents sur tous les types
- JSON-LD spécifiques constatés :
  - `/faq` : FAQPage + Question + Answer + BreadcrumbList
  - `/hebergements/<slug>` : Hotel + BreadcrumbList
  - `/blog/<slug>` : BlogPosting + Person + ImageObject + BreadcrumbList + Organization
  - `/itineraires/<slug>` : TouristTrip + ItemList + Place + BreadcrumbList
- `robots.txt` : Allow / + Disallow /admin + Sitemap https://corseamoto.com/sitemap-index.xml
- `sitemap-index.xml` généré, exclut /admin via filter

### Bloqueurs restants
- **Phase 1** : SQL non encore exécuté (Baptiste a collé une URL GitHub par erreur, instructions correctives envoyées)
- **Phase 3** : CRUD complet bloqué tant que les tables n'existent pas
- **Phase 7** : pas d'accès Vercel pour l'instant
