import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { services } from "@/content/portfolio";
import { iconMap } from "@/lib/icon-map";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ServicesSection() {
  return (
    <SectionShell
      id="services"
      eyebrow="Services"
      title="Services built around serious React Native product work."
      description="This section is content-driven and maps directly to the kinds of mobile engineering support founders, CTOs, agencies, and recruiters usually care about."
      className="bg-gradient-to-b from-transparent via-white/[0.012] to-transparent"
    >
      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon];

          return (
            <Reveal
              key={service.title}
              delay={0.06 * (index + 1)}
              hover
              hoverY={8}
              hoverScale={1.01}
            >
              <Card className="group h-full border-white/10 transition duration-300 hover:border-teal-300/18">
                <CardHeader className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-teal-200 transition duration-300 group-hover:border-teal-300/20 group-hover:bg-teal-300/10 group-hover:text-teal-100">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-3">
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm leading-6 text-foreground/70">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
