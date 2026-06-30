"use client";

import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
};

export function Marquee({
  children,
  className,
  speed = 40,
  direction = "left",
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group relative w-full overflow-hidden",
        className,
      )}
    >
      <div
        className={cn(
          "marquee-track flex w-max items-center gap-0 motion-reduce:animate-none",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right",
        )}
        style={
          {
            "--marquee-duration": `${speed}s`,
          } as React.CSSProperties
        }
      >
        {children}
        {children}
      </div>
    </div>
  );
}
