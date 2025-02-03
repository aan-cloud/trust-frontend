import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ucarecdn.com',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'static.vecteezy.com'
      },
      {
        protocol: 'https',
        hostname: 'png.pngtree.com'
      }
    ],
  },
};

export default nextConfig;
