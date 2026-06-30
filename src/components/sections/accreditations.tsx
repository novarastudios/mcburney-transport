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

function AccreditationItem({ label }: { label: string }) {
  return (
    <span className="flex shrink-0 items-center">
      <span className="whitespace-nowrap px-8 text-xs font-medium uppercase tracking-[0.18em] text-brand-muted lg:px-12 lg:text-sm">
        {label}
      </span>
      <span
        aria-hidden
        className="h-4 w-px shrink-0 bg-[color:var(--hairline)]"
      />
    </span>
  );
}

export function Accreditations() {
  return (
    <section
      aria-label="Accreditations and awards"
      className="border-y border-[color:var(--hairline)] bg-paper-2 py-5"
    >
      <div className="motion-reduce:hidden">
        <Marquee speed={45} pauseOnHover>
          <div className="flex items-center">
            {ACCREDITATIONS.map((item) => (
              <AccreditationItem key={item} label={item} />
            ))}
          </div>
        </Marquee>
      </div>

      <div className="hidden flex-wrap items-center justify-center gap-x-2 gap-y-3 px-6 py-2 motion-reduce:flex">
        {ACCREDITATIONS.map((item, index) => (
          <span key={item} className="flex items-center">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-brand-muted">
              {item}
            </span>
            {index < ACCREDITATIONS.length - 1 ? (
              <span
                aria-hidden
                className={cn(
                  "mx-4 h-4 w-px bg-[color:var(--hairline)]",
                )}
              />
            ) : null}
          </span>
        ))}
      </div>
    </section>
  );
}
