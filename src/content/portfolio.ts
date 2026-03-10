import type { IconName } from "@/lib/icon-map";

export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type Metric = {
  value: string;
  label: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: IconName;
};

export type Service = {
  title: string;
  description: string;
  icon: IconName;
  bullets: string[];
};

export type SkillGroup = {
  title: string;
  icon: IconName;
  description: string;
  items: string[];
};

export type Project = {
  name: string;
  category: string;
  summary: string;
  impact: string;
  timeline: string;
  stack: string[];
  outcomes: string[];
  ctaLabel: string;
  ctaHref: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
};

export type TestimonialPlaceholder = {
  title: string;
  prompt: string;
  role: string;
};

export type ContactMethod = {
  label: string;
  value: string;
  href: string;
  icon: IconName;
};

export const siteConfig = {
  name: "Aarav Mehta",
  role: "Senior React Native Engineer",
  location: "Remote-first, based in India",
  availability: "Available for freelance, contract, and select full-time roles",
  email: "hello@aaravmehta.dev",
  phone: "+91 00000 00000",
  url: "https://portfolio.example.com",
  calendlyUrl: "https://cal.com/aaravmehta/intro-call",
  hireUrl: "mailto:hello@aaravmehta.dev?subject=Hiring%20Inquiry",
  description:
    "Senior React Native engineer crafting premium mobile products for founders, startups, and teams that need strong architecture, fast execution, and polished user experience.",
  headline: "Mobile products that feel premium, ship faster, and scale cleanly.",
  intro:
    "I partner with founders and product teams to design architecture, build polished React Native apps, and unblock launches without sacrificing quality.",
  secondaryIntro:
    "From greenfield MVPs to complex production refactors, I focus on performance, native-feeling UX, and delivery systems that keep teams moving.",
  focusAreas: [
    "Fractional mobile leadership",
    "End-to-end React Native delivery",
    "Product-minded execution for startups",
  ],
  heroHighlights: [
    "React Native + TypeScript with native-level product thinking",
    "Strong fit for MVP launches, rebuilds, scale-up refactors, and rescue work",
    "Hands-on across architecture, CI/CD, app performance, and release workflows",
  ],
} as const;

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const heroMetrics: Metric[] = [
  { value: "8+", label: "Years building mobile products" },
  { value: "20+", label: "Apps shipped or scaled" },
  { value: "99.8%", label: "Crash-free targets on recent launches" },
];

export const heroSignals = [
  {
    title: "Typical engagements",
    items: [
      "Freelance builds for startup founders",
      "Contract execution for product teams",
      "Senior-level ownership for mobile roadmaps",
    ],
  },
  {
    title: "What clients value",
    items: [
      "Clear communication and fast iteration",
      "Architecture that remains maintainable after launch",
      "Thoughtful UX polish without bloated scope",
    ],
  },
] as const;

export const aboutStats: Metric[] = [
  { value: "4-10 wks", label: "to launch focused MVPs" },
  { value: "Cross-platform", label: "delivery without duplicated product work" },
  { value: "Zero fluff", label: "decision-making grounded in product outcomes" },
];

