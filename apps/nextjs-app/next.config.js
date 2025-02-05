const withBuilderDevTools = require('@builder.io/dev-tools/next')();

/** @type {import('next').NextConfig} */
const nextConfig = withBuilderDevTools({
  experimental: {
    serverComponentsExternalPackages: ['puppeteer-core', '@sparticuz/chromium'],
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: '0mckiahhlguhefmi.public.blob.vercel-storage.com',
        protocol: 'https',
      },
    ],
  }, // Disable Strict Mode
});

module.exports = nextConfig;
