import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { projectDetailCta } from "@/content/pages";
import type { Project } from "@/content/portfolio";
import { iconMap } from "@/lib/icon-map";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type ProjectDetailProps = {
  project: Project;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  const Icon = iconMap[project.icon];

  return (
    <section className="relative pb-20 sm:pb-24 lg:pb-28 xl:pb-32">
      <Container>
        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <Reveal hover hoverY={6} hoverScale={1.006}>
            <Card className="h-full border-white/10">
              <CardHeader className="space-y-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-cyan-100">
                    <Icon className="h-6 w-6" />
                  </span>
                  {project.metric ? (
                    <div className="rounded-[22px] border border-white/10 bg-slate-950/78 px-4 py-3 text-right shadow-[0_16px_36px_rgba(2,8,23,0.28)]">
                      <p className="text-lg font-semibold text-foreground">{project.metric.value}</p>
                      <p className="mt-1 break-normal text-[0.72rem] leading-5 text-foreground/52">
                        {project.metric.label}
                      </p>
                    </div>
                  ) : null}
                </div>
                <div className="space-y-4">
                  <p className="break-normal text-xs uppercase tracking-[0.24em] text-foreground/45">
                    {project.category}
                  </p>
                  <CardTitle className="text-[2rem] leading-[1.03] sm:text-[2.4rem]">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-base leading-7 text-teal-100/82">
                    {project.positioning}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-base leading-7 text-foreground/72">{project.detailIntro}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs uppercase tracking-[0.16em] text-foreground/60"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.08} hover hoverY={6} hoverScale={1.006}>
            <Card className="h-full border-cyan-300/12 bg-cyan-300/[0.06]">
              <CardHeader>
                <CardTitle>Business and product impact</CardTitle>
                <CardDescription className="text-sm uppercase tracking-[0.24em] text-cyan-100/60">
                  Outcome-focused delivery
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-base leading-7 text-foreground/82">{project.impact}</p>
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/60">Results</p>
                  <ul className="space-y-3 text-sm leading-6 text-foreground/78">
                    {project.results.map((result) => (
                      <li key={result} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-200" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href={projectDetailCta.href}>
                    {projectDetailCta.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <Reveal hover hoverY={6} hoverScale={1.006}>
            <Card>
              <CardHeader>
                <CardTitle>Engineering challenges solved</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-sm leading-6 text-foreground/72">
                  {project.challenges.map((challenge) => (
                    <li key={challenge} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-300" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>

          <div className="grid gap-6">
            {project.detailSections.map((section, index) => (
              <Reveal
                key={section.title}
                delay={0.06 * (index + 1)}
                hover
                hoverY={5}
                hoverScale={1.006}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-7 text-foreground/70">{section.description}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
