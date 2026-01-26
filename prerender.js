import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
const { render } = await import('./dist/server/entry-server.js');

const { html: appHtml } = render();

// 1. Inject App HTML
let html = template.replace(`<!--app-html-->`, appHtml);

// 2. Inline CSS
const assetsDir = toAbsolute('dist/assets');
const files = fs.readdirSync(assetsDir);
const cssFile = files.find(f => f.endsWith('.css'));

if (cssFile) {
  const cssPath = path.join(assetsDir, cssFile);
  const cssContent = fs.readFileSync(cssPath, 'utf-8');
  const linkTagRegex = new RegExp(`<link[^>]*href=["'][^"']*${cssFile}["'][^>]*>`, 'g');
  html = html.replace(linkTagRegex, `<style>${cssContent}</style>`);
  console.log(`Inlined CSS from ${cssFile}`);
}

// 3. Inject Import Map
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
html = html.replace('</title>', `</title>${importMapTag}`);

fs.writeFileSync(toAbsolute('dist/index.html'), html);
console.log('Prerendered index.html successfully with Import Maps.');
