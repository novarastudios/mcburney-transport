import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo/metadata";
import { Hero } from "@/components/sections/hero";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { SectionHeader } from "@/components/sections/section-header";
import { ContactForm } from "@/components/sections/contact-form";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { SITE } from "@/lib/constants";
import { breadcrumbSchema, jsonLd } from "@/lib/seo/schema";

export const metadata = createPageMetadata({
  title: "Careers",
  description:
    "Join the McBurney team. We are recruiting Category C&E drivers across our UK and Ireland network.",
  path: "/careers",
});

export default function CareersPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Careers", path: "/careers" },
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
        eyebrow="Careers"
        title="Join the McBurney team"
        description="If you want to join the McBurney Team as a Category C&E driver, we would love to hear from you."
        image="https://www.mcburneytransportgroup.com/wp-content/uploads/bfi_thumb/jobs-top-mpa5c8esyvd1u8ctv4cli3jaa7v1gnuhce8prr223k.jpg"
        imageAlt="McBurney Transport careers"
      />
      <Breadcrumbs items={breadcrumbs} />
      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Drivers"
              title="Category C&E opportunities"
              description={`Please email us at ${SITE.email} and include your preferred location, or complete the form below.`}
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "https://www.mcburneytransportgroup.com/wp-content/uploads/bfi_thumb/jobs-2-mpa5c2rg98s82a0rhcu7ngsruwjtjxizxq0djgwv7c.jpg",
                "https://www.mcburneytransportgroup.com/wp-content/uploads/bfi_thumb/jobs-1-mpa5bz057ay4vc5mymwnwfyc630t8j3a9bx2taiwga.jpg",
              ].map((src) => (
                <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image src={src} alt="McBurney Transport driver" fill className="object-cover" sizes="50vw" />
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-brand-muted">
              Prefer email?{" "}
              <Link href={`mailto:${SITE.email}`} className="font-medium text-brand-black underline-offset-4 hover:underline">
                {SITE.email}
              </Link>
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="rounded-3xl border border-brand-black/10 bg-white p-8">
              <ContactForm
                formType="careers"
                submitLabel="Submit Application"
                messageLabel="Tell us about your experience"
                messagePlaceholder="Include your preferred location, licence category and experience..."
                showCompany={false}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
