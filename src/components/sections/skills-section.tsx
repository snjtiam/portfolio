import { cn } from "@/lib/utils";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { skillsContent } from "@/content/portfolio";
import { iconMap } from "@/lib/icon-map";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type SkillsSectionProps = {
  id?: string;
  showHeading?: boolean;
  className?: string;
};

export function SkillsSection({
  id = "skills",
  showHeading = true,
  className,
}: SkillsSectionProps) {
  return (
    <SectionShell
      id={id}
      eyebrow={skillsContent.eyebrow}
      title={skillsContent.title}
      description={skillsContent.description}
      className={cn(className)}
      showHeading={showHeading}
    >
      <div className="grid gap-6 md:grid-cols-2 2xl:grid-cols-3">
        {skillsContent.groups.map((group, index) => {
          const Icon = iconMap[group.icon];

          return (
            <Reveal
              key={group.title}
              delay={0.06 * (index + 1)}
              hover
              hoverY={7}
              hoverScale={1.01}
              className="h-full"
            >
              <Card className="group h-full">
                <CardHeader className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-200 transition duration-300 group-hover:border-cyan-300/20 group-hover:bg-cyan-300/10 group-hover:text-cyan-100">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-3">
                    <CardTitle>{group.title}</CardTitle>
                    <CardDescription>{group.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-foreground/75 transition duration-300 group-hover:border-white/15 group-hover:bg-white/[0.05]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
