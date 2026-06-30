import { cn } from "@/lib/utils";

type SectionBandProps = {
  children: React.ReactNode;
  tone?: "paper" | "paper-2" | "ink";
  size?: "md" | "lg" | "xl";
  className?: string;
};

const toneClasses = {
  paper: "bg-paper text-foreground",
  "paper-2": "bg-paper-2 text-foreground",
  ink: "grain bg-ink text-white",
} as const;

const sizeClasses = {
  md: "py-16 lg:py-24",
  lg: "py-20 lg:py-28",
  xl: "py-24 lg:py-32",
} as const;

export function SectionBand({
  children,
  tone = "paper",
  size = "lg",
  className,
}: SectionBandProps) {
  return (
    <section className={cn(toneClasses[tone], sizeClasses[size], className)}>
      {children}
    </section>
  );
}
