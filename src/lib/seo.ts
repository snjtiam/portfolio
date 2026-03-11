import type { Metadata } from "next";

import { siteConfig } from "@/content/portfolio";

export const siteUrl = new URL(siteConfig.url.endsWith("/") ? siteConfig.url : `${siteConfig.url}/`);

export function resolveSiteUrl(path = "") {
  return new URL(path.replace(/^\//, ""), siteUrl).toString();
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMetadataInput): Metadata {
  const canonical = resolveSiteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    keywords,
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: resolveSiteUrl("opengraph-image"),
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [resolveSiteUrl("twitter-image")],
    },
  };
}
