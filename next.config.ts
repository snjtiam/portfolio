import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    domains: ["localhost"],
    unoptimized: true,
  },
  // Uncomment the line below and replace 'resume' with your repo name if this is a GitHub project page
  basePath: "/portfolio",
};

export default nextConfig;
