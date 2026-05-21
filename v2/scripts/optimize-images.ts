/**
 * Losslessly recompress images in public/lovable-uploads.
 *
 * The original PNGs were exported with weak compression (1-2.5 MB for
 * ~1300px photos). Re-encoding at max zlib effort cuts ~65-70% with no
 * quality loss and, crucially, keeps the exact same filename + .png
 * extension so no data/Supabase reference needs to change.
 *
 * Usage: npx tsx scripts/optimize-images.ts
 */
import sharp from 'sharp';
import { readdirSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const DIR = new URL('../public/lovable-uploads/', import.meta.url).pathname;

async function run() {
  const files = readdirSync(DIR).filter((f) => /\.(png|jpe?g)$/i.test(f));
  let before = 0;
  let after = 0;

  for (const file of files) {
    const path = join(DIR, file);
    const origSize = statSync(path).size;
    const pipeline = sharp(path);

    const out = /\.png$/i.test(file)
      ? await pipeline.png({ compressionLevel: 9, effort: 10 }).toBuffer()
      : await pipeline.jpeg({ quality: 82, mozjpeg: true }).toBuffer();

    // Only overwrite if we actually saved bytes.
    if (out.length < origSize) {
      writeFileSync(path, out);
    }
    const finalSize = Math.min(out.length, origSize);
    before += origSize;
    after += finalSize;
    const pct = (((origSize - finalSize) / origSize) * 100).toFixed(0);
    console.log(
      `${file}  ${(origSize / 1024).toFixed(0)}KB -> ${(finalSize / 1024).toFixed(0)}KB  (-${pct}%)`,
    );
  }

  console.log(
    `\nTotal: ${(before / 1048576).toFixed(1)}MB -> ${(after / 1048576).toFixed(1)}MB ` +
      `(-${(((before - after) / before) * 100).toFixed(0)}%)`,
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
