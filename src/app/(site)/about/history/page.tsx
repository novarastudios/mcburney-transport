import Image from "next/image";
import { createPageMetadata } from "@/lib/seo/metadata";
import { Hero } from "@/components/sections/hero";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { SectionHeader } from "@/components/sections/section-header";
import { Timeline } from "@/components/sections/timeline";
import { CallToAction } from "@/components/sections/call-to-action";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { IMAGES } from "@/lib/content/home";
import { SITE_IMAGES } from "@/lib/content/images";
import { SITE } from "@/lib/constants";
import { breadcrumbSchema, jsonLd } from "@/lib/seo/schema";

export const metadata = createPageMetadata({
  title: "Our History",
  description:
    "Founded in 1965 by Norman McBurney OBE, McBurney Transport Group has grown into one of Ireland's largest independently owned logistics groups.",
  path: "/about/history",
});

const TIMELINE = [
  {
    year: "1965",
    title: "Founded with a single lorry",
    description:
      "Norman McBurney OBE establishes McBurney Transport with a commitment to reliable, quality service.",
  },
  {
    year: "Growth",
    title: "Trusted across the UK & Ireland",
    description:
      "The group grows to serve major supermarkets, food manufacturers, retailers and industrial sectors — from blue chip corporations to local companies.",
  },
  {
    year: "2015",
    title: "50-year partnership milestone",
    description:
      "Celebrating a 50-year partnership with one of Northern Ireland's largest food manufacturers and exporters.",
  },
  {
    year: "Today",
    title: "Family-owned industry leader",
    description:
      "Despite scale, the group remains family owned and managed — enabling faster decisions and responsive customer support.",
  },
] as const;

export default function HistoryPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "History", path: "/about/history" },
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
        eyebrow="About"
        title="Six decades of logistics leadership"
        description={`Founded in ${SITE.founded} by ${SITE.founder}, McBurney Transport Group has grown into a trusted logistics supplier across the UK and Ireland.`}
        image={IMAGES.scania}
        imageAlt="McBurney Transport history"
      />
      <Breadcrumbs items={breadcrumbs} />
      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Heritage"
              title="Built on relationships, not just routes"
              description="Despite becoming one of Ireland's largest independently owned logistics groups, we have remained a family owned and managed business — giving us the ability to make faster decisions and respond quickly to our customers' changing needs."
            />
            <p className="mt-6 text-sm leading-relaxed text-brand-muted">
              Today, the core beliefs within the business remain the same as the day it was founded — to provide our customers with a quality service they can rely on, day after day, week after week, year after year.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src={SITE_IMAGES.history}
                alt="McBurney Transport historical fleet"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
      <section className="bg-brand-surface py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Timeline"
            title="Key milestones"
            align="center"
            className="mb-12 mx-auto"
          />
          <Timeline items={TIMELINE} />
        </div>
      </section>
      <CallToAction />
    </>
  );
}
