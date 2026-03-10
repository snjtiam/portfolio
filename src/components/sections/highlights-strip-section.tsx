import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { highlightsStrip } from "@/content/portfolio";
import { iconMap } from "@/lib/icon-map";

export function HighlightsStripSection() {
  return (
    <section
      id="highlights"
      aria-label="Trusted value highlights"
      className="relative pb-8 sm:pb-10"
    >
      <Container>
        <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-4 shadow-[0_18px_60px_rgba(2,8,23,0.25)] backdrop-blur-2xl sm:p-5">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {highlightsStrip.map((item, index) => {
              const Icon = iconMap[item.icon];

              return (
                <Reveal
                  key={item.title}
                  delay={0.05 * (index + 1)}
                  hover
                  hoverY={5}
                  hoverScale={1.008}
                >
                  <div className="flex h-full gap-4 rounded-[24px] border border-white/10 bg-slate-950/55 p-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-cyan-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-foreground">{item.title}</p>
                      <p className="text-sm leading-6 text-foreground/62">{item.detail}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

