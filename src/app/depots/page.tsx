import Image from "next/image";
import { createPageMetadata } from "@/lib/seo/metadata";
import { Hero } from "@/components/sections/hero";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { SectionHeader } from "@/components/sections/section-header";
import { CallToAction } from "@/components/sections/call-to-action";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { DEPOTS } from "@/lib/constants";
import { IMAGES } from "@/lib/content/home";
import { breadcrumbSchema, jsonLd } from "@/lib/seo/schema";

export const metadata = createPageMetadata({
  title: "Depots",
  description:
    "Eight strategically placed depots across the UK and Ireland supporting warehousing, groupage and distribution.",
  path: "/depots",
});

export default function DepotsPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Depots", path: "/depots" },
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
        eyebrow="Network"
        title="Eight depots across the UK & Ireland"
        description="We have grown and adapted to our customers' requirements — reflected in significant investment in our network of depots and bases, strategically placed throughout the UK and Ireland."
        image={IMAGES.depot}
        imageAlt="McBurney Transport depot"
      />
      <Breadcrumbs items={breadcrumbs} />
      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Locations"
              title="Strategic coverage"
              description="Our depot network supports road haulage, Irish Sea shipping, warehousing and distribution — enabling efficient logistics across both markets."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {DEPOTS.map((depot) => (
                <div
                  key={depot}
                  className="rounded-2xl border border-brand-black/10 bg-brand-surface px-5 py-4 text-sm font-medium text-brand-black"
                >
                  {depot}
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="https://www.mcburneytransportgroup.com/wp-content/uploads/bfi_thumb/depotsmap-mpbef2rakcwbwe5l4veh7rwa36z8j7bkxmmrovou30.jpg"
                alt="McBurney Transport depot map"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
      <section className="bg-brand-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "https://www.mcburneytransportgroup.com/wp-content/uploads/2016/04/McBurney08.jpg",
              "https://www.mcburneytransportgroup.com/wp-content/uploads/2016/04/depotstop-2.jpg",
              "https://www.mcburneytransportgroup.com/wp-content/uploads/2016/04/warehouse.jpg",
            ].map((src, index) => (
              <ScrollReveal key={src} delay={index * 0.06}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={src}
                    alt="McBurney Transport depot facility"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
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
