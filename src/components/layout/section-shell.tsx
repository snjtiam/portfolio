import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

type SectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  headingAlign?: "left" | "center";
  showHeading?: boolean;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  contentClassName,
  headingAlign = "left",
  showHeading = true,
}: SectionShellProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn("relative scroll-mt-24 py-20 sm:scroll-mt-28 sm:py-24 lg:scroll-mt-32 lg:py-28 xl:py-32", className)}
    >
      <div aria-hidden className="section-divider absolute inset-x-0 top-0 h-px opacity-80" />
      <div aria-hidden className="section-wash absolute inset-0 pointer-events-none opacity-70" />
      <Container>
        <div
          className={cn(
            "relative",
            showHeading ? "space-y-12 sm:space-y-14 lg:space-y-16" : "space-y-0",
            contentClassName,
          )}
        >
          {showHeading ? (
            <SectionHeading
              id={`${id}-title`}
              eyebrow={eyebrow}
              title={title}
              description={description}
              align={headingAlign}
            />
          ) : null}
          {children}
        </div>
      </Container>
    </section>
  );
}
