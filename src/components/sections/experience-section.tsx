import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { experience } from "@/content/portfolio";
import { Card, CardContent } from "@/components/ui/card";

export function ExperienceSection() {
  return (
    <SectionShell
      id="experience"
      eyebrow="Experience"
      title="Professional experience across product delivery, mobile leadership, and hands-on engineering."
      description="Use the timeline to show where you worked, how long you were there, and the kinds of results you were trusted to deliver."
    >
      <div className="relative space-y-6 before:absolute before:left-[15px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-white/10 sm:before:left-6">
        {experience.map((item, index) => (
          <Reveal
            key={`${item.company}-${item.period}`}
            delay={0.08 * (index + 1)}
            hover
            hoverY={6}
            hoverScale={1.008}
          >
            <div className="relative pl-10 sm:pl-16">
              <span className="absolute left-0 top-6 h-8 w-8 rounded-full border border-teal-300/30 bg-teal-300/10 sm:left-2" />
              <Card>
                <CardContent className="space-y-5 p-6">
                  <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-foreground/45">
                        {item.company}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-foreground">{item.role}</h3>
                    </div>
                    <div className="space-y-1 text-sm text-foreground/60 lg:text-right">
                      <p>{item.period}</p>
                      <p>{item.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-sm leading-6 text-foreground/70">
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
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
