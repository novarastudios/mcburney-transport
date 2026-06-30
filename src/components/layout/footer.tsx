import Link from "next/link";
import { FOOTER_LINKS, OFFICES, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="grain border-t border-[color:var(--hairline-dark)] bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex flex-col">
              <span className="font-display text-2xl font-semibold">McBurney</span>
              <span className="text-xs uppercase tracking-[0.25em] text-white/50">
                Transport Group
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
              {SITE.description}
            </p>
            <p className="mt-4 text-sm italic text-brand-yellow">{SITE.tagline}</p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Services
            </h2>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Company
            </h2>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Contact
            </h2>
            <ul className="mt-4 space-y-4">
              {OFFICES.map((office) => (
                <li key={office.city}>
                  <p className="text-sm font-medium">{office.city}</p>
                  <a
                    href={office.href}
                    className="text-sm text-white/70 transition-colors hover:text-brand-yellow"
                  >
                    {office.phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-sm text-white/70 transition-colors hover:text-brand-yellow"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>
            Built by{" "}
            <a
              href="https://novarastudios.co.uk"
              className="text-white/70 transition-colors hover:text-brand-yellow"
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
