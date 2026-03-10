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
}: SectionShellProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn("relative scroll-mt-28 py-24 sm:py-28 lg:py-32", className)}
    >
      <div aria-hidden className="section-divider absolute inset-x-0 top-0 h-px opacity-80" />
      <div aria-hidden className="section-wash absolute inset-0 pointer-events-none opacity-70" />
      <Container>
        <div className={cn("relative space-y-14 sm:space-y-16", contentClassName)}>
          <SectionHeading
            id={`${id}-title`}
            eyebrow={eyebrow}
            title={title}
            description={description}
            align={headingAlign}
          />
          {children}
        </div>
      </Container>
    </section>
  );
}
