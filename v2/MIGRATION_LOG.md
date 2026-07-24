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

## 2026-05-13 — Phase 3 complète (CRUD générique)

### Composants admin
- `src/components/admin/EntityList.tsx` : liste générique avec recherche, tri, delete, lien edit. Branchée sur n'importe quelle table.
- `src/components/admin/EntityForm.tsx` : formulaire générique avec champs text / textarea / markdown / number / select / array (textarea ligne par ligne) / boolean / image (upload Storage + URL manuelle) / date / slug auto-kebab. Déclenche `PUBLIC_VERCEL_DEPLOY_HOOK_URL` sur save si défini.

### Pages /admin
- `/admin` tableau de bord
- `/admin/login` form email/password Supabase
- `/admin/logout` signOut + redirect
- `/admin/itineraires` liste + `/[id]` édition (16 champs dont highlights/tips en array, lat/lng, published)
- `/admin/hebergements` liste + `/[id]` édition (18 champs dont biker_amenities, affiliate_link)
- `/admin/blog` liste + `/[id]` édition (markdown editor 18 lignes)
- `/admin/stations` liste + `/[id]` édition (fuel_types, services, strategic)
- `/admin/auteurs` liste + `/[id]` édition

### Auth
- Check côté client dans AdminLayout (`requireAuth=true` par défaut) → redirect /admin/login si pas de session.
- RLS Postgres protège les données côté serveur (Authenticated write policies).

### Build
- 16 pages SSR sous `/admin/*` bundled dans `dist/server/entry.mjs`
- 59 pages SSG publiques inchangées
- Aucun warning Astro

## 2026-05-13 — Phase 4 audit Lighthouse (build local)

### Scores Lighthouse mobile (4G throttling, screen 412x823 DSR 1.75)

| Page | Perf | A11y | BP | SEO | LCP | CLS |
|---|---|---|---|---|---|---|
| `/` | 97 | 95 | 96 | **100** | 2180 ms | 0.013 |
| `/itineraires/cap-corse` | 94 | 96 | 96 | **100** | 2705 ms | 0.000 |
| `/hebergements/best-western-plus-ajaccio-amiraute` | 95 | 96 | 96 | **100** | 2556 ms | 0.000 |
| `/blog/budget-voyage-moto-corse` | 94 | 95 | 96 | **100** | 2704 ms | 0.000 |

### Analyse
- **SEO 100/100 partout** ✅ — cible atteinte
- **Performance ≥ 94** ✅ — cible Perf ≥ 90 dépassée
- **CLS < 0.02** ✅ — cible < 0.1 largement dépassée
- **A11y 95-96** vs cible 100 → à améliorer (probablement contraste, ARIA, ou heading order sur quelques composants)
- **BP 96** vs cible 100 → à investiguer
- **LCP** : 2180 ms home OK, 2556-2705 ms autres pages → marginalement au-dessus de la cible 2.5 s, dû aux images Unsplash externes non optimisées. Sera résolu après Phase 1 (images dans Supabase Storage + Astro `<Image>` AVIF) et CDN Vercel.

### Restant pour Phase 4
- Faire un sous-build où les images legacy passent par `<Image>` Astro pour AVIF/WebP
- Corriger A11y + BP (cibler les audits avec score < 1.0 dans les rapports JSON sous `reports/lighthouse/`)
- Refaire l'audit sur Vercel (CDN) après déploiement
- Captures responsive 4 viewports × 4 URLs
- Google Rich Results Test sur les 4 URLs (manuel après déploiement)

### Phase 1 — encore bloquée
Les deux clés (sb_secret_* et legacy JWT eyJ...) reçoivent la même erreur `Host not in allowlist` au niveau de l'API gateway Supabase. Ce n'est donc pas une restriction de clé mais une **Network Restriction** au niveau du projet (ou un toggle équivalent dans Project Settings → Database).

## 2026-05-13 — Phase 4 : A11y 100 atteint

