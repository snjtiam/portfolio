import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    domains: ["localhost"],
    unoptimized: true,
  },
  assetPrefix: "/portfolio",
  basePath: "/portfolio",
  trailingSlash: true,
};

export default nextConfig;
