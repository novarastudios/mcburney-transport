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
  imageFit?: "cover" | "contain";
  dark?: boolean;
  compact?: boolean;
};

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

export function Hero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  image,
  imageAlt = "",
  imageFit = "cover",
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

  return (
    <section
      ref={sectionRef}
      className={cn(
        "relative overflow-hidden text-white",
        dark ? "bg-ink" : "bg-paper text-foreground",
        compact ? "min-h-[52vh] py-20 lg:min-h-[58vh] lg:py-24" : "min-h-[92vh]",
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
                className={cn(
                  imageFit === "contain" ? "object-contain p-10" : "object-cover",
                )}
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
                  className={cn(
                    imageFit === "contain" ? "object-contain p-10" : "object-cover",
                  )}
                  sizes="100vw"
                />
              </motion.div>
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/40 to-transparent" />
        </>
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(227,30,36,0.12),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(0,168,198,0.08),transparent_40%)]" />
      )}

      <div
        className={cn(
          "relative z-10 site-container flex w-full flex-col justify-end pb-16 pt-32 lg:pb-20",
          !compact && "min-h-[92vh]",
          compact && "min-h-[52vh] pt-28 lg:min-h-[58vh]",
        )}
      >
        <div className="max-w-4xl">
          {eyebrow ? (
            <motion.p
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-mcb-cyan"
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
    </section>
  );
}
