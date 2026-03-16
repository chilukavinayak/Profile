/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },
  output: 'export',
  distDir: 'dist',
  trailingSlash: true,
  // No basePath or assetPrefix needed for custom domain
  webpack: (config) => {
    config.module.rules.push({
      test: /\.glsl$/,
      use: 'raw-loader',
    });
    return config;
  },
}

module.exports = nextConfig
