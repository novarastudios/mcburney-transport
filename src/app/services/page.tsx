import Link from "next/link";
import { createPageMetadata } from "@/lib/seo/metadata";
import { Hero } from "@/components/sections/hero";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { SectionHeader } from "@/components/sections/section-header";
import { FeatureCards } from "@/components/sections/feature-cards";
import { CallToAction } from "@/components/sections/call-to-action";
import { getServiceSummaries } from "@/lib/content/services";
import { IMAGES } from "@/lib/content/home";
import { breadcrumbSchema, jsonLd } from "@/lib/seo/schema";

export const metadata = createPageMetadata({
  title: "What We Do",
  description:
    "Complete transport, warehousing, Irish Sea shipping and temperature-controlled logistics tailored to your business across the UK and Ireland.",
  path: "/services",
});

export default function ServicesPage() {
  const services = getServiceSummaries();
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
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
        eyebrow="Services"
        title="Transport and logistics tailored to your business"
        description="We offer a wide range of transportation and warehousing options throughout the UK and Ireland — fully tailored to meet each business's individual requirements."
        image={IMAGES.group}
        imageAlt="McBurney Transport Group"
        imageFit="contain"
        primaryCta={{ label: "Request a Quote", href: "/quote" }}
      />
      <Breadcrumbs items={breadcrumbs} />
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Complete package"
            title="Everything your supply chain needs"
            description="McBurney Transport Group's main objective is to provide a complete transport package — from road haulage and ferry logistics to cold chain and warehousing."
            className="mb-12"
          />
          <FeatureCards items={services} />
          <p className="mt-10 text-sm text-brand-muted">
            Need guidance on the right service mix?{" "}
            <Link href="/contact" className="font-medium text-brand-black underline-offset-4 hover:underline">
              Contact our team
            </Link>{" "}
            or{" "}
            <Link href="/quote" className="font-medium text-brand-black underline-offset-4 hover:underline">
              request a quote
            </Link>
            .
          </p>
        </div>
      </section>
      <CallToAction />
    </>
  );
}
