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
      title="How this portfolio positions mobile expertise for the right opportunities."
      description="Each service card is reusable and content-driven. Swap the copy in the content file without touching the layout."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon];

          return (
            <Reveal key={service.title} delay={0.06 * (index + 1)}>
              <Card className="h-full transition duration-300 hover:-translate-y-1 hover:border-teal-400/25">
                <CardHeader className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-teal-200">
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
