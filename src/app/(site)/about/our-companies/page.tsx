import Image from "next/image";
import { createPageMetadata } from "@/lib/seo/metadata";
import { Hero } from "@/components/sections/hero";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { SectionHeader } from "@/components/sections/section-header";
import { CallToAction } from "@/components/sections/call-to-action";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { IMAGES } from "@/lib/content/home";
import { SITE_IMAGES } from "@/lib/content/images";
import { breadcrumbSchema, jsonLd } from "@/lib/seo/schema";

export const metadata = createPageMetadata({
  title: "Our Companies",
  description:
    "McBurney Transport, Bondelivery and McBurney Refrigeration — three companies delivering complete UK and Ireland logistics.",
  path: "/about/our-companies",
});

const COMPANIES = [
  {
    name: "McBurney Transport",
    description:
      "The founding company provides all types of transportation — dry, ambient and temperature controlled — with value added services. Recognised as a market leading company within the UK and Ireland transport industry. Honoured as Export & Freight's European Haulier of the Year 2015, ASDA UK Service Provider of the Year, and Fleet Awards Ireland Innovation of the Year for our drivers app.",
    locations: "Ballymena (head office), Cairnryan, Dublin, Larne, Penrith and Heysham.",
  },
  {
    name: "Bondelivery",
    description:
      "An integral part of the group for 25 years, providing groupage, distribution and warehousing throughout Ireland. 30,000 sq m of warehousing at Nutts Corner, 80 vehicles, and an extensive depot network with UK and Irish partners. Winner of Irish Logistics Service Provider of the Year 2014.",
    locations: "Nutts Corner and network across Ireland.",
  },
  {
    name: "McBurney Refrigeration Ltd",
    description:
      "Established 16 years ago for chilled and frozen haulage, strengthened by a Liverpool acquisition adding 30,000 pallet cold storage on a 12-acre site. Named Chilled Operator of the Year 2014 with full BRC accreditation at Liverpool.",
    locations: "Liverpool and Dublin.",
  },
] as const;

export default function OurCompaniesPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Our Companies", path: "/about/our-companies" },
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
        eyebrow="Group"
        title="Three companies, one complete logistics solution"
        description="Through internal growth and strategic acquisitions, the McBurney Transport Group provides the total transport and logistics solution our customers need."
        image={IMAGES.group}
        imageAlt="McBurney Transport Group"
        imageFit="contain"
      />
      <Breadcrumbs items={breadcrumbs} />
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Strategy"
            title="Major Irish Sea logistics provider"
            description="Our strategy has been to establish ourselves as a major Irish Sea logistics provider — achieved through hard work and investing heavily in people, locations, equipment, services and IT systems."
            className="mb-12"
          />
          <div className="space-y-8">
            {COMPANIES.map((company, index) => (
              <ScrollReveal key={company.name} delay={index * 0.08}>
                <article className="grid gap-8 rounded-3xl border border-brand-black/10 bg-white p-8 lg:grid-cols-[1fr_2fr]">
                  <h2 className="font-display text-2xl font-semibold text-brand-black">
                    {company.name}
                  </h2>
                  <div>
                    <p className="text-sm leading-relaxed text-brand-muted">
                      {company.description}
                    </p>
                    <p className="mt-4 text-sm font-medium text-brand-black">
                      Locations: {company.locations}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-brand-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[...SITE_IMAGES.companies].map((src, index) => (
              <ScrollReveal key={src} delay={index * 0.06}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={src}
                    alt="McBurney Transport Group operations"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  );
}
