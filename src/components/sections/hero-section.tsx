import { ArrowRight, Sparkles } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { heroMetrics, heroSignals, siteConfig } from "@/content/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function HeroSection() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden pb-16 pt-24 sm:pb-20 sm:pt-28 lg:pb-24 lg:pt-32"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal className="space-y-8">
            <div className="space-y-6">
              <Badge className="gap-2 tracking-[0.14em]">
                <Sparkles className="h-3.5 w-3.5" />
                {siteConfig.availability}
              </Badge>
              <div className="space-y-5">
                <p className="text-sm uppercase tracking-[0.32em] text-foreground/45">
                  {siteConfig.role}
                </p>
                <h1
                  id="hero-title"
                  className="max-w-4xl text-5xl font-semibold leading-[0.95] text-foreground sm:text-6xl lg:text-7xl"
                >
                  <span className="text-gradient">{siteConfig.headline}</span>
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-foreground/70 sm:text-xl">
                  {siteConfig.intro}
                </p>
                <p className="max-w-2xl text-base leading-7 text-foreground/60">
                  {siteConfig.secondaryIntro}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href="#contact">
                  Book a call
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href="#projects">View projects</a>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <a href={siteConfig.hireUrl}>Hire me</a>
              </Button>
            </div>

            <dl className="grid gap-4 sm:grid-cols-3">
              {heroMetrics.map((metric, index) => (
                <Reveal key={metric.label} delay={0.08 * (index + 1)}>
                  <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
                    <dt className="text-sm text-foreground/55">{metric.label}</dt>
                    <dd className="mt-3 text-3xl font-semibold text-foreground">{metric.value}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative">
              <div
                aria-hidden
                className="absolute left-8 top-0 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl"
              />
              <div
                aria-hidden
                className="absolute bottom-2 right-6 h-40 w-40 rounded-full bg-teal-400/15 blur-3xl"
              />

              <Card className="relative overflow-hidden bg-white/[0.045]">
                <div className="hero-grid absolute inset-0 opacity-50" aria-hidden />
                <CardHeader className="relative pb-5">
                  <div className="flex items-start justify-between gap-6">
                    <div className="space-y-3">
                      <Badge variant="secondary">Premium mobile delivery</Badge>
                      <CardTitle className="text-2xl sm:text-3xl">
                        A senior partner for product teams that need momentum without mess.
                      </CardTitle>
                    </div>
                    <div className="hidden rounded-full border border-white/10 bg-white/5 p-3 text-foreground/60 sm:block">
                      <Sparkles className="h-5 w-5" />
                    </div>
                  </div>
                  <CardDescription className="max-w-xl text-base">
                    Useful when you need to move from strategy into execution fast, or when the
                    app exists but delivery confidence does not.
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative grid gap-4 md:grid-cols-2">
                  {heroSignals.map((signal, index) => (
                    <Reveal key={signal.title} delay={0.12 + index * 0.08}>
                      <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
                        <h3 className="text-base font-medium text-foreground">{signal.title}</h3>
                        <ul className="mt-4 space-y-3 text-sm leading-6 text-foreground/70">
                          {signal.items.map((item) => (
                            <li key={item} className="flex gap-3">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-300" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Reveal>
                  ))}
                </CardContent>
              </Card>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

