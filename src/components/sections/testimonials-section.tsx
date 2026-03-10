import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { testimonialPlaceholders } from "@/content/portfolio";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function TestimonialsSection() {
  return (
    <SectionShell
      id="testimonials"
      eyebrow="Testimonials"
      title="A placeholder section ready for social proof once client quotes are available."
      description="Until real testimonials are added, the layout still preserves visual rhythm and signals where proof should live."
      className="bg-gradient-to-b from-transparent via-white/[0.012] to-transparent"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {testimonialPlaceholders.map((item, index) => (
          <Reveal
            key={item.title}
            delay={0.06 * (index + 1)}
            hover
            hoverY={6}
            hoverScale={1.008}
          >
            <Card className="h-full">
              <CardHeader className="space-y-4">
                <Badge variant="secondary">{item.role}</Badge>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription className="text-base leading-7">{item.prompt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-4 text-sm text-foreground/45">
                  Replace this card with a short quote, name, role, company, and optionally a
                  project result.
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
