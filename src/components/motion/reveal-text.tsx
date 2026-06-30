"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealTextProps = {
  children: string;
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  as?: "span" | "div" | "h2" | "h3";
};

function RevealLine({
  children,
  className,
  delay,
  isInView,
  reducedMotion,
}: {
  children: React.ReactNode;
  className?: string;
  delay: number;
  isInView: boolean;
  reducedMotion: boolean | null;
}) {
  return (
    <span className={cn("block overflow-hidden", className)}>
      <motion.span
        className="block"
        initial={reducedMotion ? false : { y: "110%" }}
        animate={reducedMotion || isInView ? { y: 0 } : { y: "110%" }}
        transition={{
          duration: 0.7,
          delay,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function RevealText({
  children,
  className,
  lineClassName,
  delay = 0,
  stagger = 0.08,
  as: Component = "span",
}: RevealTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reducedMotion = useReducedMotion();

  const lines = children
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  return (
    <div ref={ref}>
      <Component className={className}>
        {lines.map((line, index) => (
          <RevealLine
            key={`${line}-${index}`}
            className={lineClassName}
            delay={delay + index * stagger}
            isInView={isInView}
            reducedMotion={reducedMotion}
          >
            {line}
          </RevealLine>
        ))}
      </Component>
    </div>
  );
}
