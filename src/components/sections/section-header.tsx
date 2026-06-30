import { Badge } from "@/components/ui/badge";
import { RevealText } from "@/components/motion/reveal-text";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Badge variant={dark ? "dark" : "default"} className="mb-4">
          {eyebrow}
        </Badge>
      ) : null}

      <div
        className={cn(
          "border-t pt-5",
          dark ? "border-[color:var(--hairline-dark)]" : "border-[color:var(--hairline)]",
          align === "center" && "mx-auto max-w-fit",
        )}
      >
        <RevealText
          as="h2"
          className={cn(
            "font-display text-3xl font-bold sm:text-4xl lg:text-5xl",
            dark ? "text-white" : "text-ink",
          )}
        >
          {title}
        </RevealText>
      </div>

      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            dark ? "text-white/70" : "text-brand-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
