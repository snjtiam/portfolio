import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { SiteFrame } from "@/components/layout/site-frame";
import { ContactSection } from "@/components/sections";
import { contactPageContent } from "@/content/pages";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: contactPageContent.metadataTitle,
  description: contactPageContent.metadataDescription,
  path: contactPageContent.href,
  keywords: [
    "React Native contact",
    "freelance React Native engineer",
    "contract mobile engineer",
    "React Native recruiter contact",
  ],
});

export default function ContactPage() {
  return (
    <SiteFrame>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: contactPageContent.label },
        ]}
        content={contactPageContent.intro}
      />
      <ContactSection showHeading={false} />
    </SiteFrame>
  );
}
