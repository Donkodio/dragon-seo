#!/usr/bin/env node
/**
 * Carzo SEO prerender generator.
 *
 * The site is a client-side SPA, so crawlers receive an empty shell with a
 * single generic <title> and no per-page meta/structured-data. That is the #1
 * reason articles do not index. This script reads the article data and emits a
 * fully-rendered, SEO-complete static HTML file per article (unique title,
 * description, canonical, Open Graph, Twitter, JSON-LD Article + FAQPage +
 * BreadcrumbList, and the full visible text). Serve these to crawlers via the
 * nginx "dynamic rendering" snippet (carzo-seo-nginx.conf) — humans keep the SPA.
 *
 * Usage:
 *   node prerender-seo.mjs <path-to-magazineContent.ts> <output-dir>
 *
 * No build step / no touching the React bundle — safe alongside parallel work.
 */
import { build } from 'esbuild';
import { mkdirSync, writeFileSync } from 'fs';
import { join, resolve } from 'path';

const SITE = 'https://carzo.site';
const BRAND = 'Carzo';
const LOGO = `${SITE}/brand/carzo-logo-full.png`;

const src = resolve(process.argv[2] || 'src/data/magazineContent.ts');
const outDir = resolve(process.argv[3] || 'seo-out');

// ── load the TS data module without a full project build ──────────────────────
async function loadArticles(tsPath) {
  const result = await build({
    entryPoints: [tsPath],
    bundle: true,
    format: 'esm',
    platform: 'node',
    write: false,
    logLevel: 'silent',
  });
  const code = result.outputFiles[0].text;
  const mod = await import('data:text/javascript;base64,' + Buffer.from(code).toString('base64'));
  return { articles: mod.MAGAZINE_ARTICLES || [], updatedAt: mod.MAGAZINE_UPDATED_AT || '' };
}

const esc = (s = '') => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

const jsonLd = (obj) => `<script type="application/ld+json">${JSON.stringify(obj)}</script>`;

