import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { SiteFrame } from "@/components/layout/site-frame";
import {
  AboutSection,
  HighlightsStripSection,
  SkillsSection,
  WhyWorkWithMeSection,
} from "@/components/sections";
import { aboutPageContent } from "@/content/pages";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: aboutPageContent.metadataTitle,
  description: aboutPageContent.metadataDescription,
  path: aboutPageContent.href,
  keywords: [
    "React Native engineer background",
    "mobile architecture experience",
    "cross-platform engineering",
    "React Native healthcare IoT fintech",
  ],
});

export default function AboutPage() {
  return (
    <SiteFrame>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: aboutPageContent.label },
        ]}
        content={aboutPageContent.intro}
      />
      <HighlightsStripSection />
      <AboutSection showHeading={false} />
      <SkillsSection />
      <WhyWorkWithMeSection />
    </SiteFrame>
  );
}
