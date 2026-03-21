import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/livesoul' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/livesoul/' : '',
};

export default nextConfig;
