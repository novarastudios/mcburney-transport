import { createPageMetadata } from "@/lib/seo/metadata";
import { Hero } from "@/components/sections/hero";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { SectionHeader } from "@/components/sections/section-header";
import { CallToAction } from "@/components/sections/call-to-action";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { IMAGES } from "@/lib/content/home";
import { breadcrumbSchema, jsonLd } from "@/lib/seo/schema";

export const metadata = createPageMetadata({
  title: "Technology",
  description:
    "Bespoke IT infrastructure with 24/7 customer access, real-time visibility, bespoke reporting and integrated drivers app.",
  path: "/technology",
});

const CAPABILITIES = [
  {
    title: "24/7 customer access",
    description:
      "Our online computer system for transport and warehousing is accessible to customers around the clock with real-time information for full visibility and planning support.",
  },
  {
    title: "Bespoke reporting",
    description:
      "Automatic generated reports specific to each customer, configured to include the information that matters — sent at any time of day, with online access to scanned PODs.",
  },
  {
    title: "Drivers app",
    description:
      "A bespoke drivers app integrates into group IT systems, allowing real-time flow of information and documents to and from drivers using handheld devices.",
  },
  {
    title: "In-house development",
    description:
      "With an in-house programming team we can react to changes required very quickly — including new bespoke reports on customer request.",
  },
] as const;

export default function TechnologyPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Technology", path: "/technology" },
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
        eyebrow="Technology"
        title="Real-time visibility across your supply chain"
        description="Our group is supported by a powerful IT infrastructure which can be tailored to network directly with our customers' IT systems."
        image={IMAGES.scania}
        imageAlt="McBurney Transport technology"
      />
      <Breadcrumbs items={breadcrumbs} />
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Systems"
            title="Bespoke infrastructure, built in-house"
            description="Good communication is a key element to any business. With real-time access to our IT systems and automatic bespoke reports, our customers are equipped to make better and quicker decisions."
            className="mb-12"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {CAPABILITIES.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.06}>
                <article className="h-full rounded-3xl border border-brand-black/10 bg-white p-8">
                  <h2 className="font-display text-xl font-semibold text-brand-black">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                    {item.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  );
}
