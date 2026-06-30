import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

type FeatureCard = {
  title: string;
  description: string;
  href: string;
  image?: string;
};

export function FeatureCards({ items }: { items: readonly FeatureCard[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => (
        <ScrollReveal key={item.href} delay={index * 0.06}>
          <Link
            href={item.href}
            className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-brand-black/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow/40 hover:shadow-xl hover:shadow-brand-black/5"
          >
            {item.image ? (
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ) : null}
            <div className="flex flex-1 flex-col p-6 lg:p-8">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-xl font-semibold text-brand-black">
                  {item.title}
                </h3>
                <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-brand-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-yellow" />
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-muted">
                {item.description}
              </p>
            </div>
          </Link>
        </ScrollReveal>
      ))}
    </div>
  );
}
