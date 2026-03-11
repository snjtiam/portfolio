import type { CtaLink } from "@/content/portfolio";

export type PrimaryNavItem = {
  label: string;
  href: string;
  matchPrefixes?: string[];
};

export type SectionNavItem = {
  label: string;
  href: `#${string}`;
};

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type PageIntroContent = {
  eyebrow: string;
  title: string;
  description: string;
  supportingText?: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
};

export type SitePageContent = {
  label: string;
  href: string;
  metadataTitle: string;
  metadataDescription: string;
  intro: PageIntroContent;
};

export const primaryNavItems: PrimaryNavItem[] = [
  { label: "Home", href: "/", matchPrefixes: ["/"] },
  { label: "Projects", href: "/projects", matchPrefixes: ["/projects"] },
  { label: "Experience", href: "/experience", matchPrefixes: ["/experience"] },
  { label: "Services", href: "/services", matchPrefixes: ["/services"] },
  { label: "About", href: "/about", matchPrefixes: ["/about"] },
  { label: "Contact", href: "/contact", matchPrefixes: ["/contact"] },
];

export const homeSectionNavItems: SectionNavItem[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const homePageContent: SitePageContent = {
  label: "Home",
  href: "/",
  metadataTitle: "Senior React Native Engineer for scalable mobile products",
  metadataDescription:
    "Premium React Native portfolio for startups, product teams, and recruiters looking for architecture ownership, native integrations, performance optimization, and production-ready delivery.",
  intro: {
    eyebrow: "Home",
    title: "Senior React Native engineering for products that need to scale cleanly.",
    description:
      "A conversion-focused overview of how I help teams ship stronger mobile products across architecture, performance, native integrations, and production delivery.",
  },
};

export const aboutPageContent: SitePageContent = {
  label: "About",
  href: "/about",
  metadataTitle: "About | Senior React Native Engineer",
  metadataDescription:
    "Learn about my background building scalable React Native systems across healthcare, IoT, fintech, video streaming, and production mobile delivery.",
  intro: {
    eyebrow: "About",
    title: "A mobile engineering profile built around architecture, delivery, and product pressure.",
    description:
      "I work best with teams that need a senior React Native engineer who can move between product thinking, code quality, platform depth, and production execution without losing momentum.",
    supportingText:
      "This page goes deeper on the way I work, the technical areas I lead, and the kind of products I help ship.",
  },
};

export const servicesPageContent: SitePageContent = {
  label: "Services",
  href: "/services",
  metadataTitle: "Services | React Native architecture, performance, and delivery",
  metadataDescription:
    "Explore React Native consulting and engineering services covering app development, scalable architecture, performance optimization, native integrations, modernization, and release support.",
  intro: {
    eyebrow: "Services",
    title: "Senior mobile engineering support for teams building beyond the MVP stage.",
    description:
      "For founders, CTOs, agencies, and hiring teams that need hands-on React Native depth with clearer architecture, cleaner delivery, and fewer production issues.",
    supportingText:
      "The focus is practical: building better systems, reducing technical drag, and shipping with more confidence.",
  },
};

export const projectsPageContent: SitePageContent = {
  label: "Projects",
  href: "/projects",
  metadataTitle: "Projects | React Native case studies and mobile systems",
  metadataDescription:
    "Selected React Native case studies covering internal SDKs, remote configuration, healthcare FHIR workflows, custom visualization, scheduling engines, and real-time mobile systems.",
  intro: {
    eyebrow: "Projects",
    title: "Case studies that show mobile architecture depth, not just polished screens.",
    description:
      "These are confidentiality-safe examples of the systems I have designed and shipped across platform engineering, healthcare, real-time mobile, and production-scale React Native work.",
    supportingText:
      "Each project is structured to be detail-page ready, so the same content can support deeper case studies, modals, or future CMS migration.",
  },
};

export const experiencePageContent: SitePageContent = {
  label: "Experience",
  href: "/experience",
  metadataTitle: "Experience | Senior React Native Engineer timeline",
  metadataDescription:
    "Experience timeline covering six years of React Native delivery across architecture ownership, FHIR interoperability, native integrations, performance work, and production mobile systems.",
  intro: {
    eyebrow: "Experience",
    title: "An experience timeline shaped by architecture ownership and production delivery.",
    description:
      "A closer look at the roles, responsibilities, and technical scope behind six years of React Native work across healthcare, real-time mobile, integrations, and release-critical delivery.",
    supportingText:
      "The progression is consistent: more architecture, more product complexity, and more responsibility for keeping mobile systems reliable.",
  },
};

export const contactPageContent: SitePageContent = {
  label: "Contact",
  href: "/contact",
  metadataTitle: "Contact | Freelance, contract, and full-time React Native opportunities",
  metadataDescription:
    "Get in touch for freelance, contract, and select full-time React Native opportunities covering architecture, performance, native integrations, and production delivery.",
  intro: {
    eyebrow: "Contact",
    title: "Get in touch if you need senior React Native engineering with real delivery ownership.",
    description:
      "I work with product teams, startups, agencies, and recruiters that need someone who can lead architecture, implementation, and production readiness in the same engagement.",
    supportingText:
      "The process is simple, direct, and focused on reducing technical uncertainty early.",
  },
};

export const projectDetailCta: CtaLink = {
  label: "Start a conversation",
  href: "/contact",
};

export const pageContentByPath = {
  "/": homePageContent,
  "/about": aboutPageContent,
  "/services": servicesPageContent,
  "/projects": projectsPageContent,
  "/experience": experiencePageContent,
  "/contact": contactPageContent,
} as const;
