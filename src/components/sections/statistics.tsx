import { NumberTicker } from "@/components/motion/number-ticker";
import { cn } from "@/lib/utils";

type Stat = {
  value: string;
  label: string;
  detail?: string;
};

function StatItem({
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
        "flex min-w-0 flex-1 flex-col justify-center px-6 py-8 lg:px-10 lg:py-10",
        index > 0 && "border-t lg:border-t-0 lg:border-l",
        dark ? "border-[color:var(--hairline-dark)]" : "border-[color:var(--hairline)]",
      )}
    >
      <p
        className={cn(
          "text-xs font-medium uppercase tracking-[0.18em]",
          dark ? "text-white/55" : "text-brand-muted",
        )}
      >
        {stat.label}
      </p>
      <p
        className={cn(
          "mt-3 font-display text-6xl font-bold leading-none lg:text-7xl",
          dark ? "text-mcb-yellow" : "text-ink",
        )}
      >
        <NumberTicker value={stat.value} />
      </p>
      {stat.detail ? (
        <p
          className={cn(
            "mt-4 max-w-xs text-sm leading-relaxed",
            dark ? "text-white/60" : "text-brand-muted",
          )}
        >
          {stat.detail}
        </p>
      ) : null}
    </div>
  );
}

export function Statistics({ stats }: { stats: readonly Stat[] }) {
  return (
    <section className="border-y border-[color:var(--hairline)] bg-paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function StatisticsDark({ stats }: { stats: readonly Stat[] }) {
  return (
    <section className="grain bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} stat={stat} index={index} dark />
          ))}
        </div>
      </div>
    </section>
  );
}
