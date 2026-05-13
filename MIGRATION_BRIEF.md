# /goal — Migration SEO complète de corse-moto-explore

## DÉMARRAGE (à exécuter en premier)

Tu travailles sur une machine vide (ou un dossier vide). Voici la procédure exacte :

```bash
# 1. Cloner le repo source (ancien projet Lovable à migrer)
git clone https://github.com/Tistou314/corse-moto-explore.git
cd corse-moto-explore

# 2. Vérifier que tu as bien accès au code
ls -la
cat package.json
```

Une fois dans le repo, tu :
1. **Inspectes la structure existante** (`src/data/`, `src/components/admin/`, `src/components/seo/`, `src/services/serpApiService.ts`) pour comprendre ce qui doit être migré
2. **Crées un nouveau projet Astro à côté** dans un sous-dossier `v2/` (donc `corse-moto-explore/v2/`), pas à la place de l'ancien
3. À la fin, l'ancien repo `corse-moto-explore` peut être archivé, et le nouveau projet `v2/` sera poussé sur un nouveau repo GitHub `Tistou314/corseamoto-v2` (Baptiste créera ce repo et te donnera l'URL au bon moment, ou tu peux l'aider via `gh repo create` s'il a la CLI GitHub installée)

**Important** : ne modifie **jamais** l'ancien repo. Il sert uniquement de source de vérité pour la migration. Tout ton travail se fait dans `v2/`.

## CONTEXTE

Projet actuel : `corse-moto-explore` (Lovable.dev), une SPA Vite + React + React Router + shadcn-ui qui présente itinéraires moto, hébergements, blog et stations-service en Corse. Domaine cible définitif : **corseamoto.com**.

Le projet est fonctionnellement riche mais **inadapté au SEO** : SPA pure, aucun rendu serveur, toutes les pages partagent le même HTML vide côté crawler. Le "BO" admin ne persiste rien (tout en `useState`, données en dur dans `src/data/*.ts`).

L'objectif est une **refonte complète** vers une stack SEO-parfaite avec un vrai backoffice persistant, **sans perdre une ligne de contenu**.

## OBJECTIF UNIQUE

Livrer un site **corseamoto.com** :
1. **SEO irréprochable** (SSG + métadonnées dynamiques + Schema.org dans le HTML + sitemap propre)
2. **BO fonctionnel réel** (auth + persistance + upload images)
3. **Zéro perte d'information** du projet actuel
4. **Cartes fiables** (remplacement de Mapbox payant par MapLibre GL gratuit)

## STACK CIBLE (NON NÉGOCIABLE)

| Couche | Techno | Pourquoi |
|---|---|---|
| Framework | **Astro 5+** | SSG par défaut, le meilleur SEO possible, content collections |
| UI interactive | **React 18 (islands Astro)** | Réutiliser les composants shadcn-ui existants |
| Styling | **Tailwind CSS + shadcn/ui** | Conserver l'identité visuelle |
| Backend | **Supabase** | Postgres + Auth + Storage pour images |
| Hébergement | **Vercel** | ISR, CDN, certif auto |
| Cartes | **MapLibre GL + MapTiler tiles** | Open-source, gratuit, fini Mapbox |
| Recherche images | **SerpAPI** (déjà en place côté hébergements) + upload manuel | Double mode |

## ARCHITECTURE GÉNÉRALE

```
corseamoto-v2/
├── src/
│   ├── pages/                    # Routes Astro (SSG)
│   │   ├── index.astro
│   │   ├── itineraires/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro      # SSG par slug depuis Supabase
│   │   ├── hebergements/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── guide-pratique.astro
│   │   ├── carte.astro            # SPA island MapLibre
│   │   ├── stations-service.astro
│   │   ├── contact.astro
│   │   ├── faq.astro
│   │   └── admin/                 # SSR (auth Supabase)
│   │       └── ...
│   ├── components/                # .astro + .tsx (islands)
│   ├── layouts/
│   ├── lib/
│   │   ├── supabase.ts
│   │   └── seo.ts                 # helpers JSON-LD
│   └── content/                   # Au choix : content collections OU 100% Supabase
├── public/
│   ├── robots.txt
│   └── ...
└── astro.config.mjs
```

**Choix de stockage** : tout dans Supabase (itinéraires, hébergements, blog, stations, POI, auteurs, catégories). Le BO édite Postgres. Les pages publiques font des `getStaticPaths` au build qui requêtent Supabase → HTML statique servi par Vercel CDN. Régénération via webhook Supabase → Vercel sur modif.

