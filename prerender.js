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
  
  // Replace the <link> tag with <style>
  // Vite generates: <link rel="stylesheet" crossorigin href="/assets/index-INQRggF4.css">
  const linkTagRegex = new RegExp(`<link[^>]*href=["'][^"']*${cssFile}["'][^>]*>`, 'g');
  html = html.replace(linkTagRegex, `<style>${cssContent}</style>`);
  
  console.log(`Inlined CSS from ${cssFile} into index.html`);
  
  // Optional: Remove the physical CSS file if it's no longer needed elsewhere
  // fs.unlinkSync(cssPath); 
}

fs.writeFileSync(toAbsolute('dist/index.html'), html);
console.log('Prerendered index.html successfully with inlined CSS.');
