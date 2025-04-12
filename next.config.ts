import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  // GitHub Pages deployment
  basePath: "",
  trailingSlash: true,
};

export default nextConfig;
