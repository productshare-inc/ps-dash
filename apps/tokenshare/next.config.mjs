/** @type {import('next').NextConfig} */

const customBasePath = process.env.NEXT_PUBLIC_BASE_PATH || process.env.BASE_PATH || '';
const nextConfig = {
  basePath: customBasePath,
  assetPrefix: customBasePath || '',
};
export default nextConfig;
