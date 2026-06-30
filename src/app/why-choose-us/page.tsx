import { CheckCircle2 } from "lucide-react";
import { createPageMetadata } from "@/lib/seo/metadata";
import { Hero } from "@/components/sections/hero";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { SectionHeader } from "@/components/sections/section-header";
import { CallToAction } from "@/components/sections/call-to-action";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { WHY_CHOOSE_POINTS } from "@/lib/content/home";
import { IMAGES } from "@/lib/content/home";
import { breadcrumbSchema, jsonLd } from "@/lib/seo/schema";

export const metadata = createPageMetadata({
  title: "Why Choose McBurney Transport",
  description:
    "Reliable quality service, competitive pricing, strong partnerships and decades of logistics experience across the UK and Ireland.",
  path: "/why-choose-us",
});

const SOURCE_POINTS = [
  "We provide a reliable quality value added service",
  "We have the resources to get the job done and done well",
  "We believe in fair and competitive pricing",
  "We help our customers where cost savings or synergies could be made",
  "We build strong partnerships with our customers",
  "We have a strong capital base to ensure we will be here to service your needs",
  "50 years experience in the logistics market but ever evolving to fit with our customers",
] as const;

export default function WhyChooseUsPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Why Choose Us", path: "/why-choose-us" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(breadcrumbSchema(breadcrumbs)),
        }}
      />
      <Hero
        compact
        eyebrow="Partnership"
        title="Why businesses choose McBurney"
        description="Reliability, resources and relationships — backed by one of the strongest capital bases in Irish transport."
        image={IMAGES.fleetTop}
        imageAlt="McBurney Transport fleet"
        primaryCta={{ label: "Request a Quote", href: "/quote" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />
      <Breadcrumbs items={breadcrumbs} />
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our commitment"
            title="Built for long-term partnerships"
            description="To find out more please contact us or request a quote. We believe in developing strong working relationships with each customer."
            className="mb-12"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {SOURCE_POINTS.map((point, index) => (
              <ScrollReveal key={point} delay={index * 0.05}>
                <article className="flex gap-4 rounded-2xl border border-brand-black/10 bg-white p-6">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-mcb-red" />
                  <p className="text-sm leading-relaxed text-brand-muted">{point}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-12 rounded-3xl bg-brand-surface p-8">
            <h2 className="font-display text-xl font-semibold text-brand-black">
              What this means in practice
            </h2>
            <ul className="mt-4 space-y-3">
              {WHY_CHOOSE_POINTS.map((point) => (
                <li key={point} className="text-sm leading-relaxed text-brand-muted">
                  • {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  );
}
