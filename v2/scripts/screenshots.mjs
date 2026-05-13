import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import { setTimeout as wait } from 'node:timers/promises';
import puppeteer from 'puppeteer';

const PORT = 4322;
const SITE = `http://127.0.0.1:${PORT}`;

const PAGES = [
  { path: '/', label: 'home' },
  { path: '/itineraires/cap-corse', label: 'itineraire' },
  { path: '/hebergements/best-western-plus-ajaccio-amiraute', label: 'hebergement' },
  { path: '/blog/budget-voyage-moto-corse', label: 'blog' },
];

const VIEWPORTS = [
  { label: 'iphone-se', width: 375, height: 667, dsr: 2, isMobile: true, hasTouch: true },
  { label: 'iphone-14', width: 393, height: 852, dsr: 3, isMobile: true, hasTouch: true },
  { label: 'galaxy-s8', width: 360, height: 740, dsr: 3, isMobile: true, hasTouch: true },
  { label: 'ipad', width: 768, height: 1024, dsr: 2, isMobile: true, hasTouch: true },
  { label: 'desktop-1280', width: 1280, height: 800, dsr: 1, isMobile: false, hasTouch: false },
  { label: 'desktop-1920', width: 1920, height: 1080, dsr: 1, isMobile: false, hasTouch: false },
];

async function main() {
  const dir = 'reports/screenshots';
  await mkdir(dir, { recursive: true });

  console.log('▸ start static server');
  const server = spawn(
    'npx',
    ['--yes', 'http-server', 'dist/client', '-p', String(PORT), '-a', '127.0.0.1', '--silent'],
    { stdio: ['ignore', 'pipe', 'pipe'], env: process.env },
  );
  for (let i = 0; i < 30; i++) {
    try {
      const r = await fetch(SITE + '/');
      if (r.ok) break;
    } catch (_) {}
    await wait(400);
  }

  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    headless: 'new',
  });

  const overflow = [];
  for (const vp of VIEWPORTS) {
    for (const page of PAGES) {
      const tab = await browser.newPage();
      await tab.setViewport({
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: vp.dsr,
        isMobile: vp.isMobile,
        hasTouch: vp.hasTouch,
      });
      try {
        await tab.goto(SITE + page.path, { waitUntil: 'networkidle2', timeout: 30000 });
        const scrollWidth = await tab.evaluate(() => document.documentElement.scrollWidth);
        const innerWidth = await tab.evaluate(() => window.innerWidth);
        if (scrollWidth > innerWidth + 1) {
          overflow.push({ page: page.label, vp: vp.label, scrollWidth, innerWidth });
        }
        const filename = `${dir}/${page.label}_${vp.label}.png`;
        await tab.screenshot({ path: filename, fullPage: false });
        console.log(`  ✓ ${page.label} @ ${vp.label} (${vp.width}x${vp.height})`);
      } catch (err) {
        console.error(`  ✗ ${page.label} @ ${vp.label}: ${err.message}`);
      }
      await tab.close();
    }
  }

  const report = {
    timestamp: new Date().toISOString(),
    viewports: VIEWPORTS,
    pages: PAGES,
    overflow,
  };
  await writeFile(`${dir}/_summary.json`, JSON.stringify(report, null, 2));

  console.log('\n— Horizontal overflow check —');
  if (overflow.length === 0) {
    console.log('  ✓ No overflow detected (all 24 combinations).');
  } else {
    for (const o of overflow) console.log(`  ✗ ${o.page} @ ${o.vp}: scrollW=${o.scrollWidth} > innerW=${o.innerWidth}`);
  }

  await browser.close();
  server.kill('SIGTERM');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
