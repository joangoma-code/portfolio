import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ['192.168.1.110','192.168.1.48', '192.168.1.133'],
};

export default nextConfig;
