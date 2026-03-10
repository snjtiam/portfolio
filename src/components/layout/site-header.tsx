"use client";

import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { navItems, siteConfig } from "@/content/portfolio";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container className="relative">
        <div className="mt-4 rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 shadow-glow backdrop-blur-xl sm:px-6">
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
                <span className="block truncate text-xs text-foreground/60">
                  {siteConfig.role}
                </span>
              </span>
            </a>

            <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-foreground/70 transition hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <Button asChild variant="secondary" size="sm">
                <a href="#projects">View projects</a>
              </Button>
              <Button asChild size="sm">
                <a href="#contact">Book a call</a>
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
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={cn(
                "absolute inset-x-0 top-[calc(100%+0.75rem)] rounded-3xl border border-white/10",
                "bg-slate-950/95 p-5 shadow-glow backdrop-blur-2xl lg:hidden",
              )}
            >
              <nav className="flex flex-col gap-2" aria-label="Mobile">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl px-4 py-3 text-sm text-foreground/80 transition hover:bg-white/5 hover:text-foreground"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <Button asChild variant="secondary" className="w-full">
                  <a href="#projects" onClick={closeMenu}>
                    View projects
                  </a>
                </Button>
                <Button asChild className="w-full">
                  <a href="#contact" onClick={closeMenu}>
                    Book a call
                  </a>
                </Button>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </Container>
    </header>
  );
}

