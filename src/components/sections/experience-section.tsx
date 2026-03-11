import { cn } from "@/lib/utils";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { experienceContent } from "@/content/portfolio";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type ExperienceSectionProps = {
  id?: string;
  showHeading?: boolean;
  className?: string;
};

export function ExperienceSection({
  id = "experience",
  showHeading = true,
  className,
}: ExperienceSectionProps) {
  return (
    <SectionShell
      id={id}
      eyebrow={experienceContent.eyebrow}
      title={experienceContent.title}
      description={experienceContent.description}
      className={cn(className)}
      showHeading={showHeading}
    >
      <div className="relative space-y-8 before:absolute before:left-[15px] before:top-3 before:h-[calc(100%-1.5rem)] before:w-px before:bg-gradient-to-b before:from-white/25 before:via-white/12 before:to-transparent lg:before:left-[10.25rem]">
        {experienceContent.items.map((item, index) => (
          <Reveal
            key={`${item.company}-${item.period}`}
            delay={0.08 * (index + 1)}
            hover
            hoverY={6}
            hoverScale={1.008}
          >
            <div className="relative grid gap-4 lg:grid-cols-[8.5rem_1fr] lg:gap-8">
              <div className="pl-10 lg:pl-0 lg:pt-5">
                <Badge variant="outline" className="inline-flex normal-case tracking-[0.08em] text-foreground/70">
                  {item.period}
                </Badge>
              </div>

              <div className="relative pl-10 lg:pl-0">
                <span className="absolute left-0 top-5 h-8 w-8 rounded-full border border-teal-300/30 bg-teal-300/10 shadow-[0_0_0_6px_rgba(13,148,136,0.08)] lg:-left-[2.9rem]" />
                <Card className="group overflow-hidden border-white/10 transition duration-300 hover:border-teal-300/18">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.12),transparent_34%)] opacity-0 transition duration-300 group-hover:opacity-100"
                  />
                  <CardHeader className="space-y-4">
                    <div className="space-y-3">
                      <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">
                        {item.company}
                      </p>
                      <CardTitle className="text-[1.45rem] leading-[1.08] sm:text-[1.7rem] lg:text-[1.8rem]">
                        {item.role}
                      </CardTitle>
                    </div>
                    <CardDescription className="max-w-3xl text-base leading-7 text-foreground/72">
                      {item.summary}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">
                      Key contributions
                    </p>
                    <ul className="grid gap-3 text-sm leading-6 text-foreground/70">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
