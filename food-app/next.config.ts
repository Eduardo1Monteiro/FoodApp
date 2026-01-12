/** @type {import('next').NextConfig} */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb', // Aumente para 5mb, 10mb, etc.
    },
  },
  staticPageGenerationTimeout: 120,
};

export default nextConfig;
