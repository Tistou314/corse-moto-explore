import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const SITE = (process.env.SCREENSHOT_SITE ?? 'https://www.corseamoto.com').replace(/\/$/, '');

const VIEWPORTS = [
  { name: 'iphone-se', width: 375, height: 667, deviceScaleFactor: 2, isMobile: true },
  { name: 'iphone-14', width: 393, height: 852, deviceScaleFactor: 3, isMobile: true },
  { name: 'ipad', width: 768, height: 1024, deviceScaleFactor: 2, isMobile: true },
  { name: 'desktop', width: 1920, height: 1080, deviceScaleFactor: 1, isMobile: false },
];

const URLS = [
  { path: '/', label: 'home' },
  { path: '/itineraires/cap-corse', label: 'itineraire-cap-corse' },
  { path: '/hebergements/best-western-plus-ajaccio-amiraute', label: 'hebergement-best-western' },
  { path: '/blog/budget-voyage-moto-corse', label: 'blog-budget' },
  { path: '/itineraires', label: 'itineraires-liste' },
  { path: '/hebergements', label: 'hebergements-liste' },
  { path: '/blog', label: 'blog-liste' },
  { path: '/stations-service', label: 'stations-service' },
];

async function main() {
  const reportsDir = resolve('reports/screenshots');
  await mkdir(reportsDir, { recursive: true });

  console.log(`▸ launching chromium`);
  const browser = await chromium.launch({ headless: true });

  const summary = [];

  for (const viewport of VIEWPORTS) {
    console.log(`▸ viewport ${viewport.name} (${viewport.width}×${viewport.height})`);
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      deviceScaleFactor: viewport.deviceScaleFactor,
      isMobile: viewport.isMobile,
      hasTouch: viewport.isMobile,
      userAgent: viewport.isMobile
        ? 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
        : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
    });

    for (const url of URLS) {
      const fullUrl = SITE + url.path;
      const fileName = `${url.label}.${viewport.name}.png`;
      const filePath = resolve(reportsDir, fileName);
      console.log(`  ▸ ${url.label} → ${fileName}`);

      const page = await context.newPage();
      try {
        await page.goto(fullUrl, { waitUntil: 'networkidle', timeout: 30_000 });
        // Give a moment for any deferred React hydration / image lazy load
        await page.waitForTimeout(1_500);
        await page.screenshot({ path: filePath, fullPage: true });
        summary.push({
          viewport: viewport.name,
          url: url.path,
          file: fileName,
          status: 'ok',
        });
      } catch (err) {
        console.error(`    ! failed: ${err.message}`);
        summary.push({
          viewport: viewport.name,
          url: url.path,
          file: fileName,
          status: 'error',
          error: err.message,
        });
      } finally {
        await page.close();
      }
    }
    await context.close();
  }

  await browser.close();

  await writeFile(
    resolve(reportsDir, '_summary.json'),
    JSON.stringify({ site: SITE, captured_at: new Date().toISOString(), summary }, null, 2),
  );

  const ok = summary.filter((s) => s.status === 'ok').length;
  const failed = summary.length - ok;
  console.log(`\n— Done — ${ok}/${summary.length} ok, ${failed} failed`);
  if (failed > 0) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
