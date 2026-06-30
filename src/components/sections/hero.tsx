"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/motion/magnetic";
import { cn } from "@/lib/utils";

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

const HERO_STATS = [
  "60 Years",
  "450,000 Miles/Week",
  "8 Depots",
  "114,000 Irish Sea Loads",
] as const;

function HeroLineReveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const reducedMotion = useReducedMotion();

  return (
    <span ref={ref} className={cn("block overflow-hidden", className)}>
      <motion.span
        className="block"
        initial={reducedMotion ? false : { y: "110%" }}
        animate={
          reducedMotion || isInView ? { y: 0 } : { y: "110%" }
        }
        transition={{
          duration: 0.75,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function HeroStatStrip() {
  return (
    <div className="absolute inset-x-0 bottom-0 z-20 border-t border-[color:var(--hairline-dark)] bg-ink/90 backdrop-blur-sm">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-3 px-6 py-4 sm:grid-cols-4 lg:px-8">
        {HERO_STATS.map((stat, index) => (
          <div
            key={stat}
            className={cn(
              "flex items-center",
              index > 0 && "sm:border-l sm:border-[color:var(--hairline-dark)] sm:pl-4 lg:pl-6",
            )}
          >
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/70 tabular sm:text-xs">
              {stat}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

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
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const showStatStrip = !compact && dark && Boolean(image);

  return (
    <section
      ref={sectionRef}
      className={cn(
        "relative overflow-hidden text-white",
        dark ? "bg-ink" : "bg-paper text-foreground",
        compact ? "min-h-[52vh] py-20 lg:min-h-[58vh] lg:py-24" : "min-h-[92vh]",
        image && dark && "grain",
      )}
    >
      {image ? (
        <>
          <div className="absolute inset-0">
            {reducedMotion ? (
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
            ) : (
              <motion.div
                style={{ scale: imageScale, y: imageY }}
                className="absolute inset-0 will-change-transform"
              >
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  priority
                  className="object-cover"
                  sizes="100vw"
                />
              </motion.div>
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/50 to-transparent" />
        </>
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,179,1,0.14),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04),transparent_40%)]" />
      )}

      <div
        className={cn(
          "relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-end px-6 lg:px-8",
          compact ? "pt-28" : "min-h-[92vh] pt-32",
          showStatStrip ? "pb-28 lg:pb-32" : "pb-16 lg:pb-20",
        )}
      >
        <div className="max-w-4xl">
          {eyebrow ? (
            <motion.p
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-mcb-yellow"
            >
              {eyebrow}
            </motion.p>
          ) : null}

          <h1 className="font-display text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl xl:text-8xl">
            <HeroLineReveal delay={0.08}>{title}</HeroLineReveal>
          </h1>

          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className={cn(
              "mt-6 max-w-xl text-base leading-relaxed sm:text-lg",
              dark ? "text-white/70" : "text-brand-muted",
            )}
          >
            {description}
          </motion.p>

          {(primaryCta || secondaryCta) && (
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32, ease: "easeOut" }}
              className="mt-8 flex flex-wrap gap-4"
            >
              {primaryCta ? (
                <MagneticButton>
                  <Button asChild size="lg">
                    <Link href={primaryCta.href}>
                      {primaryCta.label}
                      <ArrowRight />
                    </Link>
                  </Button>
                </MagneticButton>
              ) : null}
              {secondaryCta ? (
                <Button asChild variant="secondary" size="lg">
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              ) : null}
            </motion.div>
          )}
        </div>
      </div>

      {showStatStrip ? <HeroStatStrip /> : null}
    </section>
  );
}
