import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
const { render, zh, en } = await import('./dist/server/entry-server.js');

const locales = ['zh', 'en'];

// Common assets
const assetsDir = toAbsolute('dist/assets');
const files = fs.readdirSync(assetsDir);
const cssFile = files.find(f => f.endsWith('.css'));
let cssContent = '';
if (cssFile) {
  cssContent = fs.readFileSync(path.join(assetsDir, cssFile), 'utf-8');
}

const importMap = {
  imports: {
    "preact": "https://esm.sh/preact@10.28.2",
    "preact/hooks": "https://esm.sh/preact@10.28.2/hooks",
    "preact/compat": "https://esm.sh/preact@10.28.2/compat",
    "react": "https://esm.sh/preact@10.28.2/compat",
    "react-dom": "https://esm.sh/preact@10.28.2/compat"
  }
};
const importMapTag = `\n    <script type="importmap">\n    ${JSON.stringify(importMap, null, 2)}\n    </script>`;

for (const locale of locales) {
  console.log(`Prerendering locale: ${locale}`);
  const t = locale === 'en' ? en : zh;
  
  // 1. Render App with locale
  const { html: appHtml } = await render(locale);
  console.log(`App rendered (${locale}), HTML length: ${appHtml.length}`);

  // 2. Process Template
  let html = template.replace(`<!--app-html-->`, appHtml);

  // Metadata translation
  html = html.replace(/<title>.*?<\/title>/, `<title>${t.meta.title}</title>`);
  html = html.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${t.meta.desc}" />`);
  html = html.replace(/<meta name="keywords" content=".*?" \/>/, `<meta name="keywords" content="${t.meta.keywords}" />`);
  
  // Open Graph
  html = html.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${t.meta.title}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${t.meta.desc}" />`);
  
  // Twitter
  html = html.replace(/<meta property="twitter:title" content=".*?" \/>/, `<meta property="twitter:title" content="${t.meta.title}" />`);
  html = html.replace(/<meta property="twitter:description" content=".*?" \/>/, `<meta property="twitter:description" content="${t.meta.desc}" />`);

  // Inline CSS
  if (cssFile) {
    const linkTagRegex = new RegExp(`<link[^>]*href=["'][^"']*${cssFile}["'][^>]*>`, 'g');
    html = html.replace(linkTagRegex, `<style>${cssContent}</style>`);
  }

  // Inject Import Map
  html = html.replace('</title>', `</title>${importMapTag}`);
  
  // Update lang attribute
  html = html.replace('<html lang="zh-CN"', `<html lang="${locale === 'zh' ? 'zh-CN' : 'en'}"`);

  // Add Hreflang for SEO
  const hreflangTags = `
    <link rel="alternate" hreflang="zh-CN" href="https://yaoshengwood.com/" />
    <link rel="alternate" hreflang="en" href="https://yaoshengwood.com/en/" />
    <link rel="alternate" hreflang="x-default" href="https://yaoshengwood.com/" />`;
  html = html.replace('</head>', `${hreflangTags}\n  </head>`);

  // 3. Save file
  if (locale === 'zh') {
    fs.writeFileSync(toAbsolute('dist/index.html'), html);
    console.log('Generated dist/index.html (zh)');
  } else {
    const outDir = toAbsolute(`dist/${locale}`);
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }
    fs.writeFileSync(path.join(outDir, 'index.html'), html);
    console.log(`Generated dist/${locale}/index.html`);
  }
}

console.log('Prerendering finished for all locales.');

// 4. Generate sitemap.xml
const lastmod = new Date().toISOString().split('T')[0];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://weihaiyaosheng.com/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="zh-CN" href="https://weihaiyaosheng.com/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://weihaiyaosheng.com/en/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://weihaiyaosheng.com/" />
  </url>
  <url>
    <loc>https://weihaiyaosheng.com/en/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="zh-CN" href="https://weihaiyaosheng.com/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://weihaiyaosheng.com/en/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://weihaiyaosheng.com/" />
  </url>
</urlset>`;

fs.writeFileSync(toAbsolute('dist/sitemap.xml'), sitemap);
console.log('Generated dist/sitemap.xml');

// 5. Generate robots.txt
const robots = `User-agent: *
Allow: /
Sitemap: https://weihaiyaosheng.com/sitemap.xml
`;

fs.writeFileSync(toAbsolute('dist/robots.txt'), robots);
console.log('Generated dist/robots.txt');
