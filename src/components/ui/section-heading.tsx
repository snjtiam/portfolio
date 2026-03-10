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
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
      )}
    >
      <Badge variant="outline">{eyebrow}</Badge>
      <div className="space-y-4">
        <h2 id={id} className="max-w-4xl text-3xl font-semibold sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="max-w-2xl text-base leading-7 text-foreground/70 sm:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