function articleHtml(a, updatedAt) {
  const url = `${SITE}/magazine/${a.slug}`;
  const published = a.updatedAt || updatedAt || '2026-01-01';
  const sectionsHtml = (a.sections || []).map((s) => `
      <section>
        <h2>${esc(s.h)}</h2>
        ${s.p ? `<p>${esc(s.p)}</p>` : ''}
        ${Array.isArray(s.bullets) && s.bullets.length
          ? `<ul>${s.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>` : ''}
      </section>`).join('');
  const keyPointsHtml = Array.isArray(a.keyPoints) && a.keyPoints.length
    ? `<ul class="keypoints">${a.keyPoints.map((k) => `<li>${esc(k)}</li>`).join('')}</ul>` : '';
  const faqHtml = Array.isArray(a.faq) && a.faq.length
    ? `<section class="faq"><h2>Частые вопросы</h2>${a.faq.map((f) =>
        `<div class="qa"><h3>${esc(f.q)}</h3><p>${esc(f.a)}</p></div>`).join('')}</section>` : '';
  const sourcesHtml = Array.isArray(a.sources) && a.sources.length
    ? `<section class="sources"><h2>Источники</h2><ul>${a.sources.map((s) =>
        `<li><a href="${esc(s.href)}" rel="nofollow noopener" target="_blank">${esc(s.label)}</a></li>`).join('')}</ul></section>` : '';

  const articleSchema = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: a.title, description: a.description,
    image: LOGO, inLanguage: 'ru',
    datePublished: published, dateModified: published,
    author: { '@type': 'Organization', name: BRAND, url: SITE },
    publisher: { '@type': 'Organization', name: BRAND, logo: { '@type': 'ImageObject', url: LOGO } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    keywords: (a.tags || []).join(', '),
  };
  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Carzo', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Журнал', item: `${SITE}/magazine` },
      { '@type': 'ListItem', position: 3, name: a.title, item: url },
    ],
  };
  const faqSchema = Array.isArray(a.faq) && a.faq.length ? {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: a.faq.map((f) => ({
      '@type': 'Question', name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  } : null;

  return `<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(a.title)} — ${BRAND}</title>
<meta name="description" content="${esc(a.description)}">
<meta name="keywords" content="${esc((a.tags || []).join(', '))}">
<meta name="robots" content="index, follow, max-image-preview:large">
<link rel="canonical" href="${url}">
<meta property="og:type" content="article">
<meta property="og:site_name" content="${BRAND}">
<meta property="og:locale" content="ru_RU">
<meta property="og:title" content="${esc(a.title)}">
<meta property="og:description" content="${esc(a.description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${LOGO}">
<meta property="article:published_time" content="${published}">
<meta property="article:modified_time" content="${published}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(a.title)}">
<meta name="twitter:description" content="${esc(a.description)}">
<meta name="twitter:image" content="${LOGO}">
${jsonLd(articleSchema)}
${jsonLd(breadcrumb)}
${faqSchema ? jsonLd(faqSchema) : ''}
<style>
:root{color-scheme:dark}
body{margin:0;background:#0a0b0a;color:#e8edf5;font:16px/1.7 -apple-system,Segoe UI,Roboto,sans-serif}
.wrap{max-width:760px;margin:0 auto;padding:28px 20px 64px}
a{color:#00d95e}
header.top{display:flex;align-items:center;gap:10px;margin-bottom:28px}
header.top img{height:26px}
nav.crumbs{font-size:13px;color:#8b94a3;margin-bottom:14px}
h1{font-size:30px;line-height:1.2;margin:0 0 10px}
.meta{font-size:13px;color:#8b94a3;margin-bottom:22px}
.summary{font-size:18px;color:#c7ced9;border-left:3px solid #00d95e;padding-left:14px;margin:0 0 24px}
.keypoints{background:#141514;border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:16px 16px 16px 34px}
h2{font-size:22px;margin:34px 0 10px}
h3{font-size:17px;margin:18px 0 6px}
ul{padding-left:22px}
.faq .qa{border-top:1px solid rgba(255,255,255,.08);padding-top:12px;margin-top:12px}
.cta{display:inline-block;margin:32px 0;background:#00d95e;color:#06070a;font-weight:800;text-decoration:none;padding:13px 26px;border-radius:12px}
.sources{font-size:14px;color:#8b94a3;margin-top:36px}
footer{margin-top:48px;font-size:13px;color:#8b94a3;border-top:1px solid rgba(255,255,255,.08);padding-top:18px}
footer a{margin-right:14px}
</style>
</head>
<body>
<div class="wrap">
<header class="top"><a href="${SITE}/"><img src="${LOGO}" alt="Carzo"></a></header>
<nav class="crumbs"><a href="${SITE}/">Carzo</a> › <a href="${SITE}/magazine">Журнал</a> › ${esc(a.category || 'Статья')}</nav>
<article>
<h1>${esc(a.title)}</h1>
<div class="meta">${esc(a.category || '')}${a.readTime ? ' · ' + esc(a.readTime) : ''}${published ? ' · обновлено ' + esc(published) : ''}</div>
${a.summary ? `<p class="summary">${esc(a.summary)}</p>` : ''}
${keyPointsHtml}
${sectionsHtml}
${faqHtml}
<a class="cta" href="${SITE}/app/feed">🔎 Искать авто по всей Европе на Carzo</a>
${sourcesHtml}
</article>
<footer>
<a href="${SITE}/about">О нас</a><a href="${SITE}/pricing">Тарифы</a><a href="${SITE}/magazine">Журнал</a><a href="${SITE}/support">Помощь</a><a href="${SITE}/privacy">Конфиденциальность</a>
</footer>
</div>
</body>
</html>`;
}

// ── run ───────────────────────────────────────────────────────────────────────
const { articles, updatedAt } = await loadArticles(src);
mkdirSync(outDir, { recursive: true });
let n = 0;
for (const a of articles) {
  if (!a?.slug) continue;
  writeFileSync(join(outDir, `${a.slug}.html`), articleHtml(a, updatedAt), 'utf8');
  n += 1;
}
console.log(`Generated ${n} SEO HTML files → ${outDir}`);
