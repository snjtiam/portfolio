import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { projectsContent } from "@/content/portfolio";
import { iconMap } from "@/lib/icon-map";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

type ProjectsSectionProps = {
  id?: string;
  showHeading?: boolean;
  className?: string;
};

export function ProjectsSection({
  id = "projects",
  showHeading = true,
  className,
}: ProjectsSectionProps) {
  return (
    <SectionShell
      id={id}
      eyebrow={projectsContent.eyebrow}
      title={projectsContent.title}
      description={projectsContent.description}
      className={cn("bg-gradient-to-b from-white/[0.018] to-transparent", className)}
      showHeading={showHeading}
    >
      <div className="grid gap-6 lg:grid-cols-2 2xl:grid-cols-3">
        {projectsContent.items.map((project, index) => {
          const Icon = iconMap[project.icon];

          return (
            <Reveal
              key={project.name}
              delay={0.07 * (index + 1)}
              hover
              hoverY={9}
              hoverScale={1.012}
              className="h-full"
            >
              <Card className="group flex h-full flex-col overflow-hidden border-white/10 transition duration-300 hover:border-cyan-300/18">
                <div className="relative border-b border-white/10 bg-gradient-to-br from-white/[0.1] via-white/[0.04] to-transparent px-5 py-5 sm:px-6 sm:py-6">
                  <div
                    aria-hidden
                    className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-400/18 blur-3xl"
                  />
                  <div className="relative space-y-4 sm:space-y-5">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/70 text-cyan-100">
                        <Icon className="h-5 w-5" />
                      </span>
                      <p className="min-w-0 break-normal text-[0.68rem] uppercase tracking-[0.2em] text-foreground/45 sm:text-xs sm:tracking-[0.24em]">
                        {project.category}
                      </p>
                    </div>
                    <div className="min-w-0 space-y-3">
                      <h3 className="break-words text-[1.55rem] font-semibold leading-[1.08] text-foreground sm:text-2xl">
                        {project.name}
                      </h3>
                      <p className="max-w-xl break-words text-sm leading-6 text-teal-100/88">
                        {project.positioning}
                      </p>
                    </div>
                  </div>
                </div>
                <CardHeader className="space-y-4">
                  {project.metric ? (
                    <div className="rounded-[20px] border border-cyan-300/18 bg-cyan-300/10 px-4 py-3">
                      <p className="text-sm font-semibold text-cyan-100">{project.metric.value}</p>
                      <p className="mt-1 break-words text-[0.72rem] leading-5 text-cyan-100/72">
                        {project.metric.label}
                      </p>
                    </div>
                  ) : null}
                  <CardDescription className="break-words text-[0.98rem] leading-7 text-foreground/72 sm:text-base">
                    {project.summary}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-6">
                  <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">
                      Engineering challenges solved
                    </p>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-foreground/72">
                      {project.challenges.map((challenge) => (
                        <li key={challenge} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-300" />
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-[24px] border border-cyan-300/12 bg-cyan-300/[0.06] p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/72">
                      Business / product impact
                    </p>
                    <p className="mt-4 text-sm leading-6 text-foreground/82">{project.impact}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-foreground/60 transition duration-300 group-hover:border-white/15 group-hover:bg-white/[0.05]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="secondary" className="w-full justify-between">
                    <Link href={project.ctaHref}>
                      {project.ctaLabel}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
