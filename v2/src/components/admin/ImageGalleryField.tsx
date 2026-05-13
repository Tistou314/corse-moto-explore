import { useState } from 'react';
import { supabase } from '@/lib/supabase';

interface Props {
  value: string[];
  onChange: (urls: string[]) => void;
  bucket: string;
}

export default function ImageGalleryField({ value, onChange, bucket }: Props) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function addFiles(files: FileList | null) {
    if (!files || !supabase) return;
    setUploading(true);
    setError(null);
    const urls: string[] = [];
    for (const file of Array.from(files)) {
      const ext = file.name.split('.').pop() ?? 'jpg';
      const path = `gallery/${crypto.randomUUID()}.${ext}`;
      const { error } = await supabase.storage.from(bucket).upload(path, file, {
        contentType: file.type,
        cacheControl: '31536000',
      });
      if (error) {
        setError(error.message);
        continue;
      }
      urls.push(supabase.storage.from(bucket).getPublicUrl(path).data.publicUrl);
    }
    setUploading(false);
    onChange([...(value ?? []), ...urls]);
  }

  function removeAt(i: number) {
    const next = (value ?? []).slice();
    next.splice(i, 1);
    onChange(next);
  }

  function move(from: number, to: number) {
    if (to < 0 || to >= value.length) return;
    const next = value.slice();
    const [it] = next.splice(from, 1);
    next.splice(to, 0, it);
    onChange(next);
  }

  return (
    <div className="space-y-3">
      <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {(value ?? []).map((url, i) => (
          <div key={url + i} className="group relative border border-border bg-bg-subtle">
            <img src={url} alt="" className="block aspect-[4/3] w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-bg/95 px-2 py-1 text-xs">
              <span className="text-text-muted">{i + 1}</span>
              <div className="flex gap-2">
                <button type="button" onClick={() => move(i, i - 1)} className="hover:text-accent" aria-label="Monter">↑</button>
                <button type="button" onClick={() => move(i, i + 1)} className="hover:text-accent" aria-label="Descendre">↓</button>
                <button type="button" onClick={() => removeAt(i)} className="text-red-700 hover:underline" aria-label="Supprimer">×</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <input
        type="file"
        multiple
        accept="image/*"
        disabled={uploading}
        onChange={(e) => addFiles(e.target.files)}
        className="block text-sm"
      />
      {uploading && <p className="text-sm text-text-muted">Téléversement.</p>}
      {error && <p className="text-sm text-red-700">{error}</p>}
    </div>
  );
}
