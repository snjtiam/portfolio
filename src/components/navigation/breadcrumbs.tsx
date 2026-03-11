import Link from "next/link";

import type { BreadcrumbItem } from "@/content/pages";

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-foreground/48">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <span key={`${item.label}-${item.href ?? index}`} className="inline-flex items-center gap-2">
            {item.href && !isLast ? (
              <Link href={item.href} className="transition hover:text-foreground">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "text-foreground/72" : undefined}>{item.label}</span>
            )}
            {!isLast ? <span aria-hidden className="text-foreground/28">/</span> : null}
          </span>
        );
      })}
    </nav>
  );
}
