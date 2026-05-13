-- corseamoto.com — initial schema
-- Run inside the Supabase SQL editor with the service_role.

-- Extensions
create extension if not exists "uuid-ossp";

-- Enums
do $$ begin
  create type difficulty_level as enum ('facile', 'moyen', 'difficile');
exception when duplicate_object then null; end $$;

do $$ begin
  create type accommodation_type as enum ('hotel', 'gite', 'camping');
exception when duplicate_object then null; end $$;

-- authors
create table if not exists public.authors (
  id uuid primary key default uuid_generate_v4(),
  legacy_id text unique,
  name text not null,
  avatar_url text,
  bio text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- itineraries
create table if not exists public.itineraries (
  id uuid primary key default uuid_generate_v4(),
  legacy_id text unique,
  slug text unique not null,
  title text not null,
  description text,
  full_description text,
  hero_image text,
  duration text,
  distance text,
  difficulty difficulty_level,
  region text,
  start_point text,
  end_point text,
  elevation text,
  road_type text,
  best_season text,
  road_condition text,
  highlights text[] not null default '{}',
  tips text[] not null default '{}',
  latitude double precision,
  longitude double precision,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists itineraries_slug_idx on public.itineraries(slug);
create index if not exists itineraries_region_idx on public.itineraries(region);

-- points_of_interest
create table if not exists public.points_of_interest (
  id uuid primary key default uuid_generate_v4(),
  legacy_id text unique,
  itinerary_id uuid references public.itineraries(id) on delete cascade,
  name text not null,
  description text,
  image text,
  latitude double precision,
  longitude double precision,
  order_idx integer not null default 0,
  created_at timestamptz not null default now()
);
create index if not exists poi_itinerary_idx on public.points_of_interest(itinerary_id);

-- accommodations
create table if not exists public.accommodations (
  id uuid primary key default uuid_generate_v4(),
  legacy_id text unique,
  slug text unique not null,
  name text not null,
  type accommodation_type not null,
  description text,
  location text,
  region text,
  hero_image text,
  price_range text,
  rating numeric(2,1),
  amenities text[] not null default '{}',
  biker_amenities text[] not null default '{}',
  contact_phone text,
  contact_email text,
  contact_website text,
  booking_link text,
  affiliate_link text,
  address text,
  latitude double precision,
  longitude double precision,
  images text[] not null default '{}',
  serp_image_url text,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists accommodations_slug_idx on public.accommodations(slug);
create index if not exists accommodations_type_idx on public.accommodations(type);
create index if not exists accommodations_region_idx on public.accommodations(region);

-- blog_posts
create table if not exists public.blog_posts (
  id uuid primary key default uuid_generate_v4(),
  legacy_id text unique,
  slug text unique not null,
  title text not null,
  excerpt text,
  content text,
  category text,
  author_id uuid references public.authors(id) on delete set null,
  hero_image text,
  reading_time integer,
  tags text[] not null default '{}',
  published_at timestamptz,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists blog_posts_slug_idx on public.blog_posts(slug);
create index if not exists blog_posts_category_idx on public.blog_posts(category);
create index if not exists blog_posts_published_at_idx on public.blog_posts(published_at desc);

-- gas_stations
create table if not exists public.gas_stations (
  id uuid primary key default uuid_generate_v4(),
  legacy_id text unique,
  name text not null,
  brand text,
  latitude double precision,
  longitude double precision,
  address text,
  region text,
  location text,
  opening_hours text,
  fuel_types text[] not null default '{}',
  services text[] not null default '{}',
  strategic boolean not null default false,
  seasonal_hours boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists gas_stations_strategic_idx on public.gas_stations(strategic);
create index if not exists gas_stations_region_idx on public.gas_stations(region);

-- Auto-update updated_at
create or replace function public.tg_set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

do $$
declare t text;
begin
  for t in select unnest(array['authors','itineraries','accommodations','blog_posts','gas_stations']) loop
    execute format('drop trigger if exists set_updated_at on public.%I', t);
    execute format('create trigger set_updated_at before update on public.%I for each row execute function public.tg_set_updated_at()', t);
  end loop;
end $$;

-- Row Level Security
alter table public.authors enable row level security;
alter table public.itineraries enable row level security;
alter table public.points_of_interest enable row level security;
alter table public.accommodations enable row level security;
alter table public.blog_posts enable row level security;
alter table public.gas_stations enable row level security;

-- Public read policies (only published content)
drop policy if exists "Public read published itineraries" on public.itineraries;
create policy "Public read published itineraries" on public.itineraries
  for select using (published = true);

drop policy if exists "Public read POI" on public.points_of_interest;
create policy "Public read POI" on public.points_of_interest
  for select using (true);

drop policy if exists "Public read published accommodations" on public.accommodations;
create policy "Public read published accommodations" on public.accommodations
  for select using (published = true);

drop policy if exists "Public read published blog" on public.blog_posts;
create policy "Public read published blog" on public.blog_posts
  for select using (published = true);

drop policy if exists "Public read authors" on public.authors;
create policy "Public read authors" on public.authors for select using (true);

drop policy if exists "Public read gas stations" on public.gas_stations;
create policy "Public read gas stations" on public.gas_stations for select using (true);

-- Authenticated write (BO admin)
do $$
declare t text;
begin
  for t in select unnest(array['authors','itineraries','points_of_interest','accommodations','blog_posts','gas_stations']) loop
    execute format('drop policy if exists "Authenticated write %I" on public.%I', t, t);
    execute format($p$create policy "Authenticated write %I" on public.%I
      for all
      to authenticated
      using (true)
      with check (true)$p$, t, t);
  end loop;
end $$;
