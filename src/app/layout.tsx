import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";

import "@/app/globals.css";

import { siteConfig } from "@/content/portfolio";
import { cn } from "@/lib/utils";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.role}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Senior React Native Engineer",
    "React Native freelancer",
    "mobile app consultant",
    "startup mobile developer",
    "contract React Native engineer",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#07101d",
  colorScheme: "dark",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  description: siteConfig.description,
  url: siteConfig.url,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Remote",
    addressCountry: "IN",
  },
  knowsAbout: [
    "React Native",
    "TypeScript",
    "Mobile app architecture",
    "Freelance mobile development",
    "Startup product delivery",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}

