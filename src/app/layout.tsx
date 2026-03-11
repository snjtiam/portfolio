import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";

import "@/app/globals.css";

import { siteConfig } from "@/content/portfolio";
import { cn } from "@/lib/utils";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const siteUrl = new URL(siteConfig.url.endsWith("/") ? siteConfig.url : `${siteConfig.url}/`);

const resolveSiteUrl = (path = "") => new URL(path.replace(/^\//, ""), siteUrl).toString();

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: siteConfig.seoTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.seoDescription,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteUrl.toString() }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  manifest: resolveSiteUrl("manifest.webmanifest"),
  referrer: "origin-when-cross-origin",
  keywords: [
    "Senior React Native Engineer",
    "React Native consultant",
    "scalable mobile app development",
    "mobile app architecture",
    "React Native app development",
    "production-grade Android and iOS solutions",
    "native module integrations",
    "TurboModules and JSI",
    "React Native performance optimization",
    "cross-platform mobile engineer",
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl.toString(),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    statusBarStyle: "black-translucent",
  },
  icons: {
    icon: [{ url: resolveSiteUrl("icon.svg"), type: "image/svg+xml" }],
    shortcut: [resolveSiteUrl("icon.svg")],
    apple: [{ url: resolveSiteUrl("apple-icon"), sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: siteConfig.seoTitle,
    description: siteConfig.seoDescription,
    url: siteUrl.toString(),
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: resolveSiteUrl("opengraph-image"),
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - ${siteConfig.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seoTitle,
    description: siteConfig.seoDescription,
    images: [resolveSiteUrl("twitter-image")],
  },
  other: {
    "msapplication-TileColor": "#07101d",
  },
};

export const viewport: Viewport = {
  themeColor: "#07101d",
  colorScheme: "dark",
};

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl.toString()}#website`,
      url: siteUrl.toString(),
      name: siteConfig.name,
      description: siteConfig.seoDescription,
      inLanguage: "en",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl.toString()}#profile`,
      url: siteUrl.toString(),
      name: siteConfig.seoTitle,
      description: siteConfig.seoDescription,
      isPartOf: {
        "@id": `${siteUrl.toString()}#website`,
      },
      mainEntity: {
        "@id": `${siteUrl.toString()}#person`,
      },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl.toString()}#person`,
      name: siteConfig.name,
      url: siteUrl.toString(),
      image: resolveSiteUrl("opengraph-image"),
      jobTitle: siteConfig.role,
      description: siteConfig.seoDescription,
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Remote",
        addressCountry: "IN",
      },
      sameAs: [siteConfig.linkedinUrl, siteConfig.githubUrl],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "professional inquiries",
          email: siteConfig.email,
          url: siteConfig.linkedinUrl,
          availableLanguage: ["English"],
        },
      ],
      knowsAbout: [
        "React Native",
        "TypeScript",
        "Mobile app architecture",
        "Performance optimization",
        "TurboModules",
        "JSI",
        "Native mobile integrations",
        "FHIR mobile integrations",
        "CI/CD for mobile releases",
      ],
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          bodyFont.variable,
          displayFont.variable,
          "relative overflow-x-hidden bg-background text-foreground",
        )}
      >
        <a
          href="#main-content"
          className="sr-only z-[60] rounded-full bg-background px-4 py-2 text-sm text-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute right-[-10rem] top-1/3 h-96 w-96 rounded-full bg-teal-400/10 blur-3xl" />
          <div className="absolute bottom-[-8rem] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
        {children}
      </body>
    </html>
  );
}
