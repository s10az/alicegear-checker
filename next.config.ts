import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  // static exportのためにnext/imageの最適化を無効にする
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
