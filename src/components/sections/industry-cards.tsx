import { ScrollReveal } from "@/components/motion/scroll-reveal";

type Industry = {
  title: string;
  description: string;
};

export function IndustryCards({ items }: { items: readonly Industry[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <ScrollReveal key={item.title} delay={index * 0.05}>
          <article className="h-full rounded-2xl border border-brand-black/10 bg-brand-surface p-6 transition-colors hover:border-brand-yellow/30">
            <h3 className="font-display text-lg font-semibold text-brand-black">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted">
              {item.description}
            </p>
          </article>
        </ScrollReveal>
      ))}
    </div>
  );
}
