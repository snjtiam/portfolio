import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectDetail } from "@/components/projects/project-detail";
import { PageHero } from "@/components/layout/page-hero";
import { SiteFrame } from "@/components/layout/site-frame";
import { ContactSection } from "@/components/sections";
import { getProjectBySlug, projectsContent } from "@/content/portfolio";
import { buildPageMetadata } from "@/lib/seo";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projectsContent.items.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return buildPageMetadata({
      title: "Project not found",
      description: "The requested project could not be found.",
      path: `/projects/${slug}`,
    });
  }

  return buildPageMetadata({
    title: `${project.name} | React Native case study`,
    description: project.summary,
    path: `/projects/${project.slug}`,
    keywords: [
      project.name,
      project.category,
      "React Native case study",
      ...project.stack.slice(0, 4),
    ],
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <SiteFrame>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.name },
        ]}
        content={{
          eyebrow: project.category,
          title: project.name,
          description: project.summary,
          supportingText: project.positioning,
        }}
      />
      <ProjectDetail project={project} />
      <ContactSection />
    </SiteFrame>
  );
}
