import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 sm:gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
      )}
    >
      <Badge variant="outline" className="tracking-[0.22em] text-[0.7rem] text-foreground/70">
        {eyebrow}
      </Badge>
      <div className="space-y-4 sm:space-y-5">
        <h2
          id={id}
          className="text-balance max-w-4xl text-[2rem] font-semibold leading-[1.04] sm:text-[2.45rem] md:text-[2.9rem] lg:text-[3.2rem] xl:text-[3.35rem]"
        >
          {title}
        </h2>
        <p className="max-w-3xl text-[0.98rem] leading-7 text-foreground/68 sm:text-lg sm:leading-8">
          {description}
        </p>
      </div>
    </div>
  );
}
