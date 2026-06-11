import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import compression from 'compression';
import fs from 'fs';
import http from 'http';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;
const httpPort = process.env.HTTP_PORT;
const httpsPort = process.env.HTTPS_PORT || port;
const certificatePath = process.env.SSL_CERT_PATH || process.env.CERT_PATH;
const privateKeyPath = process.env.SSL_KEY_PATH || process.env.KEY_PATH;
const certificateAuthorityPath = process.env.SSL_CA_PATH || process.env.CA_PATH;

const readSslFile = (filePath) => {
  if (!filePath) return undefined;

  const resolvedPath = path.isAbsolute(filePath)
    ? filePath
    : path.join(__dirname, filePath);

  if (!fs.existsSync(resolvedPath)) {
    throw new Error(`SSL file not found: ${resolvedPath}`);
  }

  return fs.readFileSync(resolvedPath);
};

const getSslOptions = () => {
  if (!certificatePath && !privateKeyPath) return null;

  if (!certificatePath || !privateKeyPath) {
    throw new Error('Both SSL_CERT_PATH and SSL_KEY_PATH are required to enable HTTPS.');
  }

  return {
    cert: readSslFile(certificatePath),
    key: readSslFile(privateKeyPath),
    ca: readSslFile(certificateAuthorityPath)
  };
};

const redirectToHttps = (req, res) => {
  const host = req.headers.host?.replace(/:\d+$/, '') || 'localhost';
  const targetPort = String(httpsPort) === '443' ? '' : `:${httpsPort}`;
  res.writeHead(301, {
    Location: `https://${host}${targetPort}${req.url}`,
    Connection: 'close'
  });
  res.end();
};

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

const sslOptions = getSslOptions();

if (sslOptions) {
  https.createServer(sslOptions, app).listen(httpsPort, () => {
    console.log(`Production server running at https://localhost:${httpsPort}`);
  });

  if (httpPort) {
    http.createServer(redirectToHttps).listen(httpPort, () => {
      console.log(`HTTP redirect server running at http://localhost:${httpPort}`);
    });
  }
} else {
  app.listen(port, () => {
    console.log(`Production server running at http://localhost:${port}`);
  });
}
