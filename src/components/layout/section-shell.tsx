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
      className={cn("scroll-mt-28 py-20 sm:py-24 lg:py-28", className)}
    >
      <Container>
        <div className={cn("space-y-12", contentClassName)}>
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

