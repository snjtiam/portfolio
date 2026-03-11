import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { SiteFrame } from "@/components/layout/site-frame";
import { ContactSection, ProjectsSection } from "@/components/sections";
import { projectsPageContent } from "@/content/pages";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: projectsPageContent.metadataTitle,
  description: projectsPageContent.metadataDescription,
  path: projectsPageContent.href,
  keywords: [
    "React Native case studies",
    "mobile architecture projects",
    "FHIR React Native project",
    "real-time mobile systems",
  ],
});

export default function ProjectsPage() {
  return (
    <SiteFrame>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: projectsPageContent.label },
        ]}
        content={projectsPageContent.intro}
      />
      <ProjectsSection showHeading={false} />
      <ContactSection />
    </SiteFrame>
  );
}
