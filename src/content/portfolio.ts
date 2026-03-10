import type { IconName } from "@/lib/icon-map";

export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type Metric = {
  value: string;
  label: string;
};

export type CtaLink = {
  label: string;
  href: string;
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

export type HeroSignal = {
  title: string;
  items: string[];
};

export type HighlightItem = {
  title: string;
  detail: string;
  icon: IconName;
};

export type SectionIntro = {
  eyebrow: string;
  title: string;
  description: string;
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

export type HeroContent = {
  badge: string;
  contextLabel: string;
  roleLine: string;
  headline: string;
  intro: string;
  secondaryIntro: string;
  highlights: string[];
  metrics: Metric[];
  signals: HeroSignal[];
  pillars: HeroPillar[];
  panelBadge: string;
  panelTitle: string;
  panelDescription: string;
  floatingLabels: string[];
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
};

export type AboutContent = SectionIntro & {
  paragraphs: string[];
  focusAreas: string[];
  stats: Metric[];
};

export type ServicesContent = SectionIntro & {
  items: Service[];
};

export type SkillsContent = SectionIntro & {
  groups: SkillGroup[];
};

export type ProjectsContent = SectionIntro & {
  items: Project[];
};

export type ExperienceContent = SectionIntro & {
  items: ExperienceItem[];
};

export type WhyWorkWithMeContent = SectionIntro & {
  items: WhyWorkWithMeItem[];
};

export type ContactContent = SectionIntro & {
  availabilityBadge: string;
  cardTitle: string;
  cardDescription: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  methodsTitle: string;
  methodsDescription: string;
  processTitle: string;
  processDescription: string;
  processSteps: string[];
};

export const siteConfig = {
  name: "Sanjit Soreng",
  initials: "SS",
  role: "Senior React Native Engineer",
  speciality: "Architecture, Native Integrations, and Delivery Systems",
  location: "Remote, India",
  availability: "Available for freelance, contract, and select full-time roles",
  email: "iamsnjt@gmail.com",
  githubUrl: "https://github.com/snjtiam",
  url: "https://snjtiam.github.io/portfolio",
  hireUrl: "mailto:iamsnjt@gmail.com?subject=React%20Native%20Inquiry",
  description:
    "Senior React Native engineer with 6 years of experience building scalable, high-performance mobile products for iOS and Android across healthcare, IoT, video, fintech, and workflow software.",
  footerHeading:
    "Architecture-led React Native engineering for products that need to scale cleanly.",
  footerStatement:
    "I help teams ship maintainable mobile apps with stronger architecture, native integrations, performance work, and dependable release systems.",
  mobileNavEyebrow: "Senior mobile engineering partner",
  mobileNavDescription:
    "React Native architecture, native integrations, and release discipline for teams that need steady senior ownership.",
} as const;

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Why Me", href: "#why-work-with-me" },
  { label: "Contact", href: "#contact" },
];

export const heroContent: HeroContent = {
  badge: siteConfig.availability,
  contextLabel: "React Native Architecture",
  roleLine: `${siteConfig.role} / ${siteConfig.speciality}`,
  headline: "Senior React Native engineering for mobile products that need to scale cleanly.",
  intro:
    "I build and improve React Native apps for iOS and Android with strong architecture, native integrations, and delivery systems teams can rely on in production.",
  secondaryIntro:
    "My work spans healthcare, IoT, video streaming, fintech, and task management products, including apps used by 50,000+ people and performance improvements of around 20% on key flows.",
  highlights: [
    "6 years shipping cross-platform apps in production",
    "Trusted with architecture ownership, native integrations, and release-critical work",
    "Reusable SDKs, offline modules, and mobile systems designed for long-term maintainability",
  ],
  metrics: [
    { value: "6+", label: "Years building React Native apps in production" },
    { value: "50,000+", label: "Users served across shipped mobile products" },
    { value: "~20%", label: "Performance improvement on key mobile flows" },
  ],
  signals: [
    {
      title: "Where I add leverage",
      items: [
        "Architecture decisions that keep codebases maintainable as teams and features grow",
        "Native integrations, TurboModules, JSI, and bridge work when the product needs platform depth",
        "Performance, offline behavior, and release quality treated as part of delivery, not cleanup",
      ],
    },
    {
      title: "How I work",
      items: [
        "Hands-on with product, design, QA, and backend teams from planning through release",
        "Clear communication around tradeoffs, technical risk, and delivery priorities",
        "Mentorship and reusable engineering patterns that help the rest of the team move faster",
      ],
    },
  ],
  pillars: [
    {
      title: "Scalable mobile architecture",
      description:
        "Clear module boundaries, predictable state, and foundations that stay workable as product scope expands.",
      icon: "Layers3",
    },
    {
      title: "Native depth when the app needs it",
      description:
        "TurboModules, JSI, bridging, and SDK integrations handled with pragmatic platform-level decision making.",
      icon: "Blocks",
    },
    {
      title: "Performance and release reliability",
      description:
        "Profiling, optimization, CI/CD, and production release discipline built into the way the app ships.",
      icon: "Zap",
    },
  ],
  panelBadge: "Architecture-led delivery",
  panelTitle:
    "Senior mobile execution for products where reliability and maintainability matter as much as feature speed.",
  panelDescription:
    "I help teams ship cleanly across iOS and Android, whether that means stabilizing an existing codebase, building new capabilities, or creating the internal systems that keep releases predictable.",
  floatingLabels: ["TurboModules / JSI", "CI/CD & releases"],
  primaryCta: {
    label: "Start a conversation",
    href: siteConfig.hireUrl,
  },
  secondaryCta: {
    label: "See selected work",
    href: "#projects",
  },
};

export const highlightsStrip: HighlightItem[] = [
  {
    title: "50,000+ users served",
    detail: "Production mobile work supporting real usage at scale across iOS and Android.",
    icon: "Users",
  },
  {
    title: "~20% performance gains",
    detail: "Measured improvements on bottlenecked flows through profiling and targeted optimization.",
    icon: "Zap",
  },
  {
    title: "Healthcare to fintech",
    detail: "Experience across healthcare, IoT, video streaming, fintech, and task management.",
    icon: "Building2",
  },
  {
    title: "Reusable internal systems",
    detail: "SDKs, remote configuration, offline-capable modules, and scheduling engines.",
    icon: "Code2",
  },
  {
    title: "Release-ready delivery",
    detail: "CI/CD, Fastlane, observability, and production releases treated as first-class work.",
    icon: "ShieldCheck",
  },
];

export const aboutContent: AboutContent = {
  eyebrow: "About",
  title: "I build mobile systems that hold up under real product pressure.",
  description:
    "Hands-on React Native engineering for teams that need architecture ownership, reliable delivery, and a codebase that can keep growing.",
  paragraphs: [
    "For the last 6 years, I have built React Native apps across healthcare, IoT, video streaming, fintech, and task management. My role typically sits at the intersection of architecture, implementation, and delivery: shaping patterns, building the hard parts, and keeping releases dependable.",
    "That work has included reusable internal SDKs, remote configuration systems, offline-capable modules, scheduling and reminder flows, survey engines, healthcare data transformation pipelines, and time zone aware visualizations. I am comfortable moving from product discussions to native integrations to release automation without leaving a brittle codebase behind.",
  ],
  focusAreas: [
    "Architecture ownership",
    "Performance optimization",
    "Native integrations",
    "Cross-functional delivery",
    "Mentoring engineers",
  ],
  stats: [
    { value: "50,000+", label: "users reached across shipped mobile products" },
    { value: "~20%", label: "performance improvement delivered on critical flows" },
    { value: "iOS + Android", label: "production ownership from implementation through release" },
  ],
};

export const servicesContent: ServicesContent = {
  eyebrow: "Services",
  title: "Support shaped around the parts of mobile work that are hard to fake.",
  description:
    "I can join as a hands-on senior engineer, architecture lead, or delivery partner depending on where the product is stuck.",
  items: [
    {
      title: "End-to-end React Native delivery",
      description:
        "Build or extend mobile products with clear foundations, polished UX execution, and production-ready delivery across Android and iOS.",
      icon: "Smartphone",
      bullets: [
        "Greenfield app setup or senior support on an active codebase",
        "Feature delivery that balances product speed with long-term maintainability",
        "Hands-on ownership from implementation to store release",
      ],
    },
    {
      title: "Architecture and codebase scaling",
      description:
        "Structure React Native applications so teams can keep shipping without compounding avoidable technical debt.",
      icon: "Layers3",
      bullets: [
        "Module boundaries, navigation structure, and state ownership",
        "Reusable patterns that support larger teams and larger products",
        "Refactors that improve clarity without stalling delivery",
      ],
    },
    {
      title: "Performance and reliability optimization",
      description:
        "Improve startup time, rendering, responsiveness, and runtime stability where users actually feel the difference.",
      icon: "Zap",
      bullets: [
        "Profiling to isolate bottlenecks before making changes",
        "UI, memory, and data-flow optimizations on critical screens",
        "Crash reduction and stronger release confidence in production",
      ],
    },
    {
      title: "Native integrations, TurboModules, and bridges",
      description:
        "Handle the React Native to native boundary confidently when product requirements go beyond standard libraries.",
      icon: "Blocks",
      bullets: [
        "Custom bridges, TurboModules, JSI, and native SDK integration",
        "Device capabilities, auth, notifications, media, and domain-specific SDKs",
        "Implementation decisions aligned with long-term maintainability",
      ],
    },
    {
      title: "Offline, realtime, and workflow systems",
      description:
        "Build the operational layers that make mobile apps useful in imperfect network conditions and complex workflows.",
      icon: "Workflow",
      bullets: [
        "Offline-capable modules, sync recovery, and queue-safe actions",
        "Scheduling, reminders, surveys, and time zone aware experiences",
        "Realtime updates with REST, GraphQL, or WebSocket-backed systems",
      ],
    },
    {
      title: "Release engineering and modernization",
      description:
        "Stabilize older apps and reduce release friction with better pipelines, observability, and delivery practices.",
      icon: "Wrench",
      bullets: [
        "Fastlane, CI/CD, and repeatable release workflows",
        "Modernization plans for aging React Native stacks",
        "Safer production rollout processes for active mobile products",
      ],
    },
  ],
};

export const skillsContent: SkillsContent = {
  eyebrow: "Skills",
  title: "Technical depth grouped by capability, not dumped as a stack list.",
  description:
    "The focus is on the areas that matter in real mobile delivery: architecture, integrations, performance, data, and release quality.",
  groups: [
    {
      title: "Core Mobile Stack",
      icon: "Smartphone",
      description: "The foundation used to build and ship polished cross-platform mobile products.",
      items: [
        "React Native",
        "TypeScript",
        "Android & iOS delivery",
        "React 19 patterns",
        "Reusable component systems",
        "Production release workflows",
      ],
    },
    {
      title: "Architecture & State",
      icon: "Layers3",
      description: "Patterns for keeping codebases understandable and scalable under growing product complexity.",
      items: [
        "Feature-based architecture",
        "Redux Toolkit",
        "Zustand",
        "Modular app boundaries",
        "Remote configuration systems",
        "Internal SDK design",
      ],
    },
    {
      title: "Native & Performance",
      icon: "Blocks",
      description: "Work at the platform boundary and on the bottlenecks users notice first.",
      items: [
        "TurboModules",
        "JSI",
        "Native bridging",
        "Performance profiling",
        "Reanimated",
        "Memory and render optimization",
      ],
    },
    {
      title: "Data & Integrations",
      icon: "Globe2",
      description: "Stable client-side integrations for mobile products with complex backend behavior.",
      items: [
        "REST APIs",
        "GraphQL",
        "WebSockets",
        "FHIR",
        "Firebase",
        "Supabase",
      ],
    },
    {
      title: "Product Systems",
      icon: "Sparkles",
      description: "Higher-level mobile capabilities that support real product workflows, not just isolated screens.",
      items: [
        "Offline-first modules",
        "Scheduling and reminders",
        "Survey engines",
        "Time zone aware visualizations",
        "Role-based flows",
        "Cross-functional product delivery",
      ],
    },
    {
      title: "Delivery & Quality",
      icon: "ShieldCheck",
      description: "The release and collaboration practices that keep shipped apps reliable over time.",
      items: [
        "CI/CD",
        "Fastlane",
        "Crash monitoring",
        "Release coordination",
        "QA collaboration",
        "Mentoring junior engineers",
      ],
    },
  ],
};

export const projectsContent: ProjectsContent = {
  eyebrow: "Representative Projects",
  title: "Case-study style examples of the product and platform work I usually own.",
  description:
    "These summaries reflect the kinds of systems I have built across healthcare, IoT, streaming, fintech, and task-focused products.",
  items: [
    {
      name: "CarePath Mobile",
      category: "Healthcare / patient engagement",
      summary:
        "Led React Native architecture for a care coordination app with reminders, surveys, care plans, and FHIR-backed data flows.",
      impact:
        "Supported a growing patient user base with stronger release reliability and faster performance on key workflows.",
      timeline: "Architecture + long-term feature delivery",
      stack: ["React Native", "TypeScript", "Redux Toolkit", "FHIR", "Firebase", "Fastlane"],
      outcomes: [
        "Built transformation layers that turned complex FHIR resources into UI-safe mobile models",
        "Shipped scheduling, reminders, and survey flows with offline-aware behavior",
        "Introduced reusable patterns and release automation that reduced regression risk",
      ],
      ctaLabel: "Discuss similar work",
      ctaHref: "#contact",
    },
    {
      name: "DeviceOps Companion",
      category: "IoT / connected device operations",
      summary:
        "Delivered a companion app for connected devices with pairing flows, live status, remote configuration, and regional usage views.",
      impact:
        "Reduced setup friction and improved operational visibility for teams managing devices across multiple time zones.",
      timeline: "Product build + platform integration",
      stack: [
        "React Native",
        "TypeScript",
        "Zustand",
        "Native Modules",
        "Device SDKs",
        "REST APIs",
      ],
      outcomes: [
        "Handled native integrations and bridge work for device setup and live telemetry",
        "Built retry-safe sync flows for intermittent connectivity and field usage",
        "Added time zone aware visualizations and configuration controls for multi-region deployments",
      ],
      ctaLabel: "Discuss similar work",
      ctaHref: "#contact",
    },
    {
      name: "StreamRoom Mobile",
      category: "Video streaming / realtime engagement",
      summary:
        "Built mobile experiences around live sessions, chat, and subscription features where perceived performance and responsiveness mattered.",
      impact:
        "Improved session stability and mobile responsiveness for a realtime product used by a broad consumer audience.",
      timeline: "Realtime feature expansion",
      stack: ["React Native", "TypeScript", "GraphQL", "WebSockets", "Reanimated", "Firebase"],
      outcomes: [
        "Optimized rendering on feed, chat, and session surfaces to improve responsiveness",
        "Delivered realtime presence and messaging with graceful reconnection behavior",
        "Created reusable UI and state patterns for faster rollout of new engagement features",
      ],
      ctaLabel: "Discuss similar work",
      ctaHref: "#contact",
    },
    {
      name: "LedgerFlow",
      category: "Fintech / transaction-heavy mobile product",
      summary:
        "Modernized a fintech app with stronger state boundaries, safer releases, and better handling of complex financial workflows.",
      impact:
        "Raised delivery confidence on critical flows and reduced friction on transaction-heavy mobile screens.",
      timeline: "Modernization and reliability work",
      stack: ["React Native", "TypeScript", "Redux Toolkit", "GraphQL", "Supabase", "CI/CD"],
      outcomes: [
        "Refined state management and error handling around sensitive financial interactions",
        "Introduced rollout controls and observability for safer production releases",
        "Lowered maintenance overhead with shared modules and clearer architecture rules",
      ],
      ctaLabel: "Discuss similar work",
      ctaHref: "#contact",
    },
    {
      name: "TaskPilot",
      category: "Task management / workflow execution",
      summary:
        "Built scheduling, reminders, and field-task workflows for teams that needed dependable mobile behavior in daily operations.",
      impact:
        "Improved completion visibility and reduced missed follow-ups with stronger mobile workflow design.",
      timeline: "Operational workflow delivery",
      stack: ["React Native", "TypeScript", "Zustand", "Supabase", "WebSockets", "Fastlane"],
      outcomes: [
        "Implemented scheduling and reminder systems with time zone aware behavior",
        "Delivered offline-capable task capture with sync recovery for unstable networks",
        "Collaborated closely with product, design, and QA to keep delivery predictable",
      ],
      ctaLabel: "Discuss similar work",
      ctaHref: "#contact",
    },
  ],
};

export const experienceContent: ExperienceContent = {
  eyebrow: "Experience",
  title: "Six years of React Native work across product teams, consulting, and delivery ownership.",
  description:
    "A concise career snapshot focused on the kind of responsibility I have taken on, rather than a resume-style employer list.",
  items: [
    {
      company: "Independent Consulting & Contract Work",
      role: "Senior React Native Engineer",
      period: "2023 - Present",
      location: "Remote",
      highlights: [
        "Partner with founders, agencies, and hiring teams on delivery-critical React Native work across healthcare, fintech, IoT, and workflow products.",
        "Own architecture decisions, native integrations, performance work, and release readiness from planning through production.",
        "Build reusable foundations, mentor engineers, and reduce the long-term cost of mobile delivery.",
      ],
    },
    {
      company: "Product Engineering Roles",
      role: "React Native Engineer",
      period: "2021 - 2023",
      location: "Remote / Hybrid",
      highlights: [
        "Shipped cross-platform features for consumer and B2B mobile products serving tens of thousands of users.",
        "Built modules for offline behavior, realtime updates, scheduling, reminders, and data-heavy interfaces.",
        "Worked closely with product, design, QA, and backend teams to translate requirements into reliable mobile systems.",
      ],
    },
    {
      company: "Mobile Engineering Foundations",
      role: "Software Engineer",
      period: "2020 - 2021",
      location: "On-site / Hybrid",
      highlights: [
        "Built early React Native features and contributed to store releases for both Android and iOS.",
        "Improved code quality and team velocity through reusable components, stronger state management, and clearer engineering practices.",
        "Developed the product and maintainability judgment that now shapes senior-level execution.",
      ],
    },
  ],
};

export const whyWorkWithMeContent: WhyWorkWithMeContent = {
  eyebrow: "Why Work With Me",
  title: "Senior engineering value without the drama or the hand-holding requirement.",
  description:
    "I focus on making mobile products easier to ship, easier to scale, and easier for the rest of the team to work in.",
  items: [
    {
      title: "Architecture ownership, not just implementation",
      description:
        "I think through app structure, state boundaries, integrations, and release implications instead of treating work as isolated tickets.",
      icon: "Layers3",
    },
    {
      title: "Comfortable at the React Native and native boundary",
      description:
        "When the app needs deeper platform work, I can move through SDK integration, bridging, TurboModules, and JSI without getting stuck at abstractions.",
      icon: "Blocks",
    },
    {
      title: "Performance and reliability are part of the job",
      description:
        "I treat responsiveness, crash reduction, and release stability as core product quality work, not something to revisit later.",
      icon: "Zap",
    },
    {
      title: "Reusable systems that reduce future cost",
      description:
        "Internal SDKs, remote configuration, workflow modules, and consistent patterns help teams move faster after the first release.",
      icon: "Workflow",
    },
    {
      title: "Easy to collaborate with at senior level",
      description:
        "I work well with product, design, QA, and engineering leadership, and I am comfortable mentoring junior engineers while still shipping hands-on.",
      icon: "Users",
    },
  ],
};

export const testimonialPlaceholders: TestimonialPlaceholder[] = [
  {
    title: "Founder quote",
    prompt: "Add a quote about strong ownership, clean communication, and confidence during delivery.",
    role: "Founder or startup lead",
  },
  {
    title: "Client quote",
    prompt: "Add a quote about architecture judgment, reliability, and shipping without constant oversight.",
    role: "Freelance or contract client",
  },
  {
    title: "Manager quote",
    prompt: "Add a quote about seniority, collaboration, and raising engineering quality on the team.",
    role: "Engineering manager or tech lead",
  },
];

export const contactContent: ContactContent = {
  eyebrow: "Contact",
  title: "If you need a senior React Native engineer who can own the hard parts, let’s talk.",
  description:
    "I am open to freelance builds, contract extensions, architecture reviews, and select full-time roles where mobile engineering has real product impact.",
  availabilityBadge: siteConfig.availability,
  cardTitle:
    "Need someone who can steady the codebase, improve delivery confidence, and still ship hands-on?",
  cardDescription:
    "Reach out if you are planning a new app, modernizing an existing one, or hiring for a senior mobile role that needs architecture and execution in the same person.",
  primaryCta: {
    label: "Start a conversation",
    href: siteConfig.hireUrl,
  },
  secondaryCta: {
    label: "View GitHub",
    href: siteConfig.githubUrl,
  },
  methodsTitle: "Contact details",
  methodsDescription: "Email and GitHub are wired through the content layer so they stay easy to update.",
  processTitle: "How I typically work",
  processDescription:
    "Simple, direct, and focused on reducing delivery risk as early as possible.",
  processSteps: [
    "Start with a short discovery call to understand the product, current codebase, and immediate delivery risks.",
    "Turn that into a pragmatic plan covering architecture priorities, milestones, and the right engagement model.",
    "Execute hands-on with regular updates, demos, and production-ready delivery from implementation through release.",
  ],
};

export const contactMethods: ContactMethod[] = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: "Mail",
  },
  {
    label: "GitHub",
    value: "github.com/snjtiam",
    href: siteConfig.githubUrl,
    icon: "Github",
  },
  {
    label: "Response time",
    value: "Usually within 24 to 48 hours",
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
    label: "GitHub",
    href: siteConfig.githubUrl,
    icon: "Github",
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: "Mail",
  },
];