## SCHÉMA SUPABASE (à créer)

```sql
-- itineraries
id (uuid pk), slug (text unique), title, description, full_description (markdown),
hero_image (text), duration, distance, difficulty (enum facile|moyen|difficile),
region, start_point, end_point, elevation, road_type, best_season, road_condition,
highlights (text[]), tips (text[]), latitude, longitude,
created_at, updated_at, published (boolean)

-- points_of_interest
id, itinerary_id (fk), name, description, image, latitude, longitude, order_idx

-- accommodations
id, slug, name, type (enum hotel|gite|camping), description, location, region,
hero_image, price_range, rating, amenities (text[]), biker_amenities (text[]),
contact_phone, contact_email, contact_website, booking_link,
affiliate_link (text, nullable),  -- ← prévu pour Booking affil plus tard
address, latitude, longitude,
images (text[]),  -- galerie
serp_image_url (text, nullable),
created_at, updated_at, published

-- blog_posts
id, slug, title, excerpt, content (markdown), category, author_id (fk),
hero_image, reading_time, tags (text[]),
published_at, updated_at, published

-- authors
id, name, avatar_url, bio

-- gas_stations
id, name, brand, latitude, longitude, address, location, opening_hours, strategic (boolean)

-- Storage buckets
- accommodations-images (public)
- itineraries-images (public)
- blog-images (public)
- authors-avatars (public)
```

## PLAN D'EXÉCUTION (à dérouler dans l'ordre)

### Phase 0 — Setup
1. Créer un nouveau projet Astro 5 dans un dossier `corseamoto-v2/` à la racine
2. Installer : `@astrojs/react`, `@astrojs/tailwind`, `@astrojs/sitemap`, `@astrojs/vercel`, `@supabase/supabase-js`, `maplibre-gl`, `marked`
3. Copier `tailwind.config.ts`, `components.json`, et toute la `src/components/ui/` (shadcn) depuis l'ancien repo
4. Configurer `astro.config.mjs` avec `output: 'static'` + adapter Vercel + sitemap intégré

