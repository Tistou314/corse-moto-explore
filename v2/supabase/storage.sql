-- Storage buckets (run AFTER schema.sql, with service_role)
insert into storage.buckets (id, name, public)
values
  ('accommodations-images', 'accommodations-images', true),
  ('itineraries-images', 'itineraries-images', true),
  ('blog-images', 'blog-images', true),
  ('authors-avatars', 'authors-avatars', true)
on conflict (id) do nothing;

-- Public read on all 4 buckets
drop policy if exists "Public read all media" on storage.objects;
create policy "Public read all media" on storage.objects
  for select
  using (bucket_id in (
    'accommodations-images',
    'itineraries-images',
    'blog-images',
    'authors-avatars'
  ));

-- Authenticated full access on all 4 buckets
drop policy if exists "Authenticated write all media" on storage.objects;
create policy "Authenticated write all media" on storage.objects
  for all
  to authenticated
  using (bucket_id in (
    'accommodations-images',
    'itineraries-images',
    'blog-images',
    'authors-avatars'
  ))
  with check (bucket_id in (
    'accommodations-images',
    'itineraries-images',
    'blog-images',
    'authors-avatars'
  ));
