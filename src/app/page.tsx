import type { Metadata } from "next";

import { SiteFrame } from "@/components/layout/site-frame";
import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
  HighlightsStripSection,
  ProjectsSection,
  ServicesSection,
  SkillsSection,
  WhyWorkWithMeSection,
} from "@/components/sections";
import { homePageContent } from "@/content/pages";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: homePageContent.metadataTitle,
  description: homePageContent.metadataDescription,
  path: homePageContent.href,
  keywords: [
    "Senior React Native Engineer portfolio",
    "React Native consultant",
    "mobile architecture",
    "native integrations",
    "performance optimization",
  ],
});

export default function HomePage() {
  return (
    <SiteFrame>
        <HeroSection />
        <HighlightsStripSection />
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <WhyWorkWithMeSection />
        <ContactSection />
    </SiteFrame>
  );
}
