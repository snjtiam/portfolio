import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { aboutStats, siteConfig } from "@/content/portfolio";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="About"
      title="Senior-level React Native execution with product judgment built in."
      description="This section is written as placeholder copy for a consultant-style portfolio. Replace it with your own story, metrics, and niche focus."
      className="bg-gradient-to-b from-white/[0.018] to-transparent"
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="space-y-6" hover hoverY={6} hoverScale={1.008}>
          <Card className="h-full">
            <CardContent className="space-y-6 p-6 sm:p-8">
              <p className="text-lg leading-8 text-foreground/75 sm:text-[1.15rem]">
                {siteConfig.name} helps ambitious teams ship React Native products that feel
                reliable, premium, and intentionally crafted. The work spans discovery, technical
                architecture, delivery, release systems, and growth-minded iteration.
              </p>
              <p className="text-base leading-7 text-foreground/65">
                The positioning is intentionally tuned for freelance clients, startup founders, and
                full-time hiring teams looking for someone who can contribute at both the
                implementation and product-shaping level.
              </p>
              <div className="flex flex-wrap gap-3">
                {siteConfig.focusAreas.map((area) => (
                  <Badge key={area} variant="secondary" className="tracking-[0.08em] normal-case">
                    {area}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </Reveal>

        <div className="grid gap-6">
          {aboutStats.map((stat, index) => (
            <Reveal key={stat.label} delay={0.08 * (index + 1)} hover hoverY={5} hoverScale={1.008}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <p className="text-3xl font-semibold text-foreground sm:text-[2.1rem]">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-foreground/65">{stat.label}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
