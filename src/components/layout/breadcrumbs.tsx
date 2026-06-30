import Link from "next/link";
import { ChevronRight } from "lucide-react";

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-brand-black/10 bg-brand-surface">
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-6 py-4 text-sm text-brand-muted lg:px-8">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {index > 0 ? (
                <ChevronRight className="h-4 w-4 text-brand-muted/50" aria-hidden />
              ) : null}
              {isLast ? (
                <span className="font-medium text-brand-black" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="transition-colors hover:text-brand-black"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
