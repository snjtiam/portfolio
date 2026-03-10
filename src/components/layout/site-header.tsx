"use client";

import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { navItems, siteConfig } from "@/content/portfolio";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(navItems[0]?.href ?? "#about");
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const syncHeaderState = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;

      setIsScrolled(scrollY > 18);
      setScrollProgress(documentHeight > 0 ? scrollY / documentHeight : 0);

      let currentHref = navItems[0]?.href ?? "#about";

      for (const item of navItems) {
        const section = document.querySelector(item.href) as HTMLElement | null;

        if (section && scrollY + 180 >= section.offsetTop) {
          currentHref = item.href;
        }
      }

      setActiveHref(currentHref);
    };

    syncHeaderState();
    window.addEventListener("scroll", syncHeaderState, { passive: true });
    window.addEventListener("resize", syncHeaderState);

    return () => {
      window.removeEventListener("scroll", syncHeaderState);
      window.removeEventListener("resize", syncHeaderState);
    };
  }, []);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = open ? "hidden" : originalOverflow;

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

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
            "mt-3 overflow-hidden rounded-[28px] border px-4 py-3 backdrop-blur-2xl sm:px-6",
            isScrolled
              ? "border-white/12 bg-slate-950/78 shadow-[0_18px_60px_rgba(2,8,23,0.42)]"
              : "border-white/8 bg-slate-950/58 shadow-[0_10px_42px_rgba(2,8,23,0.28)]",
          )}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
          <div className="flex items-center justify-between gap-6">
            <a
              href="#top"
              className="flex min-w-0 items-center gap-3"
              aria-label={`${siteConfig.name} home`}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-teal-300 via-cyan-400 to-blue-500 text-sm font-semibold text-slate-950">
                AM
              </span>
              <span className="hidden min-w-0 sm:block">
                <span className="block truncate text-sm font-semibold text-foreground">
                  {siteConfig.name}
                </span>
                <span className="block truncate text-xs uppercase tracking-[0.2em] text-foreground/45">
                  {siteConfig.role}
                </span>
              </span>
            </a>

            <nav className="hidden items-center gap-1 rounded-full border border-white/8 bg-white/[0.03] p-1 lg:flex" aria-label="Primary">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={activeHref === item.href ? "page" : undefined}
                  className="relative rounded-full px-4 py-2 text-sm text-foreground/68 transition hover:text-foreground"
                >
                  {activeHref === item.href ? (
                    <motion.span
                      layoutId="desktop-nav-active"
                      className="absolute inset-0 rounded-full border border-white/12 bg-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  ) : null}
                  <span className="relative z-10">{item.label}</span>
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-2 lg:flex">
              <Button asChild size="sm">
                <a href="#contact">Let&apos;s Work Together</a>
              </Button>
            </div>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground transition hover:bg-white/10 lg:hidden"
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
                  "absolute inset-x-0 top-[calc(100%+0.85rem)] z-50 rounded-[28px] border border-white/10",
                  "bg-slate-950/96 p-5 shadow-[0_24px_80px_rgba(2,8,23,0.55)] backdrop-blur-2xl lg:hidden",
                )}
              >
                <div className="space-y-5">
                  <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs uppercase tracking-[0.28em] text-foreground/45">
                      Mobile systems partner
                    </p>
                    <p className="mt-3 max-w-xs text-sm leading-6 text-foreground/72">
                      Architecture, performance, and native integrations for teams that need senior
                      execution.
                    </p>
                  </div>

                  <nav className="flex flex-col gap-2" aria-label="Mobile">
                    {navItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        aria-current={activeHref === item.href ? "page" : undefined}
                        className={cn(
                          "flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition",
                          activeHref === item.href
                            ? "border border-white/10 bg-white/[0.07] text-foreground"
                            : "border border-transparent text-foreground/72 hover:border-white/10 hover:bg-white/[0.04] hover:text-foreground",
                        )}
                        onClick={closeMenu}
                      >
                        <span>{item.label}</span>
                        {activeHref === item.href ? (
                          <ArrowUpRight className="h-4 w-4 text-cyan-200" />
                        ) : null}
                      </a>
                    ))}
                  </nav>

                  <div className="grid gap-3">
                    <Button asChild className="w-full">
                      <a href="#contact" onClick={closeMenu}>
                        Let&apos;s Work Together
                      </a>
                    </Button>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <Button asChild variant="secondary" className="w-full">
                        <a href="#projects" onClick={closeMenu}>
                          View Projects
                        </a>
                      </Button>
                      <Button asChild variant="ghost" className="w-full">
                        <a href={siteConfig.hireUrl} onClick={closeMenu}>
                          Hire me
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
