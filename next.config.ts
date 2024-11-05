import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: false,
  },
  /* config options here */
  eslint:{
    ignoreDuringBuilds: true,
},
typescript: {
  ignoreBuildErrors: false, 
},
};

export default nextConfig;
