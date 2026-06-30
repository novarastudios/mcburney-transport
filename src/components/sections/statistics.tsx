"use client";

import { NumberTicker } from "@/components/motion/number-ticker";
import { cn } from "@/lib/utils";

type Stat = {
  value: string;
  label: string;
  detail?: string;
};

function isNumericStat(value: string) {
  return /\d/.test(value);
}

function TextStatValue({
  value,
  dark = false,
}: {
  value: string;
  dark?: boolean;
}) {
  const [lead, ...rest] = value.split(" ");
  const tail = rest.join(" ");

  return (
    <div
      className={cn(
        "font-display text-5xl font-bold leading-[0.92] tracking-tight sm:text-6xl lg:text-[clamp(2.75rem,3.4vw,4.75rem)]",
        dark ? "text-white" : "text-ink",
      )}
    >
      <span className="block">{lead}</span>
      {tail ? <span className="block">{tail}</span> : null}
    </div>
  );
}

function StatColumn({
  stat,
  index,
  dark = false,
}: {
  stat: Stat;
  index: number;
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex min-w-0 flex-col px-6 py-10 sm:px-8 lg:min-h-[22rem] lg:px-8 lg:py-12 xl:px-10",
        index > 0 && "border-t lg:border-t-0 lg:border-l",
        dark ? "border-[color:var(--hairline-dark)]" : "border-[color:var(--hairline)]",
      )}
    >
      <p
        className={cn(
          "max-w-[14rem] text-[10px] font-medium uppercase tracking-[0.2em] sm:text-xs",
          dark ? "text-white/55" : "text-brand-muted",
        )}
      >
        {stat.label}
      </p>

      <div className="mt-8 min-w-0 lg:mt-auto lg:pt-10">
        {isNumericStat(stat.value) ? (
          <p
            className={cn(
              "min-w-0 font-display text-[clamp(2.5rem,4.5vw,4.25rem)] font-bold leading-none tracking-tight xl:text-[clamp(2.75rem,3.2vw,4.5rem)]",
              dark ? "text-mcb-cyan" : "text-ink",
            )}
          >
            <NumberTicker value={stat.value} />
          </p>
        ) : (
          <TextStatValue value={stat.value} dark={dark} />
        )}
      </div>

      {stat.detail ? (
        <p
          className={cn(
            "mt-6 max-w-[15rem] text-sm leading-relaxed lg:mt-8",
            dark ? "text-white/60" : "text-brand-muted",
          )}
        >
          {stat.detail}
        </p>
      ) : null}
    </div>
  );
}

function SpreadStatsGrid({
  stats,
  dark = false,
}: {
  stats: readonly Stat[];
  dark?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <StatColumn key={stat.label} stat={stat} index={index} dark={dark} />
      ))}
    </div>
  );
}

export function Statistics({ stats }: { stats: readonly Stat[] }) {
  return (
    <section className="relative isolate z-0 border-b border-[color:var(--hairline)] bg-paper-2">
      <div className="site-container max-w-none px-0 lg:px-6 xl:px-8">
        <SpreadStatsGrid stats={stats} />
      </div>
    </section>
  );
}

export function StatisticsDark({ stats }: { stats: readonly Stat[] }) {
  return (
    <section className="relative isolate z-0 grain bg-ink text-white">
      <div className="site-container max-w-none px-0 lg:px-6 xl:px-8">
        <SpreadStatsGrid stats={stats} dark />
      </div>
    </section>
  );
}

export type { Stat };