export const services: Service[] = [
  {
    title: "React Native App Delivery",
    description:
      "Build new mobile products with a senior engineer who can own architecture, delivery pace, and product polish from kickoff to release.",
    icon: "Smartphone",
    bullets: [
      "Greenfield app setup and scalable codebase structure",
      "App Store and Play Store release readiness",
      "Performance-minded feature delivery with strong UX detail",
    ],
  },
  {
    title: "Mobile Product Rescue",
    description:
      "Stabilize lagging apps, refactor fragile code, and create a cleaner path to shipping when delivery has slowed down.",
    icon: "Wrench",
    bullets: [
      "Crash reduction and reliability improvements",
      "Navigation, state, and API layer refactors",
      "Build pipeline, OTA, and release workflow cleanup",
    ],
  },
  {
    title: "Fractional Mobile Leadership",
    description:
      "Support founders and lean teams with technical direction, execution planning, and senior judgment without hiring a full mobile department.",
    icon: "Users",
    bullets: [
      "Architecture reviews and delivery planning",
      "Technical scoping for investor or client commitments",
      "Mentoring internal engineers and raising quality bars",
    ],
  },
  {
    title: "Scale and Growth Optimization",
    description:
      "Improve conversion, retention, and app quality by tightening the mobile experience where product metrics are won or lost.",
    icon: "Rocket",
    bullets: [
      "Funnel and onboarding optimization",
      "Performance audits on real devices",
      "Experiment-friendly analytics and release cadence",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Mobile Engineering",
    icon: "Code2",
    description: "Core mobile delivery stack for polished cross-platform products.",
    items: [
      "React Native",
      "TypeScript",
      "Expo",
      "Native Modules",
      "Performance Profiling",
      "Animations",
    ],
  },
  {
    title: "Architecture",
    icon: "Layers3",
    description: "Systems that stay clean under feature growth and team scale.",
    items: [
      "State Modeling",
      "Offline-first UX",
      "API Layer Design",
      "Monorepos",
      "Testing Strategy",
      "Design Systems",
    ],
  },
  {
    title: "Delivery Systems",
    icon: "Workflow",
    description: "Operational practices that make release cycles predictable.",
    items: [
      "CI/CD",
      "EAS / Fastlane",
      "Crash Reporting",
      "Feature Flags",
      "Analytics",
      "App Store Ops",
    ],
  },
  {
    title: "Product Collaboration",
    icon: "BriefcaseBusiness",
    description: "Hands-on support for founders, PMs, and design-driven teams.",
    items: [
      "Scoping",
      "Discovery",
      "Technical Roadmaps",
      "Stakeholder Communication",
      "Hiring Support",
      "Code Reviews",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "PulsePay",
    category: "Fintech wallet rebuild",
    summary:
      "Rebuilt a high-friction consumer wallet with a cleaner architecture, native-feeling onboarding, and a release process the product team could trust.",
    impact: "Lifted completed onboarding by 28% and improved crash-free sessions to 99.8%.",
    timeline: "12-week engagement",
    stack: ["React Native", "TypeScript", "Expo", "Zustand", "RevenueCat"],
    outcomes: [
      "Refactored navigation and state for faster feature iteration",
      "Introduced instrumentation for onboarding and payment flows",
      "Reduced support churn caused by inconsistent edge-case handling",
    ],
    ctaLabel: "Request case study",
    ctaHref: "#contact",
  },
  {
    name: "FieldOps Pro",
    category: "Operations platform for field teams",
    summary:
      "Delivered an offline-capable mobile workflow for technicians who needed dependable data capture in low-connectivity environments.",
    impact: "Cut on-site reporting time from 18 minutes to 6 minutes per job.",
    timeline: "Contract build with startup team",
    stack: ["React Native", "React Query", "SQLite", "TypeScript", "Fastlane"],
    outcomes: [
      "Designed sync-safe flows for queued tasks and attachments",
      "Created reusable UI primitives for rapid feature rollout",
      "Built release automation to support frequent client deployments",
    ],
    ctaLabel: "View delivery approach",
    ctaHref: "#contact",
  },
  {
    name: "FounderFit",
    category: "Subscription wellness product",
    summary:
      "Partnered with a founder to shape the MVP, launch paid subscriptions, and ship a premium app feel without a large engineering team.",
    impact: "Launched in 10 weeks and reached a 4.8 store rating in the first quarter.",
    timeline: "0 to launch build",
    stack: ["React Native", "Expo Router", "TypeScript", "Firebase", "Stripe"],
    outcomes: [
      "Translated product goals into an efficient milestone plan",
      "Balanced speed with reusable architecture for post-launch growth",
      "Refined interactions and visual details to support premium positioning",
    ],
    ctaLabel: "Talk through a similar build",
    ctaHref: "#contact",
  },
];

export const experience: ExperienceItem[] = [
  {
    company: "Independent Consultant",
    role: "Senior React Native Engineer",
    period: "2022 - Present",
    location: "Remote",
    highlights: [
      "Partner with founders and product teams on delivery-critical mobile initiatives.",
      "Lead architecture decisions, execution planning, and release quality for shipped apps.",
      "Support both short rescue engagements and longer contract builds.",
    ],
  },
  {
    company: "Northstar Labs",
    role: "Lead Mobile Engineer",
    period: "2019 - 2022",
    location: "Hybrid",
    highlights: [
      "Owned the React Native platform for multiple client apps across fintech and health.",
      "Introduced reusable foundations that reduced duplicated implementation work.",
      "Mentored engineers and improved CI/CD reliability across mobile releases.",
    ],
  },
  {
    company: "Studio Pixel",
    role: "React Native Engineer",
    period: "2016 - 2019",
    location: "On-site",
    highlights: [
      "Built production features across early-stage apps with a strong UX emphasis.",
      "Worked closely with design and backend teams to shorten feature turnaround.",
      "Developed the product intuition that later shaped consulting engagements.",
    ],
  },
];

export const testimonialPlaceholders: TestimonialPlaceholder[] = [
  {
    title: "Founder testimonial",
    prompt:
      "Add a quote about speed, decision-making, and how the mobile roadmap became clearer.",
    role: "Early-stage founder",
  },
  {
    title: "Client testimonial",
    prompt:
      "Add a quote about ownership, communication quality, and shipping without hand-holding.",
    role: "Freelance or contract client",
  },
  {
    title: "Manager testimonial",
    prompt:
      "Add a quote about seniority, cross-functional collaboration, and raising delivery standards.",
    role: "Hiring manager or engineering lead",
  },
];

export const contactMethods: ContactMethod[] = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: "Mail",
  },
  {
    label: "Book a call",
    value: "Schedule a 30-minute intro",
    href: siteConfig.calendlyUrl,
    icon: "CalendarDays",
  },
  {
    label: "Response time",
    value: "Usually within 24 hours",
    href: "#contact",
    icon: "Clock3",
  },
  {
    label: "Location",
    value: siteConfig.location,
    href: "#contact",
    icon: "MapPin",
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/your-profile",
    icon: "Linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/your-handle",
    icon: "Github",
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: "Mail",
  },
];

export const processSteps = [
  "Discovery call to align on product goals, scope, and current blockers",
  "Delivery plan with priorities, milestones, and the right engagement model",
  "Hands-on execution with regular updates, demos, and release-focused momentum",
];
