import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { skillGroups } from "@/content/portfolio";
import { iconMap } from "@/lib/icon-map";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function SkillsSection() {
  return (
    <SectionShell
      id="skills"
      eyebrow="Skills"
      title="A balanced mix of shipping velocity, maintainable architecture, and product sense."
      description="The content structure groups skills by capability rather than dumping one long logo list. That makes the section easier to skim for both clients and hiring teams."
    >
      <div className="grid gap-6 xl:grid-cols-2">
        {skillGroups.map((group, index) => {
          const Icon = iconMap[group.icon];

          return (
            <Reveal key={group.title} delay={0.06 * (index + 1)}>
              <Card className="h-full">
                <CardHeader className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-200">
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
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-foreground/75"
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

