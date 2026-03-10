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

export type HeroPillar = {
  title: string;
  description: string;
  icon: IconName;
};

export type HighlightItem = {
  title: string;
  detail: string;
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

export type WhyWorkWithMeItem = {
  title: string;
  description: string;
  icon: IconName;
};

export const siteConfig = {
  name: "Aarav Mehta",
  role: "Senior React Native Engineer",
  speciality: "Mobile App Architect",
  location: "Remote-first, based in India",
  availability: "Available for freelance, contract, and select full-time roles",
  email: "hello@aaravmehta.dev",
  linkedinUrl: "https://linkedin.com/in/your-profile",
  phone: "+91 00000 00000",
  url: "https://portfolio.example.com",
  calendlyUrl: "https://cal.com/aaravmehta/intro-call",
  hireUrl: "mailto:hello@aaravmehta.dev?subject=Hiring%20Inquiry",
  description:
    "Senior React Native engineer and mobile app architect building scalable, high-performance mobile products with strong architecture, native integrations, and production-ready delivery.",
  headline: "Senior React Native Engineer and Mobile App Architect for products that need to scale.",
  intro:
    "I build scalable, high-performance mobile products across iOS and Android with clean React Native architecture, reliable native integrations, and production-ready engineering systems.",
  secondaryIntro:
    "Founders, CTOs, agencies, and recruiters bring me in when the app needs senior engineering judgment, strong maintainability, and delivery confidence, not just feature throughput.",
  focusAreas: [
    "Production-first engineering",
    "Scalable mobile architecture",
    "Senior-level product collaboration",
  ],
  heroHighlights: [
    "React Native systems designed for long-term scale, not short-term hacks",
    "Performance and release quality treated as product priorities from day one",
    "Strong fit for founders, CTOs, agencies, and hiring teams evaluating senior mobile depth",
  ],
  footerStatement:
    "Senior React Native engineering for production apps that need architecture, performance, and maintainability.",
} as const;

export const navItems: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Why Me", href: "#why-work-with-me" },
  { label: "Contact", href: "#contact" },
];

export const heroMetrics: Metric[] = [
  { value: "8+", label: "Years in production mobile engineering" },
  { value: "25+", label: "Apps across Android and iOS" },
  { value: "99.8%", label: "Crash-free targets on recent launches" },
];

export const heroSignals = [
  {
    title: "Who I work with",
    items: [
      "Startup founders building or rebuilding mobile products",
      "CTOs and agencies needing senior mobile execution",
      "Recruiters and hiring teams evaluating production depth",
    ],
  },
  {
    title: "What teams value",
    items: [
      "Architecture that stays maintainable after launch",
      "Performance, stability, and release discipline",
      "Calm collaboration and strong engineering ownership",
    ],
  },
] as const;

export const heroPillars: HeroPillar[] = [
  {
    title: "React Native architecture",
    description: "Scalable foundations for navigation, state, modules, and long-term feature velocity.",
    icon: "Layers3",
  },
  {
    title: "Performance engineering",
    description: "Profiling and optimization for launch time, rendering, reliability, and perceived speed.",
    icon: "Zap",
  },
  {
    title: "Native integrations",
    description: "Confident delivery across payments, push, camera, maps, auth, BLE, and custom bridges.",
    icon: "Blocks",
  },
];

export const highlightsStrip: HighlightItem[] = [
  {
    title: "8+ years of experience",
    detail: "Shipping and scaling mobile products in production environments.",
    icon: "Star",
  },
  {
    title: "Android and iOS delivery",
    detail: "Cross-platform execution with native-level product expectations.",
    icon: "Smartphone",
  },
  {
    title: "Multiple industries served",
    detail: "Fintech, health, logistics, SaaS, and consumer mobile products.",
    icon: "Building2",
  },
  {
    title: "Production-focused engineering",
    detail: "Release quality, monitoring, performance, and maintainability built in.",
    icon: "ShieldCheck",
  },
  {
    title: "Scalable architecture mindset",
    detail: "Codebases designed to support teams, features, and long-term iteration.",
    icon: "Layers3",
  },
];

