/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental:{
      serverComponentsExternalPackages:["puppeteer-core","@sparticuz/chromium"],
  },
  reactStrictMode: false,
  images:{
    remotePatterns: [
        {hostname: '0mckiahhlguhefmi.public.blob.vercel-storage.com', protocol:'https'},
    ]
} // Disable Strict Mode
};

module.exports = nextConfig;
