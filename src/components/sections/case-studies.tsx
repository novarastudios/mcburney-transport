import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

type CaseStudy = {
  title: string;
  excerpt: string;
  href: string;
  tag: string;
};

export function CaseStudies({ items }: { items: readonly CaseStudy[] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {items.map((item, index) => (
        <ScrollReveal key={item.title} delay={index * 0.06}>
          <Link
            href={item.href}
            className="group flex h-full flex-col rounded-3xl border border-brand-black/10 bg-brand-surface p-8 transition-all hover:border-mcb-red/30 hover:shadow-lg"
          >
            <Badge>{item.tag}</Badge>
            <h3 className="mt-4 font-display text-xl font-semibold text-brand-black">
              {item.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-muted">
              {item.excerpt}
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-black">
              Read more
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </ScrollReveal>
      ))}
    </div>
  );
}
