import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex min-h-[44px] items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium touch-manipulation",
    "relative overflow-hidden will-change-transform transition-all duration-300 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
    "focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        default:
          "border border-white/12 bg-[linear-gradient(135deg,rgba(94,234,212,0.96),rgba(56,189,248,0.94))] text-slate-950 shadow-[0_18px_55px_rgba(20,184,166,0.24)] hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(20,184,166,0.28)]",
        secondary:
          "border border-white/10 bg-white/[0.045] text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.08]",
        ghost:
          "border border-transparent bg-transparent text-foreground/72 hover:-translate-y-0.5 hover:border-white/10 hover:bg-white/[0.05] hover:text-foreground",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-11 px-4 text-sm",
        lg: "h-12 px-5 text-[15px] sm:px-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
