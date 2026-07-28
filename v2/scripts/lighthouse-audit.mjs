import { spawn } from 'node:child_process';
import { writeFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { setTimeout as wait } from 'node:timers/promises';
import lighthouse from 'lighthouse';
import puppeteer from 'puppeteer';

const PORT = 4321;
const EXTERNAL_SITE = process.env.LIGHTHOUSE_SITE?.replace(/\/$/, '');
const SITE = EXTERNAL_SITE ?? `http://localhost:${PORT}`;

const TARGETS = [
  { path: '/', label: 'home' },
  { path: '/itineraires/cap-corse', label: 'itineraire' },
  { path: '/hebergements/best-western-plus-ajaccio-amiraute', label: 'hebergement' },
  { path: '/blog/budget-voyage-moto-corse', label: 'blog' },
];

async function main() {
  const reportsDir = resolve('reports/lighthouse');
  await mkdir(reportsDir, { recursive: true });

  let preview = null;
  if (!EXTERNAL_SITE) {
    console.log('▸ start static server on dist/client');
    preview = spawn(
      'npx',
      ['--yes', 'http-server', 'dist/client', '-p', String(PORT), '-a', '127.0.0.1', '--silent'],
      { stdio: ['ignore', 'pipe', 'pipe'], env: process.env },
    );
    preview.stdout.on('data', () => {});
    preview.stderr.on('data', (d) => process.stderr.write(d));
    for (let i = 0; i < 30; i++) {
      try {
        const res = await fetch(SITE + '/');
        if (res.ok) break;
      } catch (_) {}
      await wait(500);
    }
  } else {
    console.log(`▸ auditing external site: ${SITE}`);
  }

  console.log('▸ launch chrome');
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--headless=new', '--disable-dev-shm-usage'],
    headless: 'new',
    // Sandboxes ship Chromium at a fixed path rather than in puppeteer's
    // download cache; honour it when present so the audit still runs.
    ...(process.env.PUPPETEER_EXECUTABLE_PATH && {
      executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
    }),
  });
  const wsEndpoint = browser.wsEndpoint();
  const port = Number(new URL(wsEndpoint).port);

  const results = [];
  for (const target of TARGETS) {
    console.log(`▸ audit ${target.path}`);
    try {
      const runner = await lighthouse(SITE + target.path, {
        port,
        output: 'json',
        logLevel: 'error',
        formFactor: 'mobile',
        screenEmulation: { mobile: true, width: 412, height: 823, deviceScaleFactor: 1.75, disabled: false },
        throttling: {
          rttMs: 150,
          throughputKbps: 1638.4,
          cpuSlowdownMultiplier: 4,
          requestLatencyMs: 0,
          downloadThroughputKbps: 0,
          uploadThroughputKbps: 0,
        },
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      });
      if (!runner) throw new Error('lighthouse returned undefined');
      const lhr = runner.lhr;
      const scores = {
        path: target.path,
        label: target.label,
        performance: Math.round((lhr.categories.performance?.score ?? 0) * 100),
        accessibility: Math.round((lhr.categories.accessibility?.score ?? 0) * 100),
        bestPractices: Math.round((lhr.categories['best-practices']?.score ?? 0) * 100),
        seo: Math.round((lhr.categories.seo?.score ?? 0) * 100),
        lcp: lhr.audits['largest-contentful-paint']?.numericValue ?? null,
        cls: lhr.audits['cumulative-layout-shift']?.numericValue ?? null,
        tbt: lhr.audits['total-blocking-time']?.numericValue ?? null,
        fcp: lhr.audits['first-contentful-paint']?.numericValue ?? null,
      };
      results.push(scores);
      await writeFile(`${reportsDir}/${target.label}.json`, JSON.stringify(lhr));
    } catch (err) {
      console.error(`  ! ${target.path} failed: ${err.message}`);
      results.push({ path: target.path, label: target.label, error: err.message });
    }
  }

  console.log('\n— Lighthouse mobile (4G) —');
  console.log('path                                 perf  a11y   bp  seo   LCP    CLS    TBT');
  for (const r of results) {
    if (r.error) {
      console.log(`${r.path.padEnd(40)} ERROR: ${r.error}`);
      continue;
    }
    console.log(
      `${r.path.padEnd(40)} ${String(r.performance).padStart(4)}  ${String(r.accessibility).padStart(4)}  ${String(r.bestPractices).padStart(3)}  ${String(r.seo).padStart(3)}  ${(r.lcp ? Math.round(r.lcp) + 'ms' : '—').padStart(6)}  ${(r.cls?.toFixed(3) ?? '—').padStart(5)}  ${(r.tbt ? Math.round(r.tbt) + 'ms' : '—').padStart(5)}`,
    );
  }

  await writeFile(`${reportsDir}/_summary.json`, JSON.stringify(results, null, 2));

  await browser.close();
  if (preview) preview.kill('SIGTERM');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
