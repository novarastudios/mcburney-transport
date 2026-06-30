"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, X, Phone } from "lucide-react";
import { NAV_ITEMS, OFFICES, CUSTOMER_LOGIN_URL } from "@/lib/constants";
import { BrandLogo } from "@/components/layout/brand-logo";
import { SiteSearch } from "@/components/layout/site-search";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

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

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

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
        <div className="site-container flex items-center justify-between gap-4 py-4 lg:py-5">
          <BrandLogo priority />

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
            {NAV_ITEMS.map((item) =>
              "children" in item && item.children ? (
                <div key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    className="rounded-full px-4 py-2 text-[15px] text-white/80 transition-colors hover:bg-white/10 hover:text-white"
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
                          <p className="text-[15px] font-medium text-white">
                            {child.label}
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-white/60">
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
                  className="rounded-full px-4 py-2 text-[15px] text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="inline-flex rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Search site"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </button>
            <a
              href={CUSTOMER_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full px-4 py-2 text-[15px] text-white/80 transition-colors hover:bg-white/10 hover:text-white xl:inline-flex"
            >
              Customer Login
            </a>
            <Button asChild className="hidden text-[15px] sm:inline-flex" size="default">
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
                    className="block rounded-xl px-4 py-3 text-lg font-medium text-white"
                  >
                    {item.label}
                  </Link>
                  {"children" in item && item.children ? (
                    <div className="ml-4 space-y-1 border-l border-white/10 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2 text-[15px] text-white/70"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
              <a
                href={CUSTOMER_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl px-4 py-3 text-lg font-medium text-white"
              >
                Customer Login
              </a>
            </nav>
            <div className="mt-6 space-y-3 border-t border-white/10 pt-6">
              {OFFICES.map((office) => (
                <a
                  key={office.city}
                  href={office.href}
                  className="flex items-center gap-3 text-[15px] text-white/70"
                >
                  <Phone className="h-4 w-4 text-mcb-cyan" />
                  {office.city}: {office.phone}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <SiteSearch open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}
