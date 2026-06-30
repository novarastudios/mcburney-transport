import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/scroll-reveal";

type HeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image?: string;
  imageAlt?: string;
  dark?: boolean;
  compact?: boolean;
};

export function Hero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  image,
  imageAlt = "",
  dark = true,
  compact = false,
}: HeroProps) {
  return (
    <section
      className={`relative overflow-hidden ${compact ? "py-20 lg:py-28" : "min-h-[85vh] py-24 lg:py-32"} ${dark ? "bg-brand-black text-white" : "bg-brand-surface"}`}
    >
      {image ? (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-brand-black/60" />
        </>
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,199,0,0.12),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04),transparent_40%)]" />
      )}

      <div className="relative mx-auto flex max-w-7xl flex-col justify-end px-6 lg:px-8">
        <FadeIn className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-brand-yellow">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl lg:leading-[1.05]">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            {description}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap gap-4">
              {primaryCta ? (
                <Button asChild size="lg">
                  <Link href={primaryCta.href}>
                    {primaryCta.label}
                    <ArrowRight />
                  </Link>
                </Button>
              ) : null}
              {secondaryCta ? (
                <Button asChild variant="secondary" size="lg">
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              ) : null}
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
