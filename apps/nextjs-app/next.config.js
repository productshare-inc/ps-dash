const withBuilderDevTools = require('@builder.io/dev-tools/next')();

/** @type {import('next').NextConfig} */
const customBasePath = process.env.NEXT_PUBLIC_BASE_PATH || process.env.BASE_PATH || '';

const nextConfig = withBuilderDevTools({
  experimental: {
    serverComponentsExternalPackages: ['puppeteer-core', '@sparticuz/chromium'],
  },
  reactStrictMode: false,
  basePath: customBasePath,
  assetPrefix: customBasePath || '',
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
