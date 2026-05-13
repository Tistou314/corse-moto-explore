import { useMemo, useState } from 'react';
import { marked } from 'marked';

interface Props {
  value: string;
  onChange: (v: string) => void;
  rows?: number;
}

export default function MarkdownEditor({ value, onChange, rows = 18 }: Props) {
  const [tab, setTab] = useState<'edit' | 'preview'>('edit');
  const html = useMemo(() => marked.parse(value || '', { gfm: true, breaks: false }) as string, [value]);

  return (
    <div className="border border-border bg-bg">
      <div className="flex items-center justify-between border-b border-border px-3 py-2 text-xs">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setTab('edit')}
            className={tab === 'edit' ? 'text-accent' : 'text-text-secondary hover:text-accent'}
          >
            Écrire
          </button>
          <button
            type="button"
            onClick={() => setTab('preview')}
            className={tab === 'preview' ? 'text-accent' : 'text-text-secondary hover:text-accent'}
          >
            Aperçu
          </button>
        </div>
        <span className="text-text-muted">Markdown · {value?.length ?? 0} caractères</span>
      </div>
      {tab === 'edit' ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={rows}
          className="block w-full resize-y bg-bg p-4 font-mono text-sm focus-visible:outline-none"
        />
      ) : (
        <div
          className="prose prose-neutral max-w-none p-6 prose-headings:font-serif"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )}
    </div>
  );
}
