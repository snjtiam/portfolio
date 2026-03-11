import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/portfolio";

const siteUrl = siteConfig.url.endsWith("/") ? siteConfig.url : `${siteConfig.url}/`;

const resolveSiteUrl = (path = "") => new URL(path.replace(/^\//, ""), siteUrl).toString();

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: siteUrl,
    name: `${siteConfig.name} | ${siteConfig.role}`,
    short_name: siteConfig.name,
    description: siteConfig.seoDescription,
    start_url: siteUrl,
    scope: siteUrl,
    display: "standalone",
    orientation: "portrait",
    background_color: "#07101d",
    theme_color: "#07101d",
    lang: "en-US",
    categories: ["portfolio", "business", "technology", "developer"],
    icons: [
      {
        src: resolveSiteUrl("icon.svg"),
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: resolveSiteUrl("apple-icon"),
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
