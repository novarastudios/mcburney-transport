import Image from "next/image";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

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
          <article className="overflow-hidden rounded-3xl bg-brand-black text-white">
            {item.image ? (
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent" />
              </div>
            ) : null}
            <div className="p-6 lg:p-8">
              <p className="font-display text-3xl font-semibold text-brand-yellow">
                {item.value}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold">{item.title}</h3>
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
