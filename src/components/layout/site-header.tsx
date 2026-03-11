"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { homeSectionNavItems, primaryNavItems } from "@/content/pages";
import { navigationCtas, siteConfig } from "@/content/portfolio";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [activeSectionHref, setActiveSectionHref] = useState(
    homeSectionNavItems[0]?.href ?? "#about",
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const syncHeaderState = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;

      setIsScrolled(scrollY > 18);
      setScrollProgress(documentHeight > 0 ? scrollY / documentHeight : 0);

       if (isHomePage) {
        let currentHref = homeSectionNavItems[0]?.href ?? "#about";

        for (const item of homeSectionNavItems) {
          const section = document.querySelector(item.href) as HTMLElement | null;

          if (section && scrollY + 180 >= section.offsetTop) {
            currentHref = item.href;
          }
        }

        setActiveSectionHref(currentHref);
      }
    };

    syncHeaderState();
    window.addEventListener("scroll", syncHeaderState, { passive: true });
    window.addEventListener("resize", syncHeaderState);

    return () => {
      window.removeEventListener("scroll", syncHeaderState);
      window.removeEventListener("resize", syncHeaderState);
    };
  }, [isHomePage]);

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    closeOnDesktop();
    window.addEventListener("resize", closeOnDesktop);

    return () => {
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, []);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = open ? "hidden" : originalOverflow;

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  const isActiveNavItem = (href: string, matchPrefixes?: string[]) => {
    if (href === "/") {
      return pathname === "/";
    }

    const pathsToCheck = matchPrefixes?.length ? matchPrefixes : [href];
    return pathsToCheck.some((path) => pathname === path || pathname.startsWith(`${path}/`));
  };

  const mobilePrimaryHref =
    isHomePage && navigationCtas.primary.href.startsWith("#")
      ? navigationCtas.primary.href
      : "/contact";
  const mobileSecondaryHref =
    isHomePage && navigationCtas.secondary.href.startsWith("#")
      ? navigationCtas.secondary.href
      : "/projects";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container className="relative">
        <motion.div
          animate={{
            y: isScrolled ? 0 : 4,
            scale: isScrolled ? 0.995 : 1,
          }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className={cn(
            "mt-2 overflow-hidden rounded-[24px] border px-3 py-2.5 backdrop-blur-2xl sm:mt-3 sm:rounded-[28px] sm:px-5 sm:py-3 lg:px-6",
            isScrolled
              ? "border-white/12 bg-slate-950/78 shadow-[0_18px_60px_rgba(2,8,23,0.42)]"
              : "border-white/8 bg-slate-950/58 shadow-[0_10px_42px_rgba(2,8,23,0.28)]",
          )}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
          <div className="flex items-center justify-between gap-3 sm:gap-6">
            <Link
              href="/"
              className="flex min-w-0 items-center gap-3"
              aria-label={`${siteConfig.name} home`}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-teal-300 via-cyan-400 to-blue-500 text-sm font-semibold text-slate-950">
                {siteConfig.initials}
              </span>
              <span className="hidden min-w-0 sm:block">
                <span className="block truncate text-sm font-semibold text-foreground">
                  {siteConfig.name}
                </span>
                <span className="block truncate text-xs uppercase tracking-[0.2em] text-foreground/45">
                  {siteConfig.role}
                </span>
              </span>
            </Link>

            <nav
              className="hidden items-center gap-1 rounded-full border border-white/8 bg-white/[0.03] p-1 lg:flex"
              aria-label="Primary"
            >
              {isHomePage
                ? homeSectionNavItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      aria-current={activeSectionHref === item.href ? "page" : undefined}
                      className="relative rounded-full px-3 py-2 text-[0.92rem] text-foreground/68 transition hover:text-foreground xl:px-4"
                    >
                      {activeSectionHref === item.href ? (
                        <motion.span
                          layoutId="desktop-nav-active"
                          className="absolute inset-0 rounded-full border border-white/12 bg-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      ) : null}
                      <span className="relative z-10">{item.label}</span>
                    </a>
                  ))
                : primaryNavItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={isActiveNavItem(item.href, item.matchPrefixes) ? "page" : undefined}
                      className="relative rounded-full px-3 py-2 text-[0.92rem] text-foreground/68 transition hover:text-foreground xl:px-4"
                    >
                      {isActiveNavItem(item.href, item.matchPrefixes) ? (
                        <motion.span
                          layoutId="desktop-nav-active"
                          className="absolute inset-0 rounded-full border border-white/12 bg-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      ) : null}
                      <span className="relative z-10">{item.label}</span>
                    </Link>
                  ))}
            </nav>

            <div className="hidden items-center gap-2 xl:flex">
              <Button asChild size="sm">
                {isHomePage ? (
                  <a href={navigationCtas.primary.href}>{navigationCtas.primary.label}</a>
                ) : (
                  <Link href="/contact">{navigationCtas.primary.label}</Link>
                )}
              </Button>
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground transition hover:bg-white/10 lg:hidden"
              onClick={() => setOpen((current) => !current)}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
          <motion.div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-teal-300/80 via-cyan-300/60 to-transparent"
            style={{ scaleX: scrollProgress }}
          />
        </motion.div>

        <AnimatePresence>
          {open ? (
            <>
              <motion.button
                type="button"
                aria-label="Close navigation overlay"
                className="fixed inset-0 z-40 bg-slate-950/65 backdrop-blur-sm lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMenu}
              />
              <motion.div
                id="mobile-navigation"
                initial={{ opacity: 0, y: -14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.24, ease: "easeOut" }}
                className={cn(
                  "absolute inset-x-0 top-[calc(100%+0.7rem)] z-50 max-h-[min(80vh,36rem)] overflow-y-auto rounded-[26px] border border-white/10",
                  "bg-slate-950/96 p-4 shadow-[0_24px_80px_rgba(2,8,23,0.55)] backdrop-blur-2xl overscroll-contain sm:p-5 lg:hidden",
                )}
              >
                <div className="space-y-5">
                  <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs uppercase tracking-[0.28em] text-foreground/45">
                      {siteConfig.mobileNavEyebrow}
                    </p>
                    <p className="mt-3 max-w-xs text-sm leading-6 text-foreground/72">
                      {siteConfig.mobileNavDescription}
                    </p>
                  </div>

                  <nav className="flex flex-col gap-2" aria-label="Mobile">
                    {isHomePage
                      ? homeSectionNavItems.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            aria-current={activeSectionHref === item.href ? "page" : undefined}
                            className={cn(
                              "flex min-h-[48px] items-center justify-between rounded-2xl px-4 py-3 text-sm transition",
                              activeSectionHref === item.href
                                ? "border border-white/10 bg-white/[0.07] text-foreground"
                                : "border border-transparent text-foreground/72 hover:border-white/10 hover:bg-white/[0.04] hover:text-foreground",
                            )}
                            onClick={closeMenu}
                          >
                            <span>{item.label}</span>
                            {activeSectionHref === item.href ? (
                              <ArrowUpRight className="h-4 w-4 text-cyan-200" />
                            ) : null}
                          </a>
                        ))
                      : primaryNavItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            aria-current={isActiveNavItem(item.href, item.matchPrefixes) ? "page" : undefined}
                            className={cn(
                              "flex min-h-[48px] items-center justify-between rounded-2xl px-4 py-3 text-sm transition",
                              isActiveNavItem(item.href, item.matchPrefixes)
                                ? "border border-white/10 bg-white/[0.07] text-foreground"
                                : "border border-transparent text-foreground/72 hover:border-white/10 hover:bg-white/[0.04] hover:text-foreground",
                            )}
                            onClick={closeMenu}
                          >
                            <span>{item.label}</span>
                            {isActiveNavItem(item.href, item.matchPrefixes) ? (
                              <ArrowUpRight className="h-4 w-4 text-cyan-200" />
                            ) : null}
                          </Link>
                        ))}
                  </nav>

                  <div className="grid gap-3">
                    <Button asChild className="w-full">
                      {isHomePage ? (
                        <a href={mobilePrimaryHref} onClick={closeMenu}>
                          {navigationCtas.primary.label}
                        </a>
                      ) : (
                        <Link href={mobilePrimaryHref} onClick={closeMenu}>
                          {navigationCtas.primary.label}
                        </Link>
                      )}
                    </Button>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <Button asChild variant="secondary" className="w-full">
                        {isHomePage ? (
                          <a href={mobileSecondaryHref} onClick={closeMenu}>
                            {navigationCtas.secondary.label}
                          </a>
                        ) : (
                          <Link href={mobileSecondaryHref} onClick={closeMenu}>
                            {navigationCtas.secondary.label}
                          </Link>
                        )}
                      </Button>
                      <Button asChild variant="ghost" className="w-full">
                        <a href={navigationCtas.tertiary.href} onClick={closeMenu}>
                          {navigationCtas.tertiary.label}
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          ) : null}
        </AnimatePresence>
      </Container>
    </header>
  );
}
