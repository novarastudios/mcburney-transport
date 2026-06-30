import Image from "next/image";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { NumberTicker } from "@/components/motion/number-ticker";
import { cn } from "@/lib/utils";

type FleetCard = {
  title: string;
  value: string;
  description: string;
  image?: string;
};

export function FleetCards({ items }: { items: readonly FleetCard[] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {items.map((item, index) => (
        <ScrollReveal key={item.title} delay={index * 0.08}>
          <article
            className={cn(
              "group grain overflow-hidden rounded-2xl border border-[color:var(--hairline-dark)] bg-ink text-white",
              "transition-[box-shadow,border-color] duration-300",
              "hover:border-mcb-yellow/25 hover:shadow-[var(--shadow-warm)]",
            )}
          >
            {item.image ? (
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              </div>
            ) : null}
            <div className="relative p-6 lg:p-8">
              <p className="font-display text-5xl font-bold leading-none text-mcb-yellow">
                <NumberTicker value={item.value} />
              </p>
              <h3 className="mt-3 font-display text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {item.description}
              </p>
            </div>
          </article>
        </ScrollReveal>
      ))}
    </div>
  );
}
