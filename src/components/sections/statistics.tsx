import { ScrollReveal } from "@/components/motion/scroll-reveal";

type Stat = {
  value: string;
  label: string;
  detail?: string;
};

export function Statistics({ stats }: { stats: readonly Stat[] }) {
  return (
    <section className="border-y border-brand-black/10 bg-white py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {stats.map((stat, index) => (
          <ScrollReveal key={stat.label} delay={index * 0.08}>
            <div className="space-y-2">
              <p className="font-display text-3xl font-semibold tracking-tight text-brand-black sm:text-4xl">
                {stat.value}
              </p>
              <p className="text-sm font-medium text-brand-black">{stat.label}</p>
              {stat.detail ? (
                <p className="text-sm leading-relaxed text-brand-muted">
                  {stat.detail}
                </p>
              ) : null}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

export function StatisticsDark({ stats }: { stats: readonly Stat[] }) {
  return (
    <section className="bg-brand-charcoal py-16 text-white lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {stats.map((stat, index) => (
          <ScrollReveal key={stat.label} delay={index * 0.08}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="font-display text-3xl font-semibold text-brand-yellow">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium">{stat.label}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
