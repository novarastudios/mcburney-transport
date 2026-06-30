import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

type CTAProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CallToAction({
  title = "Ready to discuss your logistics requirements?",
  description = "Speak with our team about tailored transport, shipping and warehousing solutions across the UK and Ireland.",
  primaryLabel = "Request a Quote",
  primaryHref = "/quote",
  secondaryLabel = "Contact Us",
  secondaryHref = "/contact",
}: CTAProps) {
  return (
    <section className="relative isolate z-0 bg-paper py-16 lg:py-24">
      <div className="site-container">
        <ScrollReveal>
          <div className="grain relative overflow-hidden rounded-[2rem] bg-ink px-8 py-16 text-white lg:px-16 lg:py-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(227,30,36,0.14),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(0,168,198,0.1),transparent_45%)]" />
            <div className="relative max-w-2xl">
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                {title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
                {description}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href={primaryHref}>
                    {primaryLabel}
                    <ArrowRight />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href={secondaryHref}>{secondaryLabel}</Link>
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