### Phase 1 — Migration des données vers Supabase
1. Créer le projet Supabase (donne-moi l'URL et l'anon key, ou laisse-moi guider la création)
2. Exécuter le schéma SQL ci-dessus
3. Écrire un script `scripts/migrate-data.ts` qui :
   - Lit tous les `src/data/**/*.ts` de l'ancien repo
   - Génère les slugs propres (kebab-case sans accents) pour chaque item
   - Insère dans Supabase via le client admin
   - Télécharge les images Unsplash externes et les push dans Supabase Storage (pour s'affranchir des URLs externes fragiles)
   - **Loggue tout** pour vérification : combien d'itinéraires, hébergements, articles, POI, gas stations migrés
4. **Vérifier que tout est bien migré** avec un script de comptage avant de continuer

### Phase 2 — Frontend public (pages SSG)
1. **Design system d'abord** :
   - Définir les CSS variables / tokens Tailwind : `--accent`, `--text-primary`, `--text-secondary`, `--text-muted`, `--border`, `--bg`, `--bg-subtle`
   - Charger Fraunces (ou Cormorant Garamond) via `@fontsource-variable/fraunces`, et Inter en sans-serif
   - Créer les composants atomiques : `StatLine.astro`, `MetaList.astro`, `EditorialCard.astro`, `ArticleProse.astro`, `Hero.astro`, `Button.astro`, `Breadcrumbs.astro`
   - **Mobile-first** : chaque composant testé d'abord à 375px, puis étendu vers desktop
2. **Layout principal** (`Layout.astro`) avec :
   - `<html lang="fr">`
   - Meta title/description par page (props)
   - Canonical absolu basé sur `Astro.url`
   - Open Graph + Twitter Card avec URL absolue
   - JSON-LD WebSite + Organization dans le `<head>` du layout
   - Favicon multi-tailles, manifest, theme-color
   - **Skip-link** pour l'accessibilité (`<a href="#main">Aller au contenu</a>`)
3. **Page d'accueil** (`pages/index.astro`) : design éditorial sobre, H1 serif unique et lisible dans le HTML source
4. **Itinéraires** :
   - `pages/itineraires/index.astro` : liste depuis Supabase au build, filtres en island React, cards éditoriales sobres
   - `pages/itineraires/[slug].astro` : `getStaticPaths` qui génère une page par itinéraire, **layout magazine** (hero plein cadre, titre serif, intro, stats sobres en ligne, corps de texte typo soignée, photos pleine largeur), avec **JSON-LD TouristTrip + BreadcrumbList** dans le HTML
5. **Hébergements** :
   - `pages/hebergements/index.astro` + filtres en island React (région, type, amenities motards)
   - `pages/hebergements/[slug].astro` : galerie photos plein cadre, infos pratiques sobres, CTA réservation, **JSON-LD LodgingBusiness + BreadcrumbList**
6. **Blog** :
   - `pages/blog/index.astro` + filtres catégorie en island
   - `pages/blog/[slug].astro` : **layout longform magazine** (largeur de lecture ~680px, drop cap optionnelle, photos pleine largeur entre paragraphes), rendu markdown via `marked`, **JSON-LD BlogPosting + Author + BreadcrumbList**
7. **Guide pratique, FAQ, Contact** : pages statiques avec FAQ → **JSON-LD FAQPage**, accordéons sobres
8. **Stations-service** : page liste + carte
9. **Carte** : page dédiée avec MapLibre GL en island React, données fetch côté client depuis Supabase
10. **Tests responsive obligatoires** à la fin de la phase : iPhone SE, iPhone 14, iPad, Galaxy S8, desktop 1280/1920 → aucun overflow horizontal, tout cliquable ≥44px, hero lisible partout

### Phase 3 — Backoffice
1. Route `/admin/*` en SSR (Astro `output: 'hybrid'` ou middleware)
2. Auth Supabase (email + password, magic link en option). Créer un compte admin pour Baptiste.
3. CRUD complet pour : itinéraires, hébergements, articles, auteurs, POI, stations-service
4. **Upload images** dans Supabase Storage avec preview, crop si possible
5. **Mode "enrichissement SerpAPI"** : conserver la logique existante (`AccommodationEnrichment.tsx`) mais persistance Supabase au lieu de localStorage. L'admin peut soit upload manuel, soit fetch SerpAPI et valider.
6. **Galerie multi-images** pour les hébergements (champ `images[]`)
7. Éditeur markdown avec preview pour le blog (utiliser `@uiw/react-md-editor` ou similaire)
8. **Sur chaque sauvegarde** : déclencher un rebuild Vercel via deploy hook (variable d'env `VERCEL_DEPLOY_HOOK_URL`)

### Phase 4 — SEO technique & responsive (final pass)
1. `astro.config.mjs` : activer le plugin `@astrojs/sitemap` pour génération auto du sitemap.xml
2. `public/robots.txt` final, propre :
   ```
   User-agent: *
   Allow: /
   Disallow: /admin
   Sitemap: https://corseamoto.com/sitemap-index.xml
   ```
3. **Vérification HTML servi** : pour chaque type de page (home, itinéraire, hébergement, article, FAQ), faire un `curl` et vérifier que tous les éléments listés dans la section "SEO — VÉRIFICATIONS RENFORCÉES" sont présents
4. Ajouter `breadcrumbs` visuels ET en JSON-LD sur toutes les pages profondes
5. Image OG par défaut (1200×630) générée pour le site, OG spécifique pour chaque itinéraire/hébergement/article (utiliser leur hero_image redimensionné via Astro `<Image>` ou `@vercel/og`)
6. **Audit Lighthouse mobile + desktop** sur 4 URLs types → atteindre les cibles définies (Perf ≥90, A11y/BP/SEO = 100)
7. **Audit Core Web Vitals** (LCP, CLS, INP) sur les mêmes pages, mode mobile 4G
8. **Tests responsive complets** : screenshots automatisés sur iPhone SE, iPhone 14, iPad, desktop 1280/1920 → aucun overflow, tout cliquable, hero lisible
9. **Google Rich Results Test** sur 4 URLs → 0 erreur, warnings minimaux
10. **Mobile-Friendly Test** Google → passe sur tout
11. Vérifier que **toutes les URLs sont en HTTPS absolues** dans le HTML servi (canonical, OG, JSON-LD, sitemap)

### Phase 5 — Cartes (remplacement Mapbox)
1. Supprimer toute dépendance à `mapbox-gl`
2. Installer `maplibre-gl`
3. Réécrire `MapBox.tsx` → `Map.tsx` (island React)
4. Tiles via **MapTiler** (compte gratuit, 100k req/mois, suffisant) ou **Stadia Maps**
5. Conserver toute la logique de clustering existante, l'adapter à l'API MapLibre (95% compatible avec Mapbox GL)
6. Plus de "token à entrer dans le BO" : la clé MapTiler est en variable d'env Vercel

### Phase 6 — Affiliation (préparation, pas implémentation finale)
1. Le champ `affiliate_link` existe déjà dans le schéma `accommodations`
2. Côté front, **si** `affiliate_link` est rempli → le CTA "Réserver" utilise ce lien (avec `rel="sponsored nofollow"`)
3. Sinon → CTA pointe vers `booking_link` standard ou site officiel
4. Baptiste remplira plus tard les liens affil un par un dans le BO

### Phase 7 — Déploiement
1. Push sur un nouveau repo `Tistou314/corseamoto-v2`
2. Connecter à Vercel, brancher le domaine `corseamoto.com`
3. Configurer les variables d'env : Supabase URL, anon key, service role key, MapTiler key, SerpAPI key, Vercel deploy hook
4. Configurer DNS chez InternetBS pour pointer vers Vercel
5. Premier build complet, vérification crawler (`curl` + Google Rich Results Test sur 3 URLs types)
6. Soumettre `sitemap-index.xml` à Google Search Console

## CONTRAINTES STRICTES

- **Aucune perte de contenu** : chaque itinéraire, hébergement, article, POI, station-service de l'ancien repo doit se retrouver dans Supabase. Un script de diff final doit prouver l'équivalence.
- **Pas de SPA pour le contenu public** : tout doit être en HTML statique servi. Les seules zones avec JS interactif sont la carte, les filtres de listes, et le BO.
- **Pas de `<title>` ou meta injectés par JS** sur les pages publiques : tout dans le HTML source.
- **Pas de Mapbox** dans la version finale.
- **Pas de localStorage pour persister les données métier** : tout dans Supabase.
- **`lang="fr"`** partout (pas "en" comme actuellement).
- **Pas d'em-dash** dans le contenu éditorial (charte Baptiste). Utiliser virgules, deux-points, parenthèses.
- **`/admin` reste accessible mais en `noindex`** (robots meta + Disallow dans robots.txt).
- **Slugs propres** : kebab-case, sans accents, lowercase. Pour les URLs comme `/itineraires/le-tour-du-cap-corse-d80`.
- **Aucun overflow horizontal** sur aucune page, aucune taille (test automatisé en fin de phase 2 et 4).
- **Mobile-first** : chaque composant pensé pour 375px d'abord.
- **Design éditorial sobre** : pas de badges colorés, pas de cartouches vert/rose, pas d'icônes décoratives. Voir section DESIGN.
- **Performance** : LCP < 2.5s, CLS < 0.1, INP < 200ms en mobile 4G.
- **Accessibilité** : score Lighthouse a11y = 100 sur toutes les pages publiques (focus visibles, ARIA correct, contraste AA min).

## DESIGN — REFONTE ÉDITORIALE (NON NÉGOCIABLE)

Le design actuel hurle "généré par IA en 30 secondes" : badges colorés partout (bg-blue/10 avec icônes), cartouches vert/rose pour départ/arrivée, pastilles vertes/oranges/rouges pour la difficulté, surcharge d'icônes Lucide à chaque ligne de métadonnée, bordures `border-l-4 border-corsica-blue` sur chaque h3, fond rond `bg-corsica-blue/20` autour de chaque icône. **À jeter intégralement.**

### Inspirations à étudier avant de coder

- **Stripe Docs** (stripe.com/docs) : sobriété, hiérarchie typo
- **Polène** (polene-paris.com) : luxe minimaliste, photos plein cadre
- **Guides Michelin** : éditorial sérieux, typographie de magazine
- **Linear** (linear.app) : clarté technique sans bling

**À NE PAS imiter** : Lovable templates, sites WordPress avec des cartes "à la Bootstrap", tout ce qui ressemble à du Bento ou du Notion-marketing.

### Principes design

1. **Une seule couleur d'accent** : un bleu profond corse (`#1a3a5c` ou équivalent). Le reste en noir/blancs cassés/gris.
2. **Pas de palette "corsica-coral/azure/sand/charcoal/slate"** comme actuellement. Système minimal : `bg`, `text-primary`, `text-secondary`, `text-muted`, `border`, `accent`. Point.
3. **Typographie hiérarchique** :
   - UI/corps : sans-serif moderne (Inter, ou la sans-serif système)
   - **Titres d'itinéraires et d'articles : serif éditoriale** — Fraunces, Cormorant Garamond, ou EB Garamond (Google Fonts, gratuits, optimisés)
   - Deux poids max (400 + 500/600)
   - Sentence case partout, jamais Title Case ni ALL CAPS
4. **Aucun badge coloré**. La difficulté s'écrit "Moyen", pas une pastille verte. Le type de logement s'écrit "Hôtel", pas un tag bleu.
5. **Aucune icône dans les listes de métadonnées**. Du texte avec une bonne typo suffit. Réserver les icônes aux vraies actions (boutons, navigation).
6. **Pas de cartouches colorés** pour départ/arrivée. Une ligne simple : `Bastia → Bastia (boucle)`.
7. **Stats en ligne avec séparateurs verticaux fins** plutôt qu'en grille de 6 badges. Exemple :
   ```
   Distance        Durée           Dénivelé
   110 km          3 h 30          365 m
   ```
8. **Hiérarchie par la taille et le poids typo**, jamais par la couleur seule.
9. **Whitespace généreux**. Padding intérieur des sections : 64-96px desktop, 32-48px mobile.
10. **Photos plein cadre**, hero ratio 16:9 ou 21:9, jamais cropées dans des cards minuscules. Sur mobile, ratio 4:3 ou 3:2 acceptable.
11. **Pas d'ombres portées**, pas de gradients décoratifs, pas de `bg-gray-50` partout pour "remplir". Le blanc suffit, les sections se distinguent par leur typo et leur espacement.
12. **Cards (listes hébergements/itinéraires/articles)** : photo + titre + 1-2 lignes de contexte. Pas de rating en étoiles à 5 branches, pas d'empilement de badges amenities. Style "résultats Booking version éditoriale" : retenu, scannable.
13. **Boutons** : un seul style principal (fond accent, texte blanc), un secondaire (texte avec underline au hover). Pas de variantes ghost/outline/coral/azure.
14. **FAQ / accordéons** : sobres, ligne séparatrice fine, pas de fond gris alterné.

### Pages à reprendre intégralement côté design

- `pages/itineraires/[slug].astro` (la pire actuellement)
- `pages/hebergements/[slug].astro`
- `pages/blog/[slug].astro` : article éditorial, layout type "longform magazine" (largeur de lecture ~680px, drop cap optionnelle sur la première lettre, photos pleine largeur entre paragraphes)
- Listes (`/itineraires`, `/hebergements`, `/blog`)
- Home : reprendre l'esprit éditorial dès la première section

### Composants design système à créer dans Astro

- `StatLine.astro` : ligne de stats avec séparateurs (remplace les badges 6-en-grille)
- `MetaList.astro` : liste clé-valeur sobre pour les métadonnées
- `EditorialCard.astro` : card sobre photo + titre + excerpt
- `ArticleProse.astro` : wrapper typographique pour le contenu markdown (gestion `prose-lg` Tailwind avec overrides)
- `Hero.astro` : hero plein cadre avec overlay subtil et titre serif

## RESPONSIVE — EXIGENCES STRICTES

Le site doit être **mobile-first et impeccable sur toutes les tailles**. Le trafic moto/tourisme est majoritairement mobile (Google Discover, recherches en cours de voyage).

### Breakpoints (Tailwind par défaut, à utiliser tels quels)

- `sm` : 640px (grandes mobiles paysage / petites tablettes)
- `md` : 768px (tablettes)
- `lg` : 1024px (laptops)
- `xl` : 1280px (desktops)
- `2xl` : 1536px (grands écrans)

**Concevoir mobile-first**, puis étendre. Pas l'inverse.

### Règles responsive non négociables

1. **Aucun overflow horizontal** sur aucune page, aucune taille, aucune orientation. Test : `document.body.scrollWidth === window.innerWidth` doit être vrai partout.
2. **Tailles tactiles** : tous les éléments cliquables ≥ 44×44px (recommandation Apple/Google), avec padding suffisant.
3. **Typographie fluide** : utiliser `clamp()` pour les titres principaux, exemple :
   ```css
   h1 { font-size: clamp(2rem, 5vw + 1rem, 4rem); }
   ```
4. **Images responsive** :
   - `<img>` avec `srcset` + `sizes` systématique (Astro `<Image>` ou `<Picture>` natif)
   - Formats modernes : **AVIF en priorité, WebP fallback, JPG dernier recours**
   - `loading="lazy"` sur tout sauf le hero LCP
   - `decoding="async"`
   - **Dimensions `width` et `height` toujours présentes** (évite le CLS)
5. **Hero mobile** : `100vh` ou `100svh` (small viewport height, gère mieux les barres mobiles iOS/Android)
6. **Navbar mobile** : burger menu propre, drawer plein écran, focus trap, fermeture sur Escape, scroll bloqué quand ouvert
7. **Tableaux** : interdire les tableaux denses sur mobile. Utiliser des cards empilées en dessous de `md`.
8. **Carte MapLibre** : touch gestures fluides, contrôles assez gros, attention aux conflits scroll page vs scroll carte (utiliser `cooperativeGestures: true`)
9. **Formulaires** : `inputmode` adapté (`tel`, `email`, `numeric`), `autocomplete` correct, labels visibles (pas seulement des placeholders)
10. **Safe areas iOS** : `env(safe-area-inset-bottom)` pour le bas des pages, surtout pour les sticky CTAs
11. **Hover states** : prévoir des équivalents tactiles (active state visible au tap), pas se reposer uniquement sur `:hover`

### Tests responsive obligatoires avant livraison

- Tester sur **iPhone SE** (375×667, le plus contraint)
- iPhone 14 Pro (393×852)
- iPhone 14 Pro Max landscape (932×430) — gère bien la rotation
- iPad portrait (768×1024) et paysage (1024×768)
- Galaxy S8 (360×740, encore très répandu)
- Desktop 1280, 1440, 1920
- **Dark mode** : prévoir dès le départ même si activé plus tard, utiliser les CSS variables Tailwind

## SEO — VÉRIFICATIONS RENFORCÉES

Sur chaque page publique, **dans le HTML servi par `curl`** (donc avant tout JS), doivent obligatoirement être présents :

1. `<html lang="fr">` (jamais "en")
2. `<title>` unique et descriptif (50-60 caractères)
3. `<meta name="description">` unique (140-160 caractères)
4. `<link rel="canonical" href="https://corseamoto.com/[path]">` (URL absolue)
5. `<meta name="robots" content="index, follow">` (ou `noindex` pour `/admin`)
6. `<meta property="og:title">`, `og:description`, `og:image` (URL absolue), `og:url`, `og:type`, `og:locale="fr_FR"`, `og:site_name`
7. `<meta name="twitter:card" content="summary_large_image">` + twitter:title/description/image
8. **Au moins un JSON-LD** pertinent dans `<head>` :
   - Toutes pages : `WebSite` + `Organization`
   - Itinéraires : `TouristTrip` + `BreadcrumbList`
   - Hébergements : `LodgingBusiness` (ou `Hotel`/`Campground`) + `BreadcrumbList` + `aggregateRating` si rating
   - Articles blog : `BlogPosting` + `Author` + `BreadcrumbList`
   - FAQ : `FAQPage`
   - Contact : `Organization` avec `contactPoint`
9. **Un seul `<h1>` par page**, descriptif et placé dans le HTML source (pas injecté par JS)
10. Hiérarchie h1 → h2 → h3 propre, sans saut de niveau
11. **Images** : tous les `<img>` ont un `alt` (descriptif pour le contenu, vide `alt=""` pour les décoratives)
12. Liens internes : ancres descriptives, jamais "cliquez ici" ou "en savoir plus" tout seul
13. **`hreflang`** : à mettre seulement si plusieurs langues prévues. Sinon ne pas mettre du tout.
14. **`og:image`** : 1200×630 minimum, < 5 Mo, format JPG ou PNG. À générer dynamiquement pour les itinéraires/hébergements/articles (utiliser leur hero_image redimensionné).

### Sitemap

Généré automatiquement par `@astrojs/sitemap` au build :
- `https://corseamoto.com/sitemap-index.xml` (référencé dans robots.txt)
- Toutes URLs publiques incluses
- Toutes URLs `/admin/*` exclues
- `lastmod` à jour
- Soumis à Google Search Console après déploiement

### Performance (impacte directement le SEO)

Cibles Lighthouse minimales (mobile, throttling 4G) :
- Performance ≥ 90
- Accessibility = 100
- Best Practices = 100
- SEO = 100

Core Web Vitals cibles :
- **LCP** < 2.5s (Largest Contentful Paint)
- **CLS** < 0.1 (Cumulative Layout Shift) — d'où l'importance des `width`/`height` sur les images
- **INP** < 200ms (Interaction to Next Paint)
- **FCP** < 1.8s (First Contentful Paint)

### Tests SEO obligatoires avant livraison

1. `curl -s https://corseamoto.com/ | grep -E "(<title>|description|canonical|og:|ld\+json)"` → tout doit être présent
2. Idem sur `/itineraires/cap-corse`, `/hebergements/[un-slug]`, `/blog/[un-slug]`
3. **Google Rich Results Test** sur 4 URLs types (home, itinéraire, hébergement, article) → 0 erreur
4. **PageSpeed Insights** sur les 4 mêmes → scores cibles atteints
5. **Mobile-Friendly Test** Google → passe sur tout
6. Vérifier dans GSC après déploiement : Inspection d'URL → "URL is on Google" ou en cours d'indexation, **pas** "Page with redirect" ou "Crawled - currently not indexed"

## ÉTAT EXISTANT À PRÉSERVER

Inventaire de l'ancien repo (chemins relatifs à `corse-moto-explore/src/`) :
- `data/itineraries/` : 8 itinéraires répartis dans `nord.ts`, `nord-est.ts`, `nord-ouest.ts`, `ouest.ts`, `centre.ts`, `sud-est.ts`, `sud.ts` + types dans `types.ts`
- `data/accommodations/` : 26 hébergements (15 hôtels, 8 campings, 3 gîtes) dans `new-hotels.ts`, `new-campings.ts`, `new-gites.ts` + types
- `data/blog/` : 14 articles répartis en 6 catégories (aspects-pratiques, aspects-techniques, culture, équipement, expériences, saisons)
- `data/gas-stations/` : `cap-corse.ts`, `strategic.ts` (stations stratégiques pour les motards)
- `data/points-of-interest/` : POI rattachables aux itinéraires
- `data/authors.ts` : auteurs blog
- `components/seo/SchemaOrg.tsx` + `utils/schema/` : logique JSON-LD existante (Website, Organization, Blog, Itinerary) → **reprendre la logique, adapter pour génération build-time**
- `services/serpApiService.ts` : intégration SerpAPI pour fetch images/infos hébergements → **conserver**
- `components/admin/` : tout le BO Lovable (UI déjà faite avec shadcn) → **reprendre les composants UI, brancher sur Supabase au lieu de useState**

## LIVRABLES ATTENDUS

1. Nouveau repo Astro fonctionnel `corseamoto-v2/`
2. Schéma Supabase exécuté + données migrées
3. Build qui passe sans erreur
4. Déploiement Vercel actif sur `corseamoto.com`
5. **Rapport de migration final** (markdown) avec :
   - Nombre d'items migrés par table (avec diff vs ancien repo prouvant 0 perte)
   - URLs publiques générées (échantillon)
   - Scores Lighthouse mobile **et** desktop : home + 1 itinéraire + 1 hébergement + 1 article (cibles : Perf ≥90, A11y/BP/SEO = 100)
   - Core Web Vitals mesurés (LCP, CLS, INP) sur les 4 mêmes URLs en mobile 4G
   - Validation Google Rich Results Test sur 4 URLs → 0 erreur
   - Screenshots responsive sur iPhone SE, iPhone 14, iPad, desktop 1920 (4 URLs × 4 viewports = 16 captures)
   - Vérification curl HTML servi : présence `<title>`, meta, canonical, OG, JSON-LD, h1 sur chaque type de page
   - Checklist SEO ✅
   - Checklist responsive ✅
   - Checklist accessibilité ✅

## COMMUNICATION

- Si tu as un doute sur un choix d'archi, **demande avant** plutôt que de partir dans une direction qui devra être refaite.
- Pour les credentials Supabase / Vercel / MapTiler / SerpAPI : **demande à Baptiste**, ne tente pas de générer toi-même.
- Logue tout dans un fichier `MIGRATION_LOG.md` au fur et à mesure : décisions prises, problèmes rencontrés, solutions, items en attente.
- À chaque phase terminée, fais un commit clair (`feat(phase-1): migrate accommodations from TS to Supabase`).

Démarre par la Phase 0. Bonne route.
