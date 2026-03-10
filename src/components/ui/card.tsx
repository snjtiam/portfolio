import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        [
          "relative isolate overflow-hidden rounded-[28px] border border-white/10",
          "bg-[linear-gradient(180deg,rgba(15,23,42,0.72),rgba(4,11,23,0.9))]",
          "shadow-[0_22px_80px_rgba(2,8,23,0.34)] backdrop-blur-2xl",
          "before:pointer-events-none before:absolute before:inset-px before:rounded-[27px]",
          "before:bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02)_30%,transparent_65%)] before:content-['']",
        ].join(" "),
        className,
      )}
      {...props}
    />
  ),
);

Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("relative flex flex-col space-y-3 p-6 sm:p-7", className)} {...props} />
  ),
);

CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-xl font-semibold tracking-tight text-foreground sm:text-[1.4rem]", className)}
      {...props}
    />
  ),
);

CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm leading-6 text-foreground/68 sm:text-[0.95rem]", className)} {...props} />
));

CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("relative p-6 pt-0 sm:p-7 sm:pt-0", className)} {...props} />
  ),
);

CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("relative flex items-center p-6 pt-0 sm:p-7 sm:pt-0", className)} {...props} />
  ),
);

CardFooter.displayName = "CardFooter";

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