export const aboutStats: Metric[] = [
  { value: "4-10 wks", label: "to launch focused MVPs" },
  { value: "Cross-platform", label: "delivery without duplicated product work" },
  { value: "Zero fluff", label: "decision-making grounded in product outcomes" },
];

export const services: Service[] = [
  {
    title: "React Native app development",
    description:
      "End-to-end development for mobile apps that need clean foundations, polished UX, and production-ready delivery.",
    icon: "Smartphone",
    bullets: [
      "Greenfield app setup for iOS and Android",
      "Feature delivery with strong product and UX judgment",
      "Release-ready implementation from architecture to launch",
    ],
  },
  {
    title: "Mobile architecture and codebase scaling",
    description:
      "Structure React Native codebases so teams can ship faster without compounding technical debt.",
    icon: "Layers3",
    bullets: [
      "Navigation, module, and folder architecture",
      "State boundaries and reusable patterns",
      "Scalable foundations for product growth and hiring",
    ],
  },
  {
    title: "App performance optimization",
    description:
      "Improve startup time, responsiveness, rendering efficiency, and reliability in real production apps.",
    icon: "Zap",
    bullets: [
      "Profiling and bottleneck identification",
      "Rendering, memory, and navigation performance work",
      "Crash reduction and runtime stability improvements",
    ],
  },
  {
    title: "Native module / bridge / TurboModule integrations",
    description:
      "Integrate native capabilities confidently when the product requires deeper platform functionality.",
    icon: "Blocks",
    bullets: [
      "Custom bridges and native SDK integration",
      "Payments, camera, maps, auth, push, and device APIs",
      "New architecture-friendly implementation decisions",
    ],
  },
  {
    title: "App modernization / refactoring",
    description:
      "Clean up aging mobile codebases and reduce delivery friction without stopping feature progress.",
    icon: "Wrench",
    bullets: [
      "Legacy React Native refactors and cleanup",
      "Migration planning with low-risk execution",
      "Improved maintainability for existing product teams",
    ],
  },
  {
    title: "Maintenance and release support",
    description:
      "Keep shipping smoothly with release processes, CI/CD, observability, and post-launch engineering support.",
    icon: "Workflow",
    bullets: [
      "App Store and Play Store release support",
      "CI/CD, OTA, monitoring, and crash workflows",
      "Ongoing engineering support for active products",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Mobile Development",
    icon: "Smartphone",
    description: "Core cross-platform engineering stack for shipping polished mobile experiences.",
    items: [
      "React Native",
      "TypeScript",
      "Expo",
      "JavaScript / ESNext",
      "Android & iOS delivery",
      "Reusable component systems",
    ],
  },
  {
    title: "Architecture & Performance",
    icon: "Layers3",
    description: "Systems and optimization practices built for scale and production reliability.",
    items: [
      "Scalable codebase structure",
      "Performance profiling",
      "Navigation architecture",
      "Memory and rendering optimization",
      "Offline and sync-aware flows",
      "Maintainability planning",
    ],
  },
  {
    title: "State Management & UI",
    icon: "Sparkles",
    description: "State, UI systems, and interaction patterns that remain coherent as products grow.",
    items: [
      "Redux Toolkit",
      "Zustand",
      "React Query / TanStack Query",
      "Form handling",
      "Animations",
      "Design systems",
    ],
  },
  {
    title: "APIs & Integrations",
    icon: "Blocks",
    description: "Third-party services and native capabilities wired into stable mobile experiences.",
    items: [
      "REST and GraphQL APIs",
      "Payments",
      "Push notifications",
      "Authentication",
      "Maps and geolocation",
      "Native SDK integration",
    ],
  },
  {
    title: "Testing & Quality",
    icon: "ShieldCheck",
    description: "Testing, observability, and release discipline for production confidence.",
    items: [
      "Unit testing",
      "Integration testing",
      "E2E strategy",
      "Crash reporting",
      "Monitoring",
      "QA-ready release workflows",
    ],
  },
  {
    title: "CI/CD & Release",
    icon: "Workflow",
    description: "Automated release systems and delivery practices that reduce shipping risk.",
    items: [
      "EAS",
      "Fastlane",
      "GitHub Actions",
      "App Store deployment",
      "Play Store deployment",
      "Release automation",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "PulsePay",
    category: "Fintech wallet rebuild",
    summary:
      "Rebuilt a consumer payments app around cleaner mobile architecture, stronger onboarding flows, and more reliable release operations.",
    impact: "Improved onboarding completion by 28% and increased crash-free sessions to 99.8%.",
    timeline: "12-week engagement",
    stack: ["React Native", "TypeScript", "Expo", "Zustand", "RevenueCat"],
    outcomes: [
      "Refactored navigation and state boundaries for faster iteration",
      "Introduced instrumentation across onboarding and payment funnels",
      "Stabilized edge cases that were causing user and support friction",
    ],
    ctaLabel: "View Details",
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
      "Created reusable mobile UI primitives for rapid rollout",
      "Built release automation for dependable field deployments",
    ],
    ctaLabel: "View Details",
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
    ctaLabel: "View Details",
    ctaHref: "#contact",
  },
  {
    name: "CareLoop",
    category: "Healthcare engagement platform",
    summary:
      "Supported a health product team with a more maintainable React Native foundation for patient communication, reminders, and role-based workflows.",
    impact: "Reduced release regressions and shortened feature QA cycles across the mobile app.",
    timeline: "Long-term modernization engagement",
    stack: ["React Native", "TypeScript", "Redux Toolkit", "Firebase", "Fastlane"],
    outcomes: [
      "Modernized legacy screens and shared state boundaries",
      "Improved reliability around notifications and appointment workflows",
      "Raised code quality and release confidence for the internal team",
    ],
    ctaLabel: "View Details",
    ctaHref: "#contact",
  },
  {
    name: "SwiftFleet",
    category: "Logistics and dispatch tooling",
    summary:
      "Built mobile delivery workflows for dispatch teams that needed real-time task visibility, route updates, and robust device behavior under field conditions.",
    impact: "Helped operations teams move faster with clearer mobile workflows and better release reliability.",
    timeline: "Agency delivery partnership",
    stack: ["React Native", "TypeScript", "React Query", "Maps SDK", "CI/CD"],
    outcomes: [
      "Integrated route, map, and task state into a more stable architecture",
      "Improved performance on data-heavy operational screens",
      "Created reusable patterns for future feature teams",
    ],
    ctaLabel: "View Details",
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

export const whyWorkWithMe: WhyWorkWithMeItem[] = [
  {
    title: "Production-minded from day one",
    description:
      "I optimize for the realities of shipping and maintaining mobile apps, not just delivering isolated screens.",
    icon: "ShieldCheck",
  },
  {
    title: "Architecture that supports growth",
    description:
      "Codebases are structured to handle more features, more engineers, and more releases without slowing down.",
    icon: "Layers3",
  },
  {
    title: "Performance users can feel",
    description:
      "I treat startup time, responsiveness, and reliability as core product quality metrics.",
    icon: "Zap",
  },
  {
    title: "Native depth when required",
    description:
      "When the product needs deeper platform work, I can reason through bridges, SDKs, and integration tradeoffs.",
    icon: "Blocks",
  },
  {
    title: "Easy to work with at senior level",
    description:
      "Clear communication, collaboration with product and design, and calm execution under changing priorities.",
    icon: "Users",
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
    label: "LinkedIn",
    value: "linkedin.com/in/your-profile",
    href: siteConfig.linkedinUrl,
    icon: "Linkedin",
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
    href: siteConfig.linkedinUrl,
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
