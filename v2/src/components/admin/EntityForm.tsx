import { useEffect, useState, type FormEvent } from 'react';
import { supabase } from '@/lib/supabase';
import ImageGalleryField from './ImageGalleryField';
import MarkdownEditor from './MarkdownEditor';

export interface Field {
  name: string;
  label: string;
  type:
    | 'text'
    | 'slug'
    | 'textarea'
    | 'markdown'
    | 'number'
    | 'select'
    | 'array'
    | 'boolean'
    | 'image'
    | 'gallery'
    | 'date';
  required?: boolean;
  options?: { value: string; label: string }[];
  bucket?: string;
  hint?: string;
}

interface Props {
  table: string;
  fields: Field[];
  id?: string;
  redirectTo: string;
  title: string;
  defaults?: Record<string, unknown>;
}

function slugify(input: string) {
  return input
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default function EntityForm({ table, fields, id, redirectTo, title, defaults = {} }: Props) {
  const [values, setValues] = useState<Record<string, any>>(defaults);
  const [loading, setLoading] = useState(!!id);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id || !supabase) return;
    supabase
      .from(table)
      .select('*')
      .eq('id', id)
      .single()
      .then(({ data, error }) => {
        setLoading(false);
        if (error) setError(error.message);
        else setValues(data ?? {});
      });
  }, [id, table]);

  function setField(name: string, value: unknown) {
    setValues((v) => ({ ...v, [name]: value }));
  }

  async function uploadImage(file: File, bucket: string) {
    if (!supabase) throw new Error('Supabase non configuré');
    const ext = file.name.split('.').pop() ?? 'jpg';
    const path = `${crypto.randomUUID()}.${ext}`;
    const { error } = await supabase.storage.from(bucket).upload(path, file, {
      cacheControl: '31536000',
      upsert: false,
      contentType: file.type,
    });
    if (error) throw error;
    return supabase.storage.from(bucket).getPublicUrl(path).data.publicUrl;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!supabase) return;
    setSaving(true);
    setError(null);
    const payload: Record<string, unknown> = {};
    for (const f of fields) {
      const v = values[f.name];
      if (f.type === 'array') {
        payload[f.name] = typeof v === 'string'
          ? v.split('\n').map((s) => s.trim()).filter(Boolean)
          : Array.isArray(v)
            ? v
            : [];
      } else if (f.type === 'gallery') {
        payload[f.name] = Array.isArray(v) ? v : [];
      } else if (f.type === 'number') {
        payload[f.name] = v === '' || v == null ? null : Number(v);
      } else if (f.type === 'boolean') {
        payload[f.name] = !!v;
      } else if (f.type === 'slug') {
        payload[f.name] = v ? slugify(String(v)) : null;
      } else {
        payload[f.name] = v === '' ? null : v ?? null;
      }
    }
    let res;
    if (id) {
      res = await supabase.from(table).update(payload).eq('id', id);
    } else {
      res = await supabase.from(table).insert(payload);
    }
    setSaving(false);
    if (res.error) {
      setError(res.error.message);
      return;
    }
    const { data: sess } = await supabase.auth.getSession();
    const accessToken = sess?.session?.access_token;
    if (accessToken) {
      fetch('/api/admin/deploy', {
        method: 'POST',
        headers: { Authorization: `Bearer ${accessToken}` },
      }).catch(() => {});
    }
    window.location.href = redirectTo;
  }

  if (loading) return <p className="text-text-muted">Chargement.</p>;

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <header className="flex items-end justify-between border-b border-border pb-6">
        <h1 className="font-serif text-3xl">{title}</h1>
        <a href={redirectTo} className="text-sm text-text-secondary hover:text-accent">
          Annuler
        </a>
      </header>

      {fields.map((f) => (
        <div key={f.name}>
          <label className="block text-sm text-text-secondary" htmlFor={f.name}>
            {f.label}
            {f.required && <span className="ml-1 text-accent">*</span>}
          </label>
          {f.hint && <p className="mt-1 text-xs text-text-muted">{f.hint}</p>}

          {f.type === 'markdown' ? (
            <div className="mt-2">
              <MarkdownEditor
                value={String(values[f.name] ?? '')}
                onChange={(v) => setField(f.name, v)}
              />
            </div>
          ) : f.type === 'gallery' ? (
            <div className="mt-2">
              <ImageGalleryField
                value={Array.isArray(values[f.name]) ? values[f.name] : []}
                onChange={(urls) => setField(f.name, urls)}
                bucket={f.bucket ?? 'accommodations-images'}
              />
            </div>
          ) : f.type === 'textarea' ? (
            <textarea
              id={f.name}
              required={f.required}
              value={String(values[f.name] ?? '')}
              onChange={(e) => setField(f.name, e.target.value)}
              rows={6}
              className="mt-2 block w-full rounded-sm border border-border bg-bg px-3 py-2 text-sm focus-visible:border-accent focus-visible:outline-none"
            />
          ) : f.type === 'select' ? (
            <select
              id={f.name}
              required={f.required}
              value={String(values[f.name] ?? '')}
              onChange={(e) => setField(f.name, e.target.value)}
              className="mt-2 block w-full min-h-[44px] rounded-sm border border-border bg-bg px-3 text-base focus-visible:border-accent focus-visible:outline-none"
            >
              <option value="">—</option>
              {f.options?.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          ) : f.type === 'array' ? (
            <textarea
              id={f.name}
              value={
                Array.isArray(values[f.name])
                  ? values[f.name].join('\n')
                  : String(values[f.name] ?? '')
              }
              onChange={(e) => setField(f.name, e.target.value)}
              rows={5}
              placeholder="Une valeur par ligne"
              className="mt-2 block w-full rounded-sm border border-border bg-bg px-3 py-2 text-sm focus-visible:border-accent focus-visible:outline-none"
            />
          ) : f.type === 'boolean' ? (
            <label className="mt-2 inline-flex items-center gap-2 text-sm text-text-secondary">
              <input
                type="checkbox"
                checked={!!values[f.name]}
                onChange={(e) => setField(f.name, e.target.checked)}
              />
              Activé
            </label>
          ) : f.type === 'image' ? (
            <div className="mt-2 space-y-3">
              {values[f.name] && (
                <img
                  src={String(values[f.name])}
                  alt=""
                  className="h-32 w-auto border border-border object-cover"
                />
              )}
              <input
                type="file"
                accept="image/*"
                onChange={async (e) => {
                  const file = e.target.files?.[0];
                  if (!file || !f.bucket) return;
                  try {
                    const url = await uploadImage(file, f.bucket);
                    setField(f.name, url);
                  } catch (err) {
                    setError((err as Error).message);
                  }
                }}
                className="block text-sm"
              />
              <input
                type="text"
                placeholder="ou colle une URL"
                value={String(values[f.name] ?? '')}
                onChange={(e) => setField(f.name, e.target.value)}
                className="block w-full min-h-[40px] rounded-sm border border-border bg-bg px-3 text-sm focus-visible:border-accent focus-visible:outline-none"
              />
            </div>
          ) : (
            <input
              id={f.name}
              type={f.type === 'date' ? 'date' : f.type === 'number' ? 'number' : 'text'}
              required={f.required}
              value={
                f.type === 'date' && values[f.name]
                  ? String(values[f.name]).slice(0, 10)
                  : String(values[f.name] ?? '')
              }
              onChange={(e) => setField(f.name, e.target.value)}
              className="mt-2 block w-full min-h-[44px] rounded-sm border border-border bg-bg px-3 text-base focus-visible:border-accent focus-visible:outline-none"
            />
          )}
        </div>
      ))}

      {error && <p className="text-sm text-red-700">{error}</p>}

      <div className="flex items-center gap-4 border-t border-border pt-6">
        <button
          type="submit"
          disabled={saving}
          className="inline-flex min-h-[44px] items-center justify-center bg-accent px-6 text-accent-foreground transition hover:bg-accent/90 disabled:opacity-60"
        >
          {saving ? 'Enregistrement.' : id ? 'Enregistrer' : 'Créer'}
        </button>
        <a href={redirectTo} className="text-sm text-text-secondary hover:text-accent">
          Annuler
        </a>
      </div>
    </form>
  );
}
