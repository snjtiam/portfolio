import { ArrowRight } from "lucide-react";

import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { projects } from "@/content/portfolio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ProjectsSection() {
  return (
    <SectionShell
      id="projects"
      eyebrow="Selected Projects"
      title="Case-study style placeholders tuned for mobile product work."
      description="These project cards are ready for real screenshots or links later. For now, the layout emphasizes results, stack, and delivery context."
    >
      <div className="grid gap-6 xl:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={0.07 * (index + 1)}>
            <Card className="flex h-full flex-col overflow-hidden">
              <div className="relative border-b border-white/10 bg-gradient-to-br from-white/[0.09] via-white/[0.03] to-transparent px-6 py-6">
                <div
                  aria-hidden
                  className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-400/15 blur-3xl"
                />
                <p className="relative text-sm uppercase tracking-[0.24em] text-foreground/45">
                  {project.category}
                </p>
                <h3 className="relative mt-4 text-2xl font-semibold text-foreground">
                  {project.name}
                </h3>
                <p className="relative mt-4 text-sm text-teal-100/90">{project.timeline}</p>
              </div>
              <CardHeader className="space-y-3">
                <CardDescription className="text-base leading-7">{project.summary}</CardDescription>
                <CardTitle className="text-lg text-foreground">{project.impact}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-6">
                <ul className="space-y-3 text-sm leading-6 text-foreground/70">
                  {project.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-300" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-foreground/60"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="secondary" className="w-full justify-between">
                  <a href={project.ctaHref}>
                    {project.ctaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

