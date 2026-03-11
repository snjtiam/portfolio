import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { SiteFrame } from "@/components/layout/site-frame";
import { ContactSection, ServicesSection, WhyWorkWithMeSection } from "@/components/sections";
import { servicesPageContent } from "@/content/pages";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: servicesPageContent.metadataTitle,
  description: servicesPageContent.metadataDescription,
  path: servicesPageContent.href,
  keywords: [
    "React Native consulting services",
    "mobile performance optimization",
    "native module integrations",
    "React Native modernization",
  ],
});

export default function ServicesPage() {
  return (
    <SiteFrame>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: servicesPageContent.label },
        ]}
        content={servicesPageContent.intro}
      />
      <ServicesSection showHeading={false} />
      <WhyWorkWithMeSection />
      <ContactSection />
    </SiteFrame>
  );
}
