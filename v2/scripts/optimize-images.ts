/**
 * Optimize images in public/lovable-uploads.
 *
 * 1. Losslessly recompress every PNG/JPEG in place (max zlib effort /
 *    mozjpeg) — same filename, so no data/Supabase reference moves.
 * 2. Emit a sibling .webp for each image. Hero components reference it
 *    through a <picture> element, with the original as fallback.
 *
 * Usage: npx tsx scripts/optimize-images.ts
 */
import sharp from 'sharp';
import { readdirSync, statSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIR = new URL('../public/lovable-uploads/', import.meta.url).pathname;

async function run() {
  const files = readdirSync(DIR).filter((f) => /\.(png|jpe?g)$/i.test(f));
  let before = 0;
  let after = 0;
  let webpTotal = 0;

  for (const file of files) {
    const path = join(DIR, file);
    const origSize = statSync(path).size;

    const recompressed = /\.png$/i.test(file)
      ? await sharp(path).png({ compressionLevel: 9, effort: 10 }).toBuffer()
      : await sharp(path).jpeg({ quality: 82, mozjpeg: true }).toBuffer();
    if (recompressed.length < origSize) writeFileSync(path, recompressed);
    const finalSize = Math.min(recompressed.length, origSize);

    // Sibling WebP — the modern format hero <picture> elements prefer.
    const webpPath = path.replace(/\.(png|jpe?g)$/i, '.webp');
    const webp = await sharp(path).webp({ quality: 80, effort: 6 }).toBuffer();
    writeFileSync(webpPath, webp);
    webpTotal += webp.length;

    // Small WebP thumbnail (320px wide) for sidebar / card thumbnails —
    // serving the full hero for a 64px <img> wastes hundreds of KB.
    const thumbPath = path.replace(/\.(png|jpe?g)$/i, '-thumb.webp');
    const thumb = await sharp(path)
      .resize({ width: 320, withoutEnlargement: true })
      .webp({ quality: 72, effort: 6 })
      .toBuffer();
    writeFileSync(thumbPath, thumb);

    before += origSize;
    after += finalSize;
    console.log(
      `${file}  ${(origSize / 1024).toFixed(0)}KB -> ${(finalSize / 1024).toFixed(0)}KB ` +
        `| webp ${(webp.length / 1024).toFixed(0)}KB`,
    );
  }

  console.log(
    `\nRecompress: ${(before / 1048576).toFixed(1)}MB -> ${(after / 1048576).toFixed(1)}MB` +
      `  |  WebP set: ${(webpTotal / 1048576).toFixed(1)}MB`,
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
