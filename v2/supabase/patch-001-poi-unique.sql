-- Patch 001: POI legacy_id must be UNIQUE so the migration's upsert works.
-- Safe to re-run.

alter table public.points_of_interest
  add constraint points_of_interest_legacy_id_key unique (legacy_id);
