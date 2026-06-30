"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import {
  groupSearchResults,
  searchSite,
  type SearchItem,
} from "@/lib/search/site-index";
import { cn } from "@/lib/utils";

type SiteSearchProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function SiteSearch({ open, onOpenChange }: SiteSearchProps) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => searchSite(query), [query]);
  const groupedResults = useMemo(() => groupSearchResults(results), [results]);
  const flatResults = useMemo(
    () => groupedResults.flatMap(([, items]) => items),
    [groupedResults],
  );

  useEffect(() => {
    if (!open) {
      setQuery("");
      setActiveIndex(0);
      return;
    }

    inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onOpenChange(false);
        return;
      }

      if (!flatResults.length) return;

      if (event.key === "ArrowDown") {
        event.preventDefault();
        setActiveIndex((index) => (index + 1) % flatResults.length);
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        setActiveIndex(
          (index) => (index - 1 + flatResults.length) % flatResults.length,
        );
      }

      if (event.key === "Enter") {
        event.preventDefault();
        const target = flatResults[activeIndex];
        if (target) {
          onOpenChange(false);
          window.location.href = target.href;
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, flatResults, onOpenChange, open]);

  if (!open) return null;

  let resultOffset = 0;

  return (
    <div
      className="fixed inset-0 z-[60] bg-brand-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Site search"
      onClick={() => onOpenChange(false)}
    >
      <div
        className="mx-auto mt-20 max-w-2xl px-6 sm:mt-24"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-brand-black shadow-2xl">
          <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
            <Search className="h-5 w-5 shrink-0 text-mcb-cyan" />
            <input
              ref={inputRef}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search services, depots, company pages..."
              aria-label="Search the website"
              className="flex-1 bg-transparent text-base text-white outline-none placeholder:text-white/40"
            />
            <kbd className="hidden rounded-md border border-white/10 px-2 py-1 text-[10px] text-white/40 sm:inline">
              Esc
            </kbd>
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="rounded-full p-2 text-white/70 hover:bg-white/10"
              aria-label="Close search"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="max-h-[min(28rem,60vh)] overflow-auto px-2 py-2">
            {flatResults.length === 0 ? (
              <p className="px-4 py-8 text-center text-sm text-white/55">
                No results for &ldquo;{query}&rdquo;. Try haulage, depots, ferry,
                refrigeration, or quote.
              </p>
            ) : (
              groupedResults.map(([group, items]) => {
                const groupStartIndex = resultOffset;
                resultOffset += items.length;

                return (
                  <div key={group} className="py-1">
                    <p className="px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                      {group}
                    </p>
                    <ul>
                      {items.map((item, index) => {
                        const flatIndex = groupStartIndex + index;
                        return (
                          <li key={item.id}>
                            <SearchResultLink
                              item={item}
                              active={flatIndex === activeIndex}
                              onSelect={() => onOpenChange(false)}
                            />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })
            )}
          </div>

          <div className="border-t border-white/10 px-5 py-3 text-[11px] text-white/40">
            {query.trim()
              ? `${flatResults.length} result${flatResults.length === 1 ? "" : "s"}`
              : "Popular pages"}{" "}
            · Use ↑ ↓ to navigate, Enter to open
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchResultLink({
  item,
  active,
  onSelect,
}: {
  item: SearchItem;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <Link
      href={item.href}
      onClick={onSelect}
      className={cn(
        "block rounded-xl px-4 py-3 transition-colors",
        active ? "bg-white/10" : "hover:bg-white/5",
      )}
    >
      <p className="text-sm font-medium text-white">{item.label}</p>
      {item.description ? (
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-white/55">
          {item.description}
        </p>
      ) : null}
    </Link>
  );
}
