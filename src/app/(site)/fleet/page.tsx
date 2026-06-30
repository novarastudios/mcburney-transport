import Image from "next/image";
import { createPageMetadata } from "@/lib/seo/metadata";
import { Hero } from "@/components/sections/hero";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { SectionHeader } from "@/components/sections/section-header";
import { StatisticsDark } from "@/components/sections/statistics";
import { CallToAction } from "@/components/sections/call-to-action";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { IMAGES } from "@/lib/content/home";
import { SITE_IMAGES } from "@/lib/content/images";
import { breadcrumbSchema, jsonLd } from "@/lib/seo/schema";

export const metadata = createPageMetadata({
  title: "Fleet",
  description:
    "Over 370 vehicles and 1,050 trailers with £50M+ capital investment. McBurney Transport maintains one of Ireland's most modern fleets.",
  path: "/fleet",
});

const FLEET_STATS = [
  { value: "290", label: "Articulated tractor units" },
  { value: "80", label: "Rigid body vehicles" },
  { value: "700", label: "Refrigerated trailers" },
  { value: "£50M+", label: "Capital investment" },
] as const;

const TRAILER_TYPES = [
  "Conventional tautliners",
  "Box vans",
  "Double decker trailers (52 pallet capacity)",
  "Flat bed trailers",
  "Walking floor trailers",
  "120 high cube refrigerated trailers (52 pallet capacity)",
] as const;

const GALLERY = SITE_IMAGES.fleet;

export default function FleetPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Fleet", path: "/fleet" },
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
        eyebrow="Fleet"
        title="Investment, compliance and brand visibility"
        description="We have the capabilities and resources to meet whatever your requirements may be — with a structured replacement policy and over £50 million invested in equipment."
        image={IMAGES.fleetTop}
        imageAlt="McBurney Transport fleet"
      />
      <Breadcrumbs items={breadcrumbs} />
      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Capability"
              title="Modern fleet, reliably maintained"
              description="The capital investment in our fleet is one of the highest of any transport company in Ireland, with a six-year fleet replacement policy for tractor units and eight-year replacement policy for trailers."
            />
            <ul className="mt-8 space-y-3">
              {TRAILER_TYPES.map((type) => (
                <li key={type} className="text-sm text-brand-muted">
                  • {type}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-brand-muted">
              We take pride in our fleet and we are highly visible on the road. Our yellow lorries and personalised MCB registration plates are synonymous with the McBurney Transport brand.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="relative aspect-square overflow-hidden rounded-3xl">
              <Image
                src={IMAGES.scania}
                alt="Limited Edition Scania Golden Griffin"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <p className="mt-4 text-sm text-brand-muted">
              To celebrate 50 years in business we acquired a Limited Edition Scania Golden Griffin — one of only 50 commissioned by Scania to commemorate their golden anniversary.
            </p>
          </ScrollReveal>
        </div>
      </section>
      <StatisticsDark stats={FLEET_STATS} />
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Gallery"
            title="Fleet at a glance"
            className="mb-12"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {GALLERY.map((src, index) => (
              <ScrollReveal key={src} delay={index * 0.05}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                  <Image
                    src={src}
                    alt="McBurney Transport fleet vehicle"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
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
