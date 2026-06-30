"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

type ParallaxProps = {
  children: React.ReactNode;
  className?: string;
  scaleRange?: [number, number];
  yRange?: [number, number];
};

export function Parallax({
  children,
  className,
  scaleRange = [1, 1.08],
  yRange = [0, 80],
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], scaleRange);
  const y = useTransform(scrollYProgress, [0, 1], yRange);

  if (reducedMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ scale, y }} className="h-full w-full will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}

export function useParallaxMotion(
  scaleRange: [number, number] = [1, 1.08],
  yRange: [number, number] = [0, 80],
): {
  ref: React.RefObject<HTMLElement | null>;
  scale: MotionValue<number>;
  y: MotionValue<number>;
  reducedMotion: boolean | null;
} {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], scaleRange);
  const y = useTransform(scrollYProgress, [0, 1], yRange);

  return { ref, scale, y, reducedMotion };
}
