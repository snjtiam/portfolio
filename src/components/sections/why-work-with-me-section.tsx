import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { whyWorkWithMe } from "@/content/portfolio";
import { iconMap } from "@/lib/icon-map";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function WhyWorkWithMeSection() {
  return (
    <SectionShell
      id="why-work-with-me"
      eyebrow="Why Work With Me"
      title="What sets me apart from generic React Native developers."
      description="I focus on production quality, performance, maintainability, architecture, and collaboration so the mobile app is easier to ship and easier to keep growing."
      className="bg-gradient-to-b from-transparent via-white/[0.012] to-transparent"
    >
      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {whyWorkWithMe.map((item, index) => {
          const Icon = iconMap[item.icon];

          return (
            <Reveal
              key={item.title}
              delay={0.06 * (index + 1)}
              hover
              hoverY={7}
              hoverScale={1.01}
            >
              <Card className="group h-full">
                <CardHeader className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-200 transition duration-300 group-hover:border-cyan-300/20 group-hover:bg-cyan-300/10 group-hover:text-cyan-100">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-3">
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="h-px w-full bg-gradient-to-r from-white/12 via-white/6 to-transparent" />
                </CardContent>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