### Corrections appliquées
- `--text-muted` HSL 220 8% **50%** → 220 12% **38%** : contraste 4.19 → ~6.0 (cible 4.5 dépassée)
- `public/manifest.webmanifest` ajouté (manifest fetch 404 corrigé)
- `public/og/default.svg` ajouté pour les OG images (placeholder éditorial sobre)
- `<link rel="apple-touch-icon">` retiré (le fichier n'existe pas, évite un 404)
- `public/lovable-uploads/*` (24 PNG) recopiés depuis le legacy pour les avatars auteurs

### Nouveaux scores Lighthouse (mobile, 4G)
| Page | Perf | A11y | BP | SEO | LCP |
|---|---|---|---|---|---|
| `/` | 99 | **100** | 96 | **100** | **1804 ms** |
| `/itineraires/cap-corse` | 94 | **100** | 96 | **100** | 2705 ms |
| `/hebergements/.../alcyon` (run précédent : Ajaccio) | 95 | **100** | 96 | **100** | 2554 ms |
| `/blog/budget-voyage-moto-corse` | 94 | **100** | 96 | **100** | 2704 ms |

### BP 96 — pourquoi pas 100
Seul échec restant : `errors-in-console` pour des images Unsplash avec `ERR_CERT_AUTHORITY_INVALID` dans le Chromium bundlé puppeteer (store de certificats vide). Aucun impact production — sera 100 dès que (a) les images passent par Supabase Storage (Phase 1) ou (b) on audit sur Vercel avec un Chrome ayant un store CA standard.

### Reste pour Phase 4 complète
- Refaire l'audit après migration des images dans Supabase Storage (LCP 2554-2705 → cible < 2500 ms)
- Audit responsive : screenshots iPhone SE / 14 / iPad / 1920 (à faire après déploiement)
- Google Rich Results Test sur les 4 URLs (manuel après déploiement)

## Phase 1 — étape de migration via GitHub Actions
- `.github/workflows/migrate-data.yml` : workflow `workflow_dispatch` qui clone v2/, install, et lance le script. 2 secrets attendus : `PUBLIC_SUPABASE_URL` et `SUPABASE_SERVICE_ROLE_KEY`.
- Mon sandbox bloque les sorties vers Supabase (`x-deny-reason: host_not_allowed` au niveau du proxy de l'agent), donc impossible d'exécuter depuis ici. GitHub Actions résout la contrainte.

## 2026-05-13 — Migration Supabase exécutée (workflow #3 vert)

### Données réellement présentes dans Supabase
- authors : 6
- itineraries : 10
- points_of_interest : 76
- accommodations : 26
- blog_posts : 14
- gas_stations : 130
- **Total : 262 lignes** (diff vs legacy : 0 perte)

### Patches script
- Fix `/lovable-uploads/*` : on garde les URLs relatives, Vercel sert depuis `v2/public/lovable-uploads/`
- Fix POI upsert : `delete by itinerary_id` puis `insert` simple, plus besoin de UNIQUE constraint

### Data layer
- `lib/data-supabase.ts` : nouveau loader qui lit toutes les tables au build (top-level await)
- `lib/data-legacy.ts` : ancien loader (renommé)
- `lib/data.ts` : wrapper qui essaie Supabase, fallback automatique vers legacy si erreur
- Sandbox local → fallback legacy (Supabase bloqué par proxy)
- Vercel CI → Supabase direct ✅

## 2026-05-13 — Phase 7 préparation déploiement Vercel

### Configuration prête
- `vercel.json` : framework=astro, outputDirectory=dist, buildCommand symlinke `node_modules` au parent pour résolution `uuid`/`lucide-react` depuis les fichiers legacy, headers cache immutable sur `/_astro/` et `/lovable-uploads/`, no-store + X-Robots-Tag noindex sur `/admin/`.
- Variables d'env requises côté Vercel (voir README.md et MIGRATION_REPORT.md).
- PR #4 mergée : v2/, .github/workflows/, supabase/, scripts/, public/og/, public/manifest, public/lovable-uploads/, src/lib/, src/components/, src/layouts/, src/pages/, src/styles/, tailwind.config.ts, vercel.json — tous dans `main`.
- PR #5 mergée : fix symlink build.

### État final du repo
- `main` HEAD = ec4dd50 (squash merge des fixes)
- Branche `claude/session-goals-5y5gu` conservée comme historique de travail
- `src/` legacy intact (zéro modification)

## 2026-07-24 — Post-déploiement Vercel : purge des em-dashes

Vercel prod est en ligne (`corse-moto-explore.vercel.app`, deploy `main`@267665a, status Ready).

### Carton rouge de Baptiste : em-dashes visibles en ligne
Corrigés (charte : "pas d'em-dash dans le contenu éditorial") :
- Titres SEO : `Contact — Corse à moto` → `Contact : écrire à l'équipe de Corse à moto` ; mentions légales et politique de confidentialité passés en `... du/de Corse à moto` ; à-propos `—` → `:` (title + JSON-LD name)
- `/itineraires/[slug]` : metaTitle joint avec `' : '` au lieu de `' — '`
- Prose à-propos : em-dash remplacé par une ponctuation classique
- AdminLayout `<title>` : `—` → `·` ; placeholders admin `—` → `non`/`brouillon`/`(aucun)`
- Commentaire inline du script GA dans Layout.astro (seul em-dash restant dans le HTML servi)

**Vérif build : 0 em-dash dans les 126 pages HTML de `dist/client`.**

### Constat env Vercel (screenshots Baptiste)
- Environment Variables du projet : **vides** → la prod actuelle a buildé en fallback legacy (`[data] using legacy TS files`) et la carte tourne sur tiles OSM.
- Instructions données à Baptiste pour ajouter : `PUBLIC_SUPABASE_URL`, `PUBLIC_SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_SERVICE_ROLE_KEY` (sensitive), `PUBLIC_MAPTILER_KEY`, `SERPAPI_KEY` (sensitive), `PUBLIC_SITE_URL=https://corseamoto.com`. Les 2 valeurs Supabase sont à récupérer dans le dashboard Supabase (Settings → API).
- README corrigé : le code lit `VERCEL_DEPLOY_HOOK_URL` (server-side), pas `PUBLIC_VERCEL_DEPLOY_HOOK_URL`.

### Prochaine étape en cours
- Domaine `corseamoto.com` : ajout dans Vercel → Domains, puis DNS InternetBS (A `@` → 76.76.21.21, CNAME `www` → cname.vercel-dns.com). Procédure détaillée transmise à Baptiste.
- Après merge dans `main` + env vars posées : redeploy sans build cache, vérifier la ligne `[data] using Supabase: 10 itineraries...` dans les build logs.

## 2026-05-14 — Session restauration design legacy

### Contexte
Le brief initial `/goal` qui a déclenché v2 imposait une "refonte éditoriale sobre" (non négociable selon le brief). Une fois la prod en ligne, Baptiste a constaté que ce design ne correspondait pas à ce qu'il avait travaillé sur le legacy : il voulait juste redesigner les 4 cartouches colorés des fiches itinéraire, pas refondre tout le visuel. Décision : restaurer le design legacy à 100% tout en gardant Astro SSG + Supabase + BO + SEO, puis redesigner uniquement les 4 cartouches.

### Bloqueur prod résolu
Avant la session, le dernier déploiement Vercel échouait : il tournait sur le commit `267665a` (avant le fix PR #8 `e6492c9`) parce que les "Redeploy of" rejouent le commit d'origine au lieu de prendre le HEAD courant. Solution : Promote du Preview vert `BbCnb3yec` (sur `009caea` = équivalent `e6492c9`) en Production. Production OK sur le fix.

### Restauration design legacy
- **Tokens** : `tailwind.config.ts` v2 réécrit avec la palette `corsica-*` complète (azure/emerald/coral/blue/charcoal/slate/pearl/ruby 50-900), shadows `soft|medium|strong|glow`, animations `fade-in|slide-up|scale-in|shimmer`, polices Inter + Poppins + Playfair Display (via `@fontsource/*`). `global.css` réécrit avec les variables HSL legacy (`--primary 199 89% 55%`, `--accent 199 89% 55%`, `--radius 0.75rem`), styles `.blog-content`, `.btn-primary`, `.btn-secondary`.
- **Shims** : `src/lib/router-shim.tsx` (`react-router-dom` → balises `<a>`), `src/lib/helmet-shim.tsx` (noop), aliasés dans `astro.config.mjs`. Tailwind `content` étendu à `../src/components` et `../src/pages` pour que les classes legacy soient générées.
- **Chrome** : `Navbar.tsx` et `Footer.tsx` v2 (copies legacy avec URLs v2 — `/stations-service` au lieu de `/gas-stations`, `/serp-key` retiré) injectés en islands React par défaut dans `Layout.astro`.
- **11 pages publiques** réécrites en Astro SSG + island React qui wrappe les composants legacy (`ModernHero`, `ItineraryCard`, `ItineraryHero`, `ItineraryDescription`, `ItinerarySidebar`, `AccommodationCard`, `AccommodationFilters`, `BlogPostsList`, `BlogPostHeader`, `BlogPostContent`, `GuideTabs`, gas-stations tabs, `ContactForm`). `/admin/*` inchangé.
- **Composants éditoriaux supprimés** : `Navbar.astro`, `Footer.astro`, `Hero.astro`, `Breadcrumbs.astro`, `Button.astro`, `EditorialCard.astro`, `StatLine.astro`, `MetaList.astro`, `ArticleProse.astro`.

### Fixes liés à la restauration
- **`id` ← `slug`** dans `data.ts` : les composants legacy construisent leurs URLs depuis `.id` (qui était la kebab-slug dans le legacy). En v2 `.id` est un UUID Supabase et la kebab est dans `.slug`. Sans normalisation toutes les URLs internes pointaient vers `/itineraires/<uuid>` → 404. L'UUID original est conservé sous `_uuid`.
- **`heroImage` ↔ `image`** : alias bidirectionnel dans `data.ts` pour que les composants legacy accèdent à `.image` et les pages v2 à `.heroImage`.
- **`author` nested** : `authorName`/`authorAvatar`/`authorBio` plat de Supabase normalisé en `author.{name,avatar,bio}` attendu par `BlogPostHeader`/`AuthorCard` legacy.
- **Navbar/Footer mal résolus** : `aliasByImporter` plugin ne reconnaît pas Layout.astro comme un fichier v2 (Astro passe au plugin un importer virtuel, pas le path .astro), donc Rollup bundlait le legacy Navbar/Footer (avec `/gas-stations`). Fix : import relatif explicite `../components/Navbar.tsx` dans Layout.astro.

### Redesign des 4 blocs itinéraire
- Override `v2/src/components/legacy-overrides/ItineraryDescription.tsx` qui reprend strictement le rendu markdown + la grille d'infos legacy mais remplace les 2 sections colorées.
- **Layout** : Départ → Arrivée fusionnés en bandeau timeline horizontal (s'empile en vertical mobile) en haut ; Points forts / Conseils utiles en grille 2 colonnes en dessous.
- **Style** : cards blanches, bordure colorée 4px à gauche, ombre douce, icône en pastille assortie.
- **Palette** : Départ `corsica-emerald` (Flag), Arrivée `corsica-coral` (MapPin), Points forts `corsica-azure` (Award), Conseils `corsica-blue` #1a3a5c (Lightbulb — plus chaleureux que l'AlertTriangle d'origine).

### Audit liens internes (1 build clean)
6 destinations 404 trouvées et toutes éliminées :
- `/blog/stations-service-corse` (hardcodé `FeaturedResources`) → override v2 pointant vers `/stations-service`
- 4 articles legacy non migrés vers Supabase (`tour-cap-corse-moto`, `route-des-vins-corses`, `route-grand-sud-2024`, `communautes-motards-corses`) — référencés par auto-injection de `addInternalLinks` ET dans le corps markdown de certains articles. Solution : (a) override `v2/src/lib/internal-linking-v2.ts` qui ne considère que les articles présents dans le dataset v2, plugin Vite étendu pour intercepter aussi l'import relatif `./internalLinking` ; (b) `rewriteBlogContent` dans `data.ts` qui supprime les `[texte](/blog/<slug-manquant>)` et `[CTA:texte](/blog/<slug-manquant>)`, et redirige `/blog/stations-service-corse` → `/stations-service`
- Lien malformé `[route](/blog/route-grand-sud-2024` issu d'une réécriture markdown bancale — éliminé par le rewriter ci-dessus

Audit final sur `dist/client/**/*.html` : **0 lien interne cassé**.

### Workflow Lighthouse prod
`.github/workflows/lighthouse-prod.yml` (`workflow_dispatch`) : audit les 4 URLs canoniques sur l'URL prod passée en input (défaut `corse-moto-explore.vercel.app`), exporte les rapports JSON en artefact GitHub. Le script `scripts/lighthouse-audit.mjs` accepte désormais une variable d'env `LIGHTHOUSE_SITE` pour skipper le serveur local et auditer une URL externe.

### État final
- PR #9 mergée → main HEAD `01e0924`
- Branche `claude/continue-migration-P5nSV` conservée comme historique
- Legacy à la racine (`src/`) toujours strictement intact (zéro modification — tous les changements sont des wrappers ou overrides dans `v2/`)


## 2026-05-15 → 2026-05-18 — Phase post-restauration : SEO, perf, contenu, sécurité

Cycle de PR #10 à #21 sur la branche `claude/continue-migration-P5nSV`.
Toutes mergées sur `main`.

### PR #10 — Docs

Mise à jour `MIGRATION_LOG.md` + `MIGRATION_REPORT.md` reflétant la
session restauration legacy.

### PR #11 — Perf : LCP blog détail 18.6s → 4.5s

Trace : `BlogPostHeader` legacy lit `post.imageUrl` qui n'existait pas
dans le shape Supabase. Fallback hardcodé sur image Pixabay générique,
appliquée en `background-image: url(...)` après `useEffect`. Worst-case
chain pour LCP : SSR sans image → hydratation → useEffect → fetch image
→ setState → display.

Fix double :
1. Alias `imageUrl` dans `data.ts` (toutes les images Supabase passent
   désormais sur `imageUrl`/`image`/`heroImage` indistinctement)
2. Override v2 `BlogPostHeader.tsx` rendant l'image en `<img
   fetchPriority="high" loading="eager" decoding="async">` dans le HTML
   SSR, donc découvert par le preload scanner navigateur avant download
   du bundle JS

### PR #12 — Perf home + GSC verification

- LCP home : même fix sur `ModernHero` (slides en `<img>` empilées
  cross-fade opacity, slide #1 priority high). LCP home 6.9s → attendu
  <3s.
- `<meta name="google-site-verification">` ajouté dans Layout.astro
  pour propriété GSC `www.corseamoto.com`

### PR #13 — Audit responsive + POC blog content + override system

13 issues responsives identifiées :
- ModernFeaturesSection : classes Tailwind dynamiques jamais générées
  au build (bug critique non visible). Override v2 avec gradients en
  string literals.
- ModernHero h-screen + text-8xl : déborde mobile. Clamps.
- BlogPostHeader h-[60vh] : déborde mobile. Clamps.
- AccommodationFilters w-[180px] + PopoverContent w-80 : déborde
  mobile. Responsive selects + popover max-width calc(100vw - 2rem).
- ItineraryHero : même anti-pattern background-image post-useEffect +
  text-5xl sans clamp. Override.
- Navbar logo 40×40 < WCAG 44×44 : w-11 h-11.
- ModernHero dots pagination 12×12 < WCAG : wrap dans button 44×44.
- GasStationsPage tabs longs tronqués 375px : overflow-x-auto.
- GuideTabs serré mobile : CSS shim global `[role=tablist].grid →
  flex overflow-x-auto`.
- carte.astro Map 72vh pousse contenu off-screen : `min(70vh,650px)`.

Système d'override blog content versionné dans git :
- `v2/content/blog/<slug>.md` : front matter YAML (slug, title,
  excerpt, heroImage, faq) + body markdown
- `src/lib/blog-content-overrides.ts` : parse via `import.meta.glob`
  (Vite-natif, mini-parser YAML 30 lignes)
- `src/lib/data.ts` post-process : si override existe, écrase
  title/excerpt/content du Supabase, ajoute faq
- `src/pages/blog/[slug].astro` : émet FAQPage JSON-LD + rend section
  `<details>/<summary>` Questions fréquentes

POC sur `printemps-corse-moto` : 508 mots → 2 441 mots.

### PR #15 — Batch saisons (3 articles)

`moto-corse-hiver` 172 → 2 335 mots, `automne-corse-moto` 990 → 2 493,
`gerer-chaleur-ete-moto` 1 084 → 2 773. Plus cleanup IA-footprints sur
printemps (em dash, "Conclusion" en H2, adjectifs creux) suite audit
Baptiste. Règles de rédaction consolidées (12 règles dont 0 em dash,
0 titre Conclusion, 1 lien max par URL cible).

### PR #16 — Batch récits (2 articles) + heroImage override

`premiere-fois-moto-corse` 824 → 2 976, `roadtrip-amis-corse-moto`
920 → 3 086. Système heroImage YAML front matter pour gérer photos à
la une (les 4 saisons + 2 récits avaient toutes des hero Pixabay
génériques ou aucune).

### PR #17 — Fix UI critiques

1. Navbar toujours visible : pattern legacy "bg-transparent + texte
   blanc" cassait sur pages liste fond blanc. Bg blanc + texte sombre
   permanent, différence scrollé/non par intensité d'ombre seulement.
2. Cards images invisibles : `OptimizedImage` legacy applique
   `opacity-0 → opacity-100 onLoad` en SPA. En SSG l'event onLoad ne
   se déclenche pas toujours après hydratation sur images cachées.
   Toutes les cards (blog, hébergement, itinéraire) potentiellement
   invisibles. Override v2 `optimized-image.tsx` SSR-safe.

### PR #18 — Batch techniques (3 articles)

`equipement-essentiel-moto-corse` 1 541 → 3 296 (tenue pilote, casques
ECE 22.06, blousons 3-couches, gants, bottes, intercoms 2026).
`preparation-moto-voyage-corse` 1 564 → 3 278 (révision, pneus
Michelin Road 6 / Bridgestone T33 / Pirelli Angel GT II, freins,
transmission, suspensions). `preparer-moto-routes-corses` 909 → 3 058
(adaptations routes corses, réglages, ergonomie, accessoires, choix
de moto, location).

### PR #19 — Batch culture + hub (5 articles) + fix grid info-badges

3 culture : `decouvrir-traditions-corses-moto` 1 169 → 2 847,
`musiques-corses-playlist-motard` 1 203 → 2 328 (I Muvrini NULU 33,
A Filetta 2026, paghjella UNESCO, intercoms), `architecture-villages-
corses-moto` 1 364 → 2 687 (citadelles génoises, art roman pisan,
baroque corse).

2 hub : `meilleures-periodes-moto-corse` 1 601 → 2 741 (tableau
comparatif mois × 12, recommandation par profil voyageur, tableau cols
par altitude), `budget-voyage-moto-corse` 1 539 → 3 070 (chiffres 2026
actualisés, 3 budgets type, évolution prix 2020-2026).

Fix responsive : `ItineraryDescription` info-badges grid était figée
`grid-cols-2` mobile. Valeurs longues débordaient + 5e item seul mal
aligné. Fix `grid-cols-1 sm:grid-cols-2 md:grid-cols-3` + min-w-0 +
break-words.

**Bilan chantier blog 14/14 articles** : ~14 700 mots → ~38 000 mots.
Standard appliqué : témoignage 1ère personne, tableau de synthèse,
données 2026 sourcées (Météo France, Corsica Ferries, calendriers
rallyes 2026, prévisions canicule, tests pneus), FAQ + JSON-LD
FAQPage SSG, 0 em dash, 1 lien max par URL cible, hero image
lovable-uploads.

### PR #20 — Fix favicon

Le favicon servi en prod était le **default Astro** ("A" stylisé)
jamais remplacé depuis Phase 0. Diagnostic via grep sur le SVG.
Remplacement par legacy ICO brandé (1150 bytes MS Windows icon
16×16 32-bit) + nouveau SVG simple "C" serif blanc sur fond
corsica-azure. Manifest theme_color aligné sur #0EA5E9.

### PR #21 — Schémas SEO complets + mitigation CVE

Schémas JSON-LD étendus :
- `ItemList` sur /itineraires, /hebergements, /blog (Google comprend
  la collection, déclenche potentiellement carousel rich result)
- `AggregateRating` + `GeoCoordinates` + `amenityFeature`
  (LocationFeatureSpecification) + `PostalAddress` enrichi sur
  /hebergements/<slug> (Hotel/Campground/LodgingBusiness)
- `GeoCoordinates` sur /itineraires/<slug> (TouristTrip + Place nested
  geo pour POI)
- `ItemList` GasStation + Geo sur /stations-service
- `TouristInformationCenter` sur /contact (upgrade depuis Organization)

Mitigation CVE GHSA-mr6q-rp88-fx84 (path override @astrojs/vercel
<10.0.2) : impossible d'upgrader directement, @astrojs/vercel@10.0.7
requiert Astro 6, Astro 6 incompatible avec @astrojs/tailwind dernière
version (6.0.2 supporte Astro 3-5). Migration Tailwind v3 → v4 =
chantier majeur reporté. Mitigation immédiate : middleware Astro
`src/middleware.ts` qui supprime les headers `x-astro-path` et
`x_astro_path` avant résolution de route. Vecteur d'attaque éliminé.

### État final post-PR #21

- `main` HEAD = c7701db (Merge PR #20) + 4933c4f, 2a7f19d, f41a8b4
  (PR #21)
- Branche `claude/continue-migration-P5nSV` à jour
- Domaine `www.corseamoto.com` branché + SSL Let's Encrypt + redir
  apex
- BO admin `/admin/*` fonctionnel
- 14 articles blog refondus (~38 000 mots)
- Schémas SEO complets sur 12 pages publiques
- Responsive audit propre (P0 + P1)
- 0 lien interne 404
- Sécurité : mitigation CVE en place
- Legacy à la racine `src/` toujours strictement intact
