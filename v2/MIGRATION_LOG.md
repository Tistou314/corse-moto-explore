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
