import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { cn } from "@/lib/utils";

type SiteFrameProps = {
  children: ReactNode;
  mainClassName?: string;
};

export function SiteFrame({ children, mainClassName }: SiteFrameProps) {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className={cn("relative overflow-hidden", mainClassName)}>
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
