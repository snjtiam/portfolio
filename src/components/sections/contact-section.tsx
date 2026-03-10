import { ArrowRight } from "lucide-react";

import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { contactContent, contactMethods, socialLinks } from "@/content/portfolio";
import { iconMap } from "@/lib/icon-map";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ContactSection() {
  return (
    <SectionShell
      id="contact"
      eyebrow={contactContent.eyebrow}
      title={contactContent.title}
      description={contactContent.description}
      className="bg-gradient-to-b from-white/[0.02] to-transparent"
    >
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal className="h-full" hover hoverY={7} hoverScale={1.008}>
          <Card className="h-full overflow-hidden border-white/12">
            <CardHeader className="space-y-5">
              <Badge className="gap-2 normal-case tracking-[0.08em]">
                {contactContent.availabilityBadge}
              </Badge>
              <CardTitle className="text-3xl sm:text-4xl">{contactContent.cardTitle}</CardTitle>
              <CardDescription className="text-base leading-7">
                {contactContent.cardDescription}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href={contactContent.primaryCta.href}>
                    {contactContent.primaryCta.label}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <a href={contactContent.secondaryCta.href}>{contactContent.secondaryCta.label}</a>
                </Button>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.icon];

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground/75 transition hover:bg-white/[0.05] hover:text-foreground"
                    >
                      <Icon className="h-4 w-4 text-cyan-200" />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </Reveal>

        <div className="grid gap-6">
          <Reveal delay={0.08} hover hoverY={6} hoverScale={1.008}>
            <Card>
              <CardHeader>
                <CardTitle>{contactContent.methodsTitle}</CardTitle>
                <CardDescription>{contactContent.methodsDescription}</CardDescription>
              </CardHeader>
              <CardContent>
                <address className="grid gap-3 not-italic">
                  {contactMethods.map((method) => {
                    const Icon = iconMap[method.icon];

                    return (
                      <a
                        key={method.label}
                        href={method.href}
                        target={method.href.startsWith("http") ? "_blank" : undefined}
                        rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                        className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 transition hover:bg-white/[0.05]"
                      >
                        <span className="mt-0.5 rounded-full border border-white/10 bg-white/5 p-2 text-cyan-200">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="space-y-1">
                          <span className="block text-xs uppercase tracking-[0.24em] text-foreground/45">
                            {method.label}
                          </span>
                          <span className="block text-sm text-foreground/75">{method.value}</span>
                        </span>
                      </a>
                    );
                  })}
                </address>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.14} hover hoverY={6} hoverScale={1.008}>
            <Card>
              <CardHeader>
                <CardTitle>{contactContent.processTitle}</CardTitle>
                <CardDescription>{contactContent.processDescription}</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  {contactContent.processSteps.map((step, index) => (
                    <li key={step} className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-teal-300/30 bg-teal-300/10 text-sm font-medium text-teal-100">
                        {index + 1}
                      </span>
                      <p className="text-sm leading-6 text-foreground/70">{step}</p>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
