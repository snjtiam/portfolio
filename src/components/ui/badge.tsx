import type { HTMLAttributes } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-[0.18em] uppercase",
  {
    variants: {
      variant: {
        default: "border-teal-400/20 bg-teal-400/10 text-teal-100",
        secondary: "border-white/10 bg-white/5 text-foreground/70",
        outline: "border-white/10 bg-transparent text-foreground/70",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type BadgeProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

