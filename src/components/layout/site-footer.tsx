 "use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { homeSectionNavItems, primaryNavItems } from "@/content/pages";
import { navigationCtas, siteConfig, socialLinks } from "@/content/portfolio";
import { iconMap } from "@/lib/icon-map";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <footer className="border-t border-white/10 py-8 sm:py-10">
      <Container className="space-y-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.25em] text-foreground/45">
              {siteConfig.role} / {siteConfig.speciality}
            </p>
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              {siteConfig.footerHeading}
            </h2>
            <p className="max-w-2xl text-sm text-foreground/65">
              {siteConfig.footerStatement}
            </p>
          </div>
          {isHomePage ? (
            <a
              href={navigationCtas.primary.href}
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-teal-400/30 bg-teal-400/10 px-5 py-3 text-sm font-medium text-teal-100 transition hover:bg-teal-400/15 sm:w-auto"
            >
              {navigationCtas.primary.label}
            </a>
          ) : (
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-teal-400/30 bg-teal-400/10 px-5 py-3 text-sm font-medium text-teal-100 transition hover:bg-teal-400/15 sm:w-auto"
            >
              {navigationCtas.primary.label}
            </Link>
          )}
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 lg:flex-row lg:items-center lg:justify-between">
          <nav className="flex flex-wrap items-center gap-3 sm:gap-4" aria-label="Footer">
            {isHomePage
              ? homeSectionNavItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="py-1 text-sm text-foreground/60 transition hover:text-foreground"
                  >
                    {item.label}
                  </a>
                ))
              : primaryNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="py-1 text-sm text-foreground/60 transition hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
          </nav>

          <div className="flex flex-wrap items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex min-h-[44px] items-center gap-2 py-1 text-sm text-foreground/60 transition hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-2 text-xs leading-5 text-foreground/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            (c) {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="max-w-xl">{siteConfig.footerStatement}</p>
        </div>
      </Container>
    </footer>
  );
}
