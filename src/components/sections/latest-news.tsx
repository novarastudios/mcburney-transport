import Link from "next/link";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

type NewsItem = {
  title: string;
  date: string;
  excerpt: string;
  href: string;
};

export function LatestNews({ items }: { items: readonly NewsItem[] }) {
  return (
    <div className="divide-y divide-brand-black/10 rounded-3xl border border-brand-black/10 bg-white">
      {items.map((item, index) => (
        <ScrollReveal key={item.title} delay={index * 0.05}>
          <Link
            href={item.href}
            className="group block p-6 transition-colors hover:bg-brand-surface lg:p-8"
          >
            <div className="flex flex-wrap items-center gap-3">
              <time className="text-xs font-medium uppercase tracking-wider text-brand-muted">
                {item.date}
              </time>
            </div>
            <h3 className="mt-3 font-display text-xl font-semibold text-brand-black group-hover:text-brand-black/80">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-muted">
              {item.excerpt}
            </p>
          </Link>
        </ScrollReveal>
      ))}
    </div>
  );
}
