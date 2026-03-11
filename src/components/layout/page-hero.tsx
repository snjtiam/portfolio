import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import type { BreadcrumbItem, PageIntroContent } from "@/content/pages";
import { Button } from "@/components/ui/button";

type PageHeroProps = {
  breadcrumbs: BreadcrumbItem[];
  content: PageIntroContent;
};

function isInternalLink(href: string) {
  return href.startsWith("/") || href.startsWith("#");
}

export function PageHero({ breadcrumbs, content }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pb-10 pt-24 sm:pb-12 sm:pt-28 lg:pb-14 lg:pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-10rem] top-10 h-72 w-72 rounded-full bg-teal-300/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-8rem] top-16 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"
      />
      <Container>
        <Reveal className="space-y-8" y={24}>
          <Breadcrumbs items={breadcrumbs} />
          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr] xl:items-center">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.28em] text-foreground/45">
                {content.eyebrow}
              </p>
              <h1 className="max-w-5xl text-balance text-[2.35rem] font-semibold leading-[0.97] text-foreground sm:text-[3rem] md:text-[3.65rem] xl:text-[4.35rem]">
                <span className="text-gradient">{content.title}</span>
              </h1>
              <p className="max-w-3xl text-[1rem] leading-7 text-foreground/72 sm:text-[1.14rem] sm:leading-8">
                {content.description}
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))] p-6 shadow-[0_18px_60px_rgba(2,8,23,0.24)] backdrop-blur-2xl sm:p-7">
              {content.supportingText ? (
                <p className="text-sm leading-7 text-foreground/66 sm:text-base">{content.supportingText}</p>
              ) : null}

              {content.primaryCta || content.secondaryCta ? (
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  {content.primaryCta ? (
                    <Button asChild size="lg" className="w-full sm:w-auto">
                      {isInternalLink(content.primaryCta.href) ? (
                        <Link href={content.primaryCta.href}>
                          {content.primaryCta.label}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      ) : (
                        <a href={content.primaryCta.href}>
                          {content.primaryCta.label}
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      )}
                    </Button>
                  ) : null}

                  {content.secondaryCta ? (
                    <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
                      {isInternalLink(content.secondaryCta.href) ? (
                        <Link href={content.secondaryCta.href}>{content.secondaryCta.label}</Link>
                      ) : (
                        <a
                          href={content.secondaryCta.href}
                          target={content.secondaryCta.newTab ? "_blank" : undefined}
                          rel={content.secondaryCta.newTab ? "noreferrer" : undefined}
                        >
                          {content.secondaryCta.label}
                        </a>
                      )}
                    </Button>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
