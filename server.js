import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import compression from 'compression';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Enable gzip compression
app.use(compression());

const distPath = path.join(__dirname, 'dist');

// 1. Serve static assets with long cache headers
app.use('/assets', express.static(path.join(distPath, 'assets'), {
  maxAge: '1y',
  immutable: true
}));

// 2. Serve English version static files
app.use('/en', express.static(path.join(distPath, 'en')));

// 3. Serve root static files
app.use(express.static(distPath));

// 4. Handle English version fallbacks (for SPA/Deep links)
app.get(/^\/en\/.*/, (req, res) => {
  res.sendFile(path.join(distPath, 'en', 'index.html'));
});

// 5. Handle root fallbacks
app.get(/^(?!\/assets\/).*/, (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Production server running at http://localhost:${port}`);
});
