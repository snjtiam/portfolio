import type { IconName } from "@/lib/icon-map";

export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type GlobalActionSet = {
  primary: CtaLink;
  secondary: CtaLink;
  tertiary: CtaLink;
};

export type Metric = {
  value: string;
  label: string;
};

export type AboutStat = {
  value: string;
  label: string;
  detail: string;
};

export type CtaLink = {
  label: string;
  href: string;
  download?: boolean;
  newTab?: boolean;
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

export type ProjectDetailSection = {
  title: string;
  description: string;
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
  valueProp: string;
  icon: IconName;
  outcomes: string[];
};

export type SkillGroup = {
  title: string;
  icon: IconName;
  description: string;
  items: string[];
};

export type Project = {
  slug: string;
  icon: IconName;
  name: string;
  category: string;
  positioning: string;
  summary: string;
  impact: string;
  stack: string[];
  challenges: string[];
  detailIntro: string;
  detailSections: ProjectDetailSection[];
  results: string[];
  metric?: Metric;
  ctaLabel: string;
  ctaHref: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type TestimonialPlaceholder = {
  title: string;
  prompt: string;
  role: string;
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
  stats: AboutStat[];
};

export type ServicesContent = SectionIntro & {
  leadIn: string;
  audienceSignals: string[];
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
  resumeCta: CtaLink;
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
  email: "hello@yourdomain.com",
  linkedinUrl: "https://linkedin.com/in/your-linkedin-handle",
  githubUrl: "https://github.com/snjtiam",
  resumeUrl: "/sanjit-soreng-resume-placeholder.txt",
  url: "https://snjtiam.github.io/portfolio",
  hireUrl: "mailto:hello@yourdomain.com?subject=React%20Native%20Inquiry",
  seoTitle:
    "Senior React Native Engineer | Scalable Mobile App Development, Architecture, Performance, and Native Integrations",
  seoDescription:
    "Senior React Native Engineer specializing in scalable mobile app development, mobile architecture, performance optimization, native integrations, and production-grade Android and iOS solutions.",
  description:
    "Senior React Native Engineer specializing in scalable mobile app development, mobile architecture, performance optimization, native integrations, and production-grade Android and iOS solutions.",
  footerHeading:
    "Bring in senior React Native engineering before mobile complexity starts slowing the product down.",
  footerStatement:
    "I help teams ship scalable mobile systems with cleaner architecture, stronger native integrations, better runtime performance, and steadier production delivery.",
  mobileNavEyebrow: "Senior React Native partner",
  mobileNavDescription:
    "Architecture, performance, native integrations, and release discipline for teams building serious mobile products.",
} as const;

export const navigationCtas: GlobalActionSet = {
  primary: {
    label: "Let's work together",
    href: "#contact",
  },
  secondary: {
    label: "View projects",
    href: "#projects",
  },
  tertiary: {
    label: "Send an email",
    href: siteConfig.hireUrl,
  },
};

export const heroContent: HeroContent = {
  badge: siteConfig.availability,
  contextLabel: "Scalable React Native Systems",
  roleLine: `${siteConfig.role} / ${siteConfig.speciality}`,
  headline:
    "Scalable React Native systems for teams that need speed without technical drag.",
  intro:
    "I design, build, and improve React Native apps for iOS and Android with stronger architecture, sharper performance, and native integrations that hold up in production.",
  secondaryIntro:
    "Startups, product teams, and agencies bring me in when the app is growing, the codebase is getting heavier, or the platform layer starts to matter.",
  highlights: [
    "Architecture ownership from planning through release",
    "Native integrations, TurboModules, JSI, and platform-level problem solving",
    "Production-ready systems designed for scale, iteration, and maintainability",
  ],
  metrics: [
    { value: "6+", label: "Years building React Native apps in production" },
    { value: "250,000+", label: "Users served across shipped mobile products" },
    { value: "~20%", label: "Performance improvement on key mobile flows" },
  ],
  signals: [
    {
      title: "What I solve",
      items: [
        "Feature velocity without letting the codebase turn brittle",
        "Native depth when product requirements outgrow standard libraries",
        "Production readiness across performance, release quality, and long-term maintainability",
      ],
    },
    {
      title: "How I work",
      items: [
        "Direct collaboration with founders, product, design, QA, and backend teams",
        "Clear technical judgment, realistic tradeoffs, and steady execution",
        "Senior ownership that reduces oversight instead of creating more of it",
      ],
    },
  ],
  pillars: [
    {
      title: "Scalable mobile architecture",
      description:
        "Architecture that keeps the app extensible as product scope, traffic, and team size grow.",
      icon: "Layers3",
    },
    {
      title: "Native depth when the app needs it",
      description:
        "Custom native work, SDK integrations, and bridge-level decisions handled cleanly and pragmatically.",
      icon: "Blocks",
    },
    {
      title: "Performance and release reliability",
      description:
        "Performance, CI/CD, and release readiness built into delivery from the start, not added later.",
      icon: "Zap",
    },
  ],
  panelBadge: "Built for production",
  panelTitle:
    "Mobile engineering for products that need to scale, ship reliably, and stay maintainable.",
  panelDescription:
    "I help teams move from MVP momentum or inherited complexity to a cleaner React Native foundation, stronger platform integrations, and fewer production surprises.",
  floatingLabels: ["TurboModules / JSI", "CI/CD & releases"],
  primaryCta: {
    label: "Let's work together",
    href: "#contact",
  },
  secondaryCta: {
    label: "View projects",
    href: "#projects",
  },
};

export const highlightsStrip: HighlightItem[] = [
  {
    title: "250,000+ users served",
    detail:
      "Production mobile work supporting real usage at scale across iOS and Android.",
    icon: "Users",
  },
  {
    title: "~20% performance gains",
    detail:
      "Measured improvements on bottlenecked flows through profiling and targeted optimization.",
    icon: "Zap",
  },
  {
    title: "Healthcare to fintech",
    detail:
      "Experience across healthcare, IoT, video streaming, fintech, and task management.",
    icon: "Building2",
  },
  {
    title: "Reusable internal systems",
    detail:
      "SDKs, remote configuration, offline-capable modules, and scheduling engines.",
    icon: "Code2",
  },
  {
    title: "Release-ready delivery",
    detail:
      "CI/CD, Fastlane, observability, and production releases treated as first-class work.",
    icon: "ShieldCheck",
  },
];

export const aboutContent: AboutContent = {
  eyebrow: "About",
  title:
    "Senior React Native engineering for products that need more than feature delivery.",
  description:
    "I help teams turn ambitious mobile products into stable, scalable systems with better architecture, stronger delivery, and codebases that stay workable as the business grows.",
  paragraphs: [
    "For the last 6 years, I have worked across healthcare, IoT, video streaming, fintech, and task management products where the mobile app carried real business weight. My role has consistently been to own the parts that most affect scale: app structure, platform complexity, performance, and release quality.",
    "That has included internal SDKs, remote configuration platforms, offline-capable modules, scheduling systems, FHIR transformation layers, and custom data-heavy interfaces. I work comfortably across product discovery, implementation, native integration, testing, and release, with a bias toward codebases teams can actually keep shipping in.",
  ],
  focusAreas: [
    "Architecture leadership",
    "Performance optimization",
    "Native integrations",
    "Cross-functional delivery",
    "Team enablement",
  ],
  stats: [
    {
      value: "5 Domains",
      label: "Cross-industry product delivery",
      detail:
        "Hands-on React Native work across healthcare, IoT, video streaming, fintech, and task management products.",
    },
    {
      value: "SDKs + Infra",
      label: "Systems beyond screens",
      detail:
        "Built internal SDKs, remote config tooling, offline-first modules, and scheduling infrastructure for long-term product use.",
    },
    {
      value: "Planning -> Release",
      label: "End-to-end ownership",
      detail:
        "Comfortable across discovery, implementation, testing, native integration, QA handoff, and production release coordination.",
    },
  ],
};

export const servicesContent: ServicesContent = {
  eyebrow: "Services",
  title:
    "Senior React Native support for teams building past the prototype stage.",
  description:
    "For founders, CTOs, product companies, agencies, and recruiters looking for someone who can own both the hard technical decisions and the delivery behind them.",
  leadIn:
    "I help teams move from early traction to production-ready mobile systems with cleaner architecture, better runtime behavior, stronger platform integrations, and steadier release execution.",
  audienceSignals: [
    "Founder-led product teams",
    "Startups scaling past MVP",
    "Agencies needing senior delivery support",
    "Recruiters and hiring managers evaluating long-term fit",
  ],
  items: [
    {
      title: "React Native app development",
      valueProp:
        "Build a polished cross-platform product on a foundation that supports the next stage of growth, not just the first launch.",
      icon: "Smartphone",
      outcomes: [
        "Faster delivery without accumulating avoidable mobile debt",
        "Clearer structure for features, navigation, and state from day one",
        "Senior implementation ownership through QA and release",
      ],
    },
    {
      title: "Scalable mobile architecture",
      valueProp:
        "Set the app up to scale across features, engineers, and releases without sacrificing development speed.",
      icon: "Layers3",
      outcomes: [
        "Clear boundaries for navigation, state, and feature ownership",
        "Reusable patterns that keep delivery consistent as the product expands",
        "A codebase that is easier to onboard into, maintain, and extend safely",
      ],
    },
    {
      title: "Mobile performance optimization",
      valueProp:
        "Remove lag, startup friction, and unstable runtime behavior where users feel it first.",
      icon: "Zap",
      outcomes: [
        "Measured bottleneck analysis instead of guesswork-led optimization",
        "Smoother behavior on data-heavy, animated, and real-time screens",
        "Higher release confidence through fewer regressions and more predictable runtime behavior",
      ],
    },
    {
      title: "Native module and platform integrations",
      valueProp:
        "Bridge React Native and native code cleanly when the product needs more than standard packages can offer.",
      icon: "Blocks",
      outcomes: [
        "Safer integrations for SDKs, device features, authentication, notifications, and media flows",
        "TurboModules, JSI, and bridging work without leaving the app brittle",
        "Platform decisions made with maintainability and release stability in mind",
      ],
    },
    {
      title: "App modernization and refactoring",
      valueProp:
        "Untangle older React Native codebases into something the team can ship on confidently again.",
      icon: "Wrench",
      outcomes: [
        "Less technical drag while keeping feature work moving",
        "Safer migration paths for legacy architecture, outdated modules, and fragile flows",
        "Better maintainability without a disruptive all-at-once rebuild",
      ],
    },
    {
      title: "Release support, maintenance, and long-term product engineering",
      valueProp:
        "Keep the app healthy after launch with stronger release systems, production maintenance, and hands-on engineering continuity.",
      icon: "Workflow",
      outcomes: [
        "More dependable store releases, CI/CD flows, and rollout processes",
        "Ongoing support for active products that need fixes, iteration, and architectural care",
        "Longer-term mobile engineering ownership instead of reactive patchwork after launch",
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
      description:
        "The foundation used to build and ship polished cross-platform mobile products.",
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
      description:
        "Patterns for keeping codebases understandable and scalable under growing product complexity.",
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
      description:
        "Work at the platform boundary and on the bottlenecks users notice first.",
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
      description:
        "Stable client-side integrations for mobile products with complex backend behavior.",
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
      description:
        "Higher-level mobile capabilities that support real product workflows, not just isolated screens.",
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
      description:
        "The release and collaboration practices that keep shipped apps reliable over time.",
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
  eyebrow: "Selected Projects",
  title:
    "Selected projects shaped by scale, platform complexity, and production pressure.",
  description:
    "A few representative builds that show how I approach architecture, performance, native depth, and delivery without exposing client-sensitive details.",
  items: [
    {
      slug: "internal-react-native-sdk-platform",
      icon: "Code2",
      name: "Internal React Native SDK Platform",
      category: "Platform engineering",
      positioning:
        "A shared mobile foundation that reduced duplicated work across multiple React Native products.",
      summary:
        "Built an internal SDK covering navigation patterns, analytics hooks, shared UI contracts, and native integration wrappers so teams could start from a stable base instead of rebuilding the same infrastructure.",
      impact:
        "Improved delivery consistency, shortened setup time for new apps, and made cross-app maintenance substantially easier.",
      stack: [
        "React Native",
        "TypeScript",
        "TurboModules",
        "JSI",
        "Native Bridges",
        "CI/CD",
      ],
      challenges: [
        "Designed stable public APIs so product teams could move fast without leaking internal implementation details",
        "Handled native module boundaries and versioning without creating upgrade pain across consuming apps",
        "Created extension points for app-specific behavior while keeping the shared layer maintainable",
      ],
      detailIntro:
        "This work treated shared mobile infrastructure as a product in its own right. The goal was to stop rebuilding the same architectural primitives across apps and create a versioned foundation teams could confidently extend.",
      detailSections: [
        {
          title: "Problem",
          description:
            "Multiple React Native applications were solving the same infrastructure concerns independently, which increased maintenance cost, slowed onboarding, and made release behavior inconsistent across products.",
        },
        {
          title: "Approach",
          description:
            "I designed a reusable SDK layer for navigation contracts, analytics instrumentation, feature bootstrapping, and native wrappers, with stable APIs and extension points for product-specific behavior.",
        },
        {
          title: "Delivery",
          description:
            "Versioning, upgrade boundaries, and internal documentation were treated as part of the engineering work so product teams could adopt changes without disruption.",
        },
      ],
      results: [
        "Reduced duplicated engineering effort across multiple codebases",
        "Made new app setup faster and more consistent",
        "Created cleaner long-term maintenance paths for shared mobile behavior",
      ],
      metric: {
        value: "Multi-app",
        label: "shared foundation used across multiple React Native codebases",
      },
      ctaLabel: "View case study",
      ctaHref: "/projects/internal-react-native-sdk-platform",
    },
    {
      slug: "remote-configuration-platform",
      icon: "Workflow",
      name: "Remote Configuration Platform",
      category: "Release control",
      positioning:
        "A typed release control layer for shipping changes more safely between app-store releases.",
      summary:
        "Designed a remote config platform with defaults, kill switches, rollout targeting, and offline-safe caching to give product and operations teams controlled flexibility in production.",
      impact:
        "Reduced release risk, accelerated experimentation, and cut the need for avoidable hotfix updates.",
      stack: [
        "React Native",
        "TypeScript",
        "Firebase Remote Config",
        "Zustand",
        "REST APIs",
        "Fastlane",
      ],
      challenges: [
        "Enforced typed config contracts so invalid payloads could not silently break production behavior",
        "Built deterministic fallback logic for offline use, stale values, and first-launch defaults",
        "Separated release controls from feature logic to keep the system auditable and easy to extend",
      ],
      detailIntro:
        "This platform gave product and operations teams controlled flexibility without compromising app stability. The emphasis was on release safety, predictable fallbacks, and clear ownership boundaries.",
      detailSections: [
        {
          title: "Problem",
          description:
            "Teams needed to change product behavior quickly in production, but relying on app-store releases for operational switches created unnecessary risk and response delays.",
        },
        {
          title: "Approach",
          description:
            "I built a typed remote configuration system with defaults, kill switches, rollout targeting, and cache-aware evaluation so app behavior stayed deterministic even with stale or missing config.",
        },
        {
          title: "Delivery",
          description:
            "The final system kept config contracts separate from feature code, which improved auditability and made future extensions safer for both engineers and product stakeholders.",
        },
      ],
      results: [
        "Lowered release risk for production rollouts",
        "Enabled faster experimentation and operational response",
        "Reduced the need for emergency app updates",
      ],
      ctaLabel: "View case study",
      ctaHref: "/projects/remote-configuration-platform",
    },
    {
      slug: "healthcare-data-collection-fhir-transformation",
      icon: "ShieldCheck",
      name: "Healthcare Data Collection & FHIR Transformation",
      category: "Healthcare workflows",
      positioning:
        "A mobile data pipeline that made complex healthcare workflows usable, reliable, and app-safe.",
      summary:
        "Built assessment, reminder, survey, and care workflow experiences backed by FHIR transformation layers that insulated the mobile app from backend complexity.",
      impact:
        "Improved data quality, simplified client-side logic, and supported production healthcare workflows with fewer failure points.",
      stack: [
        "React Native",
        "TypeScript",
        "Redux Toolkit",
        "FHIR",
        "Firebase",
        "REST APIs",
      ],
      challenges: [
        "Normalized deeply nested FHIR resources into predictable mobile view models and write-back payloads",
        "Handled offline-capable collection, validation, and retry flows for unstable network conditions",
        "Supported role-sensitive workflows without duplicating domain logic across screens",
      ],
      detailIntro:
        "The core challenge was translating healthcare data complexity into mobile workflows that remained understandable for end users and maintainable for engineers. The solution centered on clear transformation boundaries and resilient offline behavior.",
      detailSections: [
        {
          title: "Problem",
          description:
            "FHIR resources and domain workflows were too complex to expose directly to the client layer, especially in forms, surveys, reminders, and role-based care interactions.",
        },
        {
          title: "Approach",
          description:
            "I built transformation layers that mapped backend resources into app-safe models, then paired them with validation, retry, and offline collection logic for production healthcare usage.",
        },
        {
          title: "Delivery",
          description:
            "The architecture reduced duplication across screens, kept role-sensitive logic consistent, and made it easier to evolve workflows without pushing schema complexity into the UI layer.",
        },
      ],
      results: [
        "Improved reliability of mobile healthcare data collection",
        "Reduced client-side transformation complexity",
        "Supported production workflows in a regulated, data-heavy domain",
      ],
      metric: {
        value: "250,000+",
        label:
          "users supported across shipped mobile products in regulated and data-heavy domains",
      },
      ctaLabel: "View case study",
      ctaHref: "/projects/healthcare-data-collection-fhir-transformation",
    },
    {
      slug: "data-visualization-custom-calendar-system",
      icon: "CalendarDays",
      name: "Data Visualization & Custom Calendar System",
      category: "Data-heavy product UX",
      positioning:
        "A custom calendar and visualization layer for data-heavy mobile workflows that standard libraries could not handle well.",
      summary:
        "Designed time zone aware calendar views and bespoke visual components for dense operational data, regional rollups, and drill-down analysis on mobile.",
      impact:
        "Made complex schedules and trends easier to interpret while keeping rendering performance under control.",
      stack: [
        "React Native",
        "TypeScript",
        "Reanimated",
        "REST APIs",
        "Supabase",
        "Custom UI",
      ],
      challenges: [
        "Resolved time zone and daylight-saving edge cases so data appeared in the correct local context",
        "Optimized data-heavy rendering paths to keep scrolling and drill-down interactions smooth",
        "Built reusable primitives for calendars, legends, and stateful filters instead of one-off visual widgets",
      ],
      detailIntro:
        "This project focused on turning heavy, time-sensitive data into a mobile experience that stayed readable and performant. Off-the-shelf calendar and charting patterns were not enough for the product requirements.",
      detailSections: [
        {
          title: "Problem",
          description:
            "The product needed custom calendar and insight views for dense operational data, regional rollups, and time-sensitive interactions where standard UI libraries were too rigid.",
        },
        {
          title: "Approach",
          description:
            "I designed reusable calendar, filtering, and visualization primitives with careful handling for time zones, daylight-saving changes, and heavy client-side rendering.",
        },
        {
          title: "Delivery",
          description:
            "Performance profiling shaped rendering decisions, while the shared primitives made it possible to extend the system without creating one-off visualization logic on every screen.",
        },
      ],
      results: [
        "Made dense schedule and trend data easier to interpret on mobile",
        "Improved runtime behavior on heavy visualization screens",
        "Created reusable UI primitives for future product expansion",
      ],
      metric: {
        value: "~20%",
        label:
          "performance improvement on key data-heavy screens after profiling and optimization",
      },
      ctaLabel: "View case study",
      ctaHref: "/projects/data-visualization-custom-calendar-system",
    },
    {
      slug: "local-scheduling-notification-engine",
      icon: "Clock3",
      name: "Local Scheduling & Notification Engine",
      category: "Workflow automation",
      positioning:
        "A notification and reminder engine built for real-world edge cases, not ideal device behavior.",
      summary:
        "Built device-side scheduling with persistence, recurrence logic, quiet hours, and backend sync coordination so reminders stayed reliable across offline periods, restarts, and time changes.",
      impact:
        "Increased workflow reliability and reduced support issues caused by missed or incorrectly timed notifications.",
      stack: [
        "React Native",
        "TypeScript",
        "Native Modules",
        "Zustand",
        "Local Storage",
        "Notifications",
      ],
      challenges: [
        "Handled recurrence rules, local time changes, and app restarts without double-firing notifications",
        "Coordinated server intent with device execution so reminders stayed accurate in offline and reconnect scenarios",
        "Built guardrails around throttling, retries, and cancellation for user-trust-sensitive flows",
      ],
      detailIntro:
        "Reliable reminder systems are mostly about edge cases. This project focused on the device-side logic needed to keep scheduling trustworthy across offline periods, app restarts, and time changes.",
      detailSections: [
        {
          title: "Problem",
          description:
            "Missed, duplicated, or badly timed notifications create immediate trust issues, especially when reminders depend on local device state and changing user context.",
        },
        {
          title: "Approach",
          description:
            "I built a local scheduling engine with persistence, recurrence rules, quiet hours, sync coordination, and recovery logic so delivery behavior stayed predictable under non-ideal conditions.",
        },
        {
          title: "Delivery",
          description:
            "The final system balanced user trust, operational control, and maintainability, with clear guardrails around retries, cancellation, and time zone shifts.",
        },
      ],
      results: [
        "Improved reliability of scheduled mobile workflows",
        "Reduced support issues tied to notification edge cases",
        "Created a reusable engine for reminder-driven product experiences",
      ],
      ctaLabel: "View case study",
      ctaHref: "/projects/local-scheduling-notification-engine",
    },
    {
      slug: "iot-video-streaming-realtime-app-solutions",
      icon: "Globe2",
      name: "IoT, Video Streaming & Real-time App Solutions",
      category: "Realtime systems",
      positioning:
        "Real-time mobile systems for connected devices, live state, chat, and streaming-adjacent experiences.",
      summary:
        "Delivered React Native flows for device telemetry, session state, messaging, and network-heavy interactions where reliability depended on disciplined connection management and platform awareness.",
      impact:
        "Improved resilience under unstable networks and made live product behavior clearer for end users.",
      stack: [
        "React Native",
        "TypeScript",
        "WebSockets",
        "GraphQL",
        "Native Bridges",
        "Firebase",
      ],
      challenges: [
        "Managed connection lifecycle, reconnection, and back-pressure across real-time mobile surfaces",
        "Balanced responsiveness with battery, memory, and background-state constraints on iOS and Android",
        "Integrated native and network-heavy capabilities without letting the codebase devolve into special cases",
      ],
      detailIntro:
        "Real-time mobile work adds pressure on every layer of the stack: connection handling, device constraints, UI responsiveness, and operational stability. This project area required disciplined engineering rather than optimistic assumptions.",
      detailSections: [
        {
          title: "Problem",
          description:
            "Connected devices, streaming-adjacent flows, telemetry, and live messaging create high-frequency state changes that can quickly become unstable on mobile if connection management is weak.",
        },
        {
          title: "Approach",
          description:
            "I built React Native systems around explicit connection lifecycle handling, back-pressure awareness, reconnection behavior, and careful boundaries between native capabilities and realtime application logic.",
        },
        {
          title: "Delivery",
          description:
            "The result was a more resilient product experience under unstable connectivity, with clearer live state for users and less hidden complexity in the codebase.",
        },
      ],
      results: [
        "Improved resilience in network-heavy product flows",
        "Made live device and session behavior easier for users to understand",
        "Reduced fragility in realtime mobile architecture",
      ],
      ctaLabel: "View case study",
      ctaHref: "/projects/iot-video-streaming-realtime-app-solutions",
    },
  ],
};

export const experienceContent: ExperienceContent = {
  eyebrow: "Experience",
  title:
    "An experience timeline shaped by architecture ownership, domain complexity, and production delivery.",
  description:
    "From January 2020 through January 2026, I worked across healthcare, realtime, media, and platform-heavy mobile products, steadily taking on more responsibility for architecture, integrations, reliability, and team guidance.",
  items: [
    {
      company: "Mindbowser Infosolution",
      role: "Senior Software Engineer",
      period: "Apr 2022 - Jan 2026",
      summary:
        "Led senior React Native delivery across healthcare and product engineering initiatives, owning architecture decisions, native integrations, release quality, and maintainability for production mobile systems.",
      highlights: [
        "Owned mobile architecture for complex React Native applications, setting patterns for modular features, reusable components, internal SDKs, and long-term codebase scalability.",
        "Delivered healthcare interoperability workflows with FHIR transformation layers, app-safe data models, and reliable form, survey, and care-path experiences.",
        "Built and maintained real-time product features including chat, live data flows, and media-heavy experiences across video, uploads, and streaming-adjacent surfaces.",
        "Handled native integrations and deeper platform work for camera, maps, uploads, device capabilities, and modern React Native bridge or TurboModule-style requirements.",
        "Improved performance and regression safety through profiling, test coverage, release discipline, and mentoring junior engineers on maintainable mobile engineering practices.",
      ],
    },
    {
      company: "Audertec Solutions",
      role: "Software Engineer",
      period: "May 2020 - Apr 2022",
      summary:
        "Built and maintained cross-platform mobile applications with a focus on dependable feature delivery, production maintenance, native capabilities, and cleaner implementation patterns.",
      highlights: [
        "Implemented reusable UI components and shared feature patterns that reduced repeated engineering effort across Android and iOS delivery.",
        "Built real-time chat, media, and upload flows while coordinating closely with backend APIs and active production systems.",
        "Integrated platform-specific capabilities such as camera, maps, and device workflows without allowing the React Native layer to become fragmented.",
        "Contributed to performance improvements, bug fixing, testing support, and release maintenance for actively used mobile products.",
      ],
    },
    {
      company: "SASA Infotech",
      role: "Software Engineer",
      period: "Jan 2020 - Mar 2020",
      summary:
        "Built the foundation of my mobile engineering practice through hands-on product development, reusable UI work, and early exposure to production release expectations.",
      highlights: [
        "Developed React Native screens, API-driven features, and reusable components with a focus on clean implementation and consistent UX behavior.",
        "Supported bug fixing, QA handoff, and release preparation for Android and iOS builds in an active delivery environment.",
        "Built early discipline around regression safety, maintainability, and production deployment that shaped later senior engineering ownership.",
      ],
    },
  ],
};

export const whyWorkWithMeContent: WhyWorkWithMeContent = {
  eyebrow: "Why Work With Me",
  title:
    "Why teams bring me in when mobile complexity starts getting expensive.",
  description:
    "I bring senior React Native judgment to architecture, performance, native work, and delivery, while staying practical and easy to work with.",
  items: [
    {
      title: "Architecture ownership, not ticket execution",
      description:
        "I make structural decisions that keep the app easier to extend, test, and release as product scope grows.",
      icon: "Layers3",
    },
    {
      title: "Native depth without platform chaos",
      description:
        "When the app needs custom integrations, SDK work, TurboModules, or JSI, I handle it without turning the codebase into a patchwork of exceptions.",
      icon: "Blocks",
    },
    {
      title: "Performance that serves product goals",
      description:
        "I focus on responsiveness, stability, and the bottlenecks users actually notice, not cosmetic optimization work.",
      icon: "Zap",
    },
    {
      title: "Maintainability over short-term cleverness",
      description:
        "Reusable systems, clearer boundaries, and release discipline reduce the cost of building the next feature, not just the current one.",
      icon: "Workflow",
    },
    {
      title: "Collaborative seniority",
      description:
        "I work comfortably with founders, CTOs, product, design, QA, and engineers, and I communicate clearly enough to keep decisions moving.",
      icon: "Users",
    },
  ],
};

export const testimonialPlaceholders: TestimonialPlaceholder[] = [
  {
    title: "Founder quote",
    prompt:
      "Add a quote about strong ownership, clean communication, and confidence during delivery.",
    role: "Founder or startup lead",
  },
  {
    title: "Client quote",
    prompt:
      "Add a quote about architecture judgment, reliability, and shipping without constant oversight.",
    role: "Freelance or contract client",
  },
  {
    title: "Manager quote",
    prompt:
      "Add a quote about seniority, collaboration, and raising engineering quality on the team.",
    role: "Engineering manager or tech lead",
  },
];

export const contactContent: ContactContent = {
  eyebrow: "Contact",
  title:
    "Need senior React Native engineering that is hands-on, scalable, and production-minded?",
  description:
    "I work with founders, CTOs, product teams, agencies, and recruiters looking for someone who can own architecture, execution, and delivery without a lot of overhead.",
  availabilityBadge: "Freelance / Contract / Full-time",
  cardTitle: "Building, scaling, or hiring for a serious mobile product?",
  cardDescription:
    "If you need a senior React Native engineer to lead architecture, stabilize delivery, improve performance, or handle platform-heavy work, I am open to freelance, contract, and select full-time opportunities.",
  primaryCta: {
    label: "Let's work together",
    href: siteConfig.hireUrl,
  },
  resumeCta: {
    label: "Download Resume",
    href: siteConfig.resumeUrl,
    download: true,
  },
  processTitle: "What working together looks like",
  processDescription:
    "Clear scope, direct communication, and delivery with production in mind.",
  processSteps: [
    "Start with a short call to understand product goals, current constraints, and the riskiest parts of the mobile stack.",
    "Turn that into a practical plan covering architecture priorities, delivery scope, and the right engagement model.",
    "Execute hands-on with regular check-ins, visible progress, and release-ready implementation.",
  ],
};

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: siteConfig.linkedinUrl,
    icon: "Linkedin",
  },
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

export function getProjectBySlug(slug: string) {
  return projectsContent.items.find((project) => project.slug === slug);
}
