"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, X, Phone } from "lucide-react";
import { NAV_ITEMS, OFFICES, SEARCH_PAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const searchPages = SEARCH_PAGES.filter((page) =>
    query ? page.label.toLowerCase().includes(query.toLowerCase()) : true,
  );

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-white/10 bg-brand-black/90 backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
          <Link href="/" className="group flex flex-col">
            <span className="font-display text-lg font-semibold tracking-tight text-white">
              McBurney
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/60">
              Transport Group
            </span>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
            {NAV_ITEMS.map((item) =>
              "children" in item && item.children ? (
                <div key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    className="rounded-full px-4 py-2 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </Link>
                  <div className="invisible absolute left-0 top-full z-50 w-[560px] translate-y-2 rounded-3xl border border-white/10 bg-brand-black/95 p-6 opacity-0 shadow-2xl backdrop-blur-xl transition-all group-hover:visible group-hover:translate-y-4 group-hover:opacity-100">
                    <div className="grid grid-cols-2 gap-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="rounded-2xl p-4 transition-colors hover:bg-white/5"
                        >
                          <p className="text-sm font-medium text-white">
                            {child.label}
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-white/60">
                            {child.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="hidden rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white lg:inline-flex"
              aria-label="Search site"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </button>
            <Button asChild className="hidden sm:inline-flex" size="sm">
              <Link href="/quote">Get a Quote</Link>
            </Button>
            <button
              type="button"
              className="rounded-full p-2 text-white lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <div className="border-t border-white/10 bg-brand-black px-6 py-6 lg:hidden">
            <nav className="space-y-2" aria-label="Mobile">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-white"
                  >
                    {item.label}
                  </Link>
                  {"children" in item && item.children ? (
                    <div className="ml-4 space-y-1 border-l border-white/10 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2 text-sm text-white/70"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </nav>
            <div className="mt-6 space-y-3 border-t border-white/10 pt-6">
              {OFFICES.map((office) => (
                <a
                  key={office.city}
                  href={office.href}
                  className="flex items-center gap-3 text-sm text-white/70"
                >
                  <Phone className="h-4 w-4 text-brand-yellow" />
                  {office.city}: {office.phone}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      {searchOpen ? (
        <div
          className="fixed inset-0 z-[60] bg-brand-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Site search"
        >
          <div className="mx-auto mt-24 max-w-2xl px-6">
            <div className="rounded-3xl border border-white/10 bg-brand-black p-6 shadow-2xl">
              <div className="flex items-center gap-3">
                <Search className="h-5 w-5 text-brand-yellow" />
                <input
                  autoFocus
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search services, company pages..."
                  className="flex-1 bg-transparent text-white outline-none placeholder:text-white/40"
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="rounded-full p-2 text-white/70 hover:bg-white/10"
                  aria-label="Close search"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-4 max-h-80 overflow-auto">
                {searchPages.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="block rounded-xl px-4 py-3 transition-colors hover:bg-white/5"
                    onClick={() => setSearchOpen(false)}
                  >
                    <p className="text-sm font-medium text-white">{page.label}</p>
                    <p className="text-xs text-white/50">{page.group}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
