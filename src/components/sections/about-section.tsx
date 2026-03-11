import { cn } from "@/lib/utils";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { aboutContent } from "@/content/portfolio";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type AboutSectionProps = {
  id?: string;
  showHeading?: boolean;
  className?: string;
};

export function AboutSection({
  id = "about",
  showHeading = true,
  className,
}: AboutSectionProps) {
  return (
    <SectionShell
      id={id}
      eyebrow={aboutContent.eyebrow}
      title={aboutContent.title}
      description={aboutContent.description}
      className={cn("bg-gradient-to-b from-white/[0.018] to-transparent", className)}
      showHeading={showHeading}
    >
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="space-y-6" hover hoverY={6} hoverScale={1.008}>
          <Card className="h-full">
            <CardContent className="space-y-6 p-6 sm:p-8">
              {aboutContent.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={
                    index === 0
                      ? "text-lg leading-8 text-foreground/75 sm:text-[1.15rem]"
                      : "text-base leading-7 text-foreground/65"
                  }
                >
                  {paragraph}
                </p>
              ))}
              <div className="flex flex-wrap gap-3">
                {aboutContent.focusAreas.map((area) => (
                  <Badge key={area} variant="secondary" className="tracking-[0.08em] normal-case">
                    {area}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-3 xl:grid-cols-1">
          {aboutContent.stats.map((stat, index) => (
            <Reveal key={stat.label} delay={0.08 * (index + 1)} hover hoverY={5} hoverScale={1.008}>
              <Card className="h-full">
                <CardContent className="flex h-full min-h-[12.5rem] flex-col justify-center gap-4 p-6 sm:p-7">
                  <div className="space-y-2">
                    <p className="text-3xl font-semibold leading-none text-foreground sm:text-[2.1rem]">
                      {stat.value}
                    </p>
                    <p className="text-[0.72rem] uppercase leading-5 tracking-[0.18em] text-foreground/45 sm:text-xs sm:tracking-[0.22em]">
                      {stat.label}
                    </p>
                  </div>
                  <p className="max-w-[42ch] text-sm leading-6 text-foreground/65 xl:max-w-none">
                    {stat.detail}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
