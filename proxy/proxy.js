const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

/**
 * SHOP APP (assume it has basePath = "/shop" in next.config.js when proxied)
 */
app.use(
  '/shop',
  createProxyMiddleware({
    target: 'http://localhost:3000',
    changeOrigin: true,
    // No pathRewrite, because Next.js expects /shop in the URL
  })
);

/**
 * DOCS APP (assume it has basePath = "/docs" when proxied)
 */
app.use(
  '/docs',
  createProxyMiddleware({
    target: 'http://localhost:3010',
    changeOrigin: true
  })
);

/**
 * HOME APP (assume it has basePath = "/home" when proxied)
 */
app.use(
  '/home',
  createProxyMiddleware({
    target: 'http://localhost:3001',
    changeOrigin: true
  })
);

/**
 * Start the proxy server
 */
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}
  - http://localhost:${PORT}/shop -> http://localhost:3000 (basePath '/shop')
  - http://localhost:${PORT}/docs -> http://localhost:3010 (basePath '/docs')
  - http://localhost:${PORT}/home -> http://localhost:3001 (basePath '/home')
`);
});
