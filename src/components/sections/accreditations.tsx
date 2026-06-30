import { Marquee } from "@/components/motion/marquee";
import { cn } from "@/lib/utils";

const ACCREDITATIONS = [
  "RHA Member",
  "BRC Accredited",
  "ESOS Compliant",
  "ADR Certified",
  "European Haulier of the Year 2015",
  "ASDA Service Provider",
  "Chilled Operator of the Year 2014",
] as const;

type AccreditationsProps = {
  variant?: "dark" | "light";
};

function AccreditationItem({
  label,
  dark,
}: {
  label: string;
  dark: boolean;
}) {
  return (
    <span className="flex shrink-0 items-center">
      <span
        className={cn(
          "whitespace-nowrap px-8 text-[10px] font-medium uppercase tracking-[0.2em] sm:text-xs lg:px-12",
          dark ? "text-white/70" : "text-brand-muted",
        )}
      >
        {label}
      </span>
      <span
        aria-hidden
        className={cn(
          "h-4 w-px shrink-0",
          dark ? "bg-[color:var(--hairline-dark)]" : "bg-[color:var(--hairline)]",
        )}
      />
    </span>
  );
}

export function Accreditations({ variant = "light" }: AccreditationsProps) {
  const dark = variant === "dark";

  return (
    <section
      aria-label="Accreditations and awards"
      className={cn(
        "relative isolate z-0 overflow-hidden border-y",
        dark
          ? "border-[color:var(--hairline-dark)] bg-ink py-4"
          : "border-[color:var(--hairline)] bg-paper-2 py-5",
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-mcb-cyan via-mcb-blue to-mcb-red"
      />
      <div className="motion-reduce:hidden">
        <Marquee speed={45} pauseOnHover className="py-1">
          <div className="flex items-center">
            {ACCREDITATIONS.map((item) => (
              <AccreditationItem key={item} label={item} dark={dark} />
            ))}
          </div>
        </Marquee>
      </div>

      <div
        className={cn(
          "hidden flex-wrap items-center justify-center gap-x-2 gap-y-3 px-6 py-2 motion-reduce:flex",
          dark ? "text-white/70" : "text-brand-muted",
        )}
      >
        {ACCREDITATIONS.map((item, index) => (
          <span key={item} className="flex items-center">
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] sm:text-xs">
              {item}
            </span>
            {index < ACCREDITATIONS.length - 1 ? (
              <span
                aria-hidden
                className={cn(
                  "mx-4 h-4 w-px",
                  dark ? "bg-[color:var(--hairline-dark)]" : "bg-[color:var(--hairline)]",
                )}
              />
            ) : null}
          </span>
        ))}
      </div>
    </section>
  );
}
