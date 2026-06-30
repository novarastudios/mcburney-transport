import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { cn } from "@/lib/utils";

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
            className={cn(
              "group relative flex h-full flex-col overflow-hidden rounded-2xl",
              "border border-[color:var(--hairline)] bg-white",
              "transition-[box-shadow,border-color] duration-300",
              "hover:border-mcb-red/30 hover:shadow-[var(--shadow-warm)]",
            )}
          >
            {item.image ? (
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ) : null}
            <div className="flex flex-1 flex-col p-6 lg:p-8">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-xl font-bold text-ink">
                  {item.title}
                </h3>
                <ArrowUpRight
                  aria-hidden
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-muted transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-mcb-red"
                />
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
