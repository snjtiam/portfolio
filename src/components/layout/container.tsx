import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[90rem] px-4 sm:px-5 lg:px-8 2xl:px-10", className)}
      {...props}
    />
  );
}
