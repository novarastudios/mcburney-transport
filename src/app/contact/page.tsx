import { Phone, Mail, MapPin } from "lucide-react";
import { createPageMetadata } from "@/lib/seo/metadata";
import { Hero } from "@/components/sections/hero";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { SectionHeader } from "@/components/sections/section-header";
import { ContactForm } from "@/components/sections/contact-form";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { OFFICES, SITE } from "@/lib/constants";
import { breadcrumbSchema, jsonLd, localBusinessSchema } from "@/lib/seo/schema";

export const metadata = createPageMetadata({
  title: "Contact Us",
  description:
    "Contact McBurney Transport Group. Offices in Ballymena, Liverpool and Dublin.",
  path: "/contact",
});

export default function ContactPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([breadcrumbSchema(breadcrumbs), localBusinessSchema()]),
        }}
      />
      <Hero
        compact
        eyebrow="Contact"
        title="Speak with our logistics team"
        description="Whether you need a quote, have a operational question or want to discuss a long-term partnership — we're here to help."
        primaryCta={{ label: "Request a Quote", href: "/quote" }}
      />
      <Breadcrumbs items={breadcrumbs} />
      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Offices"
              title="UK & Ireland contact points"
              description="Reach the team at our head office in Ballymena or our operations centres in Liverpool and Dublin."
            />
            <div className="mt-8 space-y-6">
              {OFFICES.map((office) => (
                <div
                  key={office.city}
                  className="rounded-2xl border border-brand-black/10 bg-brand-surface p-6"
                >
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 text-mcb-red" />
                    <div>
                      <p className="font-medium text-brand-black">{office.city}</p>
                      <p className="text-sm text-brand-muted">{office.label}</p>
                      <a
                        href={office.href}
                        className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-brand-black hover:text-brand-muted"
                      >
                        <Phone className="h-4 w-4" />
                        {office.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-brand-black hover:text-brand-muted"
              >
                <Mail className="h-4 w-4 text-mcb-red" />
                {SITE.email}
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="rounded-3xl border border-brand-black/10 bg-white p-8">
              <h2 className="font-display text-2xl font-semibold text-brand-black">
                Send a message
              </h2>
              <p className="mt-2 text-sm text-brand-muted">
                Complete the form and a member of our team will respond shortly.
              </p>
              <div className="mt-8">
                <ContactForm formType="contact" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
