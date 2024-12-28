/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['tile.openstreetmap.org'], // For map tiles
    },
    webpack: (config) => {
      config.resolve.fallback = { fs: false, net: false, tls: false };
      return config;
    },
}

export default nextConfig;