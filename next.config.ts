import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ucarecdn.com',
        port: '',
        pathname: '/86e3de83-bd71-4ba0-9da7-d9d9335d8ee2/**',
      },
    ],
  },
}
