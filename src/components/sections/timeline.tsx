import { ScrollReveal } from "@/components/motion/scroll-reveal";

type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export function Timeline({ items }: { items: readonly TimelineItem[] }) {
  return (
    <div className="relative space-y-8 before:absolute before:left-[11px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-brand-black/10 lg:before:left-1/2 lg:before:-translate-x-1/2">
      {items.map((item, index) => (
        <ScrollReveal key={item.year} delay={index * 0.08}>
          <article
            className={`relative grid gap-4 lg:grid-cols-2 lg:gap-12 ${index % 2 === 0 ? "" : "lg:[&>div:first-child]:order-2"}`}
          >
            <div className="lg:text-right">
              <p className="font-display text-2xl font-semibold text-mcb-cyan">
                {item.year}
              </p>
            </div>
            <div className="relative rounded-2xl border border-brand-black/10 bg-white p-6 lg:-mt-2">
              <span className="absolute -left-[29px] top-6 hidden h-3 w-3 rounded-full bg-mcb-red lg:block" />
              <h3 className="font-display text-lg font-semibold text-brand-black">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                {item.description}
              </p>
            </div>
          </article>
        </ScrollReveal>
      ))}
    </div>
  );
}
