import Link from "next/link";
import { BrandLogo } from "@/components/layout/brand-logo";
import { FOOTER_LINKS, OFFICES, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="grain border-t border-[color:var(--hairline-dark)] bg-ink text-white">
      <div className="site-container py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <BrandLogo variant="footer" />
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/65">
              {SITE.description}
            </p>
            <p className="mt-4 text-[15px] italic text-mcb-cyan">{SITE.tagline}</p>
          </div>

          <div>
            <h2 className="text-[15px] font-semibold uppercase tracking-wider text-white/50">
              Services
            </h2>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[15px] font-semibold uppercase tracking-wider text-white/50">
              Company
            </h2>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[15px] font-semibold uppercase tracking-wider text-white/50">
              Contact
            </h2>
            <ul className="mt-4 space-y-4">
              {OFFICES.map((office) => (
                <li key={office.city}>
                  <p className="text-[15px] font-medium">{office.city}</p>
                  <a
                    href={office.href}
                    className="text-[15px] text-white/70 transition-colors hover:text-mcb-cyan"
                  >
                    {office.phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-[15px] text-white/70 transition-colors hover:text-mcb-cyan"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-[15px] text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>
            Built by{" "}
            <a
              href="https://novarastudios.co.uk"
              className="text-white/70 transition-colors hover:text-mcb-cyan"
              rel="noopener noreferrer"
              target="_blank"
            >
              Novara Studios
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
