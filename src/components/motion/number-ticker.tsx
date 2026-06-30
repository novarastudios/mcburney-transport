"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  animate,
  useInView,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";

type ParsedValue =
  | { numeric: false; text: string }
  | {
      numeric: true;
      prefix: string;
      number: number;
      suffix: string;
      useGrouping: boolean;
    };

function parseValue(value: string): ParsedValue {
  const match = value.match(/^([^0-9]*)([\d,]+(?:\.\d+)?)(.*)$/);
  if (!match) {
    return { numeric: false, text: value };
  }

  const [, prefix = "", numStr = "", suffix = ""] = match;
  const number = Number.parseFloat(numStr.replace(/,/g, ""));

  if (Number.isNaN(number)) {
    return { numeric: false, text: value };
  }

  return {
    numeric: true,
    prefix,
    number,
    suffix,
    useGrouping: numStr.includes(","),
  };
}

function formatNumber(value: number, useGrouping: boolean) {
  if (useGrouping) {
    return Math.round(value).toLocaleString("en-GB");
  }
  return String(Math.round(value));
}

type NumberTickerProps = {
  value: string;
  className?: string;
  duration?: number;
};

export function NumberTicker({
  value,
  className,
  duration = 1.6,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reducedMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  const parsed = useMemo(() => parseValue(value), [value]);

  const finalText = parsed.numeric
    ? `${parsed.prefix}${formatNumber(parsed.number, parsed.useGrouping)}${parsed.suffix}`
    : parsed.text;

  const [display, setDisplay] = useState(() =>
    parsed.numeric ? `${parsed.prefix}0${parsed.suffix}` : parsed.text,
  );

  useEffect(() => {
    if (!parsed.numeric) {
      setDisplay(parsed.text);
      return;
    }

    if (reducedMotion || !isInView) {
      setDisplay(finalText);
      return;
    }

    motionValue.set(0);
    setDisplay(`${parsed.prefix}0${parsed.suffix}`);

    const controls = animate(motionValue, parsed.number, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplay(
          `${parsed.prefix}${formatNumber(latest, parsed.useGrouping)}${parsed.suffix}`,
        );
      },
    });

    return () => controls.stop();
  }, [duration, finalText, isInView, motionValue, parsed, reducedMotion]);

  return (
    <span ref={ref} className={cn("tabular", className)}>
      {display}
    </span>
  );
}
