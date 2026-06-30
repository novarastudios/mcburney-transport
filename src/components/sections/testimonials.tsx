import { Quote } from "lucide-react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

type Testimonial = {
  quote: string;
  author: string;
  company: string;
  note?: string;
};

export function Testimonials({ items }: { items: readonly Testimonial[] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {items.map((item, index) => (
        <ScrollReveal key={item.author} delay={index * 0.08}>
          <figure className="flex h-full flex-col rounded-2xl border border-[color:var(--hairline)] bg-white p-8">
            <Quote className="h-8 w-8 text-ink" aria-hidden />
            <blockquote className="mt-6 flex-1 text-lg leading-relaxed text-brand-black">
              &ldquo;{item.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 border-t border-brand-black/10 pt-6">
              <p className="font-medium text-brand-black">{item.author}</p>
              <p className="text-sm text-brand-muted">{item.company}</p>
              {item.note ? (
                <p className="mt-2 text-xs text-brand-muted/70">{item.note}</p>
              ) : null}
            </figcaption>
          </figure>
        </ScrollReveal>
      ))}
    </div>
  );
}
