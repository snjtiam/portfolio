import type { MetadataRoute } from "next";

import { pageContentByPath } from "@/content/pages";
import { projectsContent } from "@/content/portfolio";
import { resolveSiteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages = Object.values(pageContentByPath).map((page) => ({
    url: resolveSiteUrl(page.href),
    lastModified,
    changeFrequency: page.href === "/" ? "weekly" : "monthly",
    priority: page.href === "/" ? 1 : 0.8,
  })) satisfies MetadataRoute.Sitemap;

  const projectPages = projectsContent.items.map((project) => ({
    url: resolveSiteUrl(`/projects/${project.slug}`),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticPages, ...projectPages];
}
