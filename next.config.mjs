import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.origamid.online',
        port: '',
        pathname: '/imagens/**'
      }
    ]
  }
};

export default nextConfig;
