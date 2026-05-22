/**
 * Post-build sanitiser.
 *
 * The Astro/React render pipeline occasionally emits a stray NUL byte
 * just before a multi-byte UTF-8 character (observed on ~4 strings out
 * of thousands). The source data and markdown files are clean, so the
 * byte is introduced during rendering. A NUL in HTML makes the document
 * invalid and makes text tooling treat the file as binary.
 *
 * Rather than chase a compiler-level bug, we drop C0 control bytes
 * (keeping tab 0x09 / LF 0x0A / CR 0x0D) from every built .html file as
 * the last build step. Filtering at the byte level is safe: every byte
 * of a multi-byte UTF-8 sequence is >= 0x80, so a control-byte filter
 * never touches real characters.
 */
import { readdirSync, statSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

function isControl(byte) {
  return byte < 9 || byte === 11 || byte === 12 || (byte >= 14 && byte <= 31) || byte === 127;
}

let scanned = 0;
let cleaned = 0;

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) {
      walk(p);
    } else if (name.endsWith('.html')) {
      scanned++;
      const buf = readFileSync(p);
      let controlCount = 0;
      for (let i = 0; i < buf.length; i++) {
        if (isControl(buf[i])) controlCount++;
      }
      if (controlCount === 0) continue;
      writeFileSync(p, Buffer.from([...buf].filter((b) => !isControl(b))));
      cleaned++;
      console.log(`  cleaned ${p} (${controlCount} control byte(s))`);
    }
  }
}

for (const dir of ['dist', '.vercel/output/static']) {
  if (existsSync(dir)) walk(dir);
}

console.log(`[strip-html] ${scanned} HTML files scanned, ${cleaned} sanitised`);
