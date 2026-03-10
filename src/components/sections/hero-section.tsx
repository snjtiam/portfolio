"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Layers3, ShieldCheck, Sparkles, Workflow, Zap } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { heroContent } from "@/content/portfolio";
import { iconMap } from "@/lib/icon-map";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const highlightIcons = [Layers3, Zap, Workflow];

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden pb-20 pt-28 sm:pb-24 sm:pt-32 lg:pb-28 lg:pt-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/14 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-8rem] top-10 h-80 w-80 rounded-full bg-teal-300/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10rem] top-20 h-[26rem] w-[26rem] rounded-full bg-cyan-400/10 blur-3xl"
      />
      <Container>
        <div className="grid gap-14 xl:grid-cols-[1.04fr_0.96fr] xl:items-center">
          <Reveal className="space-y-10" y={30}>
            <div className="space-y-7">
              <div className="flex flex-wrap items-center gap-3">
                <Badge className="gap-2 tracking-[0.14em]">
                  <Sparkles className="h-3.5 w-3.5" />
                  {heroContent.badge}
                </Badge>
                <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.22em] text-foreground/55">
                  {heroContent.contextLabel}
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-xs uppercase tracking-[0.34em] text-foreground/42 sm:text-sm">
                  {heroContent.roleLine}
                </p>
                <h1
                  id="hero-title"
                  className="text-balance max-w-5xl text-[3.25rem] font-semibold leading-[0.92] text-foreground sm:text-[4.35rem] lg:text-[5.4rem]"
                >
                  <span className="text-gradient">{heroContent.headline}</span>
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-foreground/72 sm:text-[1.35rem] sm:leading-9">
                  {heroContent.intro}
                </p>
                <p className="max-w-2xl text-base leading-8 text-foreground/58 sm:text-lg">
                  {heroContent.secondaryIntro}
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {heroContent.highlights.map((item, index) => {
                const Icon = highlightIcons[index] ?? Workflow;

                return (
                  <Reveal key={item} delay={0.06 * (index + 1)} hover hoverY={4} hoverScale={1.006}>
                    <div className="rounded-[24px] border border-white/10 bg-white/[0.035] p-4 shadow-[0_14px_40px_rgba(2,8,23,0.24)] backdrop-blur-xl">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-cyan-200">
                        <Icon className="h-4 w-4" />
                      </div>
                      <p className="text-sm leading-6 text-foreground/68">{item}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg">
                <a href={heroContent.primaryCta.href}>
                  {heroContent.primaryCta.label}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href={heroContent.secondaryCta.href}>{heroContent.secondaryCta.label}</a>
              </Button>
            </div>

            <dl className="grid gap-4 sm:grid-cols-3">
              {heroContent.metrics.map((metric, index) => (
                <Reveal
                  key={metric.label}
                  delay={0.08 * (index + 1)}
                  hover
                  hoverY={5}
                  hoverScale={1.008}
                >
                  <div className="rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))] p-5 backdrop-blur-xl">
                    <dt className="text-xs uppercase tracking-[0.24em] text-foreground/45">
                      {metric.label}
                    </dt>
                    <dd className="mt-4 text-3xl font-semibold text-foreground sm:text-[2.1rem]">
                      {metric.value}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.12} className="xl:pl-6">
            <div className="relative mx-auto max-w-xl">
              <motion.div
                aria-hidden
                className="absolute -left-3 top-10 hidden rounded-full border border-white/10 bg-slate-950/80 px-4 py-2 text-xs uppercase tracking-[0.22em] text-cyan-100/85 shadow-[0_16px_36px_rgba(2,8,23,0.35)] sm:block"
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, -10, 0],
                      }
                }
                transition={{ duration: 7.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                {heroContent.floatingLabels[0]}
              </motion.div>
              <motion.div
                aria-hidden
                className="absolute -right-4 top-2 hidden rounded-full border border-white/10 bg-slate-950/80 px-4 py-2 text-xs uppercase tracking-[0.22em] text-teal-100/85 shadow-[0_16px_36px_rgba(2,8,23,0.35)] sm:block"
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, 10, 0],
                      }
                }
                transition={{ duration: 8.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                {heroContent.floatingLabels[1]}
              </motion.div>

              <Card className="relative overflow-hidden border-white/12 bg-[linear-gradient(180deg,rgba(15,23,42,0.82),rgba(4,11,23,0.92))]">
                <div className="hero-grid absolute inset-0 opacity-35" aria-hidden />
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-cyan-300/10 to-transparent"
                />
                <CardHeader className="relative space-y-5 pb-4">
                  <div className="flex items-center justify-between gap-4">
                    <Badge variant="secondary" className="tracking-[0.18em]">
                      {heroContent.panelBadge}
                    </Badge>
                    <div className="rounded-full border border-white/10 bg-white/[0.04] p-3 text-cyan-100">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <CardTitle className="text-balance text-3xl leading-[1.02] sm:text-[2.35rem]">
                      {heroContent.panelTitle}
                    </CardTitle>
                    <CardDescription className="max-w-lg text-base leading-7 text-foreground/64">
                      {heroContent.panelDescription}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="relative space-y-4">
                  <div className="grid gap-3">
                    {heroContent.pillars.map((pillar, index) => {
                      const Icon = iconMap[pillar.icon];

                      return (
                        <Reveal
                          key={pillar.title}
                          delay={0.12 + index * 0.08}
                          hover
                          hoverY={6}
                          hoverScale={1.01}
                        >
                          <div className="group rounded-[24px] border border-white/10 bg-slate-950/55 p-4 transition duration-300 hover:border-cyan-300/20 hover:bg-slate-950/72">
                            <div className="flex items-start gap-4">
                              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-cyan-200 transition duration-300 group-hover:border-cyan-300/20 group-hover:bg-cyan-300/10 group-hover:text-cyan-100">
                                <Icon className="h-[18px] w-[18px]" />
                              </div>
                              <div className="space-y-2">
                                <h3 className="text-[1rem] font-medium text-foreground">
                                  {pillar.title}
                                </h3>
                                <p className="text-sm leading-6 text-foreground/66">
                                  {pillar.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Reveal>
                      );
                    })}
                  </div>

                  <div className="grid gap-3 md:grid-cols-2">
                    {heroContent.signals.map((signal, index) => (
                      <Reveal
                        key={signal.title}
                        delay={0.18 + index * 0.08}
                        hover
                        hoverY={4}
                        hoverScale={1.006}
                      >
                        <div className="rounded-[24px] border border-white/10 bg-white/[0.035] p-5">
                          <h3 className="text-sm uppercase tracking-[0.22em] text-foreground/48">
                            {signal.title}
                          </h3>
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
                  </div>
                </CardContent>
              </Card>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
