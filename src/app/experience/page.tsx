import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { SiteFrame } from "@/components/layout/site-frame";
import { ExperienceSection, HighlightsStripSection } from "@/components/sections";
import { experiencePageContent } from "@/content/pages";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: experiencePageContent.metadataTitle,
  description: experiencePageContent.metadataDescription,
  path: experiencePageContent.href,
  keywords: [
    "Senior React Native Engineer experience",
    "mobile engineering timeline",
    "FHIR mobile experience",
    "TurboModules experience",
  ],
});

export default function ExperiencePage() {
  return (
    <SiteFrame>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: experiencePageContent.label },
        ]}
        content={experiencePageContent.intro}
      />
      <HighlightsStripSection />
      <ExperienceSection showHeading={false} />
    </SiteFrame>
  );
}
