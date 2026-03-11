import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { servicesContent } from "@/content/portfolio";
import { iconMap } from "@/lib/icon-map";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type ServicesSectionProps = {
  id?: string;
  showHeading?: boolean;
  className?: string;
};

export function ServicesSection({
  id = "services",
  showHeading = true,
  className,
}: ServicesSectionProps) {
  return (
    <SectionShell
      id={id}
      eyebrow={servicesContent.eyebrow}
      title={servicesContent.title}
      description={servicesContent.description}
      className={cn("bg-gradient-to-b from-transparent via-white/[0.012] to-transparent", className)}
      showHeading={showHeading}
    >
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal hover hoverY={6} hoverScale={1.006}>
          <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))] p-6 shadow-[0_18px_60px_rgba(2,8,23,0.24)] backdrop-blur-2xl sm:p-7">
            <p className="max-w-3xl text-lg leading-8 text-foreground/78 sm:text-[1.15rem]">
              {servicesContent.leadIn}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.06} hover hoverY={6} hoverScale={1.006}>
          <div className="rounded-[30px] border border-white/10 bg-slate-950/55 p-6 shadow-[0_18px_60px_rgba(2,8,23,0.22)] backdrop-blur-2xl sm:p-7">
            <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">Best fit for</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {servicesContent.audienceSignals.map((signal) => (
                <Badge key={signal} variant="secondary" className="normal-case tracking-[0.08em]">
                  {signal}
                </Badge>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="grid gap-6 md:grid-cols-2 2xl:grid-cols-3">
        {servicesContent.items.map((service, index) => {
          const Icon = iconMap[service.icon];

          return (
            <Reveal
              key={service.title}
              delay={0.06 * (index + 1)}
              hover
              hoverY={8}
              hoverScale={1.01}
              className="h-full"
            >
              <Card className="group h-full border-white/10 transition duration-300 hover:border-teal-300/18">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.12),transparent_34%)] opacity-0 transition duration-300 group-hover:opacity-100"
                />
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between gap-3 sm:gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-teal-200 transition duration-300 group-hover:-translate-y-0.5 group-hover:border-teal-300/20 group-hover:bg-teal-300/10 group-hover:text-teal-100">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/[0.03] p-2 text-foreground/40 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:border-teal-300/20 group-hover:bg-teal-300/10 group-hover:text-teal-100">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <CardTitle className="text-[1.3rem] leading-[1.08] sm:text-[1.4rem]">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-7 text-foreground/72">
                      {service.valueProp}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">
                    Practical outcomes
                  </p>
                  <ul className="space-y-3 text-sm leading-6 text-foreground/70">
                    {service.outcomes.map((outcome) => (
                      <li key={outcome} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
