import type { Policy, PolicyBlock } from "@/lib/content/policies";
import { cn } from "@/lib/utils";

type PolicyHeaderProps = {
  title: string;
  description: string;
  updated?: string;
  eyebrow?: string;
};

export function PolicyHeader({
  title,
  description,
  updated,
  eyebrow = "Policy",
}: PolicyHeaderProps) {
  return (
    <header className="border-b border-[color:var(--hairline)] bg-paper-2">
      <div className="site-container max-w-3xl py-12 lg:py-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-muted">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-ink lg:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-brand-muted">
          {description}
        </p>
        {updated ? (
          <p className="mt-4 text-sm text-brand-muted/80">{updated}</p>
        ) : null}
      </div>
    </header>
  );
}

function PolicyBlockRenderer({ block }: { block: PolicyBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <div className="mt-12 first:mt-0">
          <h2 className="font-display text-2xl font-semibold text-ink">
            {block.text}
          </h2>
          <div
            className="mt-4 border-b border-[color:var(--hairline)]"
            aria-hidden
          />
        </div>
      );
    case "h3":
      return (
        <h3 className="mt-8 font-display text-lg font-semibold text-ink">
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p className="mt-4 text-base leading-[1.75] text-brand-muted">
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-[1.75] text-brand-muted">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}

type PolicyProseProps = {
  policy: Policy;
  className?: string;
};

export function PolicyProse({ policy, className }: PolicyProseProps) {
  return (
    <article className={cn("bg-paper", className)}>
      <PolicyHeader
        title={policy.title}
        description={policy.description}
        updated={policy.updated}
      />
      <div className="site-container max-w-3xl py-12 lg:py-16">
        {policy.blocks.map((block, index) => (
          <PolicyBlockRenderer key={`${block.type}-${index}`} block={block} />
        ))}
      </div>
    </article>
  );
}
